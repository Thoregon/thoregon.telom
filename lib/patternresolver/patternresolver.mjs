/*
 * Copyright (c) 2025.
 *
 * PatternResolver
 * A lightweight template pattern engine to resolve placeholders like:
 *   {order.customer.firstname|trim|capitalize}
 *   {{ {firstname} {lastname}|trim }}
 *
 * Supported filters: trim, capitalize, uppercase, lowercase, fallback
 * Safe path resolution and graceful error handling included.
 *
 * @author: Martin Neitz
 */

export default class PatternResolver {

    // Static filter registry (extendable at runtime)
    static filters = {
        trim: s => s?.toString().trim() ?? '',
        capitalize: s => s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '',
        uppercase: s => s?.toString().toUpperCase() ?? '',
        lowercase: s => s?.toString().toLowerCase() ?? '',
        fallback: (s, alt) => {
            // alt can be literal or a path
            if (s && s.length) return s;
            if (!alt) return '';
            if (alt.startsWith('{') && alt.endsWith('}')) {
                const path = alt.slice(1, -1);
                return this.resolvePath(path, this._data) ?? '';
            }
            return alt;
        },
    };

    // Main entry point
    static resolve(data, patterns = {}, options = {}) {
        this._data = data;
        const result = {};

        for (const [key, pattern] of Object.entries(patterns)) {
            result[key] = this.resolveTemplate(pattern, data, options);
        }

        return result;
    }

    //  Resolve a single pattern string
    static resolveTemplate(template, data, options = {}) {
        try {
            // helper to apply filters safely
            const applyOuterFilters = (content, filterString = '') => {
                const list = filterString ? filterString.split('|').filter(Boolean) : [];
                return this.applyFilters(content, list);
            };

            // 1️⃣ process outer group blocks manually
            // while there's a {{...}} in the string
            while (template.includes('{{')) {
                template = template.replace(/{{([\s\S]+?)}}(\|[a-zA-Z0-9|().,_'"]+)?/, (_, inner, filters = '') => {
                    const resolvedInner = this.resolveTemplate(inner, data, options); // recurse on inner
                    const cleanFilters = filters.startsWith('|') ? filters.slice(1) : filters;
                    return applyOuterFilters(resolvedInner, cleanFilters);
                });
            }

            // 2️⃣ now process single {path|filter|...}
            template = template.replace(/{([^}]+)}/g, (_, expr) => {
                const [path, ...filterList] = expr.split('|').map(x => x.trim());
                const rawValue = this.resolvePath(path, data);
                return this.applyFilters(rawValue ?? '', filterList);
            });

            // 3️⃣ clean up spacing artifacts
            return template.replace(/\s{2,}/g, ' ');
        } catch (err) {
            console.warn('[PatternResolver] Error resolving template:', err);
            return '';
        }
    }

    // Apply chained filters
    static applyFilters(value, filterList = []) {
        return filterList.reduce((acc, filterExpr) => {
            try {
                const [fn, arg] = filterExpr.split('(');
                const cleanArg = arg?.replace(')', '').replace(/^['"]|['"]$/g, '');
                const fnName = fn.trim();
                const fnHandler = this.filters[fnName];
                if (!fnHandler) return acc; // graceful skip
                return fnHandler.call(this, acc, cleanArg);
            } catch {
                return acc; // ignore broken filter
            }
        }, value);
    }

    // Resolve path safely (e.g. order.customer.firstname)
    static resolvePath(path, obj) {
        try {
            return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? '';
        } catch {
            return '';
        }
    }

    // Allow runtime extension of filters
    static registerFilter(name, fn) {
        if (typeof fn === 'function') {
            this.filters[name] = fn;
        }
    }
}
/*
 * Copyright (c) 2025.
 */

/*
 *
 * @author: Martin Neitz
 */

export const TRANSLATIONS = {
    de_DE: {
        today         : 'Heute',
        yesterday     : 'Gestern',
        weekToDate    : 'Woche bis heute',
        lastWeek      : 'Letzte Woche',
        monthToDate   : 'Monat bis heute',
        lastMonth     : 'Letzter Monat',
        currentQuarter: 'Bisheriges Quartal',
        lastQuarter   : 'Letztes Quartal',
        yearToDate    : 'Bisheriges Jahr',
        lastYear      : 'Letztes Jahr',
        reset         : 'Zeitraum zurücksetzen',
        since         : 'seit',
    },
    en_EN: {
        today         : 'Today',
        yesterday     : 'Yesterday',
        weekToDate    : 'Week to today',
        lastWeek      : 'Last week',
        monthToDate   : 'Month to today',
        lastMonth     : 'Last month',
        currentQuarter: 'Current quarter to date',
        lastQuarter   : 'Last quarter',
        yearToDate    : 'Year to today',
        lastYear      : 'Last year',
        reset         : 'Reset date range',
        since         : 'since',
    }
};

export default class DateRangeResolver {
    constructor(locale) {
        this._locale = locale || navigator.language || navigator.userLanguage;
        this._translations = TRANSLATIONS[this.resolveLanguage(this._locale)];
    }

    resolveLanguage(locale) {
        if (locale.startsWith('de')) {
            return 'de_DE';
        }
        return "en_EN";
    }

    resolveDateRange(range, referenceTimestamp) {
        const refDate = (referenceTimestamp) ? new Date(referenceTimestamp) : new Date();

        // Helper functions for date operations
        const startOfDay = date => new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const endOfDay = date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);

        const getMonday = date => {
            const d = new Date(date);
            const day = d.getDay();
            const diff = d.getDate() - day + (day === 0 ? -6 : 1);
            return new Date(d.setDate(diff));
        };

        const getQuarterStart = date => {
            const quarter = Math.floor(date.getMonth() / 3);
            return new Date(date.getFullYear(), quarter * 3, 1);
        };

        // Date formatters
        const formatShortFull = new Intl.DateTimeFormat(this._locale, {
            day  : '2-digit',
            month: '2-digit',
            year : 'numeric'
        });

        const formatShortNoYear = new Intl.DateTimeFormat(this._locale, {
            day  : '2-digit',
            month: '2-digit'
        });

        const formatLong = new Intl.DateTimeFormat(this._locale, {
            day  : 'numeric',
            month: 'long',
            year : 'numeric'
        });

        // Variables to store the date range
        let from, to;

        // Calculate from and to dates based on the requested range
        switch(range) {
            case 'today':
                from = startOfDay(refDate);
                to = endOfDay(refDate);
                break;

            case 'yesterday':
                const yesterday = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate() - 1);
                from = startOfDay(yesterday);
                to = endOfDay(yesterday);
                break;

            case 'weekToDate':
                const monday = getMonday(refDate);
                from = startOfDay(monday);
                to = endOfDay(refDate);
                break;

            case 'lastWeek':
                const currentMonday = getMonday(refDate);
                const lastMonday = new Date(currentMonday.getFullYear(), currentMonday.getMonth(), currentMonday.getDate() - 7);
                const lastSunday = new Date(currentMonday.getFullYear(), currentMonday.getMonth(), currentMonday.getDate() - 1);
                from = startOfDay(lastMonday);
                to = endOfDay(lastSunday);
                break;

            case 'monthToDate':
                from = startOfDay(new Date(refDate.getFullYear(), refDate.getMonth(), 1));
                to = endOfDay(refDate);
                break;

            case 'lastMonth':
                from = startOfDay(new Date(refDate.getFullYear(), refDate.getMonth() - 1, 1));
                to = endOfDay(new Date(refDate.getFullYear(), refDate.getMonth(), 0));
                break;

            case 'currentQuarter':
                from = startOfDay(getQuarterStart(refDate));
                to = endOfDay(refDate);
                break;

            case 'lastQuarter':
                const quarter = Math.floor(refDate.getMonth() / 3);
                const quarterStart = new Date(refDate.getFullYear(), quarter * 3 - 3, 1);
                const quarterEnd = new Date(refDate.getFullYear(), quarter * 3, 0);
                from = startOfDay(quarterStart);
                to = endOfDay(quarterEnd);
                break;

            case 'yearToDate':
                from = startOfDay(new Date(refDate.getFullYear(), 0, 1));
                to = endOfDay(refDate);
                break;

            case 'lastYear':
                from = startOfDay(new Date(refDate.getFullYear() - 1, 0, 1));
                to = endOfDay(new Date(refDate.getFullYear() - 1, 11, 31));
                break;

            default:
                return {
                    from : '',
                    to   : '',
                    label : '',
                    displayShort : '',
                    displayLong : '',
                };
        }

        // Generate display strings
        const since = this._translations.since;
        const label = this._translations[range] || range;
        const sameDay = from.toDateString() === to.toDateString();
        const isToDateRange = ['weekToDate', 'monthToDate', 'yearToDate', 'currentQuarter'].includes(range);
        const today = new Date();
        const isToday = to.toDateString() === today.toDateString();

        let displayShort = '';
        if (sameDay) {
            // Single day (e.g., today, yesterday)
            displayShort = `${formatShortFull.format(from)}`;
        } else if (isToDateRange && isToday) {
            // Open ranges (until today)
            displayShort = `${since} ${formatShortFull.format(from)}`;
        } else {
            // Closed ranges
            const spansYears = from.getFullYear() !== to.getFullYear();
            const fromStr = spansYears ? formatShortFull.format(from) : formatShortNoYear.format(from);
            const toStr = formatShortFull.format(to);
            displayShort = `${fromStr} – ${toStr}`;
        }

        const fromLong = formatLong.format(from);
        const toLong = formatLong.format(to);
        const displayLong = sameDay
            ? `${fromLong}`
            : `${fromLong} – ${toLong}`;

        return {
            from,
            to,
            label,
            displayShort,
            displayLong
        };
    }
}
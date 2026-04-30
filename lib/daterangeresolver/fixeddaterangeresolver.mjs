// FixedDateRangeResolver.mjs
/*
 * Copyright (c) 2026.
 * @author: Martin Neitz
 */

/**
 * Resolves fixed calendar periods for financial reporting
 * Thread-safe, stateless server instance
 */

export default class FixedDateRangeResolver {


    getCompletedPeriodList(startDate, currentDate = new Date()) {
        const start   = new Date(startDate);
        const current = new Date(currentDate);
        start.setHours(0, 0, 0, 0);
        current.setHours(0, 0, 0, 0);

        const periods     = [];
        const startYear   = start.getFullYear();
        const currentYear = current.getFullYear();

        // years
        for (let year = startYear; year < currentYear; year++) {
            periods.push({year, periodType: 'year', periodNumber: 1});
        }

        // half years
        /*
        const startHalf   = start.getMonth() < 6 ? 1 : 2;
        const currentHalf = current.getMonth() < 6 ? 1 : 2;
        for (let year = startYear; year <= currentYear; year++) {
            const first = (year === startYear) ? startHalf : 1;
            const last  = (year === currentYear) ? currentHalf - 1 : 2;
            for (let half = first; half <= last; half++) {
                periods.push({year, periodType: 'halfYear', periodNumber: half});
            }
        }
        */
        // quarter
        const startQuarter   = Math.floor(start.getMonth() / 3) + 1;
        const currentQuarter = Math.floor(current.getMonth() / 3) + 1;
        for (let year = startYear; year <= currentYear; year++) {
            const first = (year === startYear) ? startQuarter : 1;
            const last  = (year === currentYear) ? currentQuarter - 1 : 4;
            for (let q = first; q <= last; q++) {
                periods.push({year, periodType: 'quarter', periodNumber: q});
            }
        }

        // month
        const startMonth   = start.getMonth() + 1;
        const currentMonth = current.getMonth() + 1;
        for (let year = startYear; year <= currentYear; year++) {
            const first = (year === startYear) ? startMonth : 1;
            const last  = (year === currentYear) ? currentMonth - 1 : 12;
            for (let m = first; m <= last; m++) {
                periods.push({year, periodType: 'month', periodNumber: m});
            }
        }

        return periods;
    }

    formatDate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    getPeriodRange(periodType, periodNumber, year) {
        switch (periodType) {
            case 'month': {
                const start = new Date(year, periodNumber - 1, 1);
                const end   = new Date(year, periodNumber, 0);
                return { start, end };
            }
            case 'quarter': {
                const sm    = (periodNumber - 1) * 3;
                const start = new Date(year, sm, 1);
                const end   = new Date(year, sm + 3, 0);
                return { start, end };
            }
            case 'halfYear': {
                const sm    = (periodNumber - 1) * 6;
                const start = new Date(year, sm, 1);
                const end   = new Date(year, sm + 6, 0);
                return { start, end };
            }
            case 'year': {
                const start = new Date(year, 0, 1);
                const end   = new Date(year, 11, 31);
                return { start, end };
            }
            default:
                throw new Error(`Unsupported periodType: ${periodType}`);
        }
    }

    getPreviousPeriod(periodType, periodNumber, year) {
        switch (periodType) {
            case 'month':
                return periodNumber === 1
                    ? { periodType, periodNumber: 12, year: year - 1 }
                    : { periodType, periodNumber: periodNumber - 1, year };
            case 'quarter':
                return periodNumber === 1
                    ? { periodType, periodNumber: 4, year: year - 1 }
                    : { periodType, periodNumber: periodNumber - 1, year };
            case 'halfYear':
                return periodNumber === 1
                    ? { periodType, periodNumber: 2, year: year - 1 }
                    : { periodType, periodNumber: periodNumber - 1, year };
            case 'year':
                return { periodType, periodNumber: 1, year: year - 1 };
        }
    }

    getYoyPeriod(periodType, periodNumber, year) {
        return this.getPeriodRange(periodType, periodNumber, year - 1);
    }

    getLastCompletedPeriod(periodType, referenceTimestamp) {
        const date = referenceTimestamp ? new Date(referenceTimestamp) : new Date();

        let year  = date.getFullYear();
        let month = date.getMonth(); // 0–11

        let periodNumber;

        switch (periodType) {
            case 'month':
                if (month === 0) {
                    month = 11;
                    year--;
                } else {
                    month--;
                }
                periodNumber = month + 1; // 1–12
                break;

            case 'quarter':
                // Aktuelles Quartal
                let currentQuarter = Math.floor(month / 3) + 1;
                if (currentQuarter === 1) {
                    periodNumber = 4;
                    year--;
                } else {
                    periodNumber = currentQuarter - 1;
                }
                break;

            case 'halfYear':
                let currentHalf = month < 6 ? 1 : 2;
                if (currentHalf === 1) {
                    periodNumber = 2;
                    year--;
                } else {
                    periodNumber = 1;
                }
                break;

            case 'year':
                year--;
                periodNumber = 1;
                break;

            default:
                throw new Error(`Unsupported periodType: ${periodType}`);
        }

        return {
            year,
            periodType,
            periodNumber
        };
    }

    getRange(year, periodType, periodNumber) {
        const current  = this.getPeriodRange(periodType, periodNumber, year);
        const prevMeta = this.getPreviousPeriod(periodType, periodNumber, year);
        const previous = this.getPeriodRange(periodType, prevMeta.periodNumber, prevMeta.year);
        const yoy      = this.getYoyPeriod(periodType, periodNumber, year);

        return {
            current_start    : current.start,
            current_start_sql: this.formatDate(current.start),
            current_end      : current.end,
            current_end_sql  : this.formatDate(current.end),

            previous_start    : previous.start,
            previous_start_sql: this.formatDate(previous.start),
            previous_end      : previous.end,
            previous_end_sql  : this.formatDate(previous.end),

            yoy_start    : yoy.start,
            yoy_start_sql: this.formatDate(yoy.start),
            yoy_end      : yoy.end,
            yoy_end_sql  : this.formatDate(yoy.end),
        };
    }
}
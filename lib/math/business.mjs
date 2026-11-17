/**
 *
 *
 * @author: Bernhard Lukassen
 * @licence: MIT
 * @see: {@link https://github.com/Thoregon}
 */

const decimal = /^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[+-]?\d+)?$/i;
const groupedUS = /^[+-]?\d{1,3}(?:,\d{3})+(?:\.\d+)?$/;
const groupedDE = /^[+-]?\d{1,3}(?:\.\d{3})+(?:,\d+)?$/;

function normalizeDecimal(text) {
    const value = text.trim();
    // A single separator is decimal, preserving inputs such as "1.234".
    if (decimal.test(value)) return value.replace(',', '.');
    if (groupedUS.test(value)) return value.replaceAll(',', '');
    if (groupedDE.test(value)) return value.replaceAll('.', '').replace(',', '.');
    return null;
}

export const fixdec = (x, d = 2) => {
    const places = Number(d);
    const value = typeof x === 'string' ? normalizeDecimal(x) : Number(x);
    if (value === null) return NaN;
    if (!Number.isInteger(places)) {
        const factor = 10 ** places;
        return Math.round(Number(value) * factor) / factor;
    }
    if (typeof value === 'number' && (!Number.isFinite(value) || value === 0)) return value;

    const [mantissa, exponent = '0'] = String(value).toLowerCase().split('e');
    const negative = mantissa.startsWith('-');
    const [whole, fraction = ''] = mantissa.replace(/^[+-]/, '').split('.');
    const digits = whole + fraction;
    const cut = whole.length + Number(exponent) + places;
    if (cut >= digits.length) return Number(value);
    if (cut < 0) return negative ? -0 : 0;

    const discarded = digits.slice(cut);
    const firstDiscarded = discarded[0];
    // Keep Math.round's tie rule: an exact half rounds toward positive infinity.
    const roundUp = firstDiscarded > '5'
        || (firstDiscarded === '5' && (!negative || /[1-9]/.test(discarded.slice(1))));
    const retained = digits.slice(0, cut);
    const magnitude = roundUp ? BigInt(retained) + 1n : retained || '0';
    const sign = negative ? '-' : '';
    return Number(`${sign}${magnitude}e${-places}`);
};

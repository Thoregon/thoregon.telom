/*
 * Copyright (c) 2025.
 */

/*
 *
 * @author: Martin Neitz
 */

const LABELS = {
    'de-DE': {
        EUR: 'Euro',
        USD: 'US-Dollar',
        CHF: 'Schweizer Franken',
    },
    'en-EN': {
        EUR: 'Euro',
        USD: 'US Dollar',
        CHF: 'Swiss Franc',
    },
};

export default class Currencies {

    translateCurrency(currency, locale) {
        const langKey = this.resolveLanguage(locale);
        const labelsForLang = LABELS[langKey] || {};
        return labelsForLang[currency] || currency;
    }

    resolveLanguage( locale ) {
        if (locale.startsWith('de')) {
            return 'de_DE';
        }
        return "en_EN";
    }
}
 
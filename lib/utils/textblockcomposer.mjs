
/*
 * Copyright (c) 2023.
 */

import Countries from "/thoregon.telom/lib/countries/countries.mjs";

export default class TextBlockComposer {

    constructor() {
        this._countries = new Countries;
    }

    buildTextBlock( object, structure, glue , language = 'de' ) {

        const textArray =  this.buildTextArray( object, structure, language );
        return textArray.join( glue );
    }

    buildTextArray( object, structure, language = 'de' ) {

        let textArray = [];

        const structureLength = structure.length;

        for ( let row  = 0; row < structureLength; row++ ) {
            const lineStructure = [structure[row]].flat();

            const lineLength = lineStructure.length;
            let   line       = '';
            for ( let elem = 0; elem < lineLength; elem++ ) {

                let element = lineStructure[elem];
                let elementValue = '';

                switch ( element.type ) {
                    case 'value' :
                        elementValue = this.getValue( object, element.field );
                        break;
                    case 'country' :
                        const countryCode = this.getValue( object, element.field );
                        elementValue = this.getCountry( countryCode, language );
                        break;
                }

                if ( elementValue != undefined && elementValue != '' ) {
                    line += elementValue + ' ';
                }

            }
            line = line.trim();
            if ( line != '' ) {
                textArray.push( line );
            }
        }
        return textArray;
    }

    getValue(object, path) {
        const attributes = path.split('.');
        let value = object;

        for (const attribute of attributes) {
            if (value &&  attribute in value ) {
                value = value[attribute];
            } else {
                return undefined; // Return undefined if the attribute path is not valid
            }
        }

        return value;
    }

    getCountry( countryCode, language = 'de') {
        return this._countries.getCountry( countryCode, language );
    }
}

import { countryISO2to3 } from '/evolux.util/lib/localeutils.mjs';

/*
 * Copyright (c) 2022.
 */

/*
 *
 * @author: Martin Neitz
 * https://stefangabos.github.io/world_countries/
 */

/**
 *  LOG
 *  countries.json updated 15.Dez.2022
 */


const timeZoneCityToCountryCode = {
    'Andorra'       : 'and',
    'Dubai'         : 'are',
    'Kabul'         : 'afg',
    'Tirane'        : 'alb',
    'Yerevan'       : 'arm',
    'Casey'         : 'ata',
    'Davis'         : 'ata',
    'Mawson'        : 'ata',
    'Palmer'        : 'ata',
    'Rothera'       : 'ata',
    'Troll'         : 'ata',
    'Vostok'        : 'ata',
    'Buenos_Aires'  : 'arg',
    'Cordoba'       : 'arg',
    'Salta'         : 'arg',
    'Jujuy'         : 'arg',
    'Tucuman'       : 'arg',
    'Catamarca'     : 'arg',
    'La_Rioja'      : 'arg',
    'San_Juan'      : 'arg',
    'Mendoza'       : 'arg',
    'San_Luis'      : 'arg',
    'Rio_Gallegos'  : 'arg',
    'Ushuaia'       : 'arg',
    'Pago_Pago'     : 'asm',
    'Vienna'        : 'aut',
    'Lord_Howe'     : 'aus',
    'Macquarie'     : 'aus',
    'Hobart'        : 'aus',
    'Melbourne'     : 'aus',
    'Sydney'        : 'aus',
    'Broken_Hill'   : 'aus',
    'Brisbane'      : 'aus',
    'Lindeman'      : 'aus',
    'Adelaide'      : 'aus',
    'Darwin'        : 'aus',
    'Perth'         : 'aus',
    'Eucla'         : 'aus',
    'Baku'          : 'aze',
    'Barbados'      : 'brb',
    'Dhaka'         : 'bgd',
    'Brussels'      : 'bel',
    'Sofia'         : 'bgr',
    'Bermuda'       : 'bmu',
    'Brunei'        : 'brn',
    'La_Paz'        : 'bol',
    'Noronha'       : 'bra',
    'Belem'         : 'bra',
    'Fortaleza'     : 'bra',
    'Recife'        : 'bra',
    'Araguaina'     : 'bra',
    'Maceio'        : 'bra',
    'Bahia'         : 'bra',
    'Sao_Paulo'     : 'bra',
    'Campo_Grande'  : 'bra',
    'Cuiaba'        : 'bra',
    'Santarem'      : 'bra',
    'Porto_Velho'   : 'bra',
    'Boa_Vista'     : 'bra',
    'Manaus'        : 'bra',
    'Eirunepe'      : 'bra',
    'Rio_Branco'    : 'bra',
    'Thimphu'       : 'btn',
    'Minsk'         : 'blr',
    'Belize'        : 'blz',
    'St_Johns'      : 'can',
    'Halifax'       : 'can',
    'Glace_Bay'     : 'can',
    'Moncton'       : 'can',
    'Goose_Bay'     : 'can',
    'Toronto'       : 'can',
    'Nipigon'       : 'can',
    'Thunder_Bay'   : 'can',
    'Iqaluit'       : 'can',
    'Pangnirtung'   : 'can',
    'Winnipeg'      : 'can',
    'Rainy_River'   : 'can',
    'Resolute'      : 'can',
    'Rankin_Inlet'  : 'can',
    'Regina'        : 'can',
    'Swift_Current' : 'can',
    'Edmonton'      : 'can',
    'Cambridge_Bay' : 'can',
    'Yellowknife'   : 'can',
    'Inuvik'        : 'can',
    'Dawson_Creek'  : 'can',
    'Fort_Nelson'   : 'can',
    'Whitehorse'    : 'can',
    'Dawson'        : 'can',
    'Vancouver'     : 'can',
    'Cocos'         : 'cck',
    'Zurich'        : 'che',
    'Abidjan'       : 'civ',
    'Rarotonga'     : 'cok',
    'Santiago'      : 'chl',
    'Punta_Arenas'  : 'chl',
    'Easter'        : 'chl',
    'Shanghai'      : 'chn',
    'Urumqi'        : 'chn',
    'Bogota'        : 'col',
    'Costa_Rica'    : 'cri',
    'Havana'        : 'cub',
    'Cape_Verde'    : 'cpv',
    'Christmas'     : 'cxr',
    'Nicosia'       : 'cyp',
    'Famagusta'     : 'cyp',
    'Prague'        : 'cze',
    'Berlin'        : 'deu',
    'Copenhagen'    : 'dnk',
    'Santo_Domingo' : 'dom',
    'Algiers'       : 'dza',
    'Guayaquil'     : 'ecu',
    'Galapagos'     : 'ecu',
    'Tallinn'       : 'est',
    'Cairo'         : 'egy',
    'El_Aaiun'      : 'esh',
    'Madrid'        : 'esp',
    'Ceuta'         : 'esp',
    'Canary'        : 'esp',
    'Helsinki'      : 'fin',
    'Fiji'          : 'fji',
    'Stanley'       : 'flk',
    'Chuuk'         : 'fsm',
    'Pohnpei'       : 'fsm',
    'Kosrae'        : 'fsm',
    'Faroe'         : 'fro',
    'Paris'         : 'fra',
    'London'        : 'gbr',
    'Tbilisi'       : 'geo',
    'Cayenne'       : 'guf',
    'Gibraltar'     : 'gib',
    'Nuuk'          : 'grl',
    'Danmarkshavn'  : 'grl',
    'Scoresbysund'  : 'grl',
    'Thule'         : 'grl',
    'Athens'        : 'grc',
    'South_Georgia' : 'sgs',
    'Guatemala'     : 'gtm',
    'Guam'          : 'gum',
    'Bissau'        : 'gnb',
    'Guyana'        : 'guy',
    'Hong_Kong'     : 'hkg',
    'Tegucigalpa'   : 'hnd',
    'Port-au-Prince': 'hti',
    'Budapest'      : 'hun',
    'Jakarta'       : 'idn',
    'Pontianak'     : 'idn',
    'Makassar'      : 'idn',
    'Jayapura'      : 'idn',
    'Dublin'        : 'irl',
    'Jerusalem'     : 'isr',
    'Kolkata'       : 'ind',
    'Calcutta'      : 'ind',
    'Chagos'        : 'iot',
    'Baghdad'       : 'irq',
    'Tehran'        : 'irn',
    'Reykjavik'     : 'isl',
    'Rome'          : 'ita',
    'Jamaica'       : 'jam',
    'Amman'         : 'jor',
    'Tokyo'         : 'jpn',
    'Nairobi'       : 'ken',
    'Bishkek'       : 'kgz',
    'Tarawa'        : 'kir',
    'Kanton'        : 'kir',
    'Kiritimati'    : 'kir',
    'Pyongyang'     : 'prk',
    'Seoul'         : 'kor',
    'Almaty'        : 'kaz',
    'Qyzylorda'     : 'kaz',
    'Qostanay'      : 'kaz',
    'Aqtobe'        : 'kaz',
    'Aqtau'         : 'kaz',
    'Atyrau'        : 'kaz',
    'Oral'          : 'kaz',
    'Beirut'        : 'lbn',
    'Colombo'       : 'lka',
    'Monrovia'      : 'lbr',
    'Vilnius'       : 'ltu',
    'Luxembourg'    : 'lux',
    'Riga'          : 'lva',
    'Tripoli'       : 'lby',
    'Casablanca'    : 'mar',
    'Monaco'        : 'mco',
    'Chisinau'      : 'mda',
    'Majuro'        : 'mhl',
    'Kwajalein'     : 'mhl',
    'Yangon'        : 'mmr',
    'Ulaanbaatar'   : 'mng',
    'Hovd'          : 'mng',
    'Choibalsan'    : 'mng',
    'Macau'         : 'mac',
    'Martinique'    : 'mtq',
    'Malta'         : 'mlt',
    'Mauritius'     : 'mus',
    'Maldives'      : 'mdv',
    'Mexico_City'   : 'mex',
    'Cancun'        : 'mex',
    'Merida'        : 'mex',
    'Monterrey'     : 'mex',
    'Matamoros'     : 'mex',
    'Mazatlan'      : 'mex',
    'Chihuahua'     : 'mex',
    'Ojinaga'       : 'mex',
    'Hermosillo'    : 'mex',
    'Tijuana'       : 'mex',
    'Bahia_Banderas': 'mex',
    'Kuala_Lumpur'  : 'mys',
    'Kuching'       : 'mys',
    'Maputo'        : 'moz',
    'Windhoek'      : 'nam',
    'Noumea'        : 'ncl',
    'Norfolk'       : 'nfk',
    'Lagos'         : 'nga',
    'Managua'       : 'nic',
    'Amsterdam'     : 'nld',
    'Oslo'          : 'nor',
    'Kathmandu'     : 'npl',
    'Nauru'         : 'nru',
    'Niue'          : 'niu',
    'Auckland'      : 'nzl',
    'Chatham'       : 'nzl',
    'Panama'        : 'pan',
    'Lima'          : 'per',
    'Tahiti'        : 'pyf',
    'Marquesas'     : 'pyf',
    'Gambier'       : 'pyf',
    'Port_Moresby'  : 'png',
    'Bougainville'  : 'png',
    'Manila'        : 'phl',
    'Karachi'       : 'pak',
    'Warsaw'        : 'pol',
    'Miquelon'      : 'spm',
    'Pitcairn'      : 'pcn',
    'Puerto_Rico'   : 'pri',
    'Gaza'          : 'pse',
    'Hebron'        : 'pse',
    'Lisbon'        : 'prt',
    'Madeira'       : 'prt',
    'Azores'        : 'prt',
    'Palau'         : 'plw',
    'Asuncion'      : 'pry',
    'Qatar'         : 'qat',
    'Reunion'       : 'reu',
    'Bucharest'     : 'rou',
    'Belgrade'      : 'srb',
    'Kaliningrad'   : 'rus',
    'Moscow'        : 'rus',
    'Simferopol'    : 'rus',
    'Kirov'         : 'rus',
    'Volgograd'     : 'rus',
    'Astrakhan'     : 'rus',
    'Saratov'       : 'rus',
    'Ulyanovsk'     : 'rus',
    'Samara'        : 'rus',
    'Yekaterinburg' : 'rus',
    'Omsk'          : 'rus',
    'Novosibirsk'   : 'rus',
    'Barnaul'       : 'rus',
    'Tomsk'         : 'rus',
    'Novokuznetsk'  : 'rus',
    'Krasnoyarsk'   : 'rus',
    'Irkutsk'       : 'rus',
    'Chita'         : 'rus',
    'Yakutsk'       : 'rus',
    'Khandyga'      : 'rus',
    'Vladivostok'   : 'rus',
    'Ust-Nera'      : 'rus',
    'Magadan'       : 'rus',
    'Sakhalin'      : 'rus',
    'Srednekolymsk' : 'rus',
    'Kamchatka'     : 'rus',
    'Anadyr'        : 'rus',
    'Riyadh'        : 'sau',
    'Guadalcanal'   : 'slb',
    'Mahe'          : 'syc',
    'Khartoum'      : 'sdn',
    'Stockholm'     : 'swe',
    'Singapore'     : 'sgp',
    'Paramaribo'    : 'sur',
    'Juba'          : 'ssd',
    'Sao_Tome'      : 'stp',
    'El_Salvador'   : 'slv',
    'Damascus'      : 'syr',
    'Grand_Turk'    : 'tca',
    'Ndjamena'      : 'tcd',
    'Kerguelen'     : 'atf',
    'Bangkok'       : 'tha',
    'Dushanbe'      : 'tjk',
    'Fakaofo'       : 'tkl',
    'Dili'          : 'tls',
    'Ashgabat'      : 'tkm',
    'Tunis'         : 'tun',
    'Tongatapu'     : 'ton',
    'Istanbul'      : 'tur',
    'Funafuti'      : 'tuv',
    'Taipei'        : 'twn',
    'Kiev'          : 'ukr',
    'Uzhgorod'      : 'ukr',
    'Zaporozhye'    : 'ukr',
    'Wake'          : 'umi',
    'New_York'      : 'usa',
    'Detroit'       : 'usa',
    'Louisville'    : 'usa',
    'Monticello'    : 'usa',
    'Indianapolis'  : 'usa',
    'Vincennes'     : 'usa',
    'Winamac'       : 'usa',
    'Marengo'       : 'usa',
    'Petersburg'    : 'usa',
    'Vevay'         : 'usa',
    'Chicago'       : 'usa',
    'Tell_City'     : 'usa',
    'Knox'          : 'usa',
    'Menominee'     : 'usa',
    'Center'        : 'usa',
    'New_Salem'     : 'usa',
    'Beulah'        : 'usa',
    'Denver'        : 'usa',
    'Boise'         : 'usa',
    'Phoenix'       : 'usa',
    'Los_Angeles'   : 'usa',
    'Anchorage'     : 'usa',
    'Juneau'        : 'usa',
    'Sitka'         : 'usa',
    'Metlakatla'    : 'usa',
    'Yakutat'       : 'usa',
    'Nome'          : 'usa',
    'Adak'          : 'usa',
    'Honolulu'      : 'usa',
    'Montevideo'    : 'ury',
    'Samarkand'     : 'uzb',
    'Tashkent'      : 'uzb',
    'Caracas'       : 'ven',
    'Ho_Chi_Minh'   : 'vnm',
    'Efate'         : 'vut',
    'Wallis'        : 'wlf',
    'Apia'          : 'wsm',
    'Johannesburg'  : 'zaf',
    'Antigua'       : 'atg',
    'Anguilla'      : 'aia',
    'Luanda'        : 'ago',
    'McMurdo'       : 'ata',
    'DumontDUrville': 'ata',
    'Syowa'         : 'ata',
    'Aruba'         : 'abw',
    'Mariehamn'     : 'ala',
    'Sarajevo'      : 'bih',
    'Ouagadougou'   : 'bfa',
    'Bahrain'       : 'bhr',
    'Bujumbura'     : 'bdi',
    'Porto-Novo'    : 'ben',
    'St_Barthelemy' : 'blm',
    'Kralendijk'    : 'bes',
    'Nassau'        : 'bhs',
    'Gaborone'      : 'bwa',
    'Blanc-Sablon'  : 'can',
    'Atikokan'      : 'can',
    'Creston'       : 'can',
    'Kinshasa'      : 'cod',
    'Lubumbashi'    : 'cod',
    'Bangui'        : 'caf',
    'Brazzaville'   : 'cod',
    'Douala'        : 'cmr',
    'Curacao'       : 'cuw',
    'Busingen'      : 'deu',
    'Djibouti'      : 'dji',
    'Dominica'      : 'dma',
    'Asmara'        : 'eri',
    'Addis_Ababa'   : 'eth',
    'Libreville'    : 'gab',
    'Grenada'       : 'grd',
    'Guernsey'      : 'ggy',
    'Accra'         : 'gha',
    'Banjul'        : 'gmb',
    'Conakry'       : 'gin',
    'Guadeloupe'    : 'glp',
    'Malabo'        : 'gnq',
    'Zagreb'        : 'hrv',
    'Isle_of_Man'   : 'imn',
    'Jersey'        : 'jey',
    'Phnom_Penh'    : 'khm',
    'Comoro'        : 'com',
    'St_Kitts'      : 'kna',
    'Kuwait'        : 'kwt',
    'Cayman'        : 'cym',
    'Vientiane'     : 'loa',
    'St_Lucia'      : 'lca',
    'Vaduz'         : 'lie',
    'Maseru'        : 'lso',
    'Podgorica'     : 'mne',
    'Marigot'       : 'maf',
    'Antananarivo'  : 'mdg',
    'Skopje'        : 'mkd',
    'Bamako'        : 'mli',
    'Saipan'        : 'mnp',
    'Nouakchott'    : 'mrt',
    'Montserrat'    : 'msr',
    'Blantyre'      : 'mwi',
    'Niamey'        : 'ner',
    'Muscat'        : 'omn',
    'Kigali'        : 'rwa',
    'St_Helena'     : 'shn',
    'Ljubljana'     : 'svn',
    'Longyearbyen'  : 'sjm',
    'Bratislava'    : 'svk',
    'Freetown'      : 'sle',
    'San_Marino'    : 'smr',
    'Dakar'         : 'sen',
    'Mogadishu'     : 'som',
    'Lower_Princes' : 'sxm',
    'Mbabane'       : 'swz',
    'Lome'          : 'tgo',
    'Port_of_Spain' : 'tto',
    'Dar_es_Salaam' : 'tza',
    'Kampala'       : 'uga',
    'Midway'        : 'umi',
    'Vatican'       : 'vat',
    'St_Vincent'    : 'vct',
    'Tortola'       : 'vgb',
    'St_Thomas'     : 'vir',
    'Aden'          : 'yem',
    'Mayotte'       : 'myt',
    'Lusaka'        : 'zmb',
    'Harare'        : 'zwe'
};
const usStates  = [
    {"name": "Alabama", "abbrev": "Ala.", "code": "AL"},
    {"name": "Alaska", "abbrev": "Alaska", "code": "AK"},
    {"name": "Arizona", "abbrev": "Ariz.", "code": "AZ"},
    {"name": "Arkansas", "abbrev": "Ark.", "code": "AR"},
    {"name": "California", "abbrev": "Calif.", "code": "CA"},
    {"name": "Colorado", "abbrev": "Colo.", "code": "CO"},
    {"name": "Connecticut", "abbrev": "Conn.", "code": "CT"},
    {"name": "Delaware", "abbrev": "Del.", "code": "DE"},
    {"name": "District of Columbia", "abbrev": "D.C.", "code": "DC"},
    {"name": "Florida", "abbrev": "Fla.", "code": "FL"},
    {"name": "Georgia", "abbrev": "Ga.", "code": "GA"},
    {"name": "Hawaii", "abbrev": "Hawaii", "code": "HI"},
    {"name": "Idaho", "abbrev": "Idaho", "code": "ID"},
    {"name": "Illinois", "abbrev": "Ill.", "code": "IL"},
    {"name": "Indiana", "abbrev": "Ind.", "code": "IN"},
    {"name": "Iowa", "abbrev": "Iowa", "code": "IA"},
    {"name": "Kansas", "abbrev": "Kans.", "code": "KS"},
    {"name": "Kentucky", "abbrev": "Ky.", "code": "KY"},
    {"name": "Louisiana", "abbrev": "La.", "code": "LA"},
    {"name": "Maine", "abbrev": "Maine", "code": "ME"},
    {"name": "Maryland", "abbrev": "Md.", "code": "MD"},
    {"name": "Massachusetts", "abbrev": "Mass.", "code": "MA"},
    {"name": "Michigan", "abbrev": "Mich.", "code": "MI"},
    {"name": "Minnesota", "abbrev": "Minn.", "code": "MN"},
    {"name": "Mississippi", "abbrev": "Miss.", "code": "MS"},
    {"name": "Missouri", "abbrev": "Mo.", "code": "MO"},
    {"name": "Montana", "abbrev": "Mont.", "code": "MT"},
    {"name": "Nebraska", "abbrev": "Nebr.", "code": "NE"},
    {"name": "Nevada", "abbrev": "Nev.", "code": "NV"},
    {"name": "New Hampshire", "abbrev": "N.H.", "code": "NH"},
    {"name": "New Jersey", "abbrev": "N.J.", "code": "NJ"},
    {"name": "New Mexico", "abbrev": "N.M.", "code": "NM"},
    {"name": "New York", "abbrev": "N.Y.", "code": "NY"},
    {"name": "North Carolina", "abbrev": "N.C.", "code": "NC"},
    {"name": "North Dakota", "abbrev": "N.D.", "code": "ND"},
    {"name": "Ohio", "abbrev": "Ohio", "code": "OH"},
    {"name": "Oklahoma", "abbrev": "Okla.", "code": "OK"},
    {"name": "Oregon", "abbrev": "Ore.", "code": "OR"},
    {"name": "Pennsylvania", "abbrev": "Pa.", "code": "PA"},
    {"name": "Rhode Island", "abbrev": "R.I.", "code": "RI"},
    {"name": "South Carolina", "abbrev": "S.C.", "code": "SC"},
    {"name": "South Dakota", "abbrev": "S.D.", "code": "SD"},
    {"name": "Tennessee", "abbrev": "Tenn.", "code": "TN"},
    {"name": "Texas", "abbrev": "Tex.", "code": "TX"},
    {"name": "Utah", "abbrev": "Utah", "code": "UT"},
    {"name": "Vermont", "abbrev": "Vt.", "code": "VT"},
    {"name": "Virginia", "abbrev": "Va.", "code": "VA"},
    {"name": "Washington", "abbrev": "Wash.", "code": "WA"},
    {"name": "West Virginia", "abbrev": "W.Va.", "code": "WV"},
    {"name": "Wisconsin", "abbrev": "Wis.", "code": "WI"},
    {"name": "Wyoming", "abbrev": "Wyo.", "code": "WY"}
]

export const EU_COUNTRY_ISOS = new Set([
    'aut', // Austria
    'bel', // Belgium
    'bgr', // Bulgaria
    'cyp', // Cyprus
    'cze', // Czech Republic
    'deu', // Germany
    'dnk', // Denmark
    'est', // Estonia
    'esp', // Spain
    'fin', // Finland
    'fra', // France
    'grc', // Greece
    'hrv', // Croatia
    'hun', // Hungary
    'irl', // Ireland
    'ita', // Italy
    'ltu', // Lithuania
    'lux', // Luxembourg
    'lva', // Latvia
    'mlt', // Malta
    'nld', // Netherlands
    'pol', // Poland
    'prt', // Portugal
    'rou', // Romania
    'swe', // Sweden
    'svn', // Slovenia
    'svk', // Slovakia
]);


const countries = [{"id":4,"alpha2":"af","alpha3":"afg","ar":"أفغانستان","bg":"Афганистан","cs":"Afghánistán","da":"Afghanistan","de":"Afghanistan","el":"Αφγανιστάν","en":"Afghanistan","eo":"Afganio","es":"Afganistán","et":"Afganistan","eu":"Afganistan","fi":"Afganistan","fr":"Afghanistan","hu":"Afganisztán","hy":"Աֆղանստան","it":"Afghanistan","ja":"アフガニスタン","ko":"아프가니스탄","lt":"Afganistanas","nl":"Afghanistan","no":"Afghanistan","pl":"Afganistan","pt":"Afeganistão","ro":"Afganistan","ru":"Афганистан","sk":"Afganistan","sv":"Afghanistan","th":"อัฟกานิสถาน","uk":"Афганістан","zh":"阿富汗","zh-tw":"阿富汗"},
    {"id":8,"alpha2":"al","alpha3":"alb","ar":"ألبانيا","bg":"Албания","cs":"Albánie","da":"Albanien","de":"Albanien","el":"Αλβανία","en":"Albania","eo":"Albanio","es":"Albania","et":"Albaania","eu":"Albania","fi":"Albania","fr":"Albanie","hu":"Albánia","hy":"Ալբանիա","it":"Albania","ja":"アルバニア","ko":"알바니아","lt":"Albanija","nl":"Albanië","no":"Albania","pl":"Albania","pt":"Albânia","ro":"Albania","ru":"Албания","sk":"Albánsko","sv":"Albanien","th":"แอลเบเนีย","uk":"Албанія","zh":"阿尔巴尼亚","zh-tw":"阿爾巴尼亞"},
    {"id":12,"alpha2":"dz","alpha3":"dza","ar":"الجزائر","bg":"Алжир","cs":"Alžírsko","da":"Algeriet","de":"Algerien","el":"Αλγερία","en":"Algeria","eo":"Alĝerio","es":"Argelia","et":"Alžeeria","eu":"Aljeria","fi":"Algeria","fr":"Algérie","hu":"Algéria","hy":"Ալժիր","it":"Algeria","ja":"アルジェリア","ko":"알제리","lt":"Alžyras","nl":"Algerije","no":"Algerie","pl":"Algieria","pt":"Argélia","ro":"Algeria","ru":"Алжир","sk":"Alžírsko","sv":"Algeriet","th":"แอลจีเรีย","uk":"Алжир","zh":"阿尔及利亚","zh-tw":"阿爾及利亞"},
    {"id":20,"alpha2":"ad","alpha3":"and","ar":"أندورا","bg":"Андора","cs":"Andorra","da":"Andorra","de":"Andorra","el":"Ανδόρρα","en":"Andorra","eo":"Andoro","es":"Andorra","et":"Andorra","eu":"Andorra","fi":"Andorra","fr":"Andorre","hu":"Andorra","hy":"Անդորրա","it":"Andorra","ja":"アンドラ","ko":"안도라","lt":"Andora","nl":"Andorra","no":"Andorra","pl":"Andora","pt":"Andorra","ro":"Andorra","ru":"Андорра","sk":"Andorra","sv":"Andorra","th":"อันดอร์รา","uk":"Андорра","zh":"安道尔","zh-tw":"安道爾"},
    {"id":24,"alpha2":"ao","alpha3":"ago","ar":"أنغولا","bg":"Ангола","cs":"Angola","da":"Angola","de":"Angola","el":"Ανγκόλα","en":"Angola","eo":"Angolo","es":"Angola","et":"Angola","eu":"Angola","fi":"Angola","fr":"Angola","hu":"Angola","hy":"Անգոլա","it":"Angola","ja":"アンゴラ","ko":"앙골라","lt":"Angola","nl":"Angola","no":"Angola","pl":"Angola","pt":"Angola","ro":"Angola","ru":"Ангола","sk":"Angola","sv":"Angola","th":"แองโกลา","uk":"Ангола","zh":"安哥拉","zh-tw":"安哥拉"},
    {"id":28,"alpha2":"ag","alpha3":"atg","ar":"أنتيغوا وباربودا","bg":"Антигуа и Барбуда","cs":"Antigua a Barbuda","da":"Antigua og Barbuda","de":"Antigua und Barbuda","el":"Αντίγκουα και Μπαρμπούντα","en":"Antigua and Barbuda","eo":"Antigvo kaj Barbudo","es":"Antigua y Barbuda","et":"Antigua ja Barbuda","eu":"Antigua eta Barbuda","fi":"Antigua ja Barbuda","fr":"Antigua-et-Barbuda","hu":"Antigua és Barbuda","hy":"Անտիգուա և Բարբուդա","it":"Antigua e Barbuda","ja":"アンティグア・バーブーダ","ko":"앤티가 바부다","lt":"Antigva ir Barbuda","nl":"Antigua en Barbuda","no":"Antigua og Barbuda","pl":"Antigua i Barbuda","pt":"Antígua e Barbuda","ro":"Antigua și Barbuda","ru":"Антигуа и Барбуда","sk":"Antigua a Barbuda","sv":"Antigua och Barbuda","th":"แอนทีกาและบาร์บิวดา","uk":"Антигуа і Барбуда","zh":"安提瓜和巴布达","zh-tw":"安地卡及巴布達"},
    {"id":32,"alpha2":"ar","alpha3":"arg","ar":"الأرجنتين","bg":"Аржентина","cs":"Argentina","da":"Argentina","de":"Argentinien","el":"Αργεντινή","en":"Argentina","eo":"Argentino","es":"Argentina","et":"Argentina","eu":"Argentina","fi":"Argentiina","fr":"Argentine","hu":"Argentína","hy":"Արգենտինա","it":"Argentina","ja":"アルゼンチン","ko":"아르헨티나","lt":"Argentina","nl":"Argentinië","no":"Argentina","pl":"Argentyna","pt":"Argentina","ro":"Argentina","ru":"Аргентина","sk":"Argentína","sv":"Argentina","th":"อาร์เจนตินา","uk":"Аргентина","zh":"阿根廷","zh-tw":"阿根廷"},
    {"id":51,"alpha2":"am","alpha3":"arm","ar":"أرمينيا","bg":"Армения","cs":"Arménie","da":"Armenien","de":"Armenien","el":"Αρμενία","en":"Armenia","eo":"Armenio","es":"Armenia","et":"Armeenia","eu":"Armenia","fi":"Armenia","fr":"Arménie","hu":"Örményország","hy":"Հայաստան","it":"Armenia","ja":"アルメニア","ko":"아르메니아","lt":"Armėnija","nl":"Armenië","no":"Armenia","pl":"Armenia","pt":"Armênia","ro":"Armenia","ru":"Армения","sk":"Arménsko","sv":"Armenien","th":"อาร์มีเนีย","uk":"Вірменія","zh":"亚美尼亚","zh-tw":"亞美尼亞"},
    {"id":36,"alpha2":"au","alpha3":"aus","ar":"أستراليا","bg":"Австралия","cs":"Austrálie","da":"Australien","de":"Australien","el":"Αυστραλία","en":"Australia","eo":"Aŭstralio","es":"Australia","et":"Austraalia","eu":"Australia","fi":"Australia","fr":"Australie","hu":"Ausztrália","hy":"Ավստրալիա","it":"Australia","ja":"オーストラリア","ko":"오스트레일리아","lt":"Australija","nl":"Australië","no":"Australia","pl":"Australia","pt":"Austrália","ro":"Australia","ru":"Австралия","sk":"Austrália","sv":"Australien","th":"ออสเตรเลีย","uk":"Австралія","zh":"澳大利亚","zh-tw":"澳大利亞"},
    {"id":40,"alpha2":"at","alpha3":"aut","ar":"النمسا","bg":"Австрия","cs":"Rakousko","da":"Østrig","de":"Österreich","el":"Αυστρία","en":"Austria","eo":"Aŭstrio","es":"Austria","et":"Austria","eu":"Austria","fi":"Itävalta","fr":"Autriche","hu":"Ausztria","hy":"Ավստրիա","it":"Austria","ja":"オーストリア","ko":"오스트리아","lt":"Austrija","nl":"Oostenrijk","no":"Østerrike","pl":"Austria","pt":"Áustria","ro":"Austria","ru":"Австрия","sk":"Rakúsko","sv":"Österrike","th":"ออสเตรีย","uk":"Австрія","zh":"奥地利","zh-tw":"奧地利"},
    {"id":31,"alpha2":"az","alpha3":"aze","ar":"أذربيجان","bg":"Азербайджан","cs":"Ázerbájdžán","da":"Aserbajdsjan","de":"Aserbaidschan","el":"Αζερμπαϊτζάν","en":"Azerbaijan","eo":"Azerbajĝano","es":"Azerbaiyán","et":"Aserbaidžaan","eu":"Azerbaijan","fi":"Azerbaidžan","fr":"Azerbaïdjan","hu":"Azerbajdzsán","hy":"Ադրբեջան","it":"Azerbaigian","ja":"アゼルバイジャン","ko":"아제르바이잔","lt":"Azerbaidžanas","nl":"Azerbeidzjan","no":"Aserbajdsjan","pl":"Azerbejdżan","pt":"Azerbaijão","ro":"Azerbaidjan","ru":"Азербайджан","sk":"Azerbajdžan","sv":"Azerbajdzjan","th":"อาเซอร์ไบจาน","uk":"Азербайджан","zh":"阿塞拜疆","zh-tw":"亞塞拜然"},
    {"id":44,"alpha2":"bs","alpha3":"bhs","ar":"باهاماس","bg":"Бахамски острови","cs":"Bahamy","da":"Bahamas","de":"Bahamas","el":"Μπαχάμες","en":"Bahamas","eo":"Bahamoj","es":"Bahamas","et":"Bahama","eu":"Bahamak","fi":"Bahama","fr":"Bahamas","hu":"Bahama-szigetek","hy":"Բահամներ","it":"Bahamas","ja":"バハマ","ko":"바하마","lt":"Bahamos","nl":"Bahama's","no":"Bahamas","pl":"Bahamy","pt":"Bahamas","ro":"Bahamas","ru":"Багамские Острова","sk":"Bahamy","sv":"Bahamas","th":"บาฮามาส","uk":"Багамські Острови","zh":"巴哈马","zh-tw":"巴哈馬"},
    {"id":48,"alpha2":"bh","alpha3":"bhr","ar":"البحرين","bg":"Бахрейн","cs":"Bahrajn","da":"Bahrain","de":"Bahrain","el":"Μπαχρέιν","en":"Bahrain","eo":"Barejno","es":"Baréin","et":"Bahrein","eu":"Bahrain","fi":"Bahrain","fr":"Bahreïn","hu":"Bahrein","hy":"Բահրեյն","it":"Bahrein","ja":"バーレーン","ko":"바레인","lt":"Bahreinas","nl":"Bahrein","no":"Bahrain","pl":"Bahrajn","pt":"Barém","ro":"Bahrain","ru":"Бахрейн","sk":"Bahrajn","sv":"Bahrain","th":"บาห์เรน","uk":"Бахрейн","zh":"巴林","zh-tw":"巴林"},
    {"id":50,"alpha2":"bd","alpha3":"bgd","ar":"بنغلاديش","bg":"Бангладеш","cs":"Bangladéš","da":"Bangladesh","de":"Bangladesch","el":"Μπανγκλαντές","en":"Bangladesh","eo":"Bangladeŝo","es":"Bangladés","et":"Bangladesh","eu":"Bangladesh","fi":"Bangladesh","fr":"Bangladesh","hu":"Banglades","hy":"Բանգլադեշ","it":"Bangladesh","ja":"バングラデシュ","ko":"방글라데시","lt":"Bangladešas","nl":"Bangladesh","no":"Bangladesh","pl":"Bangladesz","pt":"Bangladexe","ro":"Bangladesh","ru":"Бангладеш","sk":"Bangladéš","sv":"Bangladesh","th":"บังกลาเทศ","uk":"Бангладеш","zh":"孟加拉国","zh-tw":"孟加拉"},
    {"id":52,"alpha2":"bb","alpha3":"brb","ar":"باربادوس","bg":"Барбадос","cs":"Barbados","da":"Barbados","de":"Barbados","el":"Μπαρμπάντος","en":"Barbados","eo":"Barbado","es":"Barbados","et":"Barbados","eu":"Barbados","fi":"Barbados","fr":"Barbade","hu":"Barbados","hy":"Բարբադոս","it":"Barbados","ja":"バルバドス","ko":"바베이도스","lt":"Barbadosas","nl":"Barbados","no":"Barbados","pl":"Barbados","pt":"Barbados","ro":"Barbados","ru":"Барбадос","sk":"Barbados","sv":"Barbados","th":"บาร์เบโดส","uk":"Барбадос","zh":"巴巴多斯","zh-tw":"巴貝多"},
    {"id":112,"alpha2":"by","alpha3":"blr","ar":"بيلاروس","bg":"Беларус","cs":"Bělorusko","da":"Hviderusland","de":"Belarus","el":"Λευκορωσία","en":"Belarus","eo":"Belorusio","es":"Bielorrusia","et":"Valgevene","eu":"Bielorrusia","fi":"Valko-Venäjä","fr":"Biélorussie","hu":"Fehéroroszország","hy":"Բելառուս","it":"Bielorussia","ja":"ベラルーシ","ko":"벨라루스","lt":"Baltarusija","nl":"Wit-Rusland","no":"Belarus","pl":"Białoruś","pt":"Bielorrússia","ro":"Belarus","ru":"Белоруссия","sk":"Bielorusko","sv":"Belarus","th":"เบลารุส","uk":"Білорусь","zh":"白俄罗斯","zh-tw":"白俄羅斯"},
    {"id":56,"alpha2":"be","alpha3":"bel","ar":"بلجيكا","bg":"Белгия","cs":"Belgie","da":"Belgien","de":"Belgien","el":"Βέλγιο","en":"Belgium","eo":"Belgio","es":"Bélgica","et":"Belgia","eu":"Belgika","fi":"Belgia","fr":"Belgique","hu":"Belgium","hy":"Բելգիա","it":"Belgio","ja":"ベルギー","ko":"벨기에","lt":"Belgija","nl":"België","no":"Belgia","pl":"Belgia","pt":"Bélgica","ro":"Belgia","ru":"Бельгия","sk":"Belgicko","sv":"Belgien","th":"เบลเยียม","uk":"Бельгія","zh":"比利时","zh-tw":"比利時"},
    {"id":84,"alpha2":"bz","alpha3":"blz","ar":"بليز","bg":"Белиз","cs":"Belize","da":"Belize","de":"Belize","el":"Μπελίζ","en":"Belize","eo":"Belizo","es":"Belice","et":"Belize","eu":"Belize","fi":"Belize","fr":"Belize","hu":"Belize","hy":"Բելիզ","it":"Belize","ja":"ベリーズ","ko":"벨리즈","lt":"Belizas","nl":"Belize","no":"Belize","pl":"Belize","pt":"Belize","ro":"Belize","ru":"Белиз","sk":"Belize","sv":"Belize","th":"เบลีซ","uk":"Беліз","zh":"伯利兹","zh-tw":"貝里斯"},
    {"id":204,"alpha2":"bj","alpha3":"ben","ar":"بنين","bg":"Бенин","cs":"Benin","da":"Benin","de":"Benin","el":"Μπενίν","en":"Benin","eo":"Benino","es":"Benín","et":"Benin","eu":"Benin","fi":"Benin","fr":"Bénin","hu":"Benin","hy":"Բենին","it":"Benin","ja":"ベナン","ko":"베냉","lt":"Beninas","nl":"Benin","no":"Benin","pl":"Benin","pt":"Benim","ro":"Benin","ru":"Бенин","sk":"Benin","sv":"Benin","th":"เบนิน","uk":"Бенін","zh":"贝宁","zh-tw":"貝南"},
    {"id":64,"alpha2":"bt","alpha3":"btn","ar":"بوتان","bg":"Бутан","cs":"Bhútán","da":"Bhutan","de":"Bhutan","el":"Μπουτάν","en":"Bhutan","eo":"Butano","es":"Bután","et":"Bhutan","eu":"Bhutan","fi":"Bhutan","fr":"Bhoutan","hu":"Bhután","hy":"Բութան","it":"Bhutan","ja":"ブータン","ko":"부탄","lt":"Butanas","nl":"Bhutan","no":"Bhutan","pl":"Bhutan","pt":"Butão","ro":"Bhutan","ru":"Бутан","sk":"Bhután","sv":"Bhutan","th":"ภูฏาน","uk":"Бутан","zh":"不丹","zh-tw":"不丹"},
    {"id":68,"alpha2":"bo","alpha3":"bol","ar":"بوليفيا","bg":"Боливия","cs":"Bolívie","da":"Bolivia","de":"Bolivien","el":"Βολιβία","en":"Bolivia (Plurinational State of)","eo":"Bolivio","es":"Bolivia","et":"Boliivia","eu":"Bolivia","fi":"Bolivia","fr":"Bolivie","hu":"Bolívia","hy":"Բոլիվիա","it":"Bolivia","ja":"ボリビア多民族国","ko":"볼리비아","lt":"Bolivija","nl":"Bolivia","no":"Bolivia","pl":"Boliwia","pt":"Bolívia","ro":"Bolivia","ru":"Боливия","sk":"Bolívia","sv":"Bolivia","th":"โบลิเวีย","uk":"Болівія","zh":"玻利维亚","zh-tw":"玻利維亞"},
    {"id":70,"alpha2":"ba","alpha3":"bih","ar":"البوسنة والهرسك","bg":"Босна и Херцеговина","cs":"Bosna a Hercegovina","da":"Bosnien-Hercegovina","de":"Bosnien und Herzegowina","el":"Βοσνία-Ερζεγοβίνη","en":"Bosnia and Herzegovina","eo":"Bosnio kaj Hercegovino","es":"Bosnia y Herzegovina","et":"Bosnia ja Hertsegoviina","eu":"Bosnia-Herzegovina","fi":"Bosnia ja Hertsegovina","fr":"Bosnie-Herzégovine","hu":"Bosznia-Hercegovina","hy":"Բոսնիա և Հերցեգովինա","it":"Bosnia ed Erzegovina","ja":"ボスニア・ヘルツェゴビナ","ko":"보스니아 헤르체고비나","lt":"Bosnija ir Hercegovina","nl":"Bosnië en Herzegovina","no":"Bosnia-Hercegovina","pl":"Bośnia i Hercegowina","pt":"Bósnia e Herzegovina","ro":"Bosnia și Herțegovina","ru":"Босния и Герцеговина","sk":"Bosna a Hercegovina","sv":"Bosnien och Hercegovina","th":"บอสเนียและเฮอร์เซโกวีนา","uk":"Боснія і Герцеговина","zh":"波黑","zh-tw":"波士尼亞與赫塞哥維納"},
    {"id":72,"alpha2":"bw","alpha3":"bwa","ar":"بوتسوانا","bg":"Ботсвана","cs":"Botswana","da":"Botswana","de":"Botswana","el":"Μποτσουάνα","en":"Botswana","eo":"Bocvano","es":"Botsuana","et":"Botswana","eu":"Botswana","fi":"Botswana","fr":"Botswana","hu":"Botswana","hy":"Բոտսվանա","it":"Botswana","ja":"ボツワナ","ko":"보츠와나","lt":"Botsvana","nl":"Botswana","no":"Botswana","pl":"Botswana","pt":"Botsuana","ro":"Botswana","ru":"Ботсвана","sk":"Botswana","sv":"Botswana","th":"บอตสวานา","uk":"Ботсвана","zh":"博茨瓦纳","zh-tw":"波札那"},
    {"id":76,"alpha2":"br","alpha3":"bra","ar":"البرازيل","bg":"Бразилия","cs":"Brazílie","da":"Brasilien","de":"Brasilien","el":"Βραζιλία","en":"Brazil","eo":"Brazilo","es":"Brasil","et":"Brasiilia","eu":"Brasil","fi":"Brasilia","fr":"Brésil","hu":"Brazília","hy":"Բրազիլիա","it":"Brasile","ja":"ブラジル","ko":"브라질","lt":"Brazilija","nl":"Brazilië","no":"Brasil","pl":"Brazylia","pt":"Brasil","ro":"Brazilia","ru":"Бразилия","sk":"Brazília","sv":"Brasilien","th":"บราซิล","uk":"Бразилія","zh":"巴西","zh-tw":"巴西"},
    {"id":96,"alpha2":"bn","alpha3":"brn","ar":"بروناي","bg":"Бруней","cs":"Brunej","da":"Brunei","de":"Brunei","el":"Μπρουνέι","en":"Brunei Darussalam","eo":"Brunejo","es":"Brunéi","et":"Brunei","eu":"Brunei","fi":"Brunei","fr":"Brunei","hu":"Brunei","hy":"Բրունեյ","it":"Brunei","ja":"ブルネイ・ダルサラーム","ko":"브루나이","lt":"Brunėjus","nl":"Brunei","no":"Brunei","pl":"Brunei","pt":"Brunei","ro":"Brunei","ru":"Бруней","sk":"Brunej","sv":"Brunei","th":"บรูไน","uk":"Бруней","zh":"文莱","zh-tw":"汶萊"},
    {"id":100,"alpha2":"bg","alpha3":"bgr","ar":"بلغاريا","bg":"България","cs":"Bulharsko","da":"Bulgarien","de":"Bulgarien","el":"Βουλγαρία","en":"Bulgaria","eo":"Bulgario","es":"Bulgaria","et":"Bulgaaria","eu":"Bulgaria","fi":"Bulgaria","fr":"Bulgarie","hu":"Bulgária","hy":"Բուլղարիա","it":"Bulgaria","ja":"ブルガリア","ko":"불가리아","lt":"Bulgarija","nl":"Bulgarije","no":"Bulgaria","pl":"Bułgaria","pt":"Bulgária","ro":"Bulgaria","ru":"Болгария","sk":"Bulharsko","sv":"Bulgarien","th":"บัลแกเรีย","uk":"Болгарія","zh":"保加利亚","zh-tw":"保加利亞"},
    {"id":854,"alpha2":"bf","alpha3":"bfa","ar":"بوركينا فاسو","bg":"Буркина Фасо","cs":"Burkina Faso","da":"Burkina Faso","de":"Burkina Faso","el":"Μπουρκίνα Φάσο","en":"Burkina Faso","eo":"Burkino","es":"Burkina Faso","et":"Burkina Faso","eu":"Burkina Faso","fi":"Burkina Faso","fr":"Burkina Faso","hu":"Burkina Faso","hy":"Բուրկինա Ֆասո","it":"Burkina Faso","ja":"ブルキナファソ","ko":"부르키나파소","lt":"Burkina Faso","nl":"Burkina Faso","no":"Burkina Faso","pl":"Burkina Faso","pt":"Burquina Fasso","ro":"Burkina Faso","ru":"Буркина-Фасо","sk":"Burkina","sv":"Burkina Faso","th":"บูร์กินาฟาโซ","uk":"Буркіна-Фасо","zh":"布基纳法索","zh-tw":"布吉納法索"},
    {"id":108,"alpha2":"bi","alpha3":"bdi","ar":"بوروندي","bg":"Бурунди","cs":"Burundi","da":"Burundi","de":"Burundi","el":"Μπουρούντι","en":"Burundi","eo":"Burundo","es":"Burundi","et":"Burundi","eu":"Burundi","fi":"Burundi","fr":"Burundi","hu":"Burundi","hy":"Բուրունդի","it":"Burundi","ja":"ブルンジ","ko":"부룬디","lt":"Burundis","nl":"Burundi","no":"Burundi","pl":"Burundi","pt":"Burundi","ro":"Burundi","ru":"Бурунди","sk":"Burundi","sv":"Burundi","th":"บุรุนดี","uk":"Бурунді","zh":"布隆迪","zh-tw":"蒲隆地"},
    {"id":116,"alpha2":"kh","alpha3":"khm","ar":"كمبوديا","bg":"Камбоджа","cs":"Kambodža","da":"Cambodja","de":"Kambodscha","el":"Καμπότζη","en":"Cambodia","eo":"Kamboĝo","es":"Camboya","et":"Kambodža","eu":"Kanbodia","fi":"Kambodža","fr":"Cambodge","hu":"Kambodzsa","hy":"Կամբոջա","it":"Cambogia","ja":"カンボジア","ko":"캄보디아","lt":"Kambodža","nl":"Cambodja","no":"Kambodsja","pl":"Kambodża","pt":"Camboja","ro":"Cambodgia","ru":"Камбоджа","sk":"Kambodža","sv":"Kambodja","th":"กัมพูชา","uk":"Камбоджа","zh":"柬埔寨","zh-tw":"柬埔寨"},
    {"id":120,"alpha2":"cm","alpha3":"cmr","ar":"الكاميرون","bg":"Камерун","cs":"Kamerun","da":"Cameroun","de":"Kamerun","el":"Καμερούν","en":"Cameroon","eo":"Kameruno","es":"Camerún","et":"Kamerun","eu":"Kamerun","fi":"Kamerun","fr":"Cameroun","hu":"Kamerun","hy":"Կամերուն","it":"Camerun","ja":"カメルーン","ko":"카메룬","lt":"Kamerūnas","nl":"Kameroen","no":"Kamerun","pl":"Kamerun","pt":"Camarões","ro":"Camerun","ru":"Камерун","sk":"Kamerun","sv":"Kamerun","th":"แคเมอรูน","uk":"Камерун","zh":"喀麦隆","zh-tw":"喀麥隆"},
    {"id":124,"alpha2":"ca","alpha3":"can","ar":"كندا","bg":"Канада","cs":"Kanada","da":"Canada","de":"Kanada","el":"Καναδάς","en":"Canada","eo":"Kanado","es":"Canadá","et":"Kanada","eu":"Kanada","fi":"Kanada","fr":"Canada","hu":"Kanada","hy":"Կանադա","it":"Canada","ja":"カナダ","ko":"캐나다","lt":"Kanada","nl":"Canada","no":"Canada","pl":"Kanada","pt":"Canadá","ro":"Canada","ru":"Канада","sk":"Kanada","sv":"Kanada","th":"แคนาดา","uk":"Канада","zh":"加拿大","zh-tw":"加拿大"},
    {"id":132,"alpha2":"cv","alpha3":"cpv","ar":"الرأس الأخضر","bg":"Кабо Верде","cs":"Kapverdy","da":"Kap Verde","de":"Kap Verde","el":"Πράσινο Ακρωτήρι","en":"Cabo Verde","eo":"Kaboverdo","es":"Cabo Verde","et":"Roheneemesaared","eu":"Cabo Verde","fi":"Kap Verde","fr":"Cap-Vert","hu":"Zöld-foki Köztársaság","hy":"Կաբո Վերդե","it":"Capo Verde","ja":"カーボベルデ","ko":"카보베르데","lt":"Žaliasis Kyšulys","nl":"Kaapverdië","no":"Kapp Verde","pl":"Republika Zielonego Przylądka","pt":"Cabo Verde","ro":"Republica Capului Verde","ru":"Кабо-Верде","sk":"Kapverdy","sv":"Kap Verde","th":"กาบูเวร์ดี","uk":"Кабо-Верде","zh":"佛得角","zh-tw":"維德角"},
    {"id":140,"alpha2":"cf","alpha3":"caf","ar":"جمهورية أفريقيا الوسطى","bg":"Централноафриканска република","cs":"Středoafrická republika","da":"Centralafrikanske Republik","de":"Zentralafrikanische Republik","el":"Κεντροαφρικανική Δημοκρατία","en":"Central African Republic","eo":"Centr-Afrika Respubliko","es":"República Centroafricana","et":"Kesk-Aafrika Vabariik","eu":"Afrika Erdiko Errepublika","fi":"Keski-Afrikan tasavalta","fr":"République centrafricaine","hu":"Közép-Afrika","hy":"Կենտրոնաաֆրիկյան Հանրապետություն","it":"Rep. Centrafricana","ja":"中央アフリカ共和国","ko":"중앙아프리카 공화국","lt":"Centrinės Afrikos Respublika","nl":"Centraal-Afrikaanse Republiek","no":"Den sentralafrikanske republikk","pl":"Republika Środkowoafrykańska","pt":"República Centro-Africana","ro":"Republica Centrafricană","ru":"ЦАР","sk":"Stredoafrická republika","sv":"Centralafrikanska republiken","th":"สาธารณรัฐแอฟริกากลาง","uk":"Центральноафриканська Республіка","zh":"中非","zh-tw":"中非"},
    {"id":148,"alpha2":"td","alpha3":"tcd","ar":"تشاد","bg":"Чад","cs":"Čad","da":"Tchad","de":"Tschad","el":"Τσαντ","en":"Chad","eo":"Ĉado","es":"Chad","et":"Tšaad","eu":"Txad","fi":"Tšad","fr":"Tchad","hu":"Csád","hy":"Չադ","it":"Ciad","ja":"チャド","ko":"차드","lt":"Čadas","nl":"Tsjaad","no":"Tsjad","pl":"Czad","pt":"Chade","ro":"Ciad","ru":"Чад","sk":"Čad","sv":"Tchad","th":"ชาด","uk":"Чад","zh":"乍得","zh-tw":"查德"},
    {"id":152,"alpha2":"cl","alpha3":"chl","ar":"تشيلي","bg":"Чили","cs":"Chile","da":"Chile","de":"Chile","el":"Χιλή","en":"Chile","eo":"Ĉilio","es":"Chile","et":"Tšiili","eu":"Txile","fi":"Chile","fr":"Chili","hu":"Chile","hy":"Չիլի","it":"Cile","ja":"チリ","ko":"칠레","lt":"Čilė","nl":"Chili","no":"Chile","pl":"Chile","pt":"Chile","ro":"Chile","ru":"Чили","sk":"Čile","sv":"Chile","th":"ชิลี","uk":"Чилі","zh":"智利","zh-tw":"智利"},
    {"id":156,"alpha2":"cn","alpha3":"chn","ar":"الصين","bg":"Китай","cs":"Čína","da":"Kina","de":"Volksrepublik China","el":"Κίνα","en":"China","eo":"Ĉinio","es":"China","et":"Hiina","eu":"Txina","fi":"Kiina","fr":"Chine","hu":"Kína","hy":"Չինաստան","it":"Cina","ja":"中華人民共和国","ko":"중국","lt":"Kinija","nl":"China","no":"Kina","pl":"Chiny","pt":"China","ro":"Republica Populară Chineză","ru":"Китай (Китайская Народная Республика)","sk":"Čína","sv":"Kina","th":"จีน","uk":"Китайська Народна Республіка","zh":"中国","zh-tw":"中國"},
    {"id":170,"alpha2":"co","alpha3":"col","ar":"كولومبيا","bg":"Колумбия","cs":"Kolumbie","da":"Colombia","de":"Kolumbien","el":"Κολομβία","en":"Colombia","eo":"Kolombio","es":"Colombia","et":"Colombia","eu":"Kolonbia","fi":"Kolumbia","fr":"Colombie","hu":"Kolumbia","hy":"Կոլումբիա","it":"Colombia","ja":"コロンビア","ko":"콜롬비아","lt":"Kolumbija","nl":"Colombia","no":"Colombia","pl":"Kolumbia","pt":"Colômbia","ro":"Columbia","ru":"Колумбия","sk":"Kolumbia","sv":"Colombia","th":"โคลอมเบีย","uk":"Колумбія","zh":"哥伦比亚","zh-tw":"哥倫比亞"},
    {"id":174,"alpha2":"km","alpha3":"com","ar":"جزر القمر","bg":"Коморски острови","cs":"Komory","da":"Comorerne","de":"Komoren","el":"Κομόρες","en":"Comoros","eo":"Komoroj","es":"Comoras","et":"Komoorid","eu":"Komoreak","fi":"Komorit","fr":"Comores","hu":"Comore-szigetek","hy":"Կոմորներ","it":"Comore","ja":"コモロ","ko":"코모로","lt":"Komorai","nl":"Comoren","no":"Komorene","pl":"Komory","pt":"Comores","ro":"Comore","ru":"Коморы","sk":"Komory","sv":"Komorerna","th":"คอโมโรส","uk":"Коморські Острови","zh":"科摩罗","zh-tw":"葛摩"},
    {"id":178,"alpha2":"cg","alpha3":"cog","ar":"جمهورية الكونغو","bg":"Република Конго","cs":"Kongo","da":"Congo","de":"Kongo, Republik","el":"Κογκό","en":"Congo","eo":"Respubliko Kongo","es":"República del Congo","et":"Kongo Vabariik","eu":"Kongoko Errepublika","fi":"Kongon tasavalta","fr":"République du Congo","hu":"Kongói Köztársaság (Kongó)","hy":"Կոնգոյի Հանրապետություն","it":"Rep. del Congo","ja":"コンゴ共和国","ko":"콩고 공화국","lt":"Kongo Respublika","nl":"Congo-Brazzaville","no":"Kongo, Republikken","pl":"Kongo","pt":"República do Congo","ro":"Congo","ru":"Республика Конго","sk":"Kongo","sv":"Kongo-Brazzaville","th":"สาธารณรัฐคองโก","uk":"Республіка Конго","zh":"刚果共和国","zh-tw":"剛果共和國"},
    {"id":180,"alpha2":"cd","alpha3":"cod","ar":"جمهورية الكونغو الديمقراطية","bg":"Демократична република Конго","cs":"Konžská demokratická republika","da":"Demokratiske Republik Congo","de":"Kongo, Demokratische Republik","el":"Λαϊκή Δημοκρατία του Κογκό","en":"Congo, Democratic Republic of the","eo":"Demokratia Respubliko Kongo","es":"República Democrática del Congo","et":"Kongo Demokraatlik Vabariik","eu":"Kongoko Errepublika Demokratikoa","fi":"Kongon demokraattinen tasavalta","fr":"République démocratique du Congo","hu":"Kongói Demokratikus Köztársaság (Zaire)","hy":"Կոնգոյի Դեմոկրատական Հանրապետություն","it":"RD del Congo","ja":"コンゴ民主共和国","ko":"콩고 민주 공화국","lt":"Kongo Demokratinė Respublika","nl":"Congo-Kinshasa","no":"Kongo, Den demokratiske republikken","pl":"Demokratyczna Republika Konga","pt":"República Democrática do Congo","ro":"Republica Democrată Congo","ru":"ДР Конго","sk":"Konžská demokratická republika","sv":"Kongo-Kinshasa","th":"สาธารณรัฐประชาธิปไตยคองโก","uk":"ДР Конго","zh":"刚果民主共和国","zh-tw":"剛果民主共和國"},
    {"id":188,"alpha2":"cr","alpha3":"cri","ar":"كوستاريكا","bg":"Коста Рика","cs":"Kostarika","da":"Costa Rica","de":"Costa Rica","el":"Κόστα Ρίκα","en":"Costa Rica","eo":"Kostariko","es":"Costa Rica","et":"Costa Rica","eu":"Costa Rica","fi":"Costa Rica","fr":"Costa Rica","hu":"Costa Rica","hy":"Կոստա Ռիկա","it":"Costa Rica","ja":"コスタリカ","ko":"코스타리카","lt":"Kosta Rika","nl":"Costa Rica","no":"Costa Rica","pl":"Kostaryka","pt":"Costa Rica","ro":"Costa Rica","ru":"Коста-Рика","sk":"Kostarika","sv":"Costa Rica","th":"คอสตาริกา","uk":"Коста-Рика","zh":"哥斯达黎加","zh-tw":"哥斯大黎加"},
    {"id":384,"alpha2":"ci","alpha3":"civ","ar":"ساحل العاج","bg":"Кот д'Ивоар","cs":"Pobřeží slonoviny","da":"Elfenbenskysten","de":"Elfenbeinküste","el":"Ακτή Ελεφαντοστού","en":"Côte d'Ivoire","eo":"Ebura Bordo","es":"Costa de Marfil","et":"Elevandiluurannik","eu":"Boli Kosta","fi":"Norsunluurannikko","fr":"Côte d'Ivoire","hu":"Elefántcsontpart","hy":"Կոտ դ'Իվուար","it":"Costa d'Avorio","ja":"コートジボワール","ko":"코트디부아르","lt":"Dramblio Kaulo Krantas","nl":"Ivoorkust","no":"Elfenbenskysten","pl":"Wybrzeże Kości Słoniowej","pt":"Costa do Marfim","ro":"Coasta de Fildeș","ru":"Кот-д’Ивуар","sk":"Pobrežie Slonoviny","sv":"Elfenbenskusten","th":"โกตดิวัวร์","uk":"Кот-д'Івуар","zh":"科特迪瓦","zh-tw":"象牙海岸"},
    {"id":191,"alpha2":"hr","alpha3":"hrv","ar":"كرواتيا","bg":"Хърватия","cs":"Chorvatsko","da":"Kroatien","de":"Kroatien","el":"Κροατία","en":"Croatia","eo":"Kroatio","es":"Croacia","et":"Horvaatia","eu":"Kroazia","fi":"Kroatia","fr":"Croatie","hu":"Horvátország","hy":"Խորվաթիա","it":"Croazia","ja":"クロアチア","ko":"크로아티아","lt":"Kroatija","nl":"Kroatië","no":"Kroatia","pl":"Chorwacja","pt":"Croácia","ro":"Croația","ru":"Хорватия","sk":"Chorvátsko","sv":"Kroatien","th":"โครเอเชีย","uk":"Хорватія","zh":"克罗地亚","zh-tw":"克羅埃西亞"},
    {"id":192,"alpha2":"cu","alpha3":"cub","ar":"كوبا","bg":"Куба","cs":"Kuba","da":"Cuba","de":"Kuba","el":"Κούβα","en":"Cuba","eo":"Kubo","es":"Cuba","et":"Kuuba","eu":"Kuba","fi":"Kuuba","fr":"Cuba","hu":"Kuba","hy":"Կուբա","it":"Cuba","ja":"キューバ","ko":"쿠바","lt":"Kuba","nl":"Cuba","no":"Cuba","pl":"Kuba","pt":"Cuba","ro":"Cuba","ru":"Куба","sk":"Kuba","sv":"Kuba","th":"คิวบา","uk":"Куба","zh":"古巴","zh-tw":"古巴"},
    {"id":196,"alpha2":"cy","alpha3":"cyp","ar":"قبرص","bg":"Кипър","cs":"Kypr","da":"Cypern","de":"Zypern","el":"Κύπρος","en":"Cyprus","eo":"Kipro","es":"Chipre","et":"Küpros","eu":"Zipre","fi":"Kypros","fr":"Chypre","hu":"Ciprus","hy":"Կիպրոս","it":"Cipro","ja":"キプロス","ko":"키프로스","lt":"Kipras","nl":"Cyprus","no":"Kypros","pl":"Cypr","pt":"Chipre","ro":"Cipru","ru":"Кипр","sk":"Cyprus","sv":"Cypern","th":"ไซปรัส","uk":"Кіпр","zh":"塞浦路斯","zh-tw":"賽普勒斯"},
    {"id":203,"alpha2":"cz","alpha3":"cze","ar":"جمهورية التشيك","bg":"Чехия","cs":"Česko","da":"Tjekkiet","de":"Tschechien","el":"Τσεχία","en":"Czechia","eo":"Ĉeĥio","es":"República Checa","et":"Tšehhi","eu":"Txekia","fi":"Tšekki","fr":"Tchéquie","hu":"Csehország","hy":"Չեխիա","it":"Rep. Ceca","ja":"チェコ","ko":"체코","lt":"Čekija","nl":"Tsjechië","no":"Tsjekkia","pl":"Czechy","pt":"Chéquia","ro":"Cehia","ru":"Чехия","sk":"Česko","sv":"Tjeckien","th":"เช็กเกีย","uk":"Чехія","zh":"捷克","zh-tw":"捷克"},
    {"id":208,"alpha2":"dk","alpha3":"dnk","ar":"الدنمارك","bg":"Дания","cs":"Dánsko","da":"Danmark","de":"Dänemark","el":"Δανία","en":"Denmark","eo":"Danio","es":"Dinamarca","et":"Taani","eu":"Danimarka","fi":"Tanska","fr":"Danemark","hu":"Dánia","hy":"Դանիա","it":"Danimarca","ja":"デンマーク","ko":"덴마크","lt":"Danija","nl":"Denemarken","no":"Danmark","pl":"Dania","pt":"Dinamarca","ro":"Danemarca","ru":"Дания","sk":"Dánsko","sv":"Danmark","th":"เดนมาร์ก","uk":"Данія","zh":"丹麦","zh-tw":"丹麥"},
    {"id":262,"alpha2":"dj","alpha3":"dji","ar":"جيبوتي","bg":"Джибути","cs":"Džibutsko","da":"Djibouti","de":"Dschibuti","el":"Τζιμπουτί","en":"Djibouti","eo":"Ĝibutio","es":"Yibuti","et":"Djibouti","eu":"Djibuti","fi":"Djibouti","fr":"Djibouti","hu":"Dzsibuti","hy":"Ջիբութի","it":"Gibuti","ja":"ジブチ","ko":"지부티","lt":"Džibutis","nl":"Djibouti","no":"Djibouti","pl":"Dżibuti","pt":"Djibuti","ro":"Djibouti","ru":"Джибути","sk":"Džibutsko","sv":"Djibouti","th":"จิบูตี","uk":"Джибуті","zh":"吉布提","zh-tw":"吉布地"},
    {"id":212,"alpha2":"dm","alpha3":"dma","ar":"دومينيكا","bg":"Доминика","cs":"Dominika","da":"Dominica","de":"Dominica","el":"Δομινίκα","en":"Dominica","eo":"Dominiko","es":"Dominica","et":"Dominica","eu":"Dominika","fi":"Dominica","fr":"Dominique","hu":"Dominikai Közösség","hy":"Դոմինիկա","it":"Dominica","ja":"ドミニカ国","ko":"도미니카 연방","lt":"Dominika","nl":"Dominica","no":"Dominica","pl":"Dominika","pt":"Dominica","ro":"Dominica","ru":"Доминика","sk":"Dominika","sv":"Dominica","th":"ดอมินีกา","uk":"Домініка","zh":"多米尼克","zh-tw":"多米尼克"},
    {"id":214,"alpha2":"do","alpha3":"dom","ar":"جمهورية الدومينيكان","bg":"Доминиканска република","cs":"Dominikánská republika","da":"Dominikanske Republik","de":"Dominikanische Republik","el":"Δομινικανή Δημοκρατία","en":"Dominican Republic","eo":"Dominika Respubliko","es":"República Dominicana","et":"Dominikaani Vabariik","eu":"Dominikar Errepublika","fi":"Dominikaaninen tasavalta","fr":"République dominicaine","hu":"Dominikai Köztársaság","hy":"Դոմինիկյան Հանրապետություն","it":"Rep. Dominicana","ja":"ドミニカ共和国","ko":"도미니카 공화국","lt":"Dominikos Respublika","nl":"Dominicaanse Republiek","no":"Den dominikanske republikk","pl":"Dominikana","pt":"República Dominicana","ro":"Republica Dominicană","ru":"Доминиканская Республика","sk":"Dominikánska republika","sv":"Dominikanska republiken","th":"สาธารณรัฐโดมินิกัน","uk":"Домініканська Республіка","zh":"多米尼加","zh-tw":"多明尼加"},
    {"id":218,"alpha2":"ec","alpha3":"ecu","ar":"الإكوادور","bg":"Еквадор","cs":"Ekvádor","da":"Ecuador","de":"Ecuador","el":"Ισημερινός","en":"Ecuador","eo":"Ekvadoro","es":"Ecuador","et":"Ecuador","eu":"Ekuador","fi":"Ecuador","fr":"Équateur","hu":"Ecuador","hy":"Էկվադոր","it":"Ecuador","ja":"エクアドル","ko":"에콰도르","lt":"Ekvadoras","nl":"Ecuador","no":"Ecuador","pl":"Ekwador","pt":"Equador","ro":"Ecuador","ru":"Эквадор","sk":"Ekvádor","sv":"Ecuador","th":"เอกวาดอร์","uk":"Еквадор","zh":"厄瓜多尔","zh-tw":"厄瓜多"},
    {"id":818,"alpha2":"eg","alpha3":"egy","ar":"مصر","bg":"Египет","cs":"Egypt","da":"Egypten","de":"Ägypten","el":"Αίγυπτος","en":"Egypt","eo":"Egiptio","es":"Egipto","et":"Egiptus","eu":"Egipto","fi":"Egypti","fr":"Égypte","hu":"Egyiptom","hy":"Եգիպտոս","it":"Egitto","ja":"エジプト","ko":"이집트","lt":"Egiptas","nl":"Egypte","no":"Egypt","pl":"Egipt","pt":"Egito","ro":"Egipt","ru":"Египет","sk":"Egypt","sv":"Egypten","th":"อียิปต์","uk":"Єгипет","zh":"埃及","zh-tw":"埃及"},
    {"id":222,"alpha2":"sv","alpha3":"slv","ar":"السلفادور","bg":"Салвадор","cs":"Salvador","da":"El Salvador","de":"El Salvador","el":"Ελ Σαλβαδόρ","en":"El Salvador","eo":"Salvadoro","es":"El Salvador","et":"El Salvador","eu":"El Salvador","fi":"El Salvador","fr":"Salvador","hu":"Salvador","hy":"Սալվադոր","it":"El Salvador","ja":"エルサルバドル","ko":"엘살바도르","lt":"Salvadoras","nl":"El Salvador","no":"El Salvador","pl":"Salwador","pt":"El Salvador","ro":"El Salvador","ru":"Сальвадор","sk":"Salvádor","sv":"El Salvador","th":"เอลซัลวาดอร์","uk":"Сальвадор","zh":"萨尔瓦多","zh-tw":"薩爾瓦多"},
    {"id":226,"alpha2":"gq","alpha3":"gnq","ar":"غينيا الاستوائية","bg":"Екваториална Гвинея","cs":"Rovníková Guinea","da":"Ækvatorialguinea","de":"Äquatorialguinea","el":"Ισημερινή Γουινέα","en":"Equatorial Guinea","eo":"Ekvatora Gvineo","es":"Guinea Ecuatorial","et":"Ekvatoriaal-Guinea","eu":"Ekuatore Ginea","fi":"Päiväntasaajan Guinea","fr":"Guinée équatoriale","hu":"Egyenlítői-Guinea","hy":"Հասարակածային Գվինեա","it":"Guinea Equatoriale","ja":"赤道ギニア","ko":"적도 기니","lt":"Pusiaujo Gvinėja","nl":"Equatoriaal-Guinea","no":"Ekvatorial-Guinea","pl":"Gwinea Równikowa","pt":"Guiné Equatorial","ro":"Guineea Ecuatorială","ru":"Экваториальная Гвинея","sk":"Rovníková Guinea","sv":"Ekvatorialguinea","th":"อิเควทอเรียลกินี","uk":"Екваторіальна Гвінея","zh":"赤道几内亚","zh-tw":"赤道幾內亞"},
    {"id":232,"alpha2":"er","alpha3":"eri","ar":"إريتريا","bg":"Еритрея","cs":"Eritrea","da":"Eritrea","de":"Eritrea","el":"Ερυθραία","en":"Eritrea","eo":"Eritreo","es":"Eritrea","et":"Eritrea","eu":"Eritrea","fi":"Eritrea","fr":"Érythrée","hu":"Eritrea","hy":"Էրիտրեա","it":"Eritrea","ja":"エリトリア","ko":"에리트레아","lt":"Eritrėja","nl":"Eritrea","no":"Eritrea","pl":"Erytrea","pt":"Eritreia","ro":"Eritreea","ru":"Эритрея","sk":"Eritrea","sv":"Eritrea","th":"เอริเทรีย","uk":"Еритрея","zh":"厄立特里亚","zh-tw":"厄利垂亞"},
    {"id":233,"alpha2":"ee","alpha3":"est","ar":"إستونيا","bg":"Естония","cs":"Estonsko","da":"Estland","de":"Estland","el":"Εσθονία","en":"Estonia","eo":"Estonio","es":"Estonia","et":"Eesti","eu":"Estonia","fi":"Viro","fr":"Estonie","hu":"Észtország","hy":"Էստոնիա","it":"Estonia","ja":"エストニア","ko":"에스토니아","lt":"Estija","nl":"Estland","no":"Estland","pl":"Estonia","pt":"Estónia","ro":"Estonia","ru":"Эстония","sk":"Estónsko","sv":"Estland","th":"เอสโตเนีย","uk":"Естонія","zh":"爱沙尼亚","zh-tw":"愛沙尼亞"},
    {"id":231,"alpha2":"et","alpha3":"eth","ar":"إثيوبيا","bg":"Етиопия","cs":"Etiopie","da":"Etiopien","de":"Äthiopien","el":"Αιθιοπία","en":"Ethiopia","eo":"Etiopio","es":"Etiopía","et":"Etioopia","eu":"Etiopia","fi":"Etiopia","fr":"Éthiopie","hu":"Etiópia","hy":"Եթովպիա","it":"Etiopia","ja":"エチオピア","ko":"에티오피아","lt":"Etiopija","nl":"Ethiopië","no":"Etiopia","pl":"Etiopia","pt":"Etiópia","ro":"Etiopia","ru":"Эфиопия","sk":"Etiópia","sv":"Etiopien","th":"เอธิโอเปีย","uk":"Ефіопія","zh":"埃塞俄比亚","zh-tw":"衣索比亞"},
    {"id":242,"alpha2":"fj","alpha3":"fji","ar":"فيجي","bg":"Фиджи","cs":"Fidži","da":"Fiji","de":"Fidschi","el":"Φίτζι","en":"Fiji","eo":"Fiĝio","es":"Fiyi","et":"Fidži","eu":"Fiji","fi":"Fidži","fr":"Fidji","hu":"Fidzsi","hy":"Ֆիջի","it":"Figi","ja":"フィジー","ko":"피지","lt":"Fidžis","nl":"Fiji","no":"Fiji","pl":"Fidżi","pt":"Fiji","ro":"Fiji","ru":"Фиджи","sk":"Fidži","sv":"Fiji","th":"ฟีจี","uk":"Фіджі","zh":"斐济","zh-tw":"斐濟"},
    {"id":246,"alpha2":"fi","alpha3":"fin","ar":"فنلندا","bg":"Финландия","cs":"Finsko","da":"Finland","de":"Finnland","el":"Φινλανδία","en":"Finland","eo":"Finnlando","es":"Finlandia","et":"Soome","eu":"Finlandia","fi":"Suomi","fr":"Finlande","hu":"Finnország","hy":"Ֆինլանդիա","it":"Finlandia","ja":"フィンランド","ko":"핀란드","lt":"Suomija","nl":"Finland","no":"Finland","pl":"Finlandia","pt":"Finlândia","ro":"Finlanda","ru":"Финляндия","sk":"Fínsko","sv":"Finland","th":"ฟินแลนด์","uk":"Фінляндія","zh":"芬兰","zh-tw":"芬蘭"},
    {"id":250,"alpha2":"fr","alpha3":"fra","ar":"فرنسا","bg":"Франция","cs":"Francie","da":"Frankrig","de":"Frankreich","el":"Γαλλία","en":"France","eo":"Francio","es":"Francia","et":"Prantsusmaa","eu":"Frantzia","fi":"Ranska","fr":"France","hu":"Franciaország","hy":"Ֆրանսիա","it":"Francia","ja":"フランス","ko":"프랑스","lt":"Prancūzija","nl":"Frankrijk","no":"Frankrike","pl":"Francja","pt":"França","ro":"Franța","ru":"Франция","sk":"Francúzsko","sv":"Frankrike","th":"ฝรั่งเศส","uk":"Франція","zh":"法国","zh-tw":"法國"},
    {"id":266,"alpha2":"ga","alpha3":"gab","ar":"الغابون","bg":"Габон","cs":"Gabon","da":"Gabon","de":"Gabun","el":"Γκαμπόν","en":"Gabon","eo":"Gabono","es":"Gabón","et":"Gabon","eu":"Gabon","fi":"Gabon","fr":"Gabon","hu":"Gabon","hy":"Գաբոն","it":"Gabon","ja":"ガボン","ko":"가봉","lt":"Gabonas","nl":"Gabon","no":"Gabon","pl":"Gabon","pt":"Gabão","ro":"Gabon","ru":"Габон","sk":"Gabon","sv":"Gabon","th":"กาบอง","uk":"Габон","zh":"加蓬","zh-tw":"加彭"},
    {"id":270,"alpha2":"gm","alpha3":"gmb","ar":"غامبيا","bg":"Гамбия","cs":"Gambie","da":"Gambia","de":"Gambia","el":"Γκάμπια","en":"Gambia","eo":"Gambio","es":"Gambia","et":"Gambia","eu":"Gambia","fi":"Gambia","fr":"Gambie","hu":"Gambia","hy":"Գամբիա","it":"Gambia","ja":"ガンビア","ko":"감비아","lt":"Gambija","nl":"Gambia","no":"Gambia","pl":"Gambia","pt":"Gâmbia","ro":"Gambia","ru":"Гамбия","sk":"Gambia","sv":"Gambia","th":"แกมเบีย","uk":"Гамбія","zh":"冈比亚","zh-tw":"甘比亞"},
    {"id":268,"alpha2":"ge","alpha3":"geo","ar":"جورجيا","bg":"Грузия","cs":"Gruzie","da":"Georgien","de":"Georgien","el":"Γεωργία","en":"Georgia","eo":"Kartvelio","es":"Georgia","et":"Gruusia","eu":"Georgia","fi":"Georgia","fr":"Géorgie","hu":"Grúzia","hy":"Վրաստան","it":"Georgia","ja":"ジョージア","ko":"조지아","lt":"Gruzija","nl":"Georgië","no":"Georgia","pl":"Gruzja","pt":"Geórgia","ro":"Georgia","ru":"Грузия","sk":"Gruzínsko","sv":"Georgien","th":"จอร์เจีย","uk":"Грузія","zh":"格鲁吉亚","zh-tw":"喬治亞"},
    {"id":276,"alpha2":"de","alpha3":"deu","ar":"ألمانيا","bg":"Германия","cs":"Německo","da":"Tyskland","de":"Deutschland","el":"Γερμανία","en":"Germany","eo":"Germanio","es":"Alemania","et":"Saksamaa","eu":"Alemania","fi":"Saksa","fr":"Allemagne","hu":"Németország","hy":"Գերմանիա","it":"Germania","ja":"ドイツ","ko":"독일","lt":"Vokietija","nl":"Duitsland","no":"Tyskland","pl":"Niemcy","pt":"Alemanha","ro":"Germania","ru":"Германия","sk":"Nemecko","sv":"Tyskland","th":"เยอรมนี","uk":"Німеччина","zh":"德国","zh-tw":"德國"},
    {"id":288,"alpha2":"gh","alpha3":"gha","ar":"غانا","bg":"Гана","cs":"Ghana","da":"Ghana","de":"Ghana","el":"Γκάνα","en":"Ghana","eo":"Ganao","es":"Ghana","et":"Ghana","eu":"Ghana","fi":"Ghana","fr":"Ghana","hu":"Ghána","hy":"Գանա","it":"Ghana","ja":"ガーナ","ko":"가나","lt":"Gana","nl":"Ghana","no":"Ghana","pl":"Ghana","pt":"Gana","ro":"Ghana","ru":"Гана","sk":"Ghana","sv":"Ghana","th":"กานา","uk":"Гана","zh":"加纳","zh-tw":"迦納"},
    {"id":300,"alpha2":"gr","alpha3":"grc","ar":"اليونان","bg":"Гърция","cs":"Řecko","da":"Grækenland","de":"Griechenland","el":"Ελλάδα","en":"Greece","eo":"Grekio","es":"Grecia","et":"Kreeka","eu":"Grezia","fi":"Kreikka","fr":"Grèce","hu":"Görögország","hy":"Հունաստան","it":"Grecia","ja":"ギリシャ","ko":"그리스","lt":"Graikija","nl":"Griekenland","no":"Hellas","pl":"Grecja","pt":"Grécia","ro":"Grecia","ru":"Греция","sk":"Grécko","sv":"Grekland","th":"กรีซ","uk":"Греція","zh":"希腊","zh-tw":"希臘"},
    {"id":308,"alpha2":"gd","alpha3":"grd","ar":"غرينادا","bg":"Гренада","cs":"Grenada","da":"Grenada","de":"Grenada","el":"Γρενάδα","en":"Grenada","eo":"Grenado","es":"Granada","et":"Grenada","eu":"Grenada","fi":"Grenada","fr":"Grenade","hu":"Grenada","hy":"Գրենադա","it":"Grenada","ja":"グレナダ","ko":"그레나다","lt":"Grenada","nl":"Grenada","no":"Grenada","pl":"Grenada","pt":"Granada","ro":"Grenada","ru":"Гренада","sk":"Grenada","sv":"Grenada","th":"กรีเนดา","uk":"Гренада","zh":"格林纳达","zh-tw":"格瑞那達"},
    {"id":320,"alpha2":"gt","alpha3":"gtm","ar":"غواتيمالا","bg":"Гватемала","cs":"Guatemala","da":"Guatemala","de":"Guatemala","el":"Γουατεμάλα","en":"Guatemala","eo":"Gvatemalo","es":"Guatemala","et":"Guatemala","eu":"Guatemala","fi":"Guatemala","fr":"Guatemala","hu":"Guatemala","hy":"Գվատեմալա","it":"Guatemala","ja":"グアテマラ","ko":"과테말라","lt":"Gvatemala","nl":"Guatemala","no":"Guatemala","pl":"Gwatemala","pt":"Guatemala","ro":"Guatemala","ru":"Гватемала","sk":"Guatemala","sv":"Guatemala","th":"กัวเตมาลา","uk":"Гватемала","zh":"危地马拉","zh-tw":"瓜地馬拉"},
    {"id":324,"alpha2":"gn","alpha3":"gin","ar":"غينيا","bg":"Гвинея","cs":"Guinea","da":"Guinea","de":"Guinea","el":"Γουινέα","en":"Guinea","eo":"Gvineo","es":"Guinea","et":"Guinea","eu":"Ginea","fi":"Guinea","fr":"Guinée","hu":"Guinea","hy":"Գվինեա","it":"Guinea","ja":"ギニア","ko":"기니","lt":"Gvinėja","nl":"Guinee","no":"Guinea","pl":"Gwinea","pt":"Guiné","ro":"Guineea","ru":"Гвинея","sk":"Guinea","sv":"Guinea","th":"กินี","uk":"Гвінея","zh":"几内亚","zh-tw":"幾內亞"},
    {"id":624,"alpha2":"gw","alpha3":"gnb","ar":"غينيا بيساو","bg":"Гвинея-Бисау","cs":"Guinea-Bissau","da":"Guinea-Bissau","de":"Guinea-Bissau","el":"Γουινέα-Μπισσάου","en":"Guinea-Bissau","eo":"Gvineo Bisaŭa","es":"Guinea-Bisáu","et":"Guinea-Bissau","eu":"Ginea-Bissau","fi":"Guinea-Bissau","fr":"Guinée-Bissau","hu":"Bissau-Guinea","hy":"Գվինեա-Բիսաու","it":"Guinea-Bissau","ja":"ギニアビサウ","ko":"기니비사우","lt":"Bisau Gvinėja","nl":"Guinee-Bissau","no":"Guinea-Bissau","pl":"Gwinea Bissau","pt":"Guiné-Bissau","ro":"Guineea-Bissau","ru":"Гвинея-Бисау","sk":"Guinea-Bissau","sv":"Guinea-Bissau","th":"กินี-บิสเซา","uk":"Гвінея-Бісау","zh":"几内亚比绍","zh-tw":"幾內亞比索"},
    {"id":328,"alpha2":"gy","alpha3":"guy","ar":"غيانا","bg":"Гвиана","cs":"Guyana","da":"Guyana","de":"Guyana","el":"Γουιάνα","en":"Guyana","eo":"Gujano","es":"Guyana","et":"Guyana","eu":"Guyana","fi":"Guyana","fr":"Guyana","hu":"Guyana","hy":"Գայանա","it":"Guyana","ja":"ガイアナ","ko":"가이아나","lt":"Gajana","nl":"Guyana","no":"Guyana","pl":"Gujana","pt":"Guiana","ro":"Guyana","ru":"Гайана","sk":"Guyana","sv":"Guyana","th":"กายอานา","uk":"Гаяна","zh":"圭亚那","zh-tw":"蓋亞那"},
    {"id":332,"alpha2":"ht","alpha3":"hti","ar":"هايتي","bg":"Хаити","cs":"Haiti","da":"Haiti","de":"Haiti","el":"Αϊτή","en":"Haiti","eo":"Haitio","es":"Haití","et":"Haiti","eu":"Haiti","fi":"Haiti","fr":"Haïti","hu":"Haiti","hy":"Հայիթի","it":"Haiti","ja":"ハイチ","ko":"아이티","lt":"Haitis","nl":"Haïti","no":"Haiti","pl":"Haiti","pt":"Haiti","ro":"Haiti","ru":"Гаити","sk":"Haiti","sv":"Haiti","th":"เฮติ","uk":"Гаїті","zh":"海地","zh-tw":"海地"},
    {"id":340,"alpha2":"hn","alpha3":"hnd","ar":"هندوراس","bg":"Хондурас","cs":"Honduras","da":"Honduras","de":"Honduras","el":"Ονδούρα","en":"Honduras","eo":"Honduro","es":"Honduras","et":"Honduras","eu":"Honduras","fi":"Honduras","fr":"Honduras","hu":"Honduras","hy":"Հոնդուրաս","it":"Honduras","ja":"ホンジュラス","ko":"온두라스","lt":"Hondūras","nl":"Honduras","no":"Honduras","pl":"Honduras","pt":"Honduras","ro":"Honduras","ru":"Гондурас","sk":"Honduras","sv":"Honduras","th":"ฮอนดูรัส","uk":"Гондурас","zh":"洪都拉斯","zh-tw":"宏都拉斯"},
    {"id":348,"alpha2":"hu","alpha3":"hun","ar":"المجر","bg":"Унгария","cs":"Maďarsko","da":"Ungarn","de":"Ungarn","el":"Ουγγαρία","en":"Hungary","eo":"Hungario","es":"Hungría","et":"Ungari","eu":"Hungaria","fi":"Unkari","fr":"Hongrie","hu":"Magyarország","hy":"Հունգարիա","it":"Ungheria","ja":"ハンガリー","ko":"헝가리","lt":"Vengrija","nl":"Hongarije","no":"Ungarn","pl":"Węgry","pt":"Hungria","ro":"Ungaria","ru":"Венгрия","sk":"Maďarsko","sv":"Ungern","th":"ฮังการี","uk":"Угорщина","zh":"匈牙利","zh-tw":"匈牙利"},
    {"id":352,"alpha2":"is","alpha3":"isl","ar":"آيسلندا","bg":"Исландия","cs":"Island","da":"Island","de":"Island","el":"Ισλανδία","en":"Iceland","eo":"Islando","es":"Islandia","et":"Island","eu":"Islandia","fi":"Islanti","fr":"Islande","hu":"Izland","hy":"Իսլանդիա","it":"Islanda","ja":"アイスランド","ko":"아이슬란드","lt":"Islandija","nl":"IJsland","no":"Island","pl":"Islandia","pt":"Islândia","ro":"Islanda","ru":"Исландия","sk":"Island","sv":"Island","th":"ไอซ์แลนด์","uk":"Ісландія","zh":"冰岛","zh-tw":"冰島"},
    {"id":356,"alpha2":"in","alpha3":"ind","ar":"الهند","bg":"Индия","cs":"Indie","da":"Indien","de":"Indien","el":"Ινδία","en":"India","eo":"Barato","es":"India","et":"India","eu":"India","fi":"Intia","fr":"Inde","hu":"India","hy":"Հնդկաստան","it":"India","ja":"インド","ko":"인도","lt":"Indija","nl":"India","no":"India","pl":"Indie","pt":"Índia","ro":"India","ru":"Индия","sk":"India","sv":"Indien","th":"อินเดีย","uk":"Індія","zh":"印度","zh-tw":"印度"},
    {"id":360,"alpha2":"id","alpha3":"idn","ar":"إندونيسيا","bg":"Индонезия","cs":"Indonésie","da":"Indonesien","de":"Indonesien","el":"Ινδονησία","en":"Indonesia","eo":"Indonezio","es":"Indonesia","et":"Indoneesia","eu":"Indonesia","fi":"Indonesia","fr":"Indonésie","hu":"Indonézia","hy":"Ինդոնեզիա","it":"Indonesia","ja":"インドネシア","ko":"인도네시아","lt":"Indonezija","nl":"Indonesië","no":"Indonesia","pl":"Indonezja","pt":"Indonésia","ro":"Indonezia","ru":"Индонезия","sk":"Indonézia","sv":"Indonesien","th":"อินโดนีเซีย","uk":"Індонезія","zh":"印度尼西亚","zh-tw":"印度尼西亞"},
    {"id":364,"alpha2":"ir","alpha3":"irn","ar":"إيران","bg":"Иран","cs":"Írán","da":"Iran","de":"Iran","el":"Ιράν","en":"Iran (Islamic Republic of)","eo":"Irano","es":"Irán","et":"Iraan","eu":"Iran","fi":"Iran","fr":"Iran","hu":"Irán","hy":"Իրան","it":"Iran","ja":"イラン・イスラム共和国","ko":"이란","lt":"Iranas","nl":"Iran","no":"Iran","pl":"Iran","pt":"Irã","ro":"Iran","ru":"Иран","sk":"Irán","sv":"Iran","th":"อิหร่าน","uk":"Іран","zh":"伊朗","zh-tw":"伊朗"},
    {"id":368,"alpha2":"iq","alpha3":"irq","ar":"العراق","bg":"Ирак","cs":"Irák","da":"Irak","de":"Irak","el":"Ιράκ","en":"Iraq","eo":"Irako","es":"Irak","et":"Iraak","eu":"Irak","fi":"Irak","fr":"Irak","hu":"Irak","hy":"Իրաք","it":"Iraq","ja":"イラク","ko":"이라크","lt":"Irakas","nl":"Irak","no":"Irak","pl":"Irak","pt":"Iraque","ro":"Irak","ru":"Ирак","sk":"Irak","sv":"Irak","th":"อิรัก","uk":"Ірак","zh":"伊拉克","zh-tw":"伊拉克"},
    {"id":372,"alpha2":"ie","alpha3":"irl","ar":"أيرلندا","bg":"Ирландия","cs":"Irsko","da":"Irland","de":"Irland","el":"Ιρλανδία","en":"Ireland","eo":"Irlando","es":"Irlanda","et":"Iirimaa","eu":"Irlandako Errepublika","fi":"Irlanti","fr":"Irlande","hu":"Írország","hy":"Իռլանդիա","it":"Irlanda","ja":"アイルランド","ko":"아일랜드","lt":"Airija","nl":"Ierland","no":"Irland","pl":"Irlandia","pt":"Irlanda","ro":"Republica Irlanda","ru":"Ирландия","sk":"Írsko","sv":"Irland","th":"ไอร์แลนด์","uk":"Ірландія","zh":"爱尔兰","zh-tw":"愛爾蘭"},
    {"id":376,"alpha2":"il","alpha3":"isr","ar":"إسرائيل","bg":"Израел","cs":"Izrael","da":"Israel","de":"Israel","el":"Ισραήλ","en":"Israel","eo":"Israelo","es":"Israel","et":"Iisrael","eu":"Israel","fi":"Israel","fr":"Israël","hu":"Izrael","hy":"Իսրայել","it":"Israele","ja":"イスラエル","ko":"이스라엘","lt":"Izraelis","nl":"Israël","no":"Israel","pl":"Izrael","pt":"Israel","ro":"Israel","ru":"Израиль","sk":"Izrael","sv":"Israel","th":"อิสราเอล","uk":"Ізраїль","zh":"以色列","zh-tw":"以色列"},
    {"id":380,"alpha2":"it","alpha3":"ita","ar":"إيطاليا","bg":"Италия","cs":"Itálie","da":"Italien","de":"Italien","el":"Ιταλία","en":"Italy","eo":"Italio","es":"Italia","et":"Itaalia","eu":"Italia","fi":"Italia","fr":"Italie","hu":"Olaszország","hy":"Իտալիա","it":"Italia","ja":"イタリア","ko":"이탈리아","lt":"Italija","nl":"Italië","no":"Italia","pl":"Włochy","pt":"Itália","ro":"Italia","ru":"Италия","sk":"Taliansko","sv":"Italien","th":"อิตาลี","uk":"Італія","zh":"意大利","zh-tw":"義大利"},
    {"id":388,"alpha2":"jm","alpha3":"jam","ar":"جامايكا","bg":"Ямайка","cs":"Jamajka","da":"Jamaica","de":"Jamaika","el":"Τζαμάικα","en":"Jamaica","eo":"Jamajko","es":"Jamaica","et":"Jamaica","eu":"Jamaika","fi":"Jamaika","fr":"Jamaïque","hu":"Jamaica","hy":"Ճամայկա","it":"Giamaica","ja":"ジャマイカ","ko":"자메이카","lt":"Jamaika","nl":"Jamaica","no":"Jamaica","pl":"Jamajka","pt":"Jamaica","ro":"Jamaica","ru":"Ямайка","sk":"Jamajka","sv":"Jamaica","th":"จาเมกา","uk":"Ямайка","zh":"牙买加","zh-tw":"牙買加"},
    {"id":392,"alpha2":"jp","alpha3":"jpn","ar":"اليابان","bg":"Япония","cs":"Japonsko","da":"Japan","de":"Japan","el":"Ιαπωνία","en":"Japan","eo":"Japanio","es":"Japón","et":"Jaapan","eu":"Japonia","fi":"Japani","fr":"Japon","hu":"Japán","hy":"Ճապոնիա","it":"Giappone","ja":"日本","ko":"일본","lt":"Japonija","nl":"Japan","no":"Japan","pl":"Japonia","pt":"Japão","ro":"Japonia","ru":"Япония","sk":"Japonsko","sv":"Japan","th":"ญี่ปุ่น","uk":"Японія","zh":"日本","zh-tw":"日本"},
    {"id":400,"alpha2":"jo","alpha3":"jor","ar":"الأردن","bg":"Йордания","cs":"Jordánsko","da":"Jordan","de":"Jordanien","el":"Ιορδανία","en":"Jordan","eo":"Jordanio","es":"Jordania","et":"Jordaania","eu":"Jordania","fi":"Jordania","fr":"Jordanie","hu":"Jordánia","hy":"Հորդանան","it":"Giordania","ja":"ヨルダン","ko":"요르단","lt":"Jordanija","nl":"Jordanië","no":"Jordan","pl":"Jordania","pt":"Jordânia","ro":"Iordania","ru":"Иордания","sk":"Jordánsko","sv":"Jordanien","th":"จอร์แดน","uk":"Йорданія","zh":"约旦","zh-tw":"約旦"},
    {"id":398,"alpha2":"kz","alpha3":"kaz","ar":"كازاخستان","bg":"Казахстан","cs":"Kazachstán","da":"Kasakhstan","de":"Kasachstan","el":"Καζακστάν","en":"Kazakhstan","eo":"Kazaĥio","es":"Kazajistán","et":"Kasahstan","eu":"Kazakhstan","fi":"Kazakstan","fr":"Kazakhstan","hu":"Kazahsztán","hy":"Ղազախստան","it":"Kazakistan","ja":"カザフスタン","ko":"카자흐스탄","lt":"Kazachstanas","nl":"Kazachstan","no":"Kasakhstan","pl":"Kazachstan","pt":"Cazaquistão","ro":"Kazahstan","ru":"Казахстан","sk":"Kazachstan","sv":"Kazakstan","th":"คาซัคสถาน","uk":"Казахстан","zh":"哈萨克斯坦","zh-tw":"哈薩克"},
    {"id":404,"alpha2":"ke","alpha3":"ken","ar":"كينيا","bg":"Кения","cs":"Keňa","da":"Kenya","de":"Kenia","el":"Κένυα","en":"Kenya","eo":"Kenjo","es":"Kenia","et":"Keenia","eu":"Kenya","fi":"Kenia","fr":"Kenya","hu":"Kenya","hy":"Քենիա","it":"Kenya","ja":"ケニア","ko":"케냐","lt":"Kenija","nl":"Kenia","no":"Kenya","pl":"Kenia","pt":"Quênia","ro":"Kenya","ru":"Кения","sk":"Keňa","sv":"Kenya","th":"เคนยา","uk":"Кенія","zh":"肯尼亚","zh-tw":"肯亞"},
    {"id":296,"alpha2":"ki","alpha3":"kir","ar":"كيريباتي","bg":"Кирибати","cs":"Kiribati","da":"Kiribati","de":"Kiribati","el":"Κιριμπάτι","en":"Kiribati","eo":"Kiribato","es":"Kiribati","et":"Kiribati","eu":"Kiribati","fi":"Kiribati","fr":"Kiribati","hu":"Kiribati","hy":"Կիրիբատի","it":"Kiribati","ja":"キリバス","ko":"키리바시","lt":"Kiribatis","nl":"Kiribati","no":"Kiribati","pl":"Kiribati","pt":"Quiribáti","ro":"Kiribati","ru":"Кирибати","sk":"Kiribati","sv":"Kiribati","th":"คิริบาส","uk":"Кірибаті","zh":"基里巴斯","zh-tw":"吉里巴斯"},
    {"id":408,"alpha2":"kp","alpha3":"prk","ar":"كوريا الشمالية","bg":"Северна Корея","cs":"Severní Korea","da":"Nordkorea","de":"Korea, Nord (Nordkorea)","el":"Βόρεια Κορέα","en":"Korea (Democratic People's Republic of)","eo":"Nord-Koreio","es":"Corea del Norte","et":"Põhja-Korea","eu":"Ipar Korea","fi":"Korean demokraattinen kansantasavalta","fr":"Corée du Nord","hu":"Észak-Korea (Koreai NDK)","hy":"Հյուսիսային Կորեա","it":"Corea del Nord","ja":"朝鮮民主主義人民共和国","ko":"조선민주주의인민공화국","lt":"Šiaurės Korėja","nl":"Noord-Korea","no":"Nord-Korea","pl":"Korea Północna","pt":"Coreia do Norte","ro":"Coreea de Nord","ru":"КНДР (Корейская Народно-Демократическая Республика)","sk":"Kórejská ľudovodemokratická republika","sv":"Nordkorea","th":"เกาหลีเหนือ","uk":"Північна Корея","zh":"朝鲜","zh-tw":"北韓"},
    {"id":410,"alpha2":"kr","alpha3":"kor","ar":"كوريا الجنوبية","bg":"Южна Корея","cs":"Jižní Korea","da":"Sydkorea","de":"Korea, Süd (Südkorea)","el":"Νότια Κορέα","en":"Korea, Republic of","eo":"Sud-Koreio","es":"Corea del Sur","et":"Lõuna-Korea","eu":"Hego Korea","fi":"Korean tasavalta","fr":"Corée du Sud","hu":"Dél-Korea (Koreai Köztársaság)","hy":"Հարավային Կորեա","it":"Corea del Sud","ja":"大韓民国","ko":"대한민국","lt":"Pietų Korėja","nl":"Zuid-Korea","no":"Sør-Korea","pl":"Korea Południowa","pt":"Coreia do Sul","ro":"Coreea de Sud","ru":"Республика Корея","sk":"Kórejská republika","sv":"Sydkorea","th":"เกาหลีใต้","uk":"Південна Корея","zh":"韩国","zh-tw":"南韓"},
    {"id":414,"alpha2":"kw","alpha3":"kwt","ar":"الكويت","bg":"Кувейт","cs":"Kuvajt","da":"Kuwait","de":"Kuwait","el":"Κουβέιτ","en":"Kuwait","eo":"Kuvajto","es":"Kuwait","et":"Kuveit","eu":"Kuwait","fi":"Kuwait","fr":"Koweït","hu":"Kuvait","hy":"Քուվեյթ","it":"Kuwait","ja":"クウェート","ko":"쿠웨이트","lt":"Kuveitas","nl":"Koeweit","no":"Kuwait","pl":"Kuwejt","pt":"Kuwait","ro":"Kuweit","ru":"Кувейт","sk":"Kuvajt","sv":"Kuwait","th":"คูเวต","uk":"Кувейт","zh":"科威特","zh-tw":"科威特"},
    {"id":417,"alpha2":"kg","alpha3":"kgz","ar":"قيرغيزستان","bg":"Киргизстан","cs":"Kyrgyzstán","da":"Kirgisistan","de":"Kirgisistan","el":"Κιργιζία","en":"Kyrgyzstan","eo":"Kirgizio","es":"Kirguistán","et":"Kõrgõzstan","eu":"Kirgizistan","fi":"Kirgisia","fr":"Kirghizistan","hu":"Kirgizisztán","hy":"Ղրղզստան","it":"Kirghizistan","ja":"キルギス","ko":"키르기스스탄","lt":"Kirgizija","nl":"Kirgizië","no":"Kirgisistan","pl":"Kirgistan","pt":"Quirguistão","ro":"Kârgâzstan","ru":"Киргизия","sk":"Kirgizsko","sv":"Kirgizistan","th":"คีร์กีซสถาน","uk":"Киргизстан","zh":"吉尔吉斯斯坦","zh-tw":"吉爾吉斯"},
    {"id":418,"alpha2":"la","alpha3":"lao","ar":"لاوس","bg":"Лаос","cs":"Laos","da":"Laos","de":"Laos","el":"Λάος","en":"Lao People's Democratic Republic","eo":"Laoso","es":"Laos","et":"Laos","eu":"Laos","fi":"Laos","fr":"Laos","hu":"Laosz","hy":"Լաոս","it":"Laos","ja":"ラオス人民民主共和国","ko":"라오스","lt":"Laosas","nl":"Laos","no":"Laos","pl":"Laos","pt":"Laos","ro":"Laos","ru":"Лаос","sk":"Laos","sv":"Laos","th":"ลาว","uk":"Лаос","zh":"老挝","zh-tw":"寮國"},
    {"id":428,"alpha2":"lv","alpha3":"lva","ar":"لاتفيا","bg":"Латвия","cs":"Lotyšsko","da":"Letland","de":"Lettland","el":"Λεττονία","en":"Latvia","eo":"Latvio","es":"Letonia","et":"Läti","eu":"Letonia","fi":"Latvia","fr":"Lettonie","hu":"Lettország","hy":"Լատվիա","it":"Lettonia","ja":"ラトビア","ko":"라트비아","lt":"Latvija","nl":"Letland","no":"Latvia","pl":"Łotwa","pt":"Letônia","ro":"Letonia","ru":"Латвия","sk":"Lotyšsko","sv":"Lettland","th":"ลัตเวีย","uk":"Латвія","zh":"拉脱维亚","zh-tw":"拉脫維亞"},
    {"id":422,"alpha2":"lb","alpha3":"lbn","ar":"لبنان","bg":"Ливан","cs":"Libanon","da":"Libanon","de":"Libanon","el":"Λίβανος","en":"Lebanon","eo":"Libano","es":"Líbano","et":"Liibanon","eu":"Libano","fi":"Libanon","fr":"Liban","hu":"Libanon","hy":"Լիբանան","it":"Libano","ja":"レバノン","ko":"레바논","lt":"Libanas","nl":"Libanon","no":"Libanon","pl":"Liban","pt":"Líbano","ro":"Liban","ru":"Ливан","sk":"Libanon","sv":"Libanon","th":"เลบานอน","uk":"Ліван","zh":"黎巴嫩","zh-tw":"黎巴嫩"},
    {"id":426,"alpha2":"ls","alpha3":"lso","ar":"ليسوتو","bg":"Лесото","cs":"Lesotho","da":"Lesotho","de":"Lesotho","el":"Λεσότο","en":"Lesotho","eo":"Lesoto","es":"Lesoto","et":"Lesotho","eu":"Lesotho","fi":"Lesotho","fr":"Lesotho","hu":"Lesotho","hy":"Լեսոթո","it":"Lesotho","ja":"レソト","ko":"레소토","lt":"Lesotas","nl":"Lesotho","no":"Lesotho","pl":"Lesotho","pt":"Lesoto","ro":"Lesotho","ru":"Лесото","sk":"Lesotho","sv":"Lesotho","th":"เลโซโท","uk":"Лесото","zh":"莱索托","zh-tw":"賴索托"},
    {"id":430,"alpha2":"lr","alpha3":"lbr","ar":"ليبيريا","bg":"Либерия","cs":"Libérie","da":"Liberia","de":"Liberia","el":"Λιβερία","en":"Liberia","eo":"Liberio","es":"Liberia","et":"Libeeria","eu":"Liberia","fi":"Liberia","fr":"Liberia","hu":"Libéria","hy":"Լիբերիա","it":"Liberia","ja":"リベリア","ko":"라이베리아","lt":"Liberija","nl":"Liberia","no":"Liberia","pl":"Liberia","pt":"Libéria","ro":"Liberia","ru":"Либерия","sk":"Libéria","sv":"Liberia","th":"ไลบีเรีย","uk":"Ліберія","zh":"利比里亚","zh-tw":"賴比瑞亞"},
    {"id":434,"alpha2":"ly","alpha3":"lby","ar":"ليبيا","bg":"Либия","cs":"Libye","da":"Libyen","de":"Libyen","el":"Λιβύη","en":"Libya","eo":"Libio","es":"Libia","et":"Liibüa","eu":"Libia","fi":"Libya","fr":"Libye","hu":"Líbia","hy":"Լիբիա","it":"Libia","ja":"リビア","ko":"리비아","lt":"Libija","nl":"Libië","no":"Libya","pl":"Libia","pt":"Líbia","ro":"Libia","ru":"Ливия","sk":"Líbya","sv":"Libyen","th":"ลิเบีย","uk":"Лівія","zh":"利比亚","zh-tw":"利比亞"},
    {"id":438,"alpha2":"li","alpha3":"lie","ar":"ليختنشتاين","bg":"Лихтенщайн","cs":"Lichtenštejnsko","da":"Liechtenstein","de":"Liechtenstein","el":"Λίχτενσταϊν","en":"Liechtenstein","eo":"Liĥtenŝtejno","es":"Liechtenstein","et":"Liechtenstein","eu":"Liechtenstein","fi":"Liechtenstein","fr":"Liechtenstein","hu":"Liechtenstein","hy":"Լիխտենշտայն","it":"Liechtenstein","ja":"リヒテンシュタイン","ko":"리히텐슈타인","lt":"Lichtenšteinas","nl":"Liechtenstein","no":"Liechtenstein","pl":"Liechtenstein","pt":"Listenstaine","ro":"Liechtenstein","ru":"Лихтенштейн","sk":"Lichtenštajnsko","sv":"Liechtenstein","th":"ลีชเทินชไตน์","uk":"Ліхтенштейн","zh":"列支敦士登","zh-tw":"列支敦斯登"},
    {"id":440,"alpha2":"lt","alpha3":"ltu","ar":"ليتوانيا","bg":"Литва","cs":"Litva","da":"Litauen","de":"Litauen","el":"Λιθουανία","en":"Lithuania","eo":"Litovio","es":"Lituania","et":"Leedu","eu":"Lituania","fi":"Liettua","fr":"Lituanie","hu":"Litvánia","hy":"Լիտվա","it":"Lituania","ja":"リトアニア","ko":"리투아니아","lt":"Lietuva","nl":"Litouwen","no":"Litauen","pl":"Litwa","pt":"Lituânia","ro":"Lituania","ru":"Литва","sk":"Litva","sv":"Litauen","th":"ลิทัวเนีย","uk":"Литва","zh":"立陶宛","zh-tw":"立陶宛"},
    {"id":442,"alpha2":"lu","alpha3":"lux","ar":"لوكسمبورغ","bg":"Люксембург","cs":"Lucembursko","da":"Luxembourg","de":"Luxemburg","el":"Λουξεμβούργο","en":"Luxembourg","eo":"Luksemburgo","es":"Luxemburgo","et":"Luksemburg","eu":"Luxenburgo","fi":"Luxemburg","fr":"Luxembourg","hu":"Luxemburg","hy":"Լյուքսեմբուրգ","it":"Lussemburgo","ja":"ルクセンブルク","ko":"룩셈부르크","lt":"Liuksemburgas","nl":"Luxemburg","no":"Luxembourg","pl":"Luksemburg","pt":"Luxemburgo","ro":"Luxemburg","ru":"Люксембург","sk":"Luxembursko","sv":"Luxemburg","th":"ลักเซมเบิร์ก","uk":"Люксембург","zh":"卢森堡","zh-tw":"盧森堡"},
    {"id":807,"alpha2":"mk","alpha3":"mkd","ar":"مقدونيا","bg":"Северна Македония","cs":"Severní Makedonie","da":"Nordmakedonien","de":"Nordmazedonien","el":"Βόρεια Μακεδονία","en":"North Macedonia","eo":"Nord-Makedonio","es":"Macedonia del Norte","et":"Põhja-Makedoonia","eu":"Ipar Mazedonia","fi":"Pohjois-Makedonia","fr":"Macédoine du Nord","hu":"Észak-Macedónia","hy":"Հյուսիսային Մակեդոնիա","it":"Macedonia del Nord","ja":"北マケドニア","ko":"북마케도니아","lt":"Makedonija","nl":"Noord-Macedonië","no":"Nord-Makedonia, Republikken","pl":"Macedonia Północna","pt":"Macedônia do Norte","ro":"Republica Macedonia","ru":"Северная Македония","sk":"Severné Macedónsko","sv":"Nordmakedonien","th":"นอร์ทมาซิโดเนีย","uk":"Північна Македонія","zh":"北马其顿","zh-tw":"北馬其頓"},
    {"id":450,"alpha2":"mg","alpha3":"mdg","ar":"مدغشقر","bg":"Мадагаскар","cs":"Madagaskar","da":"Madagaskar","de":"Madagaskar","el":"Μαδαγασκάρη","en":"Madagascar","eo":"Madagaskaro","es":"Madagascar","et":"Madagaskar","eu":"Madagaskar","fi":"Madagaskar","fr":"Madagascar","hu":"Madagaszkár","hy":"Մադագասկար","it":"Madagascar","ja":"マダガスカル","ko":"마다가스카르","lt":"Madagaskaras","nl":"Madagaskar","no":"Madagaskar","pl":"Madagaskar","pt":"Madagáscar","ro":"Madagascar","ru":"Мадагаскар","sk":"Madagaskar","sv":"Madagaskar","th":"มาดากัสการ์","uk":"Мадагаскар","zh":"马达加斯加","zh-tw":"馬達加斯加"},
    {"id":454,"alpha2":"mw","alpha3":"mwi","ar":"مالاوي","bg":"Малави","cs":"Malawi","da":"Malawi","de":"Malawi","el":"Μαλάουι","en":"Malawi","eo":"Malavio","es":"Malaui","et":"Malawi","eu":"Malawi","fi":"Malawi","fr":"Malawi","hu":"Malawi","hy":"Մալավի","it":"Malawi","ja":"マラウイ","ko":"말라위","lt":"Malavis","nl":"Malawi","no":"Malawi","pl":"Malawi","pt":"Maláui","ro":"Malawi","ru":"Малави","sk":"Malawi","sv":"Malawi","th":"มาลาวี","uk":"Малаві","zh":"马拉维","zh-tw":"馬拉威"},
    {"id":458,"alpha2":"my","alpha3":"mys","ar":"ماليزيا","bg":"Малайзия","cs":"Malajsie","da":"Malaysia","de":"Malaysia","el":"Μαλαισία","en":"Malaysia","eo":"Malajzio","es":"Malasia","et":"Malaisia","eu":"Malaysia","fi":"Malesia","fr":"Malaisie","hu":"Malajzia","hy":"Մալայզիա","it":"Malaysia","ja":"マレーシア","ko":"말레이시아","lt":"Malaizija","nl":"Maleisië","no":"Malaysia","pl":"Malezja","pt":"Malásia","ro":"Malaezia","ru":"Малайзия","sk":"Malajzia","sv":"Malaysia","th":"มาเลเซีย","uk":"Малайзія","zh":"马来西亚","zh-tw":"馬來西亞"},
    {"id":462,"alpha2":"mv","alpha3":"mdv","ar":"جزر المالديف","bg":"Малдиви","cs":"Maledivy","da":"Maldiverne","de":"Malediven","el":"Μαλδίβες","en":"Maldives","eo":"Maldivoj","es":"Maldivas","et":"Maldiivid","eu":"Maldivak","fi":"Malediivit","fr":"Maldives","hu":"Maldív-szigetek","hy":"Մալդիվներ","it":"Maldive","ja":"モルディブ","ko":"몰디브","lt":"Maldyvai","nl":"Malediven","no":"Maldivene","pl":"Malediwy","pt":"Maldivas","ro":"Maldive","ru":"Мальдивы","sk":"Maldivy","sv":"Maldiverna","th":"มัลดีฟส์","uk":"Мальдіви","zh":"马尔代夫","zh-tw":"馬爾地夫"},
    {"id":466,"alpha2":"ml","alpha3":"mli","ar":"مالي","bg":"Мали","cs":"Mali","da":"Mali","de":"Mali","el":"Μάλι","en":"Mali","eo":"Malio","es":"Malí","et":"Mali","eu":"Mali","fi":"Mali","fr":"Mali","hu":"Mali","hy":"Մալի","it":"Mali","ja":"マリ","ko":"말리","lt":"Malis","nl":"Mali","no":"Mali","pl":"Mali","pt":"Mali","ro":"Mali","ru":"Мали","sk":"Mali","sv":"Mali","th":"มาลี","uk":"Малі","zh":"马里","zh-tw":"馬利"},
    {"id":470,"alpha2":"mt","alpha3":"mlt","ar":"مالطا","bg":"Малта","cs":"Malta","da":"Malta","de":"Malta","el":"Μάλτα","en":"Malta","eo":"Malto","es":"Malta","et":"Malta","eu":"Malta","fi":"Malta","fr":"Malte","hu":"Málta","hy":"Մալթա","it":"Malta","ja":"マルタ","ko":"몰타","lt":"Malta","nl":"Malta","no":"Malta","pl":"Malta","pt":"Malta","ro":"Malta","ru":"Мальта","sk":"Malta","sv":"Malta","th":"มอลตา","uk":"Мальта","zh":"马耳他","zh-tw":"馬爾他"},
    {"id":584,"alpha2":"mh","alpha3":"mhl","ar":"جزر مارشال","bg":"Маршалови острови","cs":"Marshallovy ostrovy","da":"Marshalløerne","de":"Marshallinseln","el":"Νήσοι Μάρσαλ","en":"Marshall Islands","eo":"Marŝala Insularo","es":"Islas Marshall","et":"Marshalli Saared","eu":"Marshall Uharteak","fi":"Marshallinsaaret","fr":"Îles Marshall","hu":"Marshall-szigetek","hy":"Մարշալյան կղզիներ","it":"Isole Marshall","ja":"マーシャル諸島","ko":"마셜 제도","lt":"Maršalo salos","nl":"Marshalleilanden","no":"Marshalløyene","pl":"Wyspy Marshalla","pt":"Ilhas Marshall","ro":"Insulele Marshall","ru":"Маршалловы Острова","sk":"Marshallove ostrovy","sv":"Marshallöarna","th":"หมู่เกาะมาร์แชลล์","uk":"Маршаллові Острови","zh":"马绍尔群岛","zh-tw":"馬紹爾群島"},
    {"id":478,"alpha2":"mr","alpha3":"mrt","ar":"موريتانيا","bg":"Мавритания","cs":"Mauritánie","da":"Mauretanien","de":"Mauretanien","el":"Μαυριτανία","en":"Mauritania","eo":"Maŭritanio","es":"Mauritania","et":"Mauritaania","eu":"Mauritania","fi":"Mauritania","fr":"Mauritanie","hu":"Mauritánia","hy":"Մավրիտանիա","it":"Mauritania","ja":"モーリタニア","ko":"모리타니","lt":"Mauritanija","nl":"Mauritanië","no":"Mauritania","pl":"Mauretania","pt":"Mauritânia","ro":"Mauritania","ru":"Мавритания","sk":"Mauritánia","sv":"Mauretanien","th":"มอริเตเนีย","uk":"Мавританія","zh":"毛里塔尼亚","zh-tw":"茅利塔尼亞"},
    {"id":480,"alpha2":"mu","alpha3":"mus","ar":"موريشيوس","bg":"Мавриций","cs":"Mauricius","da":"Mauritius","de":"Mauritius","el":"Μαυρίκιος","en":"Mauritius","eo":"Maŭricio","es":"Mauricio","et":"Mauritius","eu":"Maurizio","fi":"Mauritius","fr":"Maurice","hu":"Mauritius","hy":"Մավրիկիոս","it":"Mauritius","ja":"モーリシャス","ko":"모리셔스","lt":"Mauricijus","nl":"Mauritius","no":"Mauritius","pl":"Mauritius","pt":"Ilhas Maurícias","ro":"Mauritius","ru":"Маврикий","sk":"Maurícius","sv":"Mauritius","th":"มอริเชียส","uk":"Маврикій","zh":"毛里求斯","zh-tw":"模里西斯"},
    {"id":484,"alpha2":"mx","alpha3":"mex","ar":"المكسيك","bg":"Мексико","cs":"Mexiko","da":"Mexico","de":"Mexiko","el":"Μεξικό","en":"Mexico","eo":"Meksiko","es":"México","et":"Mehhiko","eu":"Mexiko","fi":"Meksiko","fr":"Mexique","hu":"Mexikó","hy":"Մեքսիկա","it":"Messico","ja":"メキシコ","ko":"멕시코","lt":"Meksika","nl":"Mexico","no":"Mexico","pl":"Meksyk","pt":"México","ro":"Mexic","ru":"Мексика","sk":"Mexiko","sv":"Mexiko","th":"เม็กซิโก","uk":"Мексика","zh":"墨西哥","zh-tw":"墨西哥"},
    {"id":583,"alpha2":"fm","alpha3":"fsm","ar":"ولايات ميكرونيسيا المتحدة","bg":"Микронезия","cs":"Mikronésie","da":"Mikronesien","de":"Mikronesien","el":"Ομόσπονδες Πολιτείες της Μικρονησίας","en":"Micronesia (Federated States of)","eo":"Federacio de Mikronezio","es":"Micronesia","et":"Mikroneesia Liiduriigid","eu":"Mikronesiako Estatu Federatuak","fi":"Mikronesian liittovaltio","fr":"États fédérés de Micronésie","hu":"Mikronézia","hy":"Միկրոնեզիա","it":"Micronesia","ja":"ミクロネシア連邦","ko":"미크로네시아 연방","lt":"Mikronezija","nl":"Micronesië","no":"Mikronesiaføderasjonen","pl":"Mikronezja","pt":"Estados Federados da Micronésia","ro":"Micronezia","ru":"Микронезия","sk":"Mikronézia","sv":"Mikronesiska federationen","th":"ไมโครนีเชีย","uk":"Федеративні Штати Мікронезії","zh":"密克罗尼西亚联邦","zh-tw":"密克羅尼西亞聯邦"},
    {"id":504,"alpha2":"ma","alpha3":"mar","ar":"المغرب","bg":"Мароко","cs":"Maroko","da":"Marokko","de":"Marokko","el":"Μαρόκο","en":"Morocco","eo":"Maroko","es":"Marruecos","et":"Maroko","eu":"Maroko","fi":"Marokko","fr":"Maroc","hu":"Marokkó","hy":"Մարոկկո","it":"Marocco","ja":"モロッコ","ko":"모로코","lt":"Marokas","nl":"Marokko","no":"Marokko","pl":"Maroko","pt":"Marrocos","ro":"Maroc","ru":"Марокко","sk":"Maroko","sv":"Marocko","th":"โมร็อกโก","uk":"Марокко","zh":"摩洛哥","zh-tw":"摩洛哥"},
    {"id":498,"alpha2":"md","alpha3":"mda","ar":"مولدوفا","bg":"Молдова","cs":"Moldavsko","da":"Moldova","de":"Moldau","el":"Μολδαβία","en":"Moldova, Republic of","eo":"Moldavio","es":"Moldavia","et":"Moldova","eu":"Moldavia","fi":"Moldova","fr":"Moldavie","hu":"Moldova","hy":"Մոլդովա","it":"Moldavia","ja":"モルドバ共和国","ko":"몰도바","lt":"Moldavija","nl":"Moldavië","no":"Moldova","pl":"Mołdawia","pt":"Moldávia","ro":"Republica Moldova","ru":"Молдавия","sk":"Moldavsko","sv":"Moldavien","th":"มอลโดวา","uk":"Молдова","zh":"摩尔多瓦","zh-tw":"摩爾多瓦"},
    {"id":492,"alpha2":"mc","alpha3":"mco","ar":"موناكو","bg":"Монако","cs":"Monako","da":"Monaco","de":"Monaco","el":"Μονακό","en":"Monaco","eo":"Monako","es":"Mónaco","et":"Monaco","eu":"Monako","fi":"Monaco","fr":"Monaco","hu":"Monaco","hy":"Մոնակո","it":"Monaco","ja":"モナコ","ko":"모나코","lt":"Monakas","nl":"Monaco","no":"Monaco","pl":"Monako","pt":"Mónaco","ro":"Monaco","ru":"Монако","sk":"Monako","sv":"Monaco","th":"โมนาโก","uk":"Монако","zh":"摩纳哥","zh-tw":"摩納哥"},
    {"id":496,"alpha2":"mn","alpha3":"mng","ar":"منغوليا","bg":"Монголия","cs":"Mongolsko","da":"Mongoliet","de":"Mongolei","el":"Μογγολία","en":"Mongolia","eo":"Mongolio","es":"Mongolia","et":"Mongoolia","eu":"Mongolia","fi":"Mongolia","fr":"Mongolie","hu":"Mongólia","hy":"Մոնղոլիա","it":"Mongolia","ja":"モンゴル","ko":"몽골","lt":"Mongolija","nl":"Mongolië","no":"Mongolia","pl":"Mongolia","pt":"Mongólia","ro":"Mongolia","ru":"Монголия","sk":"Mongolsko","sv":"Mongoliet","th":"มองโกเลีย","uk":"Монголія","zh":"蒙古","zh-tw":"蒙古"},
    {"id":499,"alpha2":"me","alpha3":"mne","ar":"الجبل الأسود","bg":"Черна гора","cs":"Černá Hora","da":"Montenegro","de":"Montenegro","el":"Μαυροβούνιο","en":"Montenegro","eo":"Montenegro","es":"Montenegro","et":"Montenegro","eu":"Montenegro","fi":"Montenegro","fr":"Monténégro","hu":"Montenegró","hy":"Չեռնոգորիա","it":"Montenegro","ja":"モンテネグロ","ko":"몬테네그로","lt":"Juodkalnija","nl":"Montenegro","no":"Montenegro","pl":"Czarnogóra","pt":"Montenegro","ro":"Muntenegru","ru":"Черногория","sk":"Čierna Hora","sv":"Montenegro","th":"มอนเตเนโกร","uk":"Чорногорія","zh":"黑山","zh-tw":"蒙特內哥羅"},
    {"id":508,"alpha2":"mz","alpha3":"moz","ar":"موزمبيق","bg":"Мозамбик","cs":"Mosambik","da":"Mozambique","de":"Mosambik","el":"Μοζαμβίκη","en":"Mozambique","eo":"Mozambiko","es":"Mozambique","et":"Mosambiik","eu":"Mozambike","fi":"Mosambik","fr":"Mozambique","hu":"Mozambik","hy":"Մոզամբիկ","it":"Mozambico","ja":"モザンビーク","ko":"모잠비크","lt":"Mozambikas","nl":"Mozambique","no":"Mosambik","pl":"Mozambik","pt":"Moçambique","ro":"Mozambic","ru":"Мозамбик","sk":"Mozambik","sv":"Moçambique","th":"โมซัมบิก","uk":"Мозамбік","zh":"莫桑比克","zh-tw":"莫三比克"},
    {"id":104,"alpha2":"mm","alpha3":"mmr","ar":"ميانمار","bg":"Мианмар","cs":"Myanmar","da":"Burma","de":"Myanmar","el":"Μιανμάρ","en":"Myanmar","eo":"Birmo","es":"Birmania","et":"Birma","eu":"Myanmar","fi":"Myanmar","fr":"Birmanie","hu":"Mianmar","hy":"Մյանմա","it":"Birmania","ja":"ミャンマー","ko":"미얀마","lt":"Mianmaras","nl":"Myanmar","no":"Myanmar","pl":"Mjanma","pt":"Mianmar","ro":"Myanmar","ru":"Мьянма","sk":"Mjanmarsko","sv":"Myanmar","th":"พม่า","uk":"М'янма","zh":"缅甸","zh-tw":"緬甸"},
    {"id":516,"alpha2":"na","alpha3":"nam","ar":"ناميبيا","bg":"Намибия","cs":"Namibie","da":"Namibia","de":"Namibia","el":"Ναμίμπια","en":"Namibia","eo":"Namibio","es":"Namibia","et":"Namiibia","eu":"Namibia","fi":"Namibia","fr":"Namibie","hu":"Namíbia","hy":"Նամիբիա","it":"Namibia","ja":"ナミビア","ko":"나미비아","lt":"Namibija","nl":"Namibië","no":"Namibia","pl":"Namibia","pt":"Namíbia","ro":"Namibia","ru":"Намибия","sk":"Namíbia","sv":"Namibia","th":"นามิเบีย","uk":"Намібія","zh":"纳米比亚","zh-tw":"納米比亞"},
    {"id":520,"alpha2":"nr","alpha3":"nru","ar":"ناورو","bg":"Науру","cs":"Nauru","da":"Nauru","de":"Nauru","el":"Ναουρού","en":"Nauru","eo":"Nauro","es":"Nauru","et":"Nauru","eu":"Nauru","fi":"Nauru","fr":"Nauru","hu":"Nauru","hy":"Նաուրու","it":"Nauru","ja":"ナウル","ko":"나우루","lt":"Nauru","nl":"Nauru","no":"Nauru","pl":"Nauru","pt":"Nauru","ro":"Nauru","ru":"Науру","sk":"Nauru","sv":"Nauru","th":"นาอูรู","uk":"Науру","zh":"瑙鲁","zh-tw":"諾魯"},
    {"id":524,"alpha2":"np","alpha3":"npl","ar":"نيبال","bg":"Непал","cs":"Nepál","da":"Nepal","de":"Nepal","el":"Νεπάλ","en":"Nepal","eo":"Nepalo","es":"Nepal","et":"Nepal","eu":"Nepal","fi":"Nepal","fr":"Népal","hu":"Nepál","hy":"Նեպալ","it":"Nepal","ja":"ネパール","ko":"네팔","lt":"Nepalas","nl":"Nepal","no":"Nepal","pl":"Nepal","pt":"Nepal","ro":"Nepal","ru":"Непал","sk":"Nepál","sv":"Nepal","th":"เนปาล","uk":"Непал","zh":"尼泊尔","zh-tw":"尼泊爾"},
    {"id":528,"alpha2":"nl","alpha3":"nld","ar":"هولندا","bg":"Нидерландия","cs":"Nizozemsko","da":"Holland","de":"Niederlande","el":"Ολλανδία (Κάτω Χώρες)","en":"Netherlands","eo":"Nederlando","es":"Países Bajos","et":"Holland","eu":"Herbehereak","fi":"Alankomaat","fr":"Pays-Bas","hu":"Hollandia","hy":"Նիդերլանդներ","it":"Paesi Bassi","ja":"オランダ","ko":"네덜란드","lt":"Nyderlandai","nl":"Nederland","no":"Nederland","pl":"Holandia","pt":"Países Baixos","ro":"Țările de Jos","ru":"Нидерланды","sk":"Holandsko","sv":"Nederländerna","th":"เนเธอร์แลนด์","uk":"Нідерланди","zh":"荷兰","zh-tw":"荷蘭"},
    {"id":554,"alpha2":"nz","alpha3":"nzl","ar":"نيوزيلندا","bg":"Нова Зеландия","cs":"Nový Zéland","da":"New Zealand","de":"Neuseeland","el":"Νέα Ζηλανδία","en":"New Zealand","eo":"Nov-Zelando","es":"Nueva Zelanda","et":"Uus-Meremaa","eu":"Zeelanda Berria","fi":"Uusi-Seelanti","fr":"Nouvelle-Zélande","hu":"Új-Zéland","hy":"Նոր Զելանդիա","it":"Nuova Zelanda","ja":"ニュージーランド","ko":"뉴질랜드","lt":"Naujoji Zelandija","nl":"Nieuw-Zeeland","no":"New Zealand","pl":"Nowa Zelandia","pt":"Nova Zelândia","ro":"Noua Zeelandă","ru":"Новая Зеландия","sk":"Nový Zéland","sv":"Nya Zeeland","th":"นิวซีแลนด์","uk":"Нова Зеландія","zh":"新西兰","zh-tw":"紐西蘭"},
    {"id":558,"alpha2":"ni","alpha3":"nic","ar":"نيكاراغوا","bg":"Никарагуа","cs":"Nikaragua","da":"Nicaragua","de":"Nicaragua","el":"Νικαράγουα","en":"Nicaragua","eo":"Nikaragvo","es":"Nicaragua","et":"Nicaragua","eu":"Nikaragua","fi":"Nicaragua","fr":"Nicaragua","hu":"Nicaragua","hy":"Նիկարագուա","it":"Nicaragua","ja":"ニカラグア","ko":"니카라과","lt":"Nikaragva","nl":"Nicaragua","no":"Nicaragua","pl":"Nikaragua","pt":"Nicarágua","ro":"Nicaragua","ru":"Никарагуа","sk":"Nikaragua","sv":"Nicaragua","th":"นิการากัว","uk":"Нікарагуа","zh":"尼加拉瓜","zh-tw":"尼加拉瓜"},
    {"id":562,"alpha2":"ne","alpha3":"ner","ar":"النيجر","bg":"Нигер","cs":"Niger","da":"Niger","de":"Niger","el":"Νίγηρας","en":"Niger","eo":"Niĝero","es":"Níger","et":"Niger","eu":"Niger","fi":"Niger","fr":"Niger","hu":"Niger","hy":"Նիգեր","it":"Niger","ja":"ニジェール","ko":"니제르","lt":"Nigeris","nl":"Niger","no":"Niger","pl":"Niger","pt":"Níger","ro":"Niger","ru":"Нигер","sk":"Niger","sv":"Niger","th":"ไนเจอร์","uk":"Нігер","zh":"尼日尔","zh-tw":"尼日"},
    {"id":566,"alpha2":"ng","alpha3":"nga","ar":"نيجيريا","bg":"Нигерия","cs":"Nigérie","da":"Nigeria","de":"Nigeria","el":"Νιγηρία","en":"Nigeria","eo":"Niĝerio","es":"Nigeria","et":"Nigeeria","eu":"Nigeria","fi":"Nigeria","fr":"Nigeria","hu":"Nigéria","hy":"Նիգերիա","it":"Nigeria","ja":"ナイジェリア","ko":"나이지리아","lt":"Nigerija","nl":"Nigeria","no":"Nigeria","pl":"Nigeria","pt":"Nigéria","ro":"Nigeria","ru":"Нигерия","sk":"Nigéria","sv":"Nigeria","th":"ไนจีเรีย","uk":"Нігерія","zh":"尼日利亚","zh-tw":"奈及利亞"},
    {"id":578,"alpha2":"no","alpha3":"nor","ar":"النرويج","bg":"Норвегия","cs":"Norsko","da":"Norge","de":"Norwegen","el":"Νορβηγία","en":"Norway","eo":"Norvegio","es":"Noruega","et":"Norra","eu":"Norvegia","fi":"Norja","fr":"Norvège","hu":"Norvégia","hy":"Նորվեգիա","it":"Norvegia","ja":"ノルウェー","ko":"노르웨이","lt":"Norvegija","nl":"Noorwegen","no":"Norge","pl":"Norwegia","pt":"Noruega","ro":"Norvegia","ru":"Норвегия","sk":"Nórsko","sv":"Norge","th":"นอร์เวย์","uk":"Норвегія","zh":"挪威","zh-tw":"挪威"},
    {"id":512,"alpha2":"om","alpha3":"omn","ar":"عمان","bg":"Оман","cs":"Omán","da":"Oman","de":"Oman","el":"Ομάν","en":"Oman","eo":"Omano","es":"Omán","et":"Omaan","eu":"Oman","fi":"Oman","fr":"Oman","hu":"Omán","hy":"Օման","it":"Oman","ja":"オマーン","ko":"오만","lt":"Omanas","nl":"Oman","no":"Oman","pl":"Oman","pt":"Omã","ro":"Oman","ru":"Оман","sk":"Omán","sv":"Oman","th":"โอมาน","uk":"Оман","zh":"阿曼","zh-tw":"阿曼"},
    {"id":586,"alpha2":"pk","alpha3":"pak","ar":"باكستان","bg":"Пакистан","cs":"Pákistán","da":"Pakistan","de":"Pakistan","el":"Πακιστάν","en":"Pakistan","eo":"Pakistano","es":"Pakistán","et":"Pakistan","eu":"Pakistan","fi":"Pakistan","fr":"Pakistan","hu":"Pakisztán","hy":"Պակիստան","it":"Pakistan","ja":"パキスタン","ko":"파키스탄","lt":"Pakistanas","nl":"Pakistan","no":"Pakistan","pl":"Pakistan","pt":"Paquistão","ro":"Pakistan","ru":"Пакистан","sk":"Pakistan","sv":"Pakistan","th":"ปากีสถาน","uk":"Пакистан","zh":"巴基斯坦","zh-tw":"巴基斯坦"},
    {"id":585,"alpha2":"pw","alpha3":"plw","ar":"بالاو","bg":"Палау","cs":"Palau","da":"Palau","de":"Palau","el":"Παλάου","en":"Palau","eo":"Palaŭo","es":"Palaos","et":"Belau","eu":"Palau","fi":"Palau","fr":"Palaos","hu":"Palau","hy":"Պալաու","it":"Palau","ja":"パラオ","ko":"팔라우","lt":"Palau","nl":"Palau","no":"Palau","pl":"Palau","pt":"Palau","ro":"Palau","ru":"Палау","sk":"Palau","sv":"Palau","th":"ปาเลา","uk":"Палау","zh":"帕劳","zh-tw":"帛琉"},
    {"id":591,"alpha2":"pa","alpha3":"pan","ar":"بنما","bg":"Панама","cs":"Panama","da":"Panama","de":"Panama","el":"Παναμάς","en":"Panama","eo":"Panamo","es":"Panamá","et":"Panama","eu":"Panama","fi":"Panama","fr":"Panama","hu":"Panama","hy":"Պանամա","it":"Panama","ja":"パナマ","ko":"파나마","lt":"Panama","nl":"Panama","no":"Panama","pl":"Panama","pt":"Panamá","ro":"Panama","ru":"Панама","sk":"Panama","sv":"Panama","th":"ปานามา","uk":"Панама","zh":"巴拿马","zh-tw":"巴拿馬"},
    {"id":598,"alpha2":"pg","alpha3":"png","ar":"بابوا غينيا الجديدة","bg":"Папуа Нова Гвинея","cs":"Papua Nová Guinea","da":"Papua Ny Guinea","de":"Papua-Neuguinea","el":"Παπούα Νέα Γουινέα","en":"Papua New Guinea","eo":"Papuo-Nov-Gvineo","es":"Papúa Nueva Guinea","et":"Paapua Uus-Guinea","eu":"Papua Ginea Berria","fi":"Papua-Uusi-Guinea","fr":"Papouasie-Nouvelle-Guinée","hu":"Pápua Új-Guinea","hy":"Պապուա Նոր Գվինեա","it":"Papua Nuova Guinea","ja":"パプアニューギニア","ko":"파푸아뉴기니","lt":"Papua Naujoji Gvinėja","nl":"Papoea-Nieuw-Guinea","no":"Papua Ny-Guinea","pl":"Papua-Nowa Gwinea","pt":"Papua-Nova Guiné","ro":"Papua Noua Guinee","ru":"Папуа — Новая Гвинея","sk":"Papua-Nová Guinea","sv":"Papua Nya Guinea","th":"ปาปัวนิวกินี","uk":"Папуа Нова Гвінея","zh":"巴布亚新几内亚","zh-tw":"巴布亞紐幾內亞"},
    {"id":600,"alpha2":"py","alpha3":"pry","ar":"باراغواي","bg":"Парагвай","cs":"Paraguay","da":"Paraguay","de":"Paraguay","el":"Παραγουάη","en":"Paraguay","eo":"Paragvajo","es":"Paraguay","et":"Paraguay","eu":"Paraguai","fi":"Paraguay","fr":"Paraguay","hu":"Paraguay","hy":"Պարագվայ","it":"Paraguay","ja":"パラグアイ","ko":"파라과이","lt":"Paragvajus","nl":"Paraguay","no":"Paraguay","pl":"Paragwaj","pt":"Paraguai","ro":"Paraguay","ru":"Парагвай","sk":"Paraguaj","sv":"Paraguay","th":"ปารากวัย","uk":"Парагвай","zh":"巴拉圭","zh-tw":"巴拉圭"},
    {"id":604,"alpha2":"pe","alpha3":"per","ar":"بيرو","bg":"Перу","cs":"Peru","da":"Peru","de":"Peru","el":"Περού","en":"Peru","eo":"Peruo","es":"Perú","et":"Peruu","eu":"Peru","fi":"Peru","fr":"Pérou","hu":"Peru","hy":"Պերու","it":"Perù","ja":"ペルー","ko":"페루","lt":"Peru","nl":"Peru","no":"Peru","pl":"Peru","pt":"Peru","ro":"Peru","ru":"Перу","sk":"Peru","sv":"Peru","th":"เปรู","uk":"Перу","zh":"秘鲁","zh-tw":"秘魯"},
    {"id":608,"alpha2":"ph","alpha3":"phl","ar":"الفلبين","bg":"Филипини","cs":"Filipíny","da":"Filippinerne","de":"Philippinen","el":"Φιλιππίνες","en":"Philippines","eo":"Filipinoj","es":"Filipinas","et":"Filipiinid","eu":"Filipinak","fi":"Filippiinit","fr":"Philippines","hu":"Fülöp-szigetek","hy":"Ֆիլիպիններ","it":"Filippine","ja":"フィリピン","ko":"필리핀","lt":"Filipinai","nl":"Filipijnen","no":"Filippinene","pl":"Filipiny","pt":"Filipinas","ro":"Filipine","ru":"Филиппины","sk":"Filipíny","sv":"Filippinerna","th":"ฟิลิปปินส์","uk":"Філіппіни","zh":"菲律宾","zh-tw":"菲律賓"},
    {"id":616,"alpha2":"pl","alpha3":"pol","ar":"بولندا","bg":"Полша","cs":"Polsko","da":"Polen","de":"Polen","el":"Πολωνία","en":"Poland","eo":"Pollando","es":"Polonia","et":"Poola","eu":"Polonia","fi":"Puola","fr":"Pologne","hu":"Lengyelország","hy":"Լեհաստան","it":"Polonia","ja":"ポーランド","ko":"폴란드","lt":"Lenkija","nl":"Polen","no":"Polen","pl":"Polska","pt":"Polónia","ro":"Polonia","ru":"Польша","sk":"Poľsko","sv":"Polen","th":"โปแลนด์","uk":"Польща","zh":"波兰","zh-tw":"波蘭"},
    {"id":620,"alpha2":"pt","alpha3":"prt","ar":"البرتغال","bg":"Португалия","cs":"Portugalsko","da":"Portugal","de":"Portugal","el":"Πορτογαλία","en":"Portugal","eo":"Portugalio","es":"Portugal","et":"Portugal","eu":"Portugal","fi":"Portugali","fr":"Portugal","hu":"Portugália","hy":"Պորտուգալիա","it":"Portogallo","ja":"ポルトガル","ko":"포르투갈","lt":"Portugalija","nl":"Portugal","no":"Portugal","pl":"Portugalia","pt":"Portugal","ro":"Portugalia","ru":"Португалия","sk":"Portugalsko","sv":"Portugal","th":"โปรตุเกส","uk":"Португалія","zh":"葡萄牙","zh-tw":"葡萄牙"},
    {"id":634,"alpha2":"qa","alpha3":"qat","ar":"قطر","bg":"Катар","cs":"Katar","da":"Qatar","de":"Katar","el":"Κατάρ","en":"Qatar","eo":"Kataro","es":"Catar","et":"Katar","eu":"Qatar","fi":"Qatar","fr":"Qatar","hu":"Katar","hy":"Կատար","it":"Qatar","ja":"カタール","ko":"카타르","lt":"Kataras","nl":"Qatar","no":"Qatar","pl":"Katar","pt":"Catar","ro":"Qatar","ru":"Катар","sk":"Katar","sv":"Qatar","th":"กาตาร์","uk":"Катар","zh":"卡塔尔","zh-tw":"卡達"},
    {"id":642,"alpha2":"ro","alpha3":"rou","ar":"رومانيا","bg":"Румъния","cs":"Rumunsko","da":"Rumænien","de":"Rumänien","el":"Ρουμανία","en":"Romania","eo":"Rumanio","es":"Rumania","et":"Rumeenia","eu":"Errumania","fi":"Romania","fr":"Roumanie","hu":"Románia","hy":"Ռումինիա","it":"Romania","ja":"ルーマニア","ko":"루마니아","lt":"Rumunija","nl":"Roemenië","no":"Romania","pl":"Rumunia","pt":"Roménia","ro":"România","ru":"Румыния","sk":"Rumunsko","sv":"Rumänien","th":"โรมาเนีย","uk":"Румунія","zh":"罗马尼亚","zh-tw":"羅馬尼亞"},
    {"id":643,"alpha2":"ru","alpha3":"rus","ar":"روسيا","bg":"Русия","cs":"Rusko","da":"Rusland","de":"Russland","el":"Ρωσία","en":"Russian Federation","eo":"Rusio","es":"Rusia","et":"Venemaa","eu":"Errusia","fi":"Venäjä","fr":"Russie","hu":"Oroszország","hy":"Ռուսաստան","it":"Russia","ja":"ロシア連邦","ko":"러시아","lt":"Rusija","nl":"Rusland","no":"Russland","pl":"Rosja","pt":"Rússia","ro":"Rusia","ru":"Россия","sk":"Rusko","sv":"Ryssland","th":"รัสเซีย","uk":"Росія","zh":"俄罗斯","zh-tw":"俄羅斯"},
    {"id":646,"alpha2":"rw","alpha3":"rwa","ar":"رواندا","bg":"Руанда","cs":"Rwanda","da":"Rwanda","de":"Ruanda","el":"Ρουάντα","en":"Rwanda","eo":"Ruando","es":"Ruanda","et":"Rwanda","eu":"Ruanda","fi":"Ruanda","fr":"Rwanda","hu":"Ruanda","hy":"Ռուանդա","it":"Ruanda","ja":"ルワンダ","ko":"르완다","lt":"Ruanda","nl":"Rwanda","no":"Rwanda","pl":"Rwanda","pt":"Ruanda","ro":"Rwanda","ru":"Руанда","sk":"Rwanda","sv":"Rwanda","th":"รวันดา","uk":"Руанда","zh":"卢旺达","zh-tw":"盧安達"},
    {"id":659,"alpha2":"kn","alpha3":"kna","ar":"سانت كيتس ونيفيس","bg":"Сейнт Китс и Невис","cs":"Svatý Kryštof a Nevis","da":"Saint Kitts og Nevis","de":"St. Kitts und Nevis","el":"Άγιος Χριστόφορος και Νέβις","en":"Saint Kitts and Nevis","eo":"Sankta-Kito kaj Neviso","es":"San Cristóbal y Nieves","et":"Saint Kitts ja Nevis","eu":"Saint Kitts eta Nevis","fi":"Saint Kitts ja Nevis","fr":"Saint-Christophe-et-Niévès","hu":"Saint Kitts és Nevis","hy":"Սենտ Կիտս և Նևիս","it":"Saint Kitts e Nevis","ja":"セントクリストファー・ネイビス","ko":"세인트키츠 네비스","lt":"Sent Kitsas ir Nevis","nl":"Saint Kitts en Nevis","no":"Saint Kitts og Nevis","pl":"Saint Kitts i Nevis","pt":"São Cristóvão e Neves","ro":"Sfântul Kitts și Nevis","ru":"Сент-Китс и Невис","sk":"Svätý Krištof a Nevis","sv":"Saint Kitts och Nevis","th":"เซนต์คิตส์และเนวิส","uk":"Сент-Кіттс і Невіс","zh":"圣基茨和尼维斯","zh-tw":"聖克里斯多福及尼維斯"},
    {"id":662,"alpha2":"lc","alpha3":"lca","ar":"سانت لوسيا","bg":"Сейнт Лусия","cs":"Svatá Lucie","da":"Saint Lucia","de":"St. Lucia","el":"Αγία Λουκία","en":"Saint Lucia","eo":"Sankta Lucio","es":"Santa Lucía","et":"Saint Lucia","eu":"Santa Luzia","fi":"Saint Lucia","fr":"Sainte-Lucie","hu":"Saint Lucia","hy":"Սենթ Լյուսիա","it":"Saint Lucia","ja":"セントルシア","ko":"세인트루시아","lt":"Sent Lusija","nl":"Saint Lucia","no":"Saint Lucia","pl":"Saint Lucia","pt":"Santa Lúcia","ro":"Sfânta Lucia","ru":"Сент-Люсия","sk":"Svätá Lucia","sv":"Saint Lucia","th":"เซนต์ลูเชีย","uk":"Сент-Люсія","zh":"圣卢西亚","zh-tw":"聖露西亞"},
    {"id":670,"alpha2":"vc","alpha3":"vct","ar":"سانت فينسنت والغرينادين","bg":"Сейнт Винсент и Гренадини","cs":"Svatý Vincenc a Grenadiny","da":"Saint Vincent og Grenadinerne","de":"St. Vincent und die Grenadinen","el":"Άγιος Βικέντιος και Γρεναδίνες","en":"Saint Vincent and the Grenadines","eo":"Sankta Vincento kaj la Grenadinoj","es":"San Vicente y las Granadinas","et":"Saint Vincent ja Grenadiinid","eu":"Saint Vincent eta Grenadinak","fi":"Saint Vincent ja Grenadiinit","fr":"Saint-Vincent-et-les-Grenadines","hu":"Saint Vincent és a Grenadine-szigetek","hy":"Սենտ Վինսենտ և Գրենադիներ","it":"Saint Vincent e Grenadine","ja":"セントビンセントおよびグレナディーン諸島","ko":"세인트빈센트 그레나딘","lt":"Sent Vinsentas ir Grenadinai","nl":"Saint Vincent en de Grenadines","no":"Saint Vincent og Grenadinene","pl":"Saint Vincent i Grenadyny","pt":"São Vicente e Granadinas","ro":"Sfântul Vincent și Grenadine","ru":"Сент-Винсент и Гренадины","sk":"Svätý Vincent a Grenadíny","sv":"Saint Vincent och Grenadinerna","th":"เซนต์วินเซนต์และเกรนาดีนส์","uk":"Сент-Вінсент і Гренадини","zh":"圣文森特和格林纳丁斯","zh-tw":"聖文森及格瑞那丁"},
    {"id":882,"alpha2":"ws","alpha3":"wsm","ar":"ساموا","bg":"Самоа","cs":"Samoa","da":"Samoa","de":"Samoa","el":"Σαμόα","en":"Samoa","eo":"Samoo","es":"Samoa","et":"Samoa","eu":"Samoa","fi":"Samoa","fr":"Samoa","hu":"Szamoa","hy":"Սամոա","it":"Samoa","ja":"サモア","ko":"사모아","lt":"Samoa","nl":"Samoa","no":"Samoa","pl":"Samoa","pt":"Samoa","ro":"Samoa","ru":"Самоа","sk":"Samoa","sv":"Samoa","th":"ซามัว","uk":"Самоа","zh":"萨摩亚","zh-tw":"薩摩亞"},
    {"id":674,"alpha2":"sm","alpha3":"smr","ar":"سان مارينو","bg":"Сан Марино","cs":"San Marino","da":"San Marino","de":"San Marino","el":"Άγιος Μαρίνος","en":"San Marino","eo":"San-Marino","es":"San Marino","et":"San Marino","eu":"San Marino","fi":"San Marino","fr":"Saint-Marin","hu":"San Marino","hy":"Սան Մարինո","it":"San Marino","ja":"サンマリノ","ko":"산마리노","lt":"San Marinas","nl":"San Marino","no":"San Marino","pl":"San Marino","pt":"San Marino","ro":"San Marino","ru":"Сан-Марино","sk":"San Maríno","sv":"San Marino","th":"ซานมารีโน","uk":"Сан-Марино","zh":"圣马力诺","zh-tw":"聖馬利諾"},
    {"id":678,"alpha2":"st","alpha3":"stp","ar":"ساو تومي وبرينسيب","bg":"Сао Томе и Принсипи","cs":"Svatý Tomáš a Princův ostrov","da":"São Tomé og Príncipe","de":"São Tomé und Príncipe","el":"Σάο Τομέ και Πρίνσιπε","en":"Sao Tome and Principe","eo":"Santomeo kaj Principeo","es":"Santo Tomé y Príncipe","et":"São Tomé ja Príncipe","eu":"Sao Tome eta Principe","fi":"São Tomé ja Príncipe","fr":"Sao Tomé-et-Principe","hu":"São Tomé és Príncipe","hy":"Սան Տոմե և Պրինսիպի","it":"São Tomé e Príncipe","ja":"サントメ・プリンシペ","ko":"상투메 프린시페","lt":"San Tomė ir Prinsipė","nl":"Sao Tomé en Principe","no":"São Tomé og Príncipe","pl":"Wyspy Świętego Tomasza i Książęca","pt":"São Tomé e Príncipe","ro":"Sao Tome și Principe","ru":"Сан-Томе и Принсипи","sk":"Svätý Tomáš a Princov ostrov","sv":"São Tomé och Príncipe","th":"เซาตูแมอีปริงซีป","uk":"Сан-Томе і Принсіпі","zh":"圣多美和普林西比","zh-tw":"聖多美普林西比"},
    {"id":682,"alpha2":"sa","alpha3":"sau","ar":"السعودية","bg":"Саудитска Арабия","cs":"Saúdská Arábie","da":"Saudi-Arabien","de":"Saudi-Arabien","el":"Σαουδική Αραβία","en":"Saudi Arabia","eo":"Sauda Arabio","es":"Arabia Saudita","et":"Saudi Araabia","eu":"Saudi Arabia","fi":"Saudi-Arabia","fr":"Arabie saoudite","hu":"Szaúd-Arábia","hy":"Սաուդյան Արաբիա","it":"Arabia Saudita","ja":"サウジアラビア","ko":"사우디아라비아","lt":"Saudo Arabija","nl":"Saoedi-Arabië","no":"Saudi-Arabia","pl":"Arabia Saudyjska","pt":"Arábia Saudita","ro":"Arabia Saudită","ru":"Саудовская Аравия","sk":"Saudská Arábia","sv":"Saudiarabien","th":"ซาอุดีอาระเบีย","uk":"Саудівська Аравія","zh":"沙特阿拉伯","zh-tw":"沙烏地阿拉伯"},
    {"id":686,"alpha2":"sn","alpha3":"sen","ar":"السنغال","bg":"Сенегал","cs":"Senegal","da":"Senegal","de":"Senegal","el":"Σενεγάλη","en":"Senegal","eo":"Senegalo","es":"Senegal","et":"Senegal","eu":"Senegal","fi":"Senegal","fr":"Sénégal","hu":"Szenegál","hy":"Սենեգալ","it":"Senegal","ja":"セネガル","ko":"세네갈","lt":"Senegalas","nl":"Senegal","no":"Senegal","pl":"Senegal","pt":"Senegal","ro":"Senegal","ru":"Сенегал","sk":"Senegal","sv":"Senegal","th":"เซเนกัล","uk":"Сенегал","zh":"塞内加尔","zh-tw":"塞內加爾"},
    {"id":688,"alpha2":"rs","alpha3":"srb","ar":"صربيا","bg":"Сърбия","cs":"Srbsko","da":"Serbien","de":"Serbien","el":"Σερβία","en":"Serbia","eo":"Serbio","es":"Serbia","et":"Serbia","eu":"Serbia","fi":"Serbia","fr":"Serbie","hu":"Szerbia","hy":"Սերբիա","it":"Serbia","ja":"セルビア","ko":"세르비아","lt":"Serbija","nl":"Servië","no":"Serbia","pl":"Serbia","pt":"Sérvia","ro":"Serbia","ru":"Сербия","sk":"Srbsko","sv":"Serbien","th":"เซอร์เบีย","uk":"Сербія","zh":"塞尔维亚","zh-tw":"塞爾維亞"},
    {"id":690,"alpha2":"sc","alpha3":"syc","ar":"سيشل","bg":"Сейшелски острови","cs":"Seychely","da":"Seychellerne","de":"Seychellen","el":"Σεϋχέλλες","en":"Seychelles","eo":"Sejŝeloj","es":"Seychelles","et":"Seišellid","eu":"Seychelleak","fi":"Seychellit","fr":"Seychelles","hu":"Seychelle-szigetek","hy":"Սեյշելներ","it":"Seychelles","ja":"セーシェル","ko":"세이셸","lt":"Seišeliai","nl":"Seychellen","no":"Seychellene","pl":"Seszele","pt":"Seicheles","ro":"Seychelles","ru":"Сейшельские Острова","sk":"Seychely","sv":"Seychellerna","th":"เซเชลส์","uk":"Сейшельські Острови","zh":"塞舌尔","zh-tw":"塞席爾"},
    {"id":694,"alpha2":"sl","alpha3":"sle","ar":"سيراليون","bg":"Сиера Леоне","cs":"Sierra Leone","da":"Sierra Leone","de":"Sierra Leone","el":"Σιέρα Λεόνε","en":"Sierra Leone","eo":"Sieraleono","es":"Sierra Leona","et":"Sierra Leone","eu":"Sierra Leona","fi":"Sierra Leone","fr":"Sierra Leone","hu":"Sierra Leone","hy":"Սիեռա Լեոնե","it":"Sierra Leone","ja":"シエラレオネ","ko":"시에라리온","lt":"Siera Leonė","nl":"Sierra Leone","no":"Sierra Leone","pl":"Sierra Leone","pt":"Serra Leoa","ro":"Sierra Leone","ru":"Сьерра-Леоне","sk":"Sierra Leone","sv":"Sierra Leone","th":"เซียร์ราลีโอน","uk":"Сьєрра-Леоне","zh":"塞拉利昂","zh-tw":"獅子山"},
    {"id":702,"alpha2":"sg","alpha3":"sgp","ar":"سنغافورة","bg":"Сингапур","cs":"Singapur","da":"Singapore","de":"Singapur","el":"Σιγκαπούρη","en":"Singapore","eo":"Singapuro","es":"Singapur","et":"Singapur","eu":"Singapur","fi":"Singapore","fr":"Singapour","hu":"Szingapúr","hy":"Սինգապուր","it":"Singapore","ja":"シンガポール","ko":"싱가포르","lt":"Singapūras","nl":"Singapore","no":"Singapore","pl":"Singapur","pt":"Singapura","ro":"Singapore","ru":"Сингапур","sk":"Singapur","sv":"Singapore","th":"สิงคโปร์","uk":"Сінгапур","zh":"新加坡","zh-tw":"新加坡"},
    {"id":703,"alpha2":"sk","alpha3":"svk","ar":"سلوفاكيا","bg":"Словакия","cs":"Slovensko","da":"Slovakiet","de":"Slowakei","el":"Σλοβακία","en":"Slovakia","eo":"Slovakio","es":"Eslovaquia","et":"Slovakkia","eu":"Eslovakia","fi":"Slovakia","fr":"Slovaquie","hu":"Szlovákia","hy":"Սլովակիա","it":"Slovacchia","ja":"スロバキア","ko":"슬로바키아","lt":"Slovakija","nl":"Slowakije","no":"Slovakia","pl":"Słowacja","pt":"Eslováquia","ro":"Slovacia","ru":"Словакия","sk":"Slovensko","sv":"Slovakien","th":"สโลวาเกีย","uk":"Словаччина","zh":"斯洛伐克","zh-tw":"斯洛伐克"},
    {"id":705,"alpha2":"si","alpha3":"svn","ar":"سلوفينيا","bg":"Словения","cs":"Slovinsko","da":"Slovenien","de":"Slowenien","el":"Σλοβενία","en":"Slovenia","eo":"Slovenio","es":"Eslovenia","et":"Sloveenia","eu":"Eslovenia","fi":"Slovenia","fr":"Slovénie","hu":"Szlovénia","hy":"Սլովենիա","it":"Slovenia","ja":"スロベニア","ko":"슬로베니아","lt":"Slovėnija","nl":"Slovenië","no":"Slovenia","pl":"Słowenia","pt":"Eslovênia","ro":"Slovenia","ru":"Словения","sk":"Slovinsko","sv":"Slovenien","th":"สโลวีเนีย","uk":"Словенія","zh":"斯洛文尼亚","zh-tw":"斯洛維尼亞"},
    {"id":90,"alpha2":"sb","alpha3":"slb","ar":"جزر سليمان","bg":"Соломонови острови","cs":"Šalomounovy ostrovy","da":"Salomonøerne","de":"Salomonen","el":"Νήσοι Σολομώντα","en":"Solomon Islands","eo":"Salomonoj","es":"Islas Salomón","et":"Saalomoni Saared","eu":"Salomon Uharteak","fi":"Salomonsaaret","fr":"Îles Salomon","hu":"Salamon-szigetek","hy":"Սողոմոնյան Կղզիներ","it":"Isole Salomone","ja":"ソロモン諸島","ko":"솔로몬 제도","lt":"Saliamono Salos","nl":"Salomonseilanden","no":"Salomonøyene","pl":"Wyspy Salomona","pt":"Ilhas Salomão","ro":"Insulele Solomon","ru":"Соломоновы Острова","sk":"Šalamúnove ostrovy","sv":"Salomonöarna","th":"หมู่เกาะโซโลมอน","uk":"Соломонові Острови","zh":"所罗门群岛","zh-tw":"索羅門群島"},
    {"id":706,"alpha2":"so","alpha3":"som","ar":"الصومال","bg":"Сомалия","cs":"Somálsko","da":"Somalia","de":"Somalia","el":"Σομαλία","en":"Somalia","eo":"Somalio","es":"Somalia","et":"Somaalia","eu":"Somalia","fi":"Somalia","fr":"Somalie","hu":"Szomália","hy":"Սոմալի","it":"Somalia","ja":"ソマリア","ko":"소말리아","lt":"Somalis","nl":"Somalië","no":"Somalia","pl":"Somalia","pt":"Somália","ro":"Somalia","ru":"Сомали","sk":"Somálsko","sv":"Somalia","th":"โซมาเลีย","uk":"Сомалі","zh":"索马里","zh-tw":"索馬利亞"},
    {"id":710,"alpha2":"za","alpha3":"zaf","ar":"جنوب أفريقيا","bg":"ЮАР","cs":"Jihoafrická republika","da":"Sydafrika","de":"Südafrika","el":"Νότια Αφρική","en":"South Africa","eo":"Sud-Afriko","es":"Sudáfrica","et":"Lõuna-Aafrika Vabariik","eu":"Hegoafrika","fi":"Etelä-Afrikka","fr":"Afrique du Sud","hu":"Dél-afrikai Köztársaság","hy":"Հարավաֆրիկյան Հանրապետություն","it":"Sudafrica","ja":"南アフリカ","ko":"남아프리카 공화국","lt":"PAR","nl":"Zuid-Afrika","no":"Sør-Afrika","pl":"Południowa Afryka","pt":"África do Sul","ro":"Africa de Sud","ru":"ЮАР","sk":"Južná Afrika","sv":"Sydafrika","th":"แอฟริกาใต้","uk":"ПАР","zh":"南非","zh-tw":"南非"},
    {"id":728,"alpha2":"ss","alpha3":"ssd","ar":"جنوب السودان","bg":"Южен Судан","cs":"Jižní Súdán","da":"Sydsudan","de":"Südsudan","el":"Νότιο Σουδάν","en":"South Sudan","eo":"Sud-Sudano","es":"Sudán del Sur","et":"Lõuna-Sudaan","eu":"Hego Sudan","fi":"Etelä-Sudan","fr":"Soudan du Sud","hu":"Dél-Szudán","hy":"Հարավային Սուդան","it":"Sudan del Sud","ja":"南スーダン","ko":"남수단","lt":"Pietų Sudanas","nl":"Zuid-Soedan","no":"Sør-Sudan","pl":"Sudan Południowy","pt":"Sudão do Sul","ro":"Sudanul de Sud","ru":"Южный Судан","sk":"Južný Sudán","sv":"Sydsudan","th":"ซูดานใต้","uk":"Південний Судан","zh":"南苏丹","zh-tw":"南蘇丹"},
    {"id":724,"alpha2":"es","alpha3":"esp","ar":"إسبانيا","bg":"Испания","cs":"Španělsko","da":"Spanien","de":"Spanien","el":"Ισπανία","en":"Spain","eo":"Hispanio","es":"España","et":"Hispaania","eu":"Espainia","fi":"Espanja","fr":"Espagne","hu":"Spanyolország","hy":"Իսպանիա","it":"Spagna","ja":"スペイン","ko":"스페인","lt":"Ispanija","nl":"Spanje","no":"Spania","pl":"Hiszpania","pt":"Espanha","ro":"Spania","ru":"Испания","sk":"Španielsko","sv":"Spanien","th":"สเปน","uk":"Іспанія","zh":"西班牙","zh-tw":"西班牙"},
    {"id":144,"alpha2":"lk","alpha3":"lka","ar":"سريلانكا","bg":"Шри Ланка","cs":"Srí Lanka","da":"Sri Lanka","de":"Sri Lanka","el":"Σρι Λάνκα","en":"Sri Lanka","eo":"Srilanko","es":"Sri Lanka","et":"Sri Lanka","eu":"Sri Lanka","fi":"Sri Lanka","fr":"Sri Lanka","hu":"Srí Lanka","hy":"Շրի Լանկա","it":"Sri Lanka","ja":"スリランカ","ko":"스리랑카","lt":"Šri Lanka","nl":"Sri Lanka","no":"Sri Lanka","pl":"Sri Lanka","pt":"Seri Lanca","ro":"Sri Lanka","ru":"Шри-Ланка","sk":"Srí Lanka","sv":"Sri Lanka","th":"ศรีลังกา","uk":"Шрі-Ланка","zh":"斯里兰卡","zh-tw":"斯里蘭卡"},
    {"id":729,"alpha2":"sd","alpha3":"sdn","ar":"السودان","bg":"Судан","cs":"Súdán","da":"Sudan","de":"Sudan","el":"Σουδάν","en":"Sudan","eo":"Sudano","es":"Sudán","et":"Sudaan","eu":"Sudan","fi":"Sudan","fr":"Soudan","hu":"Szudán","hy":"Սուդան","it":"Sudan","ja":"スーダン","ko":"수단","lt":"Sudanas","nl":"Soedan","no":"Sudan","pl":"Sudan","pt":"Sudão","ro":"Sudan","ru":"Судан","sk":"Sudán","sv":"Sudan","th":"ซูดาน","uk":"Судан","zh":"苏丹","zh-tw":"蘇丹"},
    {"id":740,"alpha2":"sr","alpha3":"sur","ar":"سورينام","bg":"Суринам","cs":"Surinam","da":"Surinam","de":"Suriname","el":"Σουρινάμ","en":"Suriname","eo":"Surinamo","es":"Surinam","et":"Suriname","eu":"Surinam","fi":"Suriname","fr":"Suriname","hu":"Suriname","hy":"Սուրինամ","it":"Suriname","ja":"スリナム","ko":"수리남","lt":"Surinamas","nl":"Suriname","no":"Surinam","pl":"Surinam","pt":"Suriname","ro":"Surinam","ru":"Суринам","sk":"Surinam","sv":"Surinam","th":"ซูรินาม","uk":"Суринам","zh":"苏里南","zh-tw":"蘇利南"},
    {"id":748,"alpha2":"sz","alpha3":"swz","ar":"إسواتيني","bg":"Есватини","cs":"Svazijsko","da":"Swaziland","de":"Eswatini","el":"Εσουατίνι","en":"Eswatini","eo":"Svazilando","es":"Suazilandia","et":"Svaasimaa","eu":"Eswatini","fi":"Swazimaa","fr":"Eswatini","hu":"Szváziföld","hy":"Էսվատինի","it":"eSwatini","ja":"エスワティニ","ko":"에스와티니","lt":"Svazilendas","nl":"Swaziland","no":"Eswatini","pl":"Eswatini","pt":"Essuatíni","ro":"Eswatini","ru":"Эсватини","sk":"Svazijsko","sv":"Swaziland","th":"เอสวาตีนี","uk":"Есватіні","zh":"斯威士兰","zh-tw":"史瓦帝尼"},
    {"id":752,"alpha2":"se","alpha3":"swe","ar":"السويد","bg":"Швеция","cs":"Švédsko","da":"Sverige","de":"Schweden","el":"Σουηδία","en":"Sweden","eo":"Svedio","es":"Suecia","et":"Rootsi","eu":"Suedia","fi":"Ruotsi","fr":"Suède","hu":"Svédország","hy":"Շվեդիա","it":"Svezia","ja":"スウェーデン","ko":"스웨덴","lt":"Švedija","nl":"Zweden","no":"Sverige","pl":"Szwecja","pt":"Suécia","ro":"Suedia","ru":"Швеция","sk":"Švédsko","sv":"Sverige","th":"สวีเดน","uk":"Швеція","zh":"瑞典","zh-tw":"瑞典"},
    {"id":756,"alpha2":"ch","alpha3":"che","ar":"سويسرا","bg":"Швейцария","cs":"Švýcarsko","da":"Schweiz","de":"Schweiz","el":"Ελβετία","en":"Switzerland","eo":"Svislando","es":"Suiza","et":"Šveits","eu":"Suitza","fi":"Sveitsi","fr":"Suisse","hu":"Svájc","hy":"Շվեյցարիա","it":"Svizzera","ja":"スイス","ko":"스위스","lt":"Šveicarija","nl":"Zwitserland","no":"Sveits","pl":"Szwajcaria","pt":"Suíça","ro":"Elveția","ru":"Швейцария","sk":"Švajčiarsko","sv":"Schweiz","th":"สวิตเซอร์แลนด์","uk":"Швейцарія","zh":"瑞士","zh-tw":"瑞士"},
    {"id":760,"alpha2":"sy","alpha3":"syr","ar":"سوريا","bg":"Сирия","cs":"Sýrie","da":"Syrien","de":"Syrien","el":"Συρία","en":"Syrian Arab Republic","eo":"Sirio","es":"Siria","et":"Süüria","eu":"Siria","fi":"Syyria","fr":"Syrie","hu":"Szíria","hy":"Սիրիա","it":"Siria","ja":"シリア・アラブ共和国","ko":"시리아","lt":"Sirija","nl":"Syrië","no":"Syria","pl":"Syria","pt":"Síria","ro":"Siria","ru":"Сирия","sk":"Sýria","sv":"Syrien","th":"ซีเรีย","uk":"Сирія","zh":"叙利亚","zh-tw":"敘利亞"},
    {"id":762,"alpha2":"tj","alpha3":"tjk","ar":"طاجيكستان","bg":"Таджикистан","cs":"Tádžikistán","da":"Tadsjikistan","de":"Tadschikistan","el":"Τατζικιστάν","en":"Tajikistan","eo":"Taĝikio","es":"Tayikistán","et":"Tadžikistan","eu":"Tajikistan","fi":"Tadžikistan","fr":"Tadjikistan","hu":"Tádzsikisztán","hy":"Տաջիկստան","it":"Tagikistan","ja":"タジキスタン","ko":"타지키스탄","lt":"Tadžikija","nl":"Tadzjikistan","no":"Tadsjikistan","pl":"Tadżykistan","pt":"Tajiquistão","ro":"Tadjikistan","ru":"Таджикистан","sk":"Tadžikistan","sv":"Tadzjikistan","th":"ทาจิกิสถาน","uk":"Таджикистан","zh":"塔吉克斯坦","zh-tw":"塔吉克"},
    {"id":834,"alpha2":"tz","alpha3":"tza","ar":"تنزانيا","bg":"Танзания","cs":"Tanzanie","da":"Tanzania","de":"Tansania","el":"Τανζανία","en":"Tanzania, United Republic of","eo":"Tanzanio","es":"Tanzania","et":"Tansaania","eu":"Tanzania","fi":"Tansania","fr":"Tanzanie","hu":"Tanzánia","hy":"Տանզանիա","it":"Tanzania","ja":"タンザニア","ko":"탄자니아","lt":"Tanzanija","nl":"Tanzania","no":"Tanzania","pl":"Tanzania","pt":"Tanzânia","ro":"Tanzania","ru":"Танзания","sk":"Tanzánia","sv":"Tanzania","th":"แทนซาเนีย","uk":"Танзанія","zh":"坦桑尼亚","zh-tw":"坦尚尼亞"},
    {"id":764,"alpha2":"th","alpha3":"tha","ar":"تايلاند","bg":"Тайланд","cs":"Thajsko","da":"Thailand","de":"Thailand","el":"Ταϊλάνδη","en":"Thailand","eo":"Tajlando","es":"Tailandia","et":"Tai","eu":"Thailandia","fi":"Thaimaa","fr":"Thaïlande","hu":"Thaiföld","hy":"Թաիլանդ","it":"Thailandia","ja":"タイ","ko":"태국","lt":"Tailandas","nl":"Thailand","no":"Thailand","pl":"Tajlandia","pt":"Tailândia","ro":"Thailanda","ru":"Таиланд","sk":"Thajsko","sv":"Thailand","th":"ไทย","uk":"Таїланд","zh":"泰国","zh-tw":"泰國"},
    {"id":626,"alpha2":"tl","alpha3":"tls","ar":"تيمور الشرقية","bg":"Източен Тимор","cs":"Východní Timor","da":"Østtimor","de":"Osttimor","el":"Ανατολικό Τιμόρ","en":"Timor-Leste","eo":"Orienta Timoro","es":"Timor Oriental","et":"Ida-Timor","eu":"Ekialdeko Timor","fi":"Itä-Timor","fr":"Timor oriental","hu":"Kelet-Timor","hy":"Արևելյան Թիմոր","it":"Timor Est","ja":"東ティモール","ko":"동티모르","lt":"Rytų Timoras","nl":"Oost-Timor","no":"Øst-Timor","pl":"Timor Wschodni","pt":"Timor-Leste","ro":"Timorul de Est","ru":"Восточный Тимор","sk":"Východný Timor","sv":"Östtimor","th":"ติมอร์-เลสเต","uk":"Східний Тимор","zh":"东帝汶","zh-tw":"東帝汶"},
    {"id":768,"alpha2":"tg","alpha3":"tgo","ar":"توغو","bg":"Того","cs":"Togo","da":"Togo","de":"Togo","el":"Τόγκο","en":"Togo","eo":"Togolando","es":"Togo","et":"Togo","eu":"Togo","fi":"Togo","fr":"Togo","hu":"Togo","hy":"Տոգո","it":"Togo","ja":"トーゴ","ko":"토고","lt":"Togas","nl":"Togo","no":"Togo","pl":"Togo","pt":"Togo","ro":"Togo","ru":"Того","sk":"Togo","sv":"Togo","th":"โตโก","uk":"Того","zh":"多哥","zh-tw":"多哥"},
    {"id":776,"alpha2":"to","alpha3":"ton","ar":"تونغا","bg":"Тонга","cs":"Tonga","da":"Tonga","de":"Tonga","el":"Τόγκα","en":"Tonga","eo":"Tongo","es":"Tonga","et":"Tonga","eu":"Tonga","fi":"Tonga","fr":"Tonga","hu":"Tonga","hy":"Տոնգա","it":"Tonga","ja":"トンガ","ko":"통가","lt":"Tonga","nl":"Tonga","no":"Tonga","pl":"Tonga","pt":"Tonga","ro":"Tonga","ru":"Тонга","sk":"Tonga","sv":"Tonga","th":"ตองงา","uk":"Тонга","zh":"汤加","zh-tw":"東加"},
    {"id":780,"alpha2":"tt","alpha3":"tto","ar":"ترينيداد وتوباغو","bg":"Тринидад и Тобаго","cs":"Trinidad a Tobago","da":"Trinidad og Tobago","de":"Trinidad und Tobago","el":"Τρινιντάντ και Τομπάγκο","en":"Trinidad and Tobago","eo":"Trinidado kaj Tobago","es":"Trinidad y Tobago","et":"Trinidad ja Tobago","eu":"Trinidad eta Tobago","fi":"Trinidad ja Tobago","fr":"Trinité-et-Tobago","hu":"Trinidad és Tobago","hy":"Տրինիդադ և Տոբագո","it":"Trinidad e Tobago","ja":"トリニダード・トバゴ","ko":"트리니다드 토바고","lt":"Trinidadas ir Tobagas","nl":"Trinidad en Tobago","no":"Trinidad og Tobago","pl":"Trynidad i Tobago","pt":"Trinidad e Tobago","ro":"Trinidad și Tobago","ru":"Тринидад и Тобаго","sk":"Trinidad a Tobago","sv":"Trinidad och Tobago","th":"ตรินิแดดและโตเบโก","uk":"Тринідад і Тобаго","zh":"特立尼达和多巴哥","zh-tw":"千里達及托巴哥"},
    {"id":788,"alpha2":"tn","alpha3":"tun","ar":"تونس","bg":"Тунис","cs":"Tunisko","da":"Tunesien","de":"Tunesien","el":"Τυνησία","en":"Tunisia","eo":"Tunizio","es":"Túnez","et":"Tuneesia","eu":"Tunisia","fi":"Tunisia","fr":"Tunisie","hu":"Tunézia","hy":"Թունիս","it":"Tunisia","ja":"チュニジア","ko":"튀니지","lt":"Tunisas","nl":"Tunesië","no":"Tunisia","pl":"Tunezja","pt":"Tunísia","ro":"Tunisia","ru":"Тунис","sk":"Tunisko","sv":"Tunisien","th":"ตูนิเซีย","uk":"Туніс","zh":"突尼斯","zh-tw":"突尼西亞"},
    {"id":792,"alpha2":"tr","alpha3":"tur","ar":"تركيا","bg":"Турция","cs":"Turecko","da":"Tyrkiet","de":"Türkei","el":"Τουρκία","en":"Türkiye","eo":"Turkio","es":"Turquía","et":"Türgi","eu":"Turkia","fi":"Turkki","fr":"Turquie","hu":"Törökország","hy":"Թուրքիա","it":"Turchia","ja":"トルコ","ko":"튀르키예","lt":"Turkija","nl":"Turkije","no":"Tyrkia","pl":"Turcja","pt":"Turquia","ro":"Turcia","ru":"Турция","sk":"Turecko","sv":"Turkiet","th":"ตุรกี","uk":"Туреччина","zh":"土耳其","zh-tw":"土耳其"},
    {"id":795,"alpha2":"tm","alpha3":"tkm","ar":"تركمانستان","bg":"Туркменистан","cs":"Turkmenistán","da":"Turkmenistan","de":"Turkmenistan","el":"Τουρκμενιστάν","en":"Turkmenistan","eo":"Turkmenio","es":"Turkmenistán","et":"Türkmenistan","eu":"Turkmenistan","fi":"Turkmenistan","fr":"Turkménistan","hu":"Türkmenisztán","hy":"Թուրքմենստան","it":"Turkmenistan","ja":"トルクメニスタン","ko":"투르크메니스탄","lt":"Turkmėnija","nl":"Turkmenistan","no":"Turkmenistan","pl":"Turkmenistan","pt":"Turcomenistão","ro":"Turkmenistan","ru":"Туркменистан","sk":"Turkménsko","sv":"Turkmenistan","th":"เติร์กเมนิสถาน","uk":"Туркменістан","zh":"土库曼斯坦","zh-tw":"土庫曼"},
    {"id":798,"alpha2":"tv","alpha3":"tuv","ar":"توفالو","bg":"Тувалу","cs":"Tuvalu","da":"Tuvalu","de":"Tuvalu","el":"Τουβαλού","en":"Tuvalu","eo":"Tuvalo","es":"Tuvalu","et":"Tuvalu","eu":"Tuvalu","fi":"Tuvalu","fr":"Tuvalu","hu":"Tuvalu","hy":"Տուվալու","it":"Tuvalu","ja":"ツバル","ko":"투발루","lt":"Tuvalu","nl":"Tuvalu","no":"Tuvalu","pl":"Tuvalu","pt":"Tuvalu","ro":"Tuvalu","ru":"Тувалу","sk":"Tuvalu","sv":"Tuvalu","th":"ตูวาลู","uk":"Тувалу","zh":"图瓦卢","zh-tw":"吐瓦魯"},
    {"id":800,"alpha2":"ug","alpha3":"uga","ar":"أوغندا","bg":"Уганда","cs":"Uganda","da":"Uganda","de":"Uganda","el":"Ουγκάντα","en":"Uganda","eo":"Ugando","es":"Uganda","et":"Uganda","eu":"Uganda","fi":"Uganda","fr":"Ouganda","hu":"Uganda","hy":"Ուգանդա","it":"Uganda","ja":"ウガンダ","ko":"우간다","lt":"Uganda","nl":"Oeganda","no":"Uganda","pl":"Uganda","pt":"Uganda","ro":"Uganda","ru":"Уганда","sk":"Uganda","sv":"Uganda","th":"ยูกันดา","uk":"Уганда","zh":"乌干达","zh-tw":"烏干達"},
    {"id":804,"alpha2":"ua","alpha3":"ukr","ar":"أوكرانيا","bg":"Украйна","cs":"Ukrajina","da":"Ukraine","de":"Ukraine","el":"Ουκρανία","en":"Ukraine","eo":"Ukrainio","es":"Ucrania","et":"Ukraina","eu":"Ukraina","fi":"Ukraina","fr":"Ukraine","hu":"Ukrajna","hy":"Ուկրաինա","it":"Ucraina","ja":"ウクライナ","ko":"우크라이나","lt":"Ukraina","nl":"Oekraïne","no":"Ukraina","pl":"Ukraina","pt":"Ucrânia","ro":"Ucraina","ru":"Украина","sk":"Ukrajina","sv":"Ukraina","th":"ยูเครน","uk":"Україна","zh":"乌克兰","zh-tw":"烏克蘭"},
    {"id":784,"alpha2":"ae","alpha3":"are","ar":"الإمارات العربية المتحدة","bg":"ОАЕ","cs":"Spojené arabské emiráty","da":"Forenede Arabiske Emirater","de":"Vereinigte Arabische Emirate","el":"Ηνωμένα Αραβικά Εμιράτα","en":"United Arab Emirates","eo":"Unuiĝintaj Arabaj Emirlandoj","es":"Emiratos Árabes Unidos","et":"Araabia Ühendemiraadid","eu":"Arabiar Emirerri Batuak","fi":"Arabiemiirikunnat","fr":"Émirats arabes unis","hu":"Egyesült Arab Emírségek","hy":"Արաբական Միացյալ Էմիրություններ","it":"Emirati Arabi Uniti","ja":"アラブ首長国連邦","ko":"아랍에미리트","lt":"Jungtiniai Arabų Emyratai","nl":"Verenigde Arabische Emiraten","no":"De forente arabiske emirater","pl":"Zjednoczone Emiraty Arabskie","pt":"Emirados Árabes Unidos","ro":"Emiratele Arabe Unite","ru":"ОАЭ","sk":"Spojené arabské emiráty","sv":"Förenade Arabemiraten","th":"สหรัฐอาหรับเอมิเรตส์","uk":"ОАЕ","zh":"阿联酋","zh-tw":"阿聯"},
    {"id":826,"alpha2":"gb","alpha3":"gbr","ar":"المملكة المتحدة","bg":"Великобритания","cs":"Spojené království Velké Británie a Severního Irska","da":"Storbritannien","de":"Vereinigtes Königreich","el":"Ηνωμένο Βασίλειο","en":"United Kingdom of Great Britain and Northern Ireland","eo":"Britio","es":"Reino Unido","et":"Suurbritannia","eu":"Erresuma Batua","fi":"Yhdistynyt kuningaskunta","fr":"Royaume-Uni","hu":"Egyesült Királyság","hy":"Մեծ Բրիտանիա","it":"Regno Unito","ja":"イギリス","ko":"영국","lt":"Jungtinė Karalystė","nl":"Verenigd Koninkrijk","no":"Storbritannia","pl":"Wielka Brytania","pt":"Reino Unido","ro":"Regatul Unit","ru":"Великобритания","sk":"Spojené kráľovstvo","sv":"Storbritannien","th":"สหราชอาณาจักร","uk":"Велика Британія","zh":"英国","zh-tw":"英國"},
    {"id":840,"alpha2":"us","alpha3":"usa","ar":"الولايات المتحدة","bg":"САЩ","cs":"Spojené státy americké","da":"USA","de":"Vereinigte Staaten","el":"Ηνωμένες Πολιτείες Αμερικής","en":"United States of America","eo":"Usono","es":"Estados Unidos","et":"Ameerika Ühendriigid","eu":"AEB","fi":"Yhdysvallat","fr":"États-Unis","hu":"Amerikai Egyesült Államok","hy":"ԱՄՆ","it":"Stati Uniti","ja":"アメリカ合衆国","ko":"미국","lt":"Jungtinės Valstijos","nl":"Verenigde Staten","no":"USA","pl":"Stany Zjednoczone","pt":"Estados Unidos","ro":"Statele Unite ale Americii","ru":"США","sk":"Spojené štáty","sv":"USA","th":"สหรัฐ","uk":"США","zh":"美国","zh-tw":"美國"},
    {"id":858,"alpha2":"uy","alpha3":"ury","ar":"الأوروغواي","bg":"Уругвай","cs":"Uruguay","da":"Uruguay","de":"Uruguay","el":"Ουρουγουάη","en":"Uruguay","eo":"Urugvajo","es":"Uruguay","et":"Uruguay","eu":"Uruguai","fi":"Uruguay","fr":"Uruguay","hu":"Uruguay","hy":"Ուրուգվայ","it":"Uruguay","ja":"ウルグアイ","ko":"우루과이","lt":"Urugvajus","nl":"Uruguay","no":"Uruguay","pl":"Urugwaj","pt":"Uruguai","ro":"Uruguay","ru":"Уругвай","sk":"Uruguaj","sv":"Uruguay","th":"อุรุกวัย","uk":"Уругвай","zh":"乌拉圭","zh-tw":"烏拉圭"},
    {"id":860,"alpha2":"uz","alpha3":"uzb","ar":"أوزبكستان","bg":"Узбекистан","cs":"Uzbekistán","da":"Usbekistan","de":"Usbekistan","el":"Ουζμπεκιστάν","en":"Uzbekistan","eo":"Uzbekio","es":"Uzbekistán","et":"Usbekistan","eu":"Uzbekistan","fi":"Uzbekistan","fr":"Ouzbékistan","hu":"Üzbegisztán","hy":"Ուզբեկստան","it":"Uzbekistan","ja":"ウズベキスタン","ko":"우즈베키스탄","lt":"Uzbekistanas","nl":"Oezbekistan","no":"Usbekistan","pl":"Uzbekistan","pt":"Uzbequistão","ro":"Uzbekistan","ru":"Узбекистан","sk":"Uzbekistan","sv":"Uzbekistan","th":"อุซเบกิสถาน","uk":"Узбекистан","zh":"乌兹别克斯坦","zh-tw":"烏茲別克"},
    {"id":548,"alpha2":"vu","alpha3":"vut","ar":"فانواتو","bg":"Вануату","cs":"Vanuatu","da":"Vanuatu","de":"Vanuatu","el":"Βανουάτου","en":"Vanuatu","eo":"Vanuatuo","es":"Vanuatu","et":"Vanuatu","eu":"Vanuatu","fi":"Vanuatu","fr":"Vanuatu","hu":"Vanuatu","hy":"Վանուատու","it":"Vanuatu","ja":"バヌアツ","ko":"바누아투","lt":"Vanuatu","nl":"Vanuatu","no":"Vanuatu","pl":"Vanuatu","pt":"Vanuatu","ro":"Vanuatu","ru":"Вануату","sk":"Vanuatu","sv":"Vanuatu","th":"วานูวาตู","uk":"Вануату","zh":"瓦努阿图","zh-tw":"萬那杜"},
    {"id":862,"alpha2":"ve","alpha3":"ven","ar":"فنزويلا","bg":"Венецуела","cs":"Venezuela","da":"Venezuela","de":"Venezuela","el":"Βενεζουέλα","en":"Venezuela (Bolivarian Republic of)","eo":"Venezuelo","es":"Venezuela","et":"Venezuela","eu":"Venezuela","fi":"Venezuela","fr":"Venezuela","hu":"Venezuela","hy":"Վենեսուելա","it":"Venezuela","ja":"ベネズエラ・ボリバル共和国","ko":"베네수엘라","lt":"Venesuela","nl":"Venezuela","no":"Venezuela","pl":"Wenezuela","pt":"Venezuela","ro":"Venezuela","ru":"Венесуэла","sk":"Venezuela","sv":"Venezuela","th":"เวเนซุเอลา","uk":"Венесуела","zh":"委内瑞拉","zh-tw":"委內瑞拉"},
    {"id":704,"alpha2":"vn","alpha3":"vnm","ar":"فيتنام","bg":"Виетнам","cs":"Vietnam","da":"Vietnam","de":"Vietnam","el":"Βιετνάμ","en":"Viet Nam","eo":"Vjetnamio","es":"Vietnam","et":"Vietnam","eu":"Vietnam","fi":"Vietnam","fr":"Viêt Nam","hu":"Vietnám","hy":"Վիետնամ","it":"Vietnam","ja":"ベトナム","ko":"베트남","lt":"Vietnamas","nl":"Vietnam","no":"Vietnam","pl":"Wietnam","pt":"Vietname","ro":"Vietnam","ru":"Вьетнам","sk":"Vietnam","sv":"Vietnam","th":"เวียดนาม","uk":"В'єтнам","zh":"越南","zh-tw":"越南"},
    {"id":887,"alpha2":"ye","alpha3":"yem","ar":"اليمن","bg":"Йемен","cs":"Jemen","da":"Yemen","de":"Jemen","el":"Υεμένη","en":"Yemen","eo":"Jemeno","es":"Yemen","et":"Jeemen","eu":"Yemen","fi":"Jemen","fr":"Yémen","hu":"Jemen","hy":"Եմեն","it":"Yemen","ja":"イエメン","ko":"예멘","lt":"Jemenas","nl":"Jemen","no":"Jemen","pl":"Jemen","pt":"Iêmen","ro":"Yemen","ru":"Йемен","sk":"Jemen","sv":"Jemen","th":"เยเมน","uk":"Ємен","zh":"也门","zh-tw":"葉門"},
    {"id":894,"alpha2":"zm","alpha3":"zmb","ar":"زامبيا","bg":"Замбия","cs":"Zambie","da":"Zambia","de":"Sambia","el":"Ζάμπια","en":"Zambia","eo":"Zambio","es":"Zambia","et":"Sambia","eu":"Zambia","fi":"Sambia","fr":"Zambie","hu":"Zambia","hy":"Զամբիա","it":"Zambia","ja":"ザンビア","ko":"잠비아","lt":"Zambija","nl":"Zambia","no":"Zambia","pl":"Zambia","pt":"Zâmbia","ro":"Zambia","ru":"Замбия","sk":"Zambia","sv":"Zambia","th":"แซมเบีย","uk":"Замбія","zh":"赞比亚","zh-tw":"尚比亞"},
    {"id":716,"alpha2":"zw","alpha3":"zwe","ar":"زيمبابوي","bg":"Зимбабве","cs":"Zimbabwe","da":"Zimbabwe","de":"Simbabwe","el":"Ζιμπάμπουε","en":"Zimbabwe","eo":"Zimbabvo","es":"Zimbabue","et":"Zimbabwe","eu":"Zimbabwe","fi":"Zimbabwe","fr":"Zimbabwe","hu":"Zimbabwe","hy":"Զիմբաբվե","it":"Zimbabwe","ja":"ジンバブエ","ko":"짐바브웨","lt":"Zimbabvė","nl":"Zimbabwe","no":"Zimbabwe","pl":"Zimbabwe","pt":"Zimbábue","ro":"Zimbabwe","ru":"Зимбабве","sk":"Zimbabwe","sv":"Zimbabwe","th":"ซิมบับเว","uk":"Зімбабве","zh":"津巴布韦","zh-tw":"辛巴威"}]

export default class Countries {

    constructor(props) {
        this.cache = {};
        this.initialize();
    }

    initialize() {
        this.countries = countries;
        this.usstates  = usStates;
    }

    getIntlData() {
        let userRegion, userCity, userCountry, userTimeZone;
        if ( Intl ) {
            let tzArr = (userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone).split("/");
            userRegion  = tzArr[0];
            userCity    = tzArr[tzArr.length - 1];
            userCountry = timeZoneCityToCountryCode[userCity];
        } else {
            userRegion   = "N/A";
            userCity     = "N/A";
            userCountry  = "N/A";
            userTimeZone = "N/A";
        }

        return {
            region: userRegion,
            city: userCity,
            countryCode: userCountry,
            timeZone: userTimeZone,
            languageShort: window.navigator.language.substring(0,2),
            language: window.navigator.language,
        };
    }

    getFlagUrl( code ) {
        if (!code) return "";

        code = code.toLowerCase();

        const flagService = `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/1x1/${code}.svg`;
        const alpha = (code.length == 2)
            ? 'alpha2'
            : 'alpha3';

        return flagService;
    }

    getCountry( code, language ) {
        if (!code) return /*(this.countries.find(country => country.alpha2 === 'at') ?? { de: 'Österreich'})[language ?? 'de'] ??*/ 'Deutschland';  // todo [REFACTOR]: review
        code     = code.toLowerCase();
        language = language.toLowerCase();

        const alpha = (code.length == 2)
                      ? 'alpha2'
                      : 'alpha3';

        const country = this.countries.find( (country ) => {
            return country[alpha] == code;
        });

        if ( country ) { return country[language]; }
        return false;
    }

    getAllCountriesAsObject(alpha, language, options = {}) {
        const { filter = new Set(), groups = {}, excludeGrouped = true } = options;

        // Create a mapping from alpha2 and alpha3 codes to country records
        const countryMap = countries.reduce((map, country) => {
            map[country[alpha].toLowerCase()] = country[language] || country.en;
            return map;
        }, {});

        let filteredCountries = {};

        if (filter.size === 0) {
            // If the filter is empty, return all countries
            filteredCountries = Object.entries(countryMap).reduce((acc, [code, country]) => {
                acc[code] = country;
                return acc;
            }, {});
        } else {
            // Get the list of countries based on the filter
            filteredCountries = Array.from(filter).reduce((acc, code) => {
                const lowerCaseCode = code.toLowerCase(); // Normalize the code to lowercase
                const country = countryMap[lowerCaseCode]; // Retrieve the country from the map using the lowercase code
                if (country) {
                    acc[lowerCaseCode] = country;
                }
                return acc;
            }, {});
        }

        // Handling the groups if provided
        let groupedCountries = {};
        if (Object.keys(groups).length > 0) {
            // Organize countries into groups
            Object.keys(groups).forEach(groupName => {
                groupedCountries[groupName] = groups[groupName].reduce((acc, code) => {
                    const lowerCaseCode = code.toLowerCase(); // Normalize the code to lowercase
                    const country = countryMap[lowerCaseCode]; // Retrieve the country from the map using the lowercase code
                    if (country) {
                        acc[lowerCaseCode] = country;
                    }
                    return acc;
                }, {});
            });
        }

        // Combine the grouped and filtered countries, with grouped countries coming first
        let sortedCountries = {};
        if (Object.keys(groupedCountries).length > 0) {
            Object.keys(groupedCountries).forEach(groupName => {
                sortedCountries[groupName] = this.sortCountriesByName(groupedCountries[groupName], language);
            });
        }

        // Add the remaining filtered countries (not in groups) based on the excludeGrouped option
        const nonGroupedCountries = Object.keys(filteredCountries).reduce((acc, code) => {
            if (excludeGrouped) {
                // Exclude countries that are in any group
                const isGrouped = Object.values(groupedCountries).some(group => group.hasOwnProperty(code));
                if (!isGrouped) {
                    acc[code] = filteredCountries[code];
                }
            } else {
                // Include all filtered countries, regardless of grouping
                acc[code] = filteredCountries[code];
            }
            return acc;
        }, {});

        // Always add non-grouped countries under "Other"
        sortedCountries["Other"] = this.sortCountriesByName(nonGroupedCountries, language);

        return sortedCountries;
    }

    // Helper function to sort countries by their name
    sortCountriesByName(countryObject, language) {
        // Create a Collator instance for locale-sensitive string comparison
        const collator = new Intl.Collator(language, { sensitivity: 'base' });

        // Convert the object to an array of objects with code and name properties
        return Object.entries(countryObject) // Convert to array of [code, name] pairs
            .map(([code, name]) => ({ code, name })) // Map to array of objects
            .sort((a, b) => collator.compare(a.name, b.name)); // Sort by name using the collator
    }

    getAllCountriesAsOptions( alpha, language,  ) {
        const key = 'countries-options-' + alpha + '-' + language;

        if  ( this.cache[key] ) { return this.cache[key]; }

        const countries = this.getAllCountries( alpha, language );
        countries.sort( ( a, b ) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return  1;
                return 0;
            });

        let options = '';
        let numberOfCountries = countries.length;
        for (let i = 0; i < numberOfCountries; i++) {
            options += '<option value="'+ countries[i].code +'">';
            options += countries[i].name;
            options += '</option>';
        }
        this.cache[key] = options;
        return options;
    }

    getAllCountries( alpha, language ) {

        alpha    = alpha.toLowerCase();
        language = language.toLowerCase();

        if ( false  ) {}

        let countries = [];
        let data = this.countries;
        let numberOfCountries = this.countries.length;

        for (let i = 0; i < numberOfCountries; i++) {
            countries.push( { code: data[i][alpha], name: data[i][language], })
        }

        return countries;
    }

    getUSState( code ) {
        code     = code.toUpperCase();
        const state = this.usstates.find( (state ) => {
            return state[code] == code;
        });
        if ( state ) { return state[state]; }
        return false;
    }

    getAllUSStatesAsOptions( type ) {
        const key = 'usstates-options-' + type;

        if  ( this.cache[key] ) { return this.cache[key]; }

        const states = this.getAllUSStates();
        states.sort( ( a, b ) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return  1;
            return 0;
        });

        let options = '';
        let numberOfStates = states.length;
        for (let i = 0; i < numberOfStates; i++) {
            options += '<option value="'+ states[i].code +'">';
            options += states[i][type];
            options += '</option>';
        }
        this.cache[key] = options;
        return options;

    }

    getAllUSStates() {

        let states = [];
        let data = this.usstates;
        let numberOfStates = this.usstates.length;

        for (let i = 0; i < numberOfStates; i++) {
            states.push( { code: data[i]['code'], name: data[i]['name'], abbrev: data[i]['abbrev'] })
        }

        return states;
    }

    buildAlphaMapping() {
        let mapping = [];
        let data = this.countries;

        let numberOfCountries = this.countries.length;

        let display = '';

        for (let i = 0; i < numberOfCountries; i++) {
            display += data[i]['alpha3'] + ': "' +  data[i]['alpha2'] + '",';
        }

        console.log(display);
    }

    convertIntoAlpha3(code) {

        if (code.length == 3 ) return code;

        code = code.toLowerCase();

        const country = this.countries.find( (country ) => {
            return country.alpha2 == code;
        });

        if ( country ) return country.alpha3;
        return false;
    }
    convertIntoAlpha2(alpha3) {
        alpha3 = alpha3.toLowerCase();

        const country = this.countries.find( (country ) => {
            return country.alpha3 == alpha3;
        });

        if ( country ) return country.alpha2;
        return false;
    }

    isEUCountry(countryCode) {
        if (!countryCode) return false;
        const iso = countryCode.length === 2
                    ? countryISO2to3(countryCode)
                    : countryCode.toLowerCase();
    }
}

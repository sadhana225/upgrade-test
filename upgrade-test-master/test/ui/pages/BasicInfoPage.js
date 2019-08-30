'use strict';

const BasicInfoPage = Object.create({}, {
    formHeading:{
        get() {
            return $('#root > div > main > div > div:nth-child(1) > div.row.row-lg > div.section.col-xs-12.first-xs.col-sm-8.col-sm-offset-2.col-md-4.col-md-offset-4 > div > div > form > h2');
        }
    },
    textFirstName: {
        get() {
            return $(() => document.getElementsByName('borrowerFirstName'));
        }
    },
    textLastName: {
        get() {
            return $(() => document.getElementsByName('borrowerLastName'));
        }
    },
    textStreet: {
        get() {
            return $(() => document.getElementsByName('borrowerStreet'));
        }
    },
    textCity: {
        get() {
            return $(() => document.getElementsByName('borrowerCity'));
        }
    },
    textState: {
        get() {
            return $(() => document.getElementsByName('borrowerState'));
        }
    },
    textZIPCode: {
        get() {
            return $(() => document.getElementsByName('borrowerZipCode'));
        }
    },
    textDateOfBirth: {
        get() {
            return $(() => document.getElementsByName('borrowerDateOfBirth'));
        }
    },
    textIncome: {
        get() {
            return $(() => document.getElementsByName('borrowerIncome'));
        }
    },
    textAdditionalIncome: {
        get() {
            return $(() => document.getElementsByName('borrowerAdditionalIncome'));
        }
    },
    textUsername: {
        get() {
            return $(() => document.getElementsByName('username'));
        }
    },
    textPassword: {
        get() {
            return $(() => document.getElementsByName('password'));
        }
    },
    checkboxTerms: {
        get() {
            return $('div.sc-kfGgVZ.sc-esjQYD.fCisXT');
        }
    },
    buttonCheckRates: {
        get() {
            return $('button.bRfgpZ.sc-jAaTju.section');
        }
    },

});

module.exports = BasicInfoPage;

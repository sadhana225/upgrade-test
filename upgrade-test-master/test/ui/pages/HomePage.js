'use strict';

const HomePage = Object.create({}, {
    open: {
        get() {
            return browser.url('https://www.credify.tech/phone/nonDMFunnel');
        }
    },

    textLoanAmount: {
        get() {
            return $(() => document.getElementsByName('desiredAmount'));
        }
    },

    dropdownLoanPurpose: {
        get() {
            return $('.sc-fAjcbJ.bvkLRg');
        }
    },

    buttonCheckRates: {
        get() {
            return $('button.dhroOL.sc-jAaTju.jZAYQs.sc-fMiknA');
        }
    },

    fillDesiredLoanDetail() {
        this.textLoanAmount.setValue('2000');
        this.dropdownLoanPurpose.selectByIndex(2);
        this.buttonCheckRates.click();
    }
});

module.exports = HomePage;

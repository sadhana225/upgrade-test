'use strict';

const OfferPage = Object.create({}, {

    headerOfferPage: {
        get() {
            return $('h2.section.title--secondary.text--weight-light.text--color-primary');
        }
    },
    textLoanAmount: {
        get() {
            return $('span.sc-chPdSV.VlhWk');
            // return $('#root > div > main > div > div.row.row-lg > div.section.col-xs-12.first-xs.col-sm-8.col-sm-offset-2.col-md-8.col-md-offset-2 > div > div:nth-child(1) > div.text--align-center > div.sc-eTuwsz.dRKBVY > div.sc-kAzzGY.fPrkYq > span.sc-chPdSV.VlhWk');
        }
    },

    textMonthlyPayment: {
        get() {
            return $('div.sc-bsbRJL.ifzzjq span');
        }
    },

    textPaymentTerm: {
        get() {
            return $('div.section--sm >div.section--xs:nth-child(1)');
        }
    },

    textInterestRate: {
        get() {
            return $('div.section--sm >div.section--xs:nth-child(2)');
        }
    },

    textAPR: {
        get() {
            return $('div.section--sm >div.section--xs:nth-child(3)');
        }
    },

    linkMenu:{
        get() {
            return $('#root > div > main > div > header > div > label');
        }
    },

    linkSignOut: {
        get() {
            // return $('[href="/phone/logout"]');
            return $('=Sign Out');
        }
    },
});

module.exports = OfferPage;
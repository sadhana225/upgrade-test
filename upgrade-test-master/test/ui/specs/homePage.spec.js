/**
 * Objective: E2E Functional UI Test - Subcribe for Loan
 */

// Imports
const assert = require('assert');
const HomePage = require('../pages/HomePage');
const BasicInfoPage = require('../pages/BasicInfoPage');
const OfferPage = require('../pages/OfferPage');
const LoginPage = require('../pages/LoginPage');

// Variables
let actualResult = null;
let expectedResult = null;
let loanAmount = null;
let monthlyPayment = null;
let term = null;
let interestRate = null;
let apr = null;


describe('Functional UI Test', () => {
    before( () => {
        HomePage.open;
    });

    describe('Upon launching the test', () => {
        it('should land on the Home Page', () => {
            actualResult = browser.getUrl();
            expectedResult = 'https://www.credify.tech/phone/nonDMFunnel';
            assert.equal(expectedResult, actualResult);
        });
        it('should fill desired loan amount', () => {
            HomePage.textLoanAmount.setValue('2000');
            HomePage.dropdownLoanPurpose.selectByIndex(1);
            HomePage.buttonCheckRates.click();
        });
        it('should navigate to Basic Information Page', () => {
            actualResult = browser.getUrl();
            expectedResult = 'https://www.credify.tech/phone/personal-information-1/CREDIT_CARD/2000';
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('Once navigated to Basic Information Page', () => {
        it('should fill out `Basic Information` form', () => {
            BasicInfoPage.textFirstName.setValue('Upgrade');
            BasicInfoPage.textLastName.setValue('Challenge');
            BasicInfoPage.textCity.setValue('Petersburg');
            BasicInfoPage.textState.setValue('VA');
            BasicInfoPage.textZIPCode.setValue('23803');
            BasicInfoPage.textDateOfBirth.setValue('05/05/1960');
            BasicInfoPage.textIncome.setValue('120000');
            BasicInfoPage.textAdditionalIncome.setValue('5000');
            BasicInfoPage.textStreet.setValue('3028  Eden Drive');
        });
        it('should fill out Create Account Form', () => {
            BasicInfoPage.textUsername.setValue('sadhana+105@upgrade-challenge.com');
            BasicInfoPage.textPassword.setValue('Test@123');
        });
        it('should accept the Terms', () => {
            BasicInfoPage.checkboxTerms.click();
        });
        it('should click on `Check You Rate` button', () => {
            BasicInfoPage.buttonCheckRates.click();
        });
        it('should be navigated to Offer Page', () => {
            browser.pause(5000);
            actualResult = browser.getUrl();
            expectedResult = 'https://www.credify.tech/phone/offer-page';
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('Once navigated to Offer Page', () => {
        it('should capture loan information', () => {
            loanAmount = OfferPage.textLoanAmount.getText();
            browser.pause(1000);
            monthlyPayment = OfferPage.textMonthlyPayment.getText();
            browser.pause(1000);
            term = OfferPage.textPaymentTerm.getText();
            browser.pause(1000);
            interestRate = OfferPage.textInterestRate.getText();
            browser.pause(1000);
            apr = OfferPage.textAPR.getText();
            browser.pause(1000);
        });
        it('should sign out', () => {
            OfferPage.linkMenu.click();
            browser.pause(1000);
            OfferPage.linkSignOut.click();
            browser.pause(3000);
            actualResult = browser.getUrl();
            expectedResult = 'https://www.credify.tech/phone/logout';
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('Upon signing out', () => {
        it('should launch log-in page', () => {
            LoginPage.open;
        });
        it('should enter valid login credentials', () => {
            LoginPage.textUsername.setValue('sadhana+102@upgrade-challenge.com');
            LoginPage.textPassword.setValue('Test@123');
            LoginPage.buttonSignIn.click();
        });
        it('should be navigated to Offer Page', () => {
            browser.pause(5000); // Waits implicitly while the page loads
            actualResult = browser.getUrl();
            expectedResult = 'https://www.credify.tech/phone/offer-page';
            assert.equal(expectedResult, actualResult);
        });
        it('should see same `Loan Amount` as offered before', () => {
            assert.equal(loanAmount, OfferPage.textLoanAmount.getText());
        });
        it('should see same `Monthly Payment` as offered before', () => {
            assert.equal(monthlyPayment, OfferPage.textMonthlyPayment.getText());
        });
        it('should see same `Payment Term` as offered beofre', () => {
            assert.equal(term, OfferPage.textPaymentTerm.getText());
        });
        it('should see same `Interest Rate` as offered beofre', () => {
            assert.equal(interestRate, OfferPage.textInterestRate.getText());
        });
        it('should see same `APR` as offered beofre', () => {
            assert.equal(apr, OfferPage.textAPR.getText());
        });
    });
});
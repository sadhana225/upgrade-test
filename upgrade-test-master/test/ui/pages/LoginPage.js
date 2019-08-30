'use strict';

const LoginPage = Object.create({}, {

    open: {
        get() {
            return browser.url('https://www.credify.tech/portal/login');
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
    buttonSignIn: {
        get() {
            return $('button.ibAgVm.sc-jTzLTM');
        }
    }
});

module.exports = LoginPage;
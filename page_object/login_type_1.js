const USER_NAME_TXT = '#username';
const PASSWORD_TXT = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage {
    get username() {
        return $(USER_NAME_TXT);
    }

    get password() {
        return $(PASSWORD_TXT);
    }

    get loginBtn() {
        return $(LOGIN_BTN);
    }
}

module.exports = LoginPage;
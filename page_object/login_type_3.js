const USER_NAME_TXT = '#username';
const PASSWORD_TXT = '#password';
const LOGIN_BTN = '[type="submit"]';
const LOGIN_ERROR_TXT = '#flash-messages';
let LoginBase = require('../page_object/inheritance');
let LoginData = require('../test-data/test-data');
class LoginPage extends LoginBase {
    waitForUserNameDisplayed(){
        $(USER_NAME_TXT).waitForDisplayed(5000);
    }

    inputUserName(username){
        $(USER_NAME_TXT).setValue(username);
        return this; //chaining method
    }

    inputPassword(password){
        $(PASSWORD_TXT).setValue(password);
        return this;
    }

    clickOnLoginBtn(){
        $(LOGIN_BTN).click();
        return this; //ham o cuoi cung neu khong co return this cung khong sao
    }

    verifyInvalidUsername(){
       let errorText = $(LOGIN_ERROR_TXT).getText();
       expect(errorText).to.include('Your username is invalid');
    }
    verifyInvalidPassword(){
        let errorText = $(LOGIN_ERROR_TXT).getText();
        expect(errorText).to.include('Your password is invalid');
     }
}

module.exports = new LoginPage();
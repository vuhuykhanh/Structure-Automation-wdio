const USERNAME_TXT = "#username";
const PASSWORD_TXT = "#password";
const LOGIN_BTN = '[type="submit"]';

class LoginPage {
    waitForUserNameDisplayed(){
        $(USERNAME_TXT).waitForDisplayed(5000);
    }

    setCredentials(username,password){
        $(USERNAME_TXT).setValue(username);
        $(PASSWORD_TXT).setValue(password);
        $(LOGIN_BTN).click();
    }
} 

module.exports = new LoginPage();
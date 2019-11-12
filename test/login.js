let LoginData = require('../test-data/test-data');
let LoginPage3 = require('../page_object/login_type_3');
describe('Login', () => {
    before(() => {
        LoginPage3.openURL('/login');
    });
    it('verify input invalid username', () => {
        LoginPage3
        .inputUserName(LoginData.INVALID_USERNAME_DATA.username)
        .inputPassword(LoginData.INVALID_USERNAME_DATA.password)
        .clickOnLoginBtn()
        .verifyInvalidUsername()
    });

    it('verify input invalid password', () => {
        LoginPage3
        .inputUserName(LoginData.INVALID_PASSWORD_DATA.username)
        .inputPassword(LoginData.INVALID_PASSWORD_DATA.password)
        .clickOnLoginBtn()
        .verifyInvalidPassword()
    });

    it('verify input valid username and password', () => {
        LoginPage3
        .inputUserName(LoginData.VALID_LOGIN_DATA.username)
        .inputPassword(LoginData.VALID_LOGIN_DATA.password)
        .clickOnLoginBtn()
        let SECURE_TITLE = "//div[@class='example']//h2";
        let title = $(SECURE_TITLE).getText();
        expect(title).to.equal('Secure Area');
    });
});
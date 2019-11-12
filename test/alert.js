let path = require('path');
let LoginData = require('../test-data/test-data');
let LoginPage3 = require('../page_object/login_type_3');
let LoginPage2 = require('../page_object/login_type_2');
let LoginPage = require('../page_object/login_type_1');
describe('Alert', () => {
    before(() => {
        console.log('Before testing');
    });
    after(() => {
        console.log('After testing');
    });
    let loginData = LoginData.VALID_LOGIN_DATA;
    it('should verify constructor Alert', () => {
        //baseUrl in wdio.conf.js
        // browser.url('/login');

        //use inheritance
        LoginPage3.openURL('/login');

        LoginPage3.inputUserName(loginData.username).inputPassword(loginData.password).clickOnLoginBtn()
        //Use page object type 1
        // LoginPage.username.setValue('tomsmith');
        // LoginPage.password.setValue('SuperSecretPassword!');
        // LoginPage.loginBtn.click();

        //Use page object type 2
        // LoginPage2.setCredentials('tomsmith','SuperSecretPassword!');

        // //Use page object type 3
        // LoginPage3 //chaining method
        //     .inputUserName('tomsmith')
        //     .inputPassword('SuperSecretPassword!')
        //     .clickOnLoginBtn()

        //Wait for element disapearing
        // let USER_NAME = "//input[@id='username']";
        // let PASSWORD = "//input[@id='password']";
        // let LOGIN_BUTTON = "//button[@class='radius']"; 
        let SECURE_TITLE = "//div[@class='example']//h2";
        // $(USER_NAME).setValue('tomsmith');
        // $(PASSWORD).setValue('SuperSecretPassword!');
        // $(LOGIN_BUTTON).click();
        // $(LOGIN_BUTTON).waitForDisplayed(5000,true,'[Error] Time to display button is over');
        let title = $(SECURE_TITLE).getText();
        expect(title).to.equal('Secure Area');
        console.log(title);

        // //Take a screen shot
        // let png = browser.saveScreenshot('./img/1.png');

        //switch Window Tab
        // let LINK_BUTTON = "=Elemental Selenium";
        // $(LINK_BUTTON).click();
        // let allWindowID = browser.getWindowHandles();
        // console.log(allWindowID);
        // let firstWindow = allWindowID[0];
        // let secondWindow = allWindowID[1];
        // browser.switchToWindow(secondWindow);
        // let titleWindow = browser.getTitle();
        // console.log(titleWindow);
        // browser.switchToWindow(firstWindow);
        // titleWindow = browser.getTitle();
        // console.log(titleWindow);

        //Upload file
        // browser.url('http://the-internet.herokuapp.com/upload');
        // let CHOOSE_FILE_BUTTON = "//input[@id='file-upload']";
        // let UPLOAD_BUTTON = "//input[@id='file-submit']";
        // let fileToUploadRelativePath = path.join(__dirname,'../1.txt');
        // $(CHOOSE_FILE_BUTTON).setValue(fileToUploadRelativePath);
        // $(UPLOAD_BUTTON).click();
        // browser.pause(5000);
    })
});
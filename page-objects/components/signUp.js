import { Selector, t } from 'testcafe'

class signUp{
    constructor(){
        this.signInPageTitle = Selector('title')
        this.signUpButton = Selector('a').withAttribute('data-testid', 'signup')
        this.newUserName = Selector('input').withAttribute('name', 'name')
        this.newUserPhoneNumber = Selector('input').withAttribute('name', 'phone_number')
        this.nextButton = Selector('span').withText('Next')
        this.signUpComplete = Selector('span').withText('Sign up')
        this.alertOKButton = Selector('span').withText('OK')
        this.verficationCode = Selector('input').withAttribute('name','verfication_code')
        this.newPassword = Selector('input').withAttribute('name','password')
        this.skipForNow = Selector('span').withText('Skip for now')
        this.settingsListText  = Selector('div').withAttribute('data-testid', 'OCF_SettingsList_Text')
    }
    
    async enterNewUserNameAndPhone(newusername,newphonenumber) {
        await t.click(this.signUpButton)
            .typeText(this.newUserName,newusername)
            .typeText(this.newUserPhoneNumber,newphonenumber)
            .pressKey(`enter`)
            .click(this.nextButton) 
     }

    async skipCustomiseYourExperiencePage(){
        if (await this.settingsListText.exists) {
            await t.pressKey(`tab`)
            .click(this.nextButton) // skip Customise your experience page
            .click(this.signUpComplete)
            .click(this.alertOKButton)
        }
    }

    async newUserPasswordSetUp(newpassword) {
        await t.typeText(this.verficationCode,``) // skipped for now as OTP received in mobile
            .click(this.nextButton) 
            .typeText(this.newPassword,newpassword)
           
     }

     async newUserSkipOnboardingScreen() {
        await t.click(this.skipForNow)  // skip Pick a profile picture page
            .click(this.skipForNow)     // skip Describe yourself page 
            .click(this.nextButton)     // skip Which languages do you speak? page
            .click(this.skipForNow)     // skip What are you interested in? page
            .click(this.nextButton)     // skip Suggestions for you to follow page
            .click(this.skipForNow)     // skip Turn on notifications page
     }


}
export default signUp
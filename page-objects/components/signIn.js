import { Selector, t } from 'testcafe'

class signIn{
    constructor(){
        this.signInPageTitle = Selector('title')
        this.userNameTextField = Selector('input').withAttribute('name', 'session[username_or_email]')
        this.passwordTextField = Selector('input').withAttribute('name', 'session[password]')
        this.logInButton = Selector('div').withAttribute('data-testid', 'LoginForm_Login_Button')
    }
    
    async userSignIn(username,password) {
        await t.typeText(this.userNameTextField,username)
                .typeText(this.passwordTextField,password)
                .click(this.logInButton)
     }
}
export default signIn
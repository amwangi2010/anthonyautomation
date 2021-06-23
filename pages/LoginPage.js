import { Selector, t } from "testcafe";

class LoginPage{
 constructor (){
    this.emailInput = Selector('#email')
    this.passwordInput = Selector('#passwd');
    this.signInButton = Selector('#SubmitLogin > span')
    this.accountHeader = Selector('h3').withText('ALREADY REGISTERED');
 }
}
export default new LoginPage();
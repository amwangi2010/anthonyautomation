import { Selector, t } from "testcafe";

class LoginPage{
 constructor (){
    this.EmailInput = Selector('#email')
    this.PasswordInput = Selector('#passwd');
    this.SignInButton = Selector('#SubmitLogin > span')
    this.AccountHeader = Selector('h3').withText('ALREADY REGISTERED');
 }
}
export default new LoginPage();
import { Selector, t } from "testcafe";
import { orderData } from "../data/data_helper";

class LoginPage{
 constructor (){
    this.emailInput = Selector('#email')
    this.passwordInput = Selector('#passwd');
    this.signInButton = Selector('#SubmitLogin > span')
    this.accountHeader = Selector('h3').withText('ALREADY REGISTERED');
 }
async logIn(){
   await t
   .typeText(this.emailInput,orderData.email)
   .typeText(this.passwordInput,orderData.password)
   .click(this.signInButton);  
}

}
export default new LoginPage();
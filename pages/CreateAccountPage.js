import { Selector, t } from "testcafe";

class CreateAccountPage{
 constructor (){ 
    this.emailAddressField = Selector('#email_field')
    this.emailInput = Selector('#email_create')
    this.creatAccountLink = Selector('#SubmitCreate > span');
 }

 /*async account(email){
    await t
    .typeText(this.EmailAddressField,email)
    .pressKey('enter')
}*/
}
export default new CreateAccountPage();
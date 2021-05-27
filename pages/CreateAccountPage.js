import { Selector, t } from "testcafe";

class CreateAccountPage{
 constructor (){
    this.EmailAddressField = Selector('#email_field')
    this.CreatAccountLink = Selector('#SubmitCreate > span');
 }

 async account(email){
    await t
    .typeText(this.EmailAddressField,email)
    .pressKey('enter')
}
}
export default new CreateAccountPage();
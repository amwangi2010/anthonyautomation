import { Selector, t } from "testcafe";

class RegisterPage{
    constructor(){
        this.genderOption = Selector('#id_gender1')
        this.firstName = Selector('#customer_firstname')
        this.lastName = Selector('#customer_lastname')
        this.Email = Selector('#email')
        this.Password = Selector('#passwd')
        this.dateOfBirthDayList = Selector("select[name='days']")
        this.dateOfBirthMonthList = Selector("select[name='months']")
        this.dateOfBirthYearList = Selector("select[name='years']")
        this.addressFirstName = Selector('#firstname')
        this.addressLastName = Selector('#lastname')
        this.Address = Selector('#address1')
        this.City = Selector('#city')
        this.dateOfBirth = Selector('#uniform-days')
        this.daysSelect = Selector('#days')
        this.monthsSelect = Selector('#months')
        this.yearsSelect = Selector('#years')
        this.stateDropDown = Selector('#id_state')
        this.addressState = Selector("select[name='id_state']")
        this.zipCode = Selector('#postcode')
        this.addressCountry = Selector("select[name='id_country']")
        this.mobilePhone = Selector('#phone_mobile')
        this.registerButton = Selector('#submitAccount > span')
        this.signInLink = Selector('#header > div.nav > div > div > nav > div.header_user_info > a')
        this.stateSelect = Selector('#id_state')
        this.Country = Selector('#id_country')
        this.signOut = Selector('#header > div.nav > div > div > nav > div:nth-child(2) > a')
        this.signIn = Selector('#header > div.nav > div > div > nav > div.header_user_info > a');

    }

}

export default new RegisterPage();
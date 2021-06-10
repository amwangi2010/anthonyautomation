import { Selector, t } from "testcafe";

class RegisterPage{
    constructor(){
        this.GenderOption = Selector('#id_gender1')
        this.FirstName = Selector('#customer_firstname')
        this.LastName = Selector('#customer_lastname')
        this.Email = Selector('#email')
        this.Password = Selector('#passwd')
        this.DateOfBirthDayList = Selector("select[name='days']")
        this.DateOfBirthMonthList = Selector("select[name='months']")
        this.DateOfBirthYearList = Selector("select[name='years']")
        this.AddressFirstName = Selector('#firstname')
        this.AddressLastName = Selector('#lastname')
        this.Address = Selector('#address1')
        this.City = Selector('#city')
        this.StateDropDown = Selector('#id_state')
        this.AddressState = Selector("select[name='id_state']")
        this.ZipCode = Selector('#postcode')
        this.AddressCountry = Selector("select[name='id_country']")
        this.MobilePhone = Selector('#phone_mobile')
        this.RegisterButton = Selector('#submitAccount > span')
        this.SignInLink = Selector('#header > div.nav > div > div > nav > div.header_user_info > a')
        this.StateSelect = Selector('#id_state')
        this.Country = Selector('#id_country')
        this.SignOut = Selector('#header > div.nav > div > div > nav > div:nth-child(2) > a')
        this.SignIn = Selector('#header > div.nav > div > div > nav > div.header_user_info > a');

    }

    async selectState(state) {

    }
}

export default new RegisterPage();
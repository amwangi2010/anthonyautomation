import { Selector, t } from "testcafe";

class RegisterPage{
    constructor(){
        this.GenderOption = Selector('#id_gender1')
        this.FirstName = Selector('##customer_firstname')
        this.LastName = Selector('#customer_lastname')
        this.Email = Selector('#email')
        this.Password = Selector('#passwd')
        this.DateOfBirthDayList = Selector("select[name='days']")
        this.DateOfBirthMonthList = Selector("select[name='months']")
        this.DateOfBirthYearList = Selector("select[name='years']")
        this.AddressFirstName = Selector('#firstname')
        this.AddressLastName = Selector('#lastname')
        this.Address = Selector('#address1')
        this.City = Selecton('city')
        this.AddressState = Selector("select[name='id_state']")
        this.ZipCode = Selector('#postcode')
        this.AddressCountry = Selector("select[name='id_country']")
        this,MobilePhone = Selector('#phone_mobile')
        this.RegisterButton = Selector('#submitAccount > span');

    }

    async selectDay(days){
        const DaysOption = this.DateOfBirthDayList.find('option')
        await t
        .click(this.DateOfBirthDayList)
        .click(DaysOption.withText(days));
    }

    async selectDay(months){
        const DaysOption = this.DateOfBirthMonthList.find('option')
        await t
        .click(this.DateOfBirthMonthList)
        .click(DaysOption.withText(months));
    }
    async selectDay(years){
        const DaysOption = this.DateOfBirthYearList.find('option')
        await t
        .click(this.DateOfBirthYearList)
        .click(DaysOption.withText(years));
    }

}

export default new RegisterPage();
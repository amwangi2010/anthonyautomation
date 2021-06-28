import { Selector, ClientFunction } from 'testcafe';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CreateAccountPage from '../pages/CreateAccountPage';
import RegisterPage from '../pages/RegisterPage';
import {orderData} from '../data/data_helper';
import {envVariables} from '../config/config';

var randomNumber = Math.floor(Math.random() * 10000);
var email = 'anthony'+randomNumber+'@test.com';

fixture("Creating new account")
  .page(envVariables.url);

    //Authentication page
    test('New account creation', async t => {
        await t
        .expect(envVariables.getUrl()).eql(envVariables.url)
        .click(HomePage.signInLink)
        .typeText(CreateAccountPage.EmailInput,email)
        .click(CreateAccountPage.CreatAccountLink)
    
    //Enter info for new registration
        .click(RegisterPage.genderOption)
        .typeText(RegisterPage.firstName,orderData.firstname)
        .typeText(RegisterPage.lastName,orderData.lastname)
        .typeText(RegisterPage.Password,orderData.password)
        .click(RegisterPage.daysSelect)
        .click(RegisterPage.daysSelect.find('option').withText('10'))
        .click(RegisterPage.monthsSelect)
        .click(RegisterPage.monthsSelect).find('option').withText('August')
        .click(RegisterPage.yearsSelect)
        .click(RegisterPage.yearsSelect.find('option').withText('1979'))
        .typeText(RegisterPage.Address,orderData.address)
        .typeText(RegisterPage.City,orderData.city)
        .click(RegisterPage.stateDropDown)
        .click(RegisterPage.stateDropDown.find('option').withText('Georgia'))
        .typeText(RegisterPage.zipCode,orderData.zipcode)
        .click(RegisterPage.addressCountry.withText('United States'))
        .typeText(RegisterPage.mobilePhone,orderData.phone)
        .click(RegisterPage.registerButton)
    //Logout
        .click(RegisterPage.signOut)
    //Login
        .click(RegisterPage.signIn)
        .expect(LoginPage.AccountHeader.exists).ok()
        .typeText(LoginPage.EmailInput,email)
        .typeText(LoginPage.PasswordInput,orderData.password)
        .click(LoginPage.SignInButton);   

    });
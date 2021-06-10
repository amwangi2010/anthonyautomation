import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import login from '../pages/LoginPage';
import createaccount from '../pages/CreateAccountPage';
import register from '../pages/RegisterPage';


const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
const dataSet = require('../data/data.json');
var randomNumber = Math.floor(Math.random() * 1000);
var email = 'anthony'+randomNumber+'@test.com';


fixture("Creating new account")
  .page(URL);

    //Authentication page
    dataSet.forEach(data => {
    test('New account creation', async t => {
        await t
        .expect(getURL()).eql(URL)
        .click(homepage.signInLink)
        .expect(getURL()).contains('my-account') 
        .typeText(createaccount.EmailInput,email)
        .click(createaccount.CreatAccountLink)
        .expect(getURL()).contains('my-account')
    //Enter info for new registration
        .click(register.GenderOption)
        .typeText(register.FirstName,data.firstname)
        .typeText(register.LastName,data.lastname)
        .typeText(register.Password,data.password)
        .typeText(register.Address,data.address)
        .typeText(register.City,data.city)
        .click(register.StateSelect)
        .click(register.StateSelect.find('option').withText('Georgia'))
        .typeText(register.ZipCode,data.zipcode)
        .click(register.Country.withText('United States'))
        .typeText(register.MobilePhone,data.phone)
        .click(register.RegisterButton)
    //Logout
        .click(register.SignOut)
    //Login
        .click(register.SignIn)
        .expect(login.AccountHeader.exists).ok()
        .typeText(login.EmailInput,email)
        .typeText(login.PasswordInput,data.password)
        .click(login.SignInButton);

  });
});
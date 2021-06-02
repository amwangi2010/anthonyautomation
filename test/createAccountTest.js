import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import login from '../pages/LoginPage';
import createaccount from '../pages/CreateAccountPage';
import register from '../pages/RegisterPage';


const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 1000);
var email = 'anthony'+randomNumber+'@test.com';
var FirstName = 'Jass';
var LastName = 'Mess';
var Password = '11123a';
var address = '1589 Jacobs Street';
var city = 'Decatur';
var zipcode = '30003';
var phone = '7707701101';
const SignInLink = Selector('#header > div.nav > div > div > nav > div.header_user_info > a');
const dateOfBirth = Selector('#uniform-days');
const daysSelect = Selector('#days');
const daysOption = daysSelect.find('option');
const monthsSelect = Selector('#months');
const monthsOption = monthsSelect.find('option');
const yearsSelect = Selector('#years');
const yearsOption = yearsSelect.find('option');
const stateSelect = Selector('#id_state');
const stateOption = stateSelect.find('option');
const newsletter = Selector('#newsletter');
const country = Selector('#id_country');
const signOut = Selector('#header > div.nav > div > div > nav > div:nth-child(2) > a');
const signIn = Selector('#header > div.nav > div > div > nav > div.header_user_info > a');

fixture("Creating new account")
  .page(URL);

    //Authentication page
    test('New account creation', async t => {
        await t
        //.wait(3000)
        //.setTestSpeed(0.1)
        .expect(getURL()).eql(URL)
        .click(SignInLink)
        .expect(getURL()).contains('my-account') 
        .typeText(createaccount.EmailInput,email)
        .click(createaccount.CreatAccountLink)
        .expect(getURL()).contains('my-account')
    //Enter info for new registration
        .click(register.GenderOption)
        .typeText(register.FirstName,FirstName)
        .typeText(register.LastName,LastName)
        .typeText(register.Password,Password)
        .click(daysSelect)
        .click(daysOption.withText('12'))
        .click(monthsSelect)
        .click(monthsOption.withText('June'))
        .click(yearsSelect)
        .click(yearsOption.withText('1979'))
        .click(newsletter)
        .expect(newsletter.checked).ok()
        .typeText(register.Address,address)
        .typeText(register.City,city)
        .click(stateSelect)
        .click(stateOption.withText('Georgia'))
        .typeText(register.ZipCode,zipcode)
        .click(country.withText('United States'))
        .typeText(register.MobilePhone,phone)
        .click(register.RegisterButton)
    //Logout
        .click(signOut)
    //Login
        .click(signIn)
        .expect(login.AccountHeader.exists).ok()
        .typeText(login.EmailInput,email)
        .typeText(login.PasswordInput,Password)
        .click(login.SignInButton);

  });
  
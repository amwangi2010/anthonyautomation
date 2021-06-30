import { Selector, ClientFunction } from 'testcafe';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CreateAccountPage from '../pages/CreateAccountPage';
import RegisterPage from '../pages/RegisterPage';
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
        
    //Enter New User Info
        await RegisterPage.userInfo()
    // New User Login
        await LoginPage.logIn();

    });
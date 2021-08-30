import { Selector, ClientFunction } from 'testcafe';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CreateAccountPage from '../pages/CreateAccountPage';
import RegisterPage from '../pages/RegisterPage';
import {envVariables} from '../config/config';
import checkout from '../pages/CheckoutPage';
import { orderData } from '../data/data_helper';

fixture("End to end testing create new account and order an item")
  .page(envVariables.url);

    //Authentication page
    test('End to End flow', async t => {
        await t
        .expect(envVariables.getUrl()).eql(envVariables.url)
        .click(HomePage.signInLink)
        .typeText(CreateAccountPage.emailInput,orderData.emailAddress)
        .click(CreateAccountPage.creatAccountLink)
        
    //Enter New User Info
        await RegisterPage.userInfo()

    // New User Login
        await LoginPage.logIn()
        await HomePage.search('Blouse')
        await checkout.orderInfo();
});
import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import login from '../pages/LoginPage';
import createaccount from '../pages/CreateAccountPage';
import register from '../pages/RegisterPage';
import checkout from '../pages/CheckoutPage';


const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
const dataSet = require('../data/data.json');
var randomNumber = Math.floor(Math.random() * 10000);
var email = 'anthony'+randomNumber+'@test.com';

fixture("Placing new order")
  .page(URL);

    //Authentication page
    dataSet.forEach(data => {
    test('New Orders for created user', async t => {
        await t
    //Login
  .click(register.SignIn)
  .expect(login.AccountHeader.exists).ok()
  .typeText(login.EmailInput,data.email)
  .typeText(login.PasswordInput,data.password)
  .click(login.SignInButton)

 // place order
  .wait(3000)
  .click(checkout.ordersTab)
  .click(checkout.tshirtsTab)
  .hover(checkout.shortSleeveShirt)
  .click(checkout.addToCart)
  .click(checkout.checkoutButton)
  .wait(3000)
  .click(checkout.plusIcon)
  .click(checkout.proceedToCheckout)
  .click(checkout.continueToCheckou)
  .click(checkout.termsOfService)
  .expect(checkout.termsOfService.checked).ok()
  .click(checkout.contToCheckout)
  .click(checkout.payByCheck)
  .click(checkout.confirmOrder)
  .wait(3000)
  .expect(checkout.orderConfirmMessage.exists).ok(); 

    });
});
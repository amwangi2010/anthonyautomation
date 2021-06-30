import register from '../pages/RegisterPage';
import checkout from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import { envVariables } from '../config/config';

var randomNumber = Math.floor(Math.random() * 10000);
var email = 'anthony'+randomNumber+'@test.com';

fixture("Placing new order")
  .page(envVariables.url);
    test('New Orders for created user', async t => {
        await t

    // Login
  .click(register.signIn)
  await LoginPage.logIn()

  // Place Order
  await checkout.orderInfo();

    });
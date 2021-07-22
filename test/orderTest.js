import register from '../pages/RegisterPage';
import checkout from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import { envVariables } from '../config/config';
import HomePage from '../pages/HomePage';
import { orderData } from '../data/data_helper';


fixture("Placing new order")
  .page(envVariables.url);
    test('New Orders for created user', async t => {
        await t

    // Login
  .click(register.signIn)
  await LoginPage.logIn()

  // Place Order
  await HomePage.search('Blouse');
  await checkout.orderInfo();

    });
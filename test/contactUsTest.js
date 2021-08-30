import { Selector, ClientFunction } from 'testcafe';
import {envVariables} from '../config/config';
import ContactUsPage from '../pages/ContactUsPage';

fixture("Contact customer support")
  .page(envVariables.url);

  test('Contact Us test', async t => {
    await t

    //Click Contact Us link, enter details, upload and click send
    await ContactUsPage.contactInfo();
});
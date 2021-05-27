import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import searchresults from '../pages/SearchResultsPage';
import productdetails from '../pages/ProductDetailsPage';

const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
const contactUs = Selector("#contact-link");
const headerLogo = Selector("#header_logo");

fixture("Getting started")
  .page(URL);

  test('URL verification', async t => {
    await t
    .expect(getURL()).eql(URL);
  });

  test.skip('Logo test', async t => {
    await t
    .setTestSpeed(1)
    .expect((headerLogo).exists).ok()
    .click(contactUs);
  });


  test('Search for Blouse', async t => {
    await homepage.search('Blouse');
    await t
    .click(searchresults.productTitle)
    .expect(getURL()).contains('Blouse');

  });

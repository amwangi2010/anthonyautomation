import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import searchresults from '../pages/SearchResultsPage';
import products from '../pages/ProductDetailsPage';

const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);


fixture("Getting started")
  .page(URL);

  test('Click on Blouse', async t => {
    await homepage.search('Blouse');
    await t
    .click(searchresults.productTitle)
    .expect(getURL()).contains('Blouse')
    .click(products.productImage);
  });

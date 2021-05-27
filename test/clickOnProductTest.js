import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import searchresults from '../pages/SearchResultsPage';

const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
const productImage = Selector("#center_column > ul > li > div > div.left-block > div > a.product_img_link > img");

fixture("Getting started")
  .page(URL);

  test('Click on Blouse', async t => {
    await homepage.search('Blouse');
    await t
    .click(searchresults.productTitle)
    .expect(getURL()).contains('Blouse')
    .click(productImage);
  });

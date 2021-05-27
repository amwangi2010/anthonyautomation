import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import searchresults from '../pages/SearchResultsPage';

const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
const tshirtsTab = Selector('#block_top_menu > ul > li:nth-child(3) > a');

fixture("Getting started")
  .page(URL);

  test('Click on T-shirts tab', async t => {
    await t
    .expect(getURL()).eql(URL)
    .click(tshirtsTab)
    .expect(getURL()).contains('category');
  });

import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import searchresults from '../pages/SearchResultsPage';

const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
const dressTab = Selector('#block_top_menu > ul > li:nth-child(2) > a');

fixture("Getting started")
  .page(URL);

  test('Click on Dress tab', async t => {
    await t
    .expect(getURL()).eql(URL)
    .click(dressTab)
    .expect(getURL()).contains('category');
  });

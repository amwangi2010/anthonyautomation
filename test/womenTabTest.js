import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import searchresults from '../pages/SearchResultsPage';

const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
const womenTab = Selector("#block_top_menu > ul > li:nth-child(1) > a");

fixture("Getting started")
  .page(URL);

  test('Click on Women tab', async t => {
    await t
    .expect(getURL()).eql(URL)
    .click(womenTab)
    .expect(getURL()).contains('category');
  });

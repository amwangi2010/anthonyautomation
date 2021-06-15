import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import searchresults from '../pages/SearchResultsPage';
import tabs from '../pages/TabsPage';

const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);
<<<<<<< HEAD

=======
const dressTab = Selector('#block_top_menu > ul > li:nth-child(2) > a'); //<= this should not be in the test file. you should have a page object that has all the selectors for that page
>>>>>>> ced865bd2af7736369ca35635ab4c11b846c4179

fixture("Getting started")
  .page(URL);

  test('Click on Dress tab', async t => {
    await t
    .expect(getURL()).eql(URL)
<<<<<<< HEAD
    .click(tabs.dressTab);
=======
    .click(dressTab)
    .expect(getURL()).contains('category'); // <= this is not really a valid assertion. each of the tabs have the same text at the end of the url
>>>>>>> ced865bd2af7736369ca35635ab4c11b846c4179
  });

import { Selector, ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import searchresults from '../pages/SearchResultsPage';
import tabs from '../pages/TabsPage';

const URL = 'http://automationpractice.com/index.php';
const getURL = ClientFunction(() => window.location.href);


fixture("Getting started")
  .page(URL);

  test('Click on T-shirts tab', async t => {
    await t
    .expect(getURL()).eql(URL)
    .click(tabs.tshirtsTab);
  });

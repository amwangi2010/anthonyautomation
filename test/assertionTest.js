import { Selector } from 'testcafe';
import homepage from '../pages/HomePage';


const URL = 'http://automationpractice.com/index.php';
const searchField = Selector("#search_query_top");

fixture("Getting started")
  .page(URL);

  test.skip('URL verification', async t => {
    await t
    .expect(URL).eql(URL);
  });

  test('Assertion test', async t => {
    await t
    .expect(searchField.value).eql('', 'input is empty')
    .typeText(searchField,"Blouse")
    .expect(searchField.value).eql('Blouse', 'input contains "Blouse"')
    .pressKey('enter');
  });

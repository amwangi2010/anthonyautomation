import {Selector} from 'testcafe';

const URL = 'http://automationpractice.com/index.php';
const searchBox = Selector("#searchbox");
const iconTruck = Selector('#icon-truck');


fixture("Hover test")
.page(URL);

test("Hover Test", async t => {
  await t
  .setTestSpeed(0.01)
  .hover(searchBox)
  .hover(iconTruck);
});

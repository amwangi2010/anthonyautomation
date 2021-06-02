import { Selector, t } from "testcafe";

class HomePage {
  constructor() {
    this.searchBar = Selector("#search_query_top")
    this.contactUsLink = Selector('a').withText('Contact us')
    this.signInLink = Selector('#header > div.nav > div > div > nav > div.header_user_info > a')
    this.accountLink = Selector('a').withText('View my customer account')
    this.signOutLink = Selector('a').withText('Sign out');
  }

  async search(product){
      await t
      .typeText(this.searchBar,product)
      .pressKey('enter')
  }
}
export default new HomePage();

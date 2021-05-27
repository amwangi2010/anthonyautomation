import { Selector } from 'testcafe';

class SearchResultsPage {

  constructor(){
    this.productItem = Selector('div.product-image-container')
    this.productTitle = Selector('div').withText('Blouse')
    //this.product = Selector('div').withText('Blouse')
  }
}
export default new SearchResultsPage();

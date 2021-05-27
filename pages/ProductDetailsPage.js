import {Selector} from 'testcafe';

class ProductDetailsPage{
  constructor() {
    this.productPrice = Selector("span[id='price product-price']").withText('$27.00')
    this.productQuantity = Selector("span[id='quantity-formatted']")
    this.addToCart = Selector("span[id='Add-to-cart']")
  }
}
export default new ProductDetailsPage();

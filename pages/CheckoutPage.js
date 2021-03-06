import {Selector, t} from 'testcafe';


class CheckoutPage{
  constructor() {
    this.ordersTab = Selector('#center_column > div > div:nth-child(1) > ul > li:nth-child(1) > a > span')
    this.tshirtsTab = Selector('#block_top_menu > ul > li:nth-child(3) > a')
    this.blouseShirt = Selector('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
    this.shortSleeveShirt = Selector('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
    this.addToCart = Selector('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')
    this.checkoutButton = Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span')
    this.plusIcon = Selector('#cart_quantity_up_1_1_0_522066 > span > i')
    this.addIcon = Selector('#cart_quantity_up_2_7_0_522066 > span > i')
    this.proceedToCheckout = Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span')
    this.continueToCheckou = Selector('#center_column > form > p > button > span')
    this.termsOfService = Selector('#cgv')
    this.contToCheckout = Selector('#form > p > button > span')
    this.payByCheck = Selector('#HOOK_PAYMENT > div:nth-child(2) > div > p > a')
    this.confirmOrder = Selector('#cart_navigation > button > span')
    this.searchBar = Selector('#search_query_top')
    this.orderConfirmMessage = Selector('#center_column > p.alert.alert-success').withText('Your order on My Store is complete.');
  }
  async orderInfo(){
    await t
  .hover(this.blouseShirt)
  .click(this.addToCart)
  .click(this.checkoutButton)
  .click(this.addIcon)
  .click(this.proceedToCheckout)
  .click(this.continueToCheckou)
  .click(this.termsOfService)
  .expect(this.termsOfService.checked).ok()
  .click(this.contToCheckout)
  .click(this.payByCheck)
  .click(this.confirmOrder)
  .expect(this.orderConfirmMessage.exists).ok(); 
  }
}
export default new CheckoutPage();

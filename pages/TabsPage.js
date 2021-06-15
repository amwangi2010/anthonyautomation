import { Selector, t } from "testcafe";

class TabsPage{
 constructor (){
    this.dressTab = Selector('#block_top_menu > ul > li:nth-child(2) > a')
    this.tshirtsTab = Selector('#block_top_menu > ul > li:nth-child(3) > a')
    this.womenTab = Selector("#block_top_menu > ul > li:nth-child(1) > a");

 }
}
export default new TabsPage();
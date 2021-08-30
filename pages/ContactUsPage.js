import { Selector, t } from "testcafe";
import { orderData } from "../data/data_helper";
import HomePage from "./HomePage";

class ContactUsPage{
    constructor(){
        this.contactUsLink = Selector('a').withText('Contact us')
        this.subjectHeading = Selector('#id_contact')
        this.emailInput = Selector('#email')
        this.orderInput= Selector('#id_order')
        this.attachFile = Selector('#fileUpload')
        this.chooseFileBtn = Selector('#fileUpload')
        this.textArea = Selector('#message')
        this.sendButton = Selector('button').withText('Send');

    }
    async contactInfo(){
        await t
        //User Click Contact Us link enters info click send
        .click(HomePage.contactUsLink)
        .click(this.subjectHeading)
        .click(this.subjectHeading.find('option').withText('Customer service'))
        .click(this.emailInput)
        .typeText(this.emailInput,orderData.email)
        .click(this.orderInput)
        .typeText(this.orderInput,orderData.orderReference)
        .setFilesToUpload(this.attachFile,'../../upload/File.jpg')
        .click(this.textArea)
        .typeText(this.textArea,'This is a test. Please ignore')
        .click(this.chooseFileBtn)
        .click(this.sendButton);
     }
}

export default new ContactUsPage();
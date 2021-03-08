import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  /* async getTitleText(): Promise<string> {
    return element(by.css('.navbar-brand')).getText();
  } */
  async sendKeysToInputLastNameByName(text: string) {
    return await element(by.name('nom')).sendKeys(text);
  }
  async sendKeysToInputFirstNameByName(text: string) {
    return await element(by.name('prenom')).sendKeys(text);
  }

  async clickOnSaveBtn() {
    // return await element(by.buttonText('Ajouter')).click();
    return await element(by.xpath("//div[3]/button")).click();
  }

  async checkAllInserts() {
    let a = await element.all(by.css('.list-group li span')).count();
    return a;
  }

  async getTextContentByIndex(spanIndex: number) {
    let list = element.all(by.css('.list-group li span'));
    return list.get(spanIndex).getText();
  }

  async clickOnDeleteBtn(btnIndex : number){
    let list = element.all(by.css('.list-group li button'));
    return list.get(btnIndex).click();
  }
}

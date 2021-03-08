import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();

    await browser.waitForAngularEnabled(true);
    await browser.get('/home');
    await browser.driver.manage().window().maximize();
  });

  /* it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toContain('Session Angular');
  }); */

  it('should add values to the ngForm', async () => {
    await browser.get('/template-form');
    await page.sendKeysToInputLastNameByName('Wick');
    await page.sendKeysToInputFirstNameByName('John');
    await page.clickOnSaveBtn();
    expect(await page.checkAllInserts()).toBeGreaterThan(0);
    expect(await page.checkAllInserts()).toBe(1);
  });

  it('should add values to the ngForm', async () => {
    await browser.get('/template-form');

    await page.sendKeysToInputLastNameByName('Wick');

    await page.sendKeysToInputFirstNameByName('John');

    await page.clickOnSaveBtn();
    await page.sendKeysToInputLastNameByName('Baton');

    await page.sendKeysToInputFirstNameByName('Jean');

    await page.clickOnSaveBtn();

    expect(await page.getTextContentByIndex(0)).toContain('Wick John');
    expect(await page.getTextContentByIndex(1)).toContain('Baton Jean');

    // expect(await page.checkAllInserts()).toBeGreaterThan(0);

    expect(await page.checkAllInserts()).toBe(2);
    await page.clickOnDeleteBtn(1);
    await page.clickOnDeleteBtn(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});

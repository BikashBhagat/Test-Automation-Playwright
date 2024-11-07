// @ts-check
const { test, expect } = require('@playwright/test');

test('@web Test kaggle Page', async ({ page }) => {
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Google');
  console.log(page.title());
  await page.locator("[title='Search']").fill("kaggle");
  await page.keyboard.press("Enter");
  await expect(page.locator('div.BYM4Nd')).toContainText('https://www.kaggle.com');
  await page.locator("a:has-text('https://www.kaggle.com')").click();
  // await expect(page).toHaveTitle('Kaggle');
  await expect(page.locator('.sc-fyXIqh')).toBeVisible()
  await page.locator('div.sc-beXjKf.iHDtxI > div:nth-child(1)>a').click()
  await expect(page.locator('.sc-jCbFiK')).toContainText('Welcome!');
  await page.locator('div.sc-hDyOxz.mPkQV > button:nth-child(2) > span').click();
  await page.locator('[name="email"]').fill('bikash@gamil.com');
  await page.locator('[name="password"]').fill('Bikash@123');
  await page.locator('button.sc-ZubPq.ccBuHk > span').click();
  // Validate the error Message in the web page 
  await expect(page.locator('p.sc-dENhDJ.fTZFV')).toContainText('incorrect');

  

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

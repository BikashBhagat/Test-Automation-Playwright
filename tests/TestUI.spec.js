const { test, expect }= require('@playwright/test');

test('@web UI Buttons Test', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
  // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle('Google');
    console.log(await page.title());
    // fill the user id and password text box
    await page.locator("[name='username']").fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("learning");
    // Select value from dropdown
    await page.locator("select.form-control").selectOption('consult');
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect ( page.locator(".radiotextsty").last()).toBeChecked();
    // Click the sign in button
    await page.locator("#signInBtn").click();
    await page.locator("#signInBtn").click();
    await page.locator('#terms').click();
    await expect (page.locator('#terms')).toBeChecked()
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await page.locator(".card-title a").first().waitFor();
    console.log(await page.locator(".card-title a").allTextContents());
   


});

test('Newpage Control', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle('Google');
    console.log(await page.title());
    // fill the user id and password text box
     
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("[href*='documents-request']").click(),

    ]); // We want to run both the step in async manner so did not added wait
    // Promise will return new page in list format
    const text = await newPage.locator('p.red').textContent();
    console.log(text);
    // split the text to get the domain name
    const domain = text.split("@")[1].split(" ")[0];
    console.log(domain);
    await page.locator("[name='username']").fill(domain);

});
 const {test, expect} = require('@playwright/test');

 test('@playwright own method', async({page})=>{
    page.goto('https://rahulshettyacademy.com/angularpractice/');

    //getByLable method
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Male');

    //get by placeholder method
    await page.getByPlaceholder('Password').fill('Smasher@123')
    //get by role
    await page.getByRole('button',{name: 'Submit'}).click();
    // get by text
    await expect(page.getByText('Success! The Form has been submitted successfully!.')).toBeVisible();
    await page.getByRole('link', {name: 'Shop'} ).click();
    await page.locator('.card.h-100').filter({hasText:'Blackberry'}).getByRole('button').click();


 });
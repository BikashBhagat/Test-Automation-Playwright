const {test, expect} = require("@playwright/test");

const {LoginPage} = require("../PageObject/LoginPage")
const {DashboardPage} = require("../PageObject/DashboardPage")

test.only('@web Test RahulShettyecommerce website', async ({page}) => {
    const item = 'ADIDAS ORIGINAL';
    var  price;
    const username = 'smasherrock33@gmail.com';
    const password = 'Smasher@123';
    const loginPage = new LoginPage(page);
    loginPage.launchURL()
    loginPage.doLogIn(username,password)
    const dasboardPage  = new DashboardPage(page);
    dasboardPage.addToCart(item)
    dasboardPage.gotoCart()
    


    
   
    // const listOfItem  = await page.locator('.card-body b').allTextContents();
    // // User dynamically select the product and add it in cart
    // for (let i = 0; i < listOfItem.length; i++) {
    //     if (await page.locator('.card-body b').nth(i).textContent()==item)
    //         {
    //             console.log(await page.locator('.card-body div.text-muted').nth(i).textContent());
    //             price = await page.locator('.card-body div.text-muted').nth(i).textContent();
    //             await page.locator('.card-body i.fa-shopping-cart').nth(i).click();
    //             break;
    //         }
    // }
    //user wait for the success message
    // await expect (page.getByText('Product Added To Cart')).toBeVisible();
    // // user click in the cart button
    // await page.locator("[routerlink*='cart']").click();
    // user validate the cart item
    await expect( page.locator('.cartSection h3')).toContainText(item);

    await page.locator('div.subtotal button').click();
    await expect(page.locator('div.item__title')).toContainText(item);
    await expect(page.locator('div.item__price')).toContainText(price);
    await expect(page.locator('div.item__quantity')).toContainText('1');

    //select expiry date
    await page.locator('select.ddl').first().selectOption('08');
    await page.locator('select.ddl').last().selectOption('28');

    //enter CVV
    await page.locator('input.txt').nth(1).fill('456');
    await page.locator('input.txt').nth(2).fill('Bikash');
    
    const countryText = page.locator('.form-group input');
    // await countryText.fill('Ind');
    await countryText.pressSequentially('Ind');
    await page.locator('section.ta-results button').first().waitFor();
    const countryDropdown = await page.locator('section.ta-results button').allTextContents();
    // Dynamically select India as Country
    for (let i = 0; i < countryDropdown.length; i++) {
        if (await page.locator('section.ta-results button').nth(i).textContent()==' India')
            {
                await page.locator('section.ta-results button').nth(i).click();
                break;
            }
    }
    // Click the submit
    await page.locator('.action__submit').click();
    
    await expect(page.locator('.hero-primary')).toContainText('Thankyou for the order.');
    console.log(await page.locator('label.ng-star-inserted').textContent());

});
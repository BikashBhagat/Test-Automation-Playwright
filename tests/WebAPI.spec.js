const {test, expect, request} = require("@playwright/test");
const {APIUtils} = require('./utils/APIUtils');
const exp = require("constants");
let orderPayload ={orders: [{country: "Cuba", productOrderedId: "6581ca399fd99c85e8ee7f45"}]}
let loginpayload ={userEmail:'smasherrock33@gmail.com',userPassword:'Smasher@123'}
let response;
test.beforeAll('login with APIs', async()=>
    {
        const apiContext = await request.newContext();
        const apiUtils = new APIUtils(apiContext,loginpayload);
        response = await apiUtils.createOrder(orderPayload);
        

    });


test('@API Skip Login with webAPI', async ({browser}) => {
    const item = 'ADIDAS ORIGINAL';
    var  price;
    const context = await browser.newContext();
    const page = await context.newPage();
    

    // User need to pass this token for order
    page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    },response.token);
    // user goes to the ecommerce page
    await page.goto('https://rahulshettyacademy.com/client');
    // user validate the page its landed
    expect (await page.title()).toContain("Let's Shop");
    // User move to order
    await page.locator("[routerlink*='myorders']").click();
    const orderDetails = await page.locator('table.table tbody tr th').first().textContent();
    expect(orderDetails).toContain(response.orderId)

});
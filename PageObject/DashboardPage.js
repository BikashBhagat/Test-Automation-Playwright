class DashboardPage{

    constructor(page){
        this.page=page;
        this.listOfItem = page.locator('.card-body b');
        this.price = page.locator('.card-body div.text-muted');
        this.cartButton = page.locator('.card-body i.fa-shopping-cart');
        this.cartHyperlink = page.locator("[routerlink*='cart']");
        
    }

    async addToCart(item){
        await this.listOfItem.first().waitFor()
    const listOfItem  = await this.listOfItem.allTextContents();
    // User dynamically select the product and add it in cart
    for (let i = 0; i < listOfItem.length; i++) {
        if (await this.page.locator('.card-body b').nth(i).textContent()==item)
            {
                console.log(await this.price.nth(i).textContent());
                price = await this.page.locator('.card-body div.text-muted').textContent();
                await this.page.locator('.card-body i.fa-shopping-cart').nth(i).click();
                break;
            }
    }
    //user wait for the success message
    await expect (page.getByText('Product Added To Cart')).toBeVisible();
    }

    async gotoCart(){
        await this.cartHyperlink.click()
    }
    
}
export {DashboardPage};
class LoginPage {

    constructor(page){
        this.page = page;
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.loginButton = page.locator('#login');

    }

    async launchURL(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async doLogIn(username,password){
        await this.username.fill(username);
        await this.password.type(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }
}

export {LoginPage};
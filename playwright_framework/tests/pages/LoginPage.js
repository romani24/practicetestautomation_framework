class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('id=username');
        this.password = page.locator('xpath=//input[@id="password"]');
        this.loginButton = page.locator('#submit');
        this.successMsg = page.locator('xpath=//h1');
        this.errorMsg = page.locator('id=error');
    }

    async launchURL(url) {
        await this.page.goto(url);
    }
    async enterUsername(username) {
        await this.username.fill(username);
    }
    async enterPassword(password) {
        await this.password.fill(password);
    }
    async clickLogin() {
        await this.loginButton.click();
    }
}
module.exports = {LoginPage};
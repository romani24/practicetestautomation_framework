class ExceptionsPage {
    constructor(page) {
        this.page = page;
        this.addButton = page.locator('id=add_btn');
        this.row2Confirmation_Msg = page.locator('id=confirmation');
    }
    async launchURL(url) {
        await this.page.goto(url);
    }
    async clickAddButton() {
        await this.addButton.click();
    }
    async getRow2ConfirmationMessage() {
        return await this.row2Confirmation_Msg.textContent();
    }

}
module.exports = {ExceptionsPage};
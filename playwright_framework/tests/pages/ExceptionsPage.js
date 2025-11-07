class ExceptionsPage {
    constructor(page) {
        this.page = page;
        this.addButton = page.locator('id=add_btn');
        this.editButton = page.locator('id=edit_btn');
        this.saveButton = page.locator('id=save_btn');
        this.saveButton2 = page.locator('xpath=//*[@id="row2"]/button[@id="save_btn"]');
        this.inputField = page.locator('xpath=//*[@id="row1"]/input');
        this.inputField2 = page.locator('xpath=//*[@id="row2"]/input');
        this.confirmationMsg = page.locator('id=confirmation');
    }

    async launchURL(url) {
        await this.page.goto(url);
    }
    async clickAddButton() {
        await this.addButton.click();
    }
    async clickEditButton() {
        await this.editButton.click();
    }
    async clickSaveButton() {
        await this.saveButton.click();
    }
    async clickSaveButton2() {
        await this.saveButton2.click();
    }
    async enterInputField(text) {
        await this.inputField.fill(text);
    }
    async enterInputField2(text) {
        await this.inputField2.fill(text);
    }
    async getConfirmationMessage() {
        return await this.confirmationMsg.textContent();
    }

}
module.exports = {ExceptionsPage};
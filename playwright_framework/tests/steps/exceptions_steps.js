const {createBdd} = require('playwright-bdd')
const {ExceptionsPage} = require('../pages/ExceptionsPage');
const { expect } = require('@playwright/test');
const {Given, When, Then, Before, After} = createBdd()


let exceptionsPage
Before(async ({page}) => {
    exceptionsPage = new ExceptionsPage(page);
})

Given('I navigate to the {string}', async ({}, url) => {
    await exceptionsPage.launchURL(url);
});
When('I click on the add button', async ({}, arg) => {
    await exceptionsPage.clickAddButton(arg);
});  
When('I click on the save button', async ({}, arg) => {
    await exceptionsPage.clickSaveButton(arg);
});  
When('I click on the save button2', async ({}, arg) => {
    await exceptionsPage.clickSaveButton2(arg);
});  
When('I click on the edit button', async ({}, arg) => {
    await exceptionsPage.clickEditButton(arg);
});
When('I enter a second input field {string}', async ({}, arg) => {
    await exceptionsPage.enterInputField2(arg);
});
When('I click on first input field {string}', async ({}, arg) => {
    await exceptionsPage.enterInputField(arg);
});
Then('I should see the message {string}', async ({}, message) => {
    const confirmationMessage = await exceptionsPage.getConfirmationMessage();
    expect(confirmationMessage).toBe(message);
})
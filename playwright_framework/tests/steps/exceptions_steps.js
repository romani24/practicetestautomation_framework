const {createBdd} = require('playwright-bdd')
const {ExceptionsPage} = require('../pages/ExceptionsPage');
const { expect } = require('@playwright/test');
const {Given, When, Then, Before, After} = createBdd()


let exceptionsPage
Before(async ({page}) => {
    exceptionsPage = new ExceptionsPage(page);
})

Given('I navigate to {string}', async ({}, url) => {
    await exceptionsPage.launchURL(url);
})
Given('I navigate to the {string}', async ({}, url) => {
    await exceptionsPage.launchURL(url);
});
When('I click on the add button', async ({}, arg) => {
    await exceptionsPage.clickAddButton(arg);
})  
Then('I should see the message {string}', async ({}, message) => {
    const confirmationMessage = await exceptionsPage.getRow2ConfirmationMessage();
    expect(confirmationMessage).toBe(message);
})
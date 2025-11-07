const {createBdd} = require('playwright-bdd')
const {LoginPage} = require('../pages/LoginPage');
const { expect } = require('@playwright/test');
const {Given, When, Then, Before, After} = createBdd()

let loginPage
Before(async ({page}) => {
    loginPage = new LoginPage(page);
})

Given('I enter a username {string}', async ({}, arg) => {
    await loginPage.enterUsername(arg);
})
Given('I enter a password {string}', async ({}, arg) => {
    await loginPage.enterPassword(arg);
})
When('I click the login button', async ({}) => {
    await loginPage.clickLogin();
})
Then('I should see the page containing {string}', async ({}, message) => {
    await expect(loginPage.successMsg).toContainText(message)
})      
Then('I should see error message {string}', async ({}, message) => {
    await expect(loginPage.errorMsg).toContainText(message)
})



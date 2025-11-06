// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Test case 1: Positive LogIn test', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
    await And('I enter a username "student"'); 
    await And('I enter a password "Password123"'); 
    await When('I click the login button'); 
    await Then('I should see the page containing "Logged In Successfully"'); 
  });

  test('Test case 2: Negative username test', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
    await And('I enter a username "incorrectUser"'); 
    await And('I enter a password "Password123"'); 
    await When('I click the login button'); 
    await Then('I should see error message "Your username is invalid!"'); 
  });

  test('Test case 3: Negative password test', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
    await And('I enter a username "student"'); 
    await And('I enter a password "incorrectPassword"'); 
    await When('I click the login button'); 
    await Then('I should see error message "Your password is invalid!"'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter a username \"student\"","stepMatchArguments":[{"group":{"start":19,"value":"\"student\"","children":[{"start":20,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I enter a password \"Password123\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Password123\"","children":[{"start":20,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see the page containing \"Logged In Successfully\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Logged In Successfully\"","children":[{"start":34,"value":"Logged In Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I enter a username \"incorrectUser\"","stepMatchArguments":[{"group":{"start":19,"value":"\"incorrectUser\"","children":[{"start":20,"value":"incorrectUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter a password \"Password123\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Password123\"","children":[{"start":20,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click the login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Your username is invalid!\"","children":[{"start":28,"value":"Your username is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"And I enter a username \"student\"","stepMatchArguments":[{"group":{"start":19,"value":"\"student\"","children":[{"start":20,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"And I enter a password \"incorrectPassword\"","stepMatchArguments":[{"group":{"start":19,"value":"\"incorrectPassword\"","children":[{"start":20,"value":"incorrectPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click the login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see error message \"Your password is invalid!\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Your password is invalid!\"","children":[{"start":28,"value":"Your password is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
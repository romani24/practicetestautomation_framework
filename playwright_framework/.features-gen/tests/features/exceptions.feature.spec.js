// Generated from: tests\features\exceptions.feature
import { test } from "playwright-bdd";

test.describe('Exceptions Functionality', () => {

  test('Test case 1: NoSuchElementException', async ({ Given, When, Then }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
    await When('I click on the add button'); 
    await Then('I should see the message "Row 2 was added"'); 
  });

  test('Test case 2: ElementNotInteractableException', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
    await When('I click on the add button'); 
    await And('I enter a second input field "12345"'); 
    await And('I click on the save button2'); 
    await Then('I should see the message "Row 2 was saved"'); 
  });

  test('Test case 3: InvalidElementStateException', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
    await When('I click on the edit button'); 
    await And('I click on first input field "Test Input"'); 
    await And('I click on the save button'); 
    await Then('I should see the message "Row 1 was saved"'); 
  });

  test('Test case 4: StaleElementReferenceException', async ({ Given }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
  });

  test('Test case 5: TimeoutException', async ({ Given }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\exceptions.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on the add button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the message \"Row 2 was added\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Row 2 was added\"","children":[{"start":26,"value":"Row 2 was added","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click on the add button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I enter a second input field \"12345\"","stepMatchArguments":[{"group":{"start":29,"value":"\"12345\"","children":[{"start":30,"value":"12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click on the save button2","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the message \"Row 2 was saved\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Row 2 was saved\"","children":[{"start":26,"value":"Row 2 was saved","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click on the edit button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I click on first input field \"Test Input\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Test Input\"","children":[{"start":30,"value":"Test Input","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And I click on the save button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should see the message \"Row 1 was saved\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Row 1 was saved\"","children":[{"start":26,"value":"Row 1 was saved","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
// Generated from: tests\features\exceptions.feature
import { test } from "playwright-bdd";

test.describe('Exceptions Functionality', () => {

  test('Test case 1: NoSuchElementException', async ({ Given }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
  });

  test('Test case 2: ElementNotInteractableException', async ({ Given }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
  });

  test('Test case 3: InvalidElementStateException', async ({ Given }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
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
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I navigate to the \"https://practicetestautomation.com/practice-test-exceptions/\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://practicetestautomation.com/practice-test-exceptions/\"","children":[{"start":19,"value":"https://practicetestautomation.com/practice-test-exceptions/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
// Generated from: tests\features\exceptions.feature
import { test } from "playwright-bdd";

test.describe('Exceptions Functionality', () => {

  test('Test case 1: NoSuchElementException', async ({ Given, When, Then }) => { 
    await Given('I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"'); 
    await When('I click on the add button'); 
    await Then('I should see the message "Row 2 was added"'); 
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
]; // bdd-data-end
# Practice Test Automation - Playwright BDD Framework

A Playwright-based test automation framework using BDD (Behavior-Driven Development) with Gherkin syntax for testing the [Practice Test Automation](https://practicetestautomation.com/) website.

## 📁 Project Structure

```
playwright_framework/
├── package.json              # Project dependencies and scripts
├── playwright.config.js      # Playwright configuration
├── playwright-report/        # HTML test reports
├── test-results/             # Test execution results
└── tests/
    ├── features/             # Gherkin feature files
    │   ├── exceptions.feature
    │   └── login.feature
    ├── pages/                # Page Object Model classes
    │   ├── ExceptionsPage.js
    │   └── LoginPage.js
    └── steps/                # Step definitions
        ├── exceptions_steps.js
        └── login_steps.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/romani24/PracticeTestAutomation_PlaywrightFramework.git
   cd practicetestautomation_framework/playwright_framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

### Generate BDD step definitions
Before running tests, generate the spec files from feature files:
```bash
npx bddgen
```

### Run all tests
```bash
npx playwright test
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

### Run tests in headed mode (see the browser)
```bash
npx playwright test --headed
```

### Run a specific feature file
```bash
npx playwright test tests/features/login.feature.spec.js
```

### View test report
```bash
npx playwright show-report
```

## 📝 Writing Tests

### Feature Files (Gherkin)
Feature files are located in `tests/features/` and use Gherkin syntax:

```gherkin
Feature: Login Functionality

  Scenario: Successful login
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter a username "student"
    And I enter a password "Password123"
    When I click the login button
    Then I should see the success message
```

### Step Definitions
Step definitions are located in `tests/steps/` and map Gherkin steps to Playwright actions:

```javascript
const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({}, url) => {
    await page.goto(url);
});
```

### Page Objects
Page objects are located in `tests/pages/` and encapsulate page-specific selectors and actions:

```javascript
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#submit');
    }

    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }
}
```

## 🎯 Test Scenarios

### Login Feature
- Successful login with valid credentials

### Exceptions Feature
- **Test case 1**: NoSuchElementException - Verify row appears after clicking Add
- **Test case 2**: ElementNotInteractableException - Enter text and save in second row
- **Test case 3**: InvalidElementStateException - Edit and save first input field
- **Test case 4**: StaleElementReferenceException - Verify element removal
- **Test case 5**: TimeoutException - Wait for delayed element

## 🛠️ Technologies Used

- [Playwright](https://playwright.dev/) - End-to-end testing framework
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) - BDD support for Playwright
- [Gherkin](https://cucumber.io/docs/gherkin/) - Business-readable specification language

## 📊 Reports

After running tests, HTML reports are generated in the `playwright-report/` directory. Open `playwright-report/index.html` in a browser to view detailed test results.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-test`)
3. Commit your changes (`git commit -m 'Add new test scenario'`)
4. Push to the branch (`git push origin feature/new-test`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes as part of practicing test automation skills.

---

**Author:** [romani24](https://github.com/romani24)

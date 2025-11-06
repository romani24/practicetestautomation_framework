Feature: Login Functionality

The login functionality is a crucial aspect of any wev application.


  Scenario: Test case 1: Positive LogIn test
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter a username "student"
    And I enter a password "Password123"
    When I click the login button
    Then I should see the page containing "Logged In Successfully"

  Scenario: Test case 2: Negative username test
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter a username "incorrectUser"
    And I enter a password "Password123"
    When I click the login button
    Then I should see error message "Your username is invalid!"

  Scenario: Test case 3: Negative password test
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter a username "student"
    And I enter a password "incorrectPassword"
    When I click the login button
    Then I should see error message "Your password is invalid!"

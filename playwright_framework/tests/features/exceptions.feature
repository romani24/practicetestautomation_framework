Feature: Exceptions Functionality

  Scenario: Test case 1: NoSuchElementException 
    Given I navigate to the "https://practicetestautomation.com/practice-test-exceptions/" 
    When I click on the add button 
    Then I should see the message "Row 2 was added" 

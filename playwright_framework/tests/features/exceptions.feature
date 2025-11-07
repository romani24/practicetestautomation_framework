Feature: Exceptions Functionality

  Scenario: Test case 1: NoSuchElementException 
    Given I navigate to the "https://practicetestautomation.com/practice-test-exceptions/" 
    When I click on the add button 
    Then I should see the message "Row 2 was added"

  Scenario: Test case 2: ElementNotInteractableException
    Given I navigate to the "https://practicetestautomation.com/practice-test-exceptions/" 
    When I click on the add button 
    And I enter a second input field "12345"
    And I click on the save button2
    Then I should see the message "Row 2 was saved"

  Scenario: Test case 3: InvalidElementStateException
    Given I navigate to the "https://practicetestautomation.com/practice-test-exceptions/" 
    When I click on the edit button
    And I click on first input field "Test Input"
    And I click on the save button
    Then I should see the message "Row 1 was saved"

  Scenario: Test case 4: StaleElementReferenceException 
    Given I navigate to the "https://practicetestautomation.com/practice-test-exceptions/" 
    #Open page
    #Find the instructions text element
    #Push add button
    #Verify instruction text element is no longer displayed


  Scenario: Test case 5: TimeoutException
    Given I navigate to the "https://practicetestautomation.com/practice-test-exceptions/"
    #Open page
    #Click Add button
    #Wait for 3 seconds for the second input field to be displayed
    #Verify second input field is displayed    
    

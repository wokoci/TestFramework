Feature: Ebay logo loads home page


  Scenario: Clicking on logo always brings user back to home page
    Given I am on the ebay electronics page
    When I click on the ebay logo
    Then I am navigated to the home page
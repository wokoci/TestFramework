Feature: Ebay Home Page Scenarios

  Scenario: Navigate to Advanced search
    Given I am on the ebay home page
    When I click on advanced link
    Then I am navigated to the advanced page

  Scenario: Search for Iphone returns
    Given I am on the ebay home page
    When I search for 'iphone 11'
    Then I can verify there are more than 1000 results displayed


  Scenario: Search for toy cars
    Given I am on the ebay home page
    When I search for 'toy car'
    Then I can verify there are more than 2000 results displayed


  Scenario: search for soap in Baby Category returns results
    Given I am on the ebay home page
    When I search for 'soap' in 'baby category'
    Then I can verify there are more than 2000 results displayed


  Scenario: I run Advanced search
    Given I am on the ebay home page
    And I click on Advanced
    When I perform advanced search
      | keyword    | exclude | min | max |
      | Mac laptop | desktop | 700 | 900 |
    Then I can verify there are more than 3 results from advanced search

  @P500
  Scenario Outline: Ebay home page links
    Given I am on the ebay home page
    When I click on '<link>'
    Then I can validate '<url>' and '<title>' are displayed
    Examples:
      | link        | url                                                | title        |
      | Electronics | https://www.ebay.co.uk/b/Electronics/bn_7000259660 | Electronics  |
      | Fashion     | https://www.ebay.co.uk/b/Fashion/bn_7000259675     | Fashion      |
      | Toys        | https://www.ebay.co.uk/b/Toys-Games/220/bn_1841704 | Toys & Games |

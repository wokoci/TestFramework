$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Ebay_Advanced_Search.feature");
formatter.feature({
  "name": "Ebay Home Page Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Navigate to Advanced search",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on advanced link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_click_on_advanced_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am navigated to the advanced page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_navigated_to_the_advanced_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for Iphone returns",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \u0027iphone 11\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_search_for_iphone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can verify there are more than 1000 results displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_can_verify_there_are_more_than_results_displayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for toy cars",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \u0027toy car\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_search_for_iphone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can verify there are more than 2000 results displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_can_verify_there_are_more_than_results_displayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "search for soap in Baby Category returns results",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \u0027soap\u0027 in \u0027baby category\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_search_for_in(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can verify there are more than 2000 results displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_can_verify_there_are_more_than_results_displayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I run Advanced search",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Advanced",
  "keyword": "And "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_click_on_Advanced()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform advanced search",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_perform_advanced_search(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can verify there are more than 3 results from advanced search",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_can_verify_there_are_more_than_results_from_advanced_search(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Ebay home page links",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on \u0027\u003clink\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I can validate \u0027\u003curl\u003e\u0027 and \u0027\u003ctitle\u003e\u0027 are displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "link",
        "url",
        "title"
      ]
    },
    {
      "cells": [
        "Home \u0026 Garden",
        "https://www.ebay.co.uk/b/Home-Garden/bn_7000259670",
        "Home \u0026 Garden"
      ]
    },
    {
      "cells": [
        "Fashion",
        "https://www.ebay.co.uk/b/Fashion/bn_7000259675",
        "Fashion"
      ]
    },
    {
      "cells": [
        "Toys",
        "https://www.ebay.co.uk/b/Toys-Games/220/bn_1841704",
        "Toys \u0026 Games"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Ebay home page links",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \u0027Home \u0026 Garden\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can validate \u0027https://www.ebay.co.uk/b/Home-Garden/bn_7000259670\u0027 and \u0027Home \u0026 Garden\u0027 are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_can_validate_and_are_displayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Ebay home page links",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \u0027Fashion\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can validate \u0027https://www.ebay.co.uk/b/Fashion/bn_7000259675\u0027 and \u0027Fashion\u0027 are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_can_validate_and_are_displayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Ebay home page links",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \u0027Toys\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can validate \u0027https://www.ebay.co.uk/b/Toys-Games/220/bn_1841704\u0027 and \u0027Toys \u0026 Games\u0027 are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_can_validate_and_are_displayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:features/Ebay_Home.feature");
formatter.feature({
  "name": "Ebay logo loads home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Clicking on logo always brings user back to home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the ebay electronics page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayHomeSteps.iAmOnTheEbayElectronicsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the ebay logo",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayHomeSteps.iClickOnTheEbayLogo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayHomeSteps.iAmNavigatedToTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
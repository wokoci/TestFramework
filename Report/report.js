$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Ebay_Advanced_Search.feature");
formatter.feature({
  "name": "Ebay Home Page Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Navigate to Advanced search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@access"
    }
  ]
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
formatter.uri("file:features/Ebay_Home.feature");
formatter.feature({
  "name": "Ebay logo loads home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Clicking on logo always brings user back to home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@access"
    }
  ]
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
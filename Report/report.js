$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Ebay_Home_Page.feature");
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
      "name": "@P111"
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
  "location": "steps.EbayHomePageSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on advanced link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_click_on_advanced_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am navigated to the advanced page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_am_navigated_to_the_advanced_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
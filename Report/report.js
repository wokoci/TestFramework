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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element reference of \u003coption\u003e is stale; either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027FVFXM15VHV2F\u0027, ip: \u0027fe80:0:0:0:1812:8001:e2b3:1160%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 97.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220216172458, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:processID: 7779, moz:profile: /var/folders/2k/wshrv09d3gg..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 20.6.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 632f41e1-5341-443d-b5c5-9583e8e198bc\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\n\tat steps.EbayAdvancedSearchSteps.i_search_for_in(EbayAdvancedSearchSteps.java:77)\n\tat ✽.I search for \u0027soap\u0027 in \u0027baby category\u0027(file:///Users/jeffreyw/projects/side%20project/forEOYR/TestFramework/features/Ebay_Advanced_Search.feature:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "I can verify there are more than 2000 results displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayAdvancedSearchSteps.i_can_verify_there_are_more_than_results_displayed(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
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
        "Home \u0026 garden"
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
  "name": "I can validate \u0027https://www.ebay.co.uk/b/Home-Garden/bn_7000259670\u0027 and \u0027Home \u0026 garden\u0027 are displayed",
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
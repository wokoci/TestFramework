$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Ebay_Home_Page.feature");
formatter.feature({
  "name": "Ebay Home Page Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Ebay home page links",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@P500"
    }
  ]
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
        "Electronics",
        "https://www.ebay.co.uk/b/Electronics/bn_7000259660",
        "Electronics"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@P500"
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
  "name": "I click on \u0027Electronics\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can validate \u0027https://www.ebay.co.uk/b/Electronics/bn_7000259660\u0027 and \u0027Electronics\u0027 are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_can_validate_and_are_displayed(java.lang.String,java.lang.String)"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@P500"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Cup.local\u0027, ip: \u00272a02:8084:8081:a200:531:147b:ca6b:cbd5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002711.0.9\u0027\nDriver info: driver.version: SafariDriver\nremote stacktrace: \n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:81)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:63)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:41)\n\tat drivers.DriverFactory.lambda$static$2(DriverFactory.java:31)\n\tat drivers.DriverFactory.getDriver(DriverFactory.java:49)\n\tat steps.Common_steps.selectBrowser(Common_steps.java:41)\n\tat steps.Common_steps.setUp(Common_steps.java:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on \u0027Fashion\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can validate \u0027https://www.ebay.co.uk/b/Fashion/bn_7000259675\u0027 and \u0027Fashion\u0027 are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_can_validate_and_are_displayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\n\tat steps.Common_steps.tearDown(Common_steps.java:23)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Ebay home page links",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@P500"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Cup.local\u0027, ip: \u00272a02:8084:8081:a200:531:147b:ca6b:cbd5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002711.0.9\u0027\nDriver info: driver.version: SafariDriver\nremote stacktrace: \n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:81)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:63)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:41)\n\tat drivers.DriverFactory.lambda$static$2(DriverFactory.java:31)\n\tat drivers.DriverFactory.getDriver(DriverFactory.java:49)\n\tat steps.Common_steps.selectBrowser(Common_steps.java:41)\n\tat steps.Common_steps.setUp(Common_steps.java:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "I am on the ebay home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_am_on_the_ebay_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on \u0027Toys\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_click_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can validate \u0027https://www.ebay.co.uk/b/Toys-Games/220/bn_1841704\u0027 and \u0027Toys \u0026 Games\u0027 are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.EbayHomePageSteps.i_can_validate_and_are_displayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\n\tat steps.Common_steps.tearDown(Common_steps.java:23)\n",
  "status": "failed"
});
});
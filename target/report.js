$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/Onedlist.feature");
formatter.feature({
  "name": "Adding Customer ID",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate Customer ID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add customer",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detailsonedlist",
  "rows": [
    {
      "cells": [
        "fnamea",
        "lnamea",
        "test1@gmail.com",
        "chennai",
        "367895678"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_detailsonedlist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify customer ID generated for entered details",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_customer_ID_generated_for_entered_details()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/Onedmap.feature");
formatter.feature({
  "name": "Adding Customer ID",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate Customer ID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add customer",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detailsonedmap",
  "rows": [
    {
      "cells": [
        "fname",
        "fnamea"
      ]
    },
    {
      "cells": [
        "lname",
        "lnamea"
      ]
    },
    {
      "cells": [
        "email",
        "test@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phone",
        "123456789"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_detailsonedmap(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify customer ID generated for entered details",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_customer_ID_generated_for_entered_details()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/Outline.feature");
formatter.feature({
  "name": "Adding Customer ID",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Generate Customer ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.step({
  "name": "User click Add customer",
  "keyword": "And "
});
formatter.step({
  "name": "User provide valid detailsoutline \"\u003cfname\u003e\", \"\u003clname\u003e\", \"\u003cemail\u003e\" , \"\u003caddress\u003e\", \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify customer ID generated for entered details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "fnamea",
        "lnamea",
        "test1@gmail.com",
        "chennai",
        "367895678"
      ]
    },
    {
      "cells": [
        "fnameb",
        "lnameb",
        "test2@gmail.com",
        "madurai",
        "567676756"
      ]
    },
    {
      "cells": [
        "fnamec",
        "lnamec",
        "test3@gmail.com",
        "bangalore",
        "367895678"
      ]
    },
    {
      "cells": [
        "fnamec",
        "lnamed",
        "test4@gmail.com",
        "trichy",
        "362345478"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generate Customer ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add customer",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detailsoutline \"fnamea\", \"lnamea\", \"test1@gmail.com\" , \"chennai\", \"367895678\"",
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_detailsoutline(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify customer ID generated for entered details",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_customer_ID_generated_for_entered_details()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate Customer ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-Q0E931K\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.css.NewCode.use_should_launch_browser_and_url(NewCode.java:24)\r\n\tat ✽.Use should launch browser and url(src/test/resources/feature/Outline.feature:6)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:23892/status] to be available after 20207 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.css.NewCode.use_should_launch_browser_and_url(NewCode.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 49 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Add customer",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Add_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User provide valid detailsoutline \"fnameb\", \"lnameb\", \"test2@gmail.com\" , \"madurai\", \"567676756\"",
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_detailsoutline(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify customer ID generated for entered details",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_customer_ID_generated_for_entered_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Generate Customer ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add customer",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detailsoutline \"fnamec\", \"lnamec\", \"test3@gmail.com\" , \"bangalore\", \"367895678\"",
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_detailsoutline(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify customer ID generated for entered details",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_customer_ID_generated_for_entered_details()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate Customer ID",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add customer",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detailsoutline \"fnamec\", \"lnamed\", \"test4@gmail.com\" , \"trichy\", \"362345478\"",
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_detailsoutline(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify customer ID generated for entered details",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_customer_ID_generated_for_entered_details()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/test.feature");
formatter.feature({
  "name": "Adding Customer ID",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add customer",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid details",
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify customer ID generated for entered details",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_customer_ID_generated_for_entered_details()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/twodlist.feature");
formatter.feature({
  "name": "Adding Tarrif pplan",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate Tarrif plan",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-Q0E931K\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.css.NewCode.use_should_launch_browser_and_url(NewCode.java:24)\r\n\tat ✽.Use should launch browser and url(src/test/resources/feature/twodlist.feature:6)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:4658/status] to be available after 20001 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.css.NewCode.use_should_launch_browser_and_url(NewCode.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 49 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Tarrif plan",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Tarrif_plan()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User provide valid detailstwodlist",
  "rows": [
    {
      "cells": [
        "2000",
        "100",
        "20",
        "100",
        "5",
        "11",
        "1"
      ]
    },
    {
      "cells": [
        "1000",
        "50",
        "10",
        "50",
        "10",
        "12",
        "45"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_detailstwodlist(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify Tarrif plan added",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_Tarrif_plan_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/feature/twodmap.feature");
formatter.feature({
  "name": "Adding Tarrif pplan",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate Tarrif plan",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Use should launch browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCode.use_should_launch_browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Tarrif plan",
  "keyword": "And "
});
formatter.match({
  "location": "NewCode.user_click_Tarrif_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid details twodmap",
  "rows": [
    {
      "cells": [
        "rental",
        "localminutes",
        "interminutes",
        "smspack",
        "minutescharges",
        "intercharges",
        "smscharges"
      ]
    },
    {
      "cells": [
        "2000",
        "100",
        "20",
        "100",
        "5",
        "11",
        "1"
      ]
    },
    {
      "cells": [
        "1000",
        "50",
        "10",
        "50",
        "10",
        "12",
        "45"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "NewCode.user_provide_valid_details_twodmap(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Tarrif plan added",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCode.verify_Tarrif_plan_added()"
});
formatter.result({
  "status": "passed"
});
});
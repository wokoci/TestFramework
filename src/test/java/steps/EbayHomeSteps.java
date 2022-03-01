package steps;

import com.deque.html.axecore.results.Results;
import com.deque.html.axecore.results.Rule;
import com.deque.html.axecore.selenium.AxeBuilder;
import com.deque.html.axecore.selenium.AxeReporter;
import com.testframework.pages.EbayHomePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;

import java.util.List;

import static java.lang.invoke.MethodHandles.lookup;
import static org.slf4j.LoggerFactory.getLogger;

import static junit.framework.TestCase.fail;

public class EbayHomeSteps {
    Results result;
    private final WebDriver driver;
    EbayHomePage ebayHomePage;
    final Logger log = getLogger(lookup().lookupClass());

    public EbayHomeSteps(Common_steps Common_steps) {
        this.driver = Common_steps.getDriver();
        ebayHomePage = new EbayHomePage(driver);
        result = new AxeBuilder().analyze(driver);
    }

    @Given("I am on the ebay electronics page")
    public void iAmOnTheEbayElectronicsPage() {
        driver.get("https://www.ebay.co.uk/b/Electronics/bn_7000259660");
    }

    @When("I click on the ebay logo")
    public void iClickOnTheEbayLogo() {
        ebayHomePage.clickOnLogo();
    }

    @Then("I am navigated to the home page")
    public void iAmNavigatedToTheHomePage() {
        String expectedUrl = "https://www.ebay.co.uk/";
        String actualUrl = ebayHomePage.getCurrentUrl();
        if (!actualUrl.equals(expectedUrl)) {
            fail("The page was not navigated to home page on logo click");
        }

        List<Rule> violations = result.getViolations();
        violations.forEach(rule -> {
           log.debug("{}",rule.toString());
        });
        AxeReporter.writeResultsToJsonFile("testAccessibility", result);
    }
}

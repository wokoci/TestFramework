package steps;

import com.testframework.pages.EbayHomePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static junit.framework.TestCase.fail;

public class EbayHomeSteps {

    private final WebDriver driver;
    EbayHomePage ebayHomePage;

    public EbayHomeSteps(Common_steps Common_steps) {
        this.driver = Common_steps.getDriver();
        ebayHomePage = new EbayHomePage(driver);
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
    }
}

package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static junit.framework.TestCase.fail;

public class EbayLogoStepdefs {

    private final WebDriver driver;

    public EbayLogoStepdefs(Common_steps Common_steps) {
        this.driver = Common_steps.getDriver();
    }

    @Given("I am on the ebay electronics page")
    public void iAmOnTheEbayElectronicsPage() {
        driver.get("https://www.ebay.co.uk/b/Electronics/bn_7000259660");
    }

    @When("I click on the ebay logo")
    public void iClickOnTheEbayLogo() throws InterruptedException {
        Thread.sleep(1000);
        driver.findElement(By.id("gh-la")).click();
    }

    @Then("I am navigated to the home page")
    public void iAmNavigatedToTheHomePage() {
        String expectedUrl = "https://www.ebay.co.uk/";
        String actualUrl = driver.getCurrentUrl();
        if (!actualUrl.equals(expectedUrl)) {
            fail("The page was not navigated to home page on logo click");
        }
    }
}

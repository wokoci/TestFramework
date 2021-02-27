package steps;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import static junit.framework.TestCase.fail;

public class EbayHomePageSteps {

    WebDriver driver;

    public EbayHomePageSteps(Common_steps Common_steps) {
        this.driver = Common_steps.getDriver();
    }

    @Given("I am on the ebay home page")
    public void i_am_on_the_ebay_home_page() {
        driver.get("https://www.ebay.co.uk/");
    }

    @When("I click on advanced link")
    public void i_click_on_advanced_link() {
        //taken
        driver.findElement(By.linkText("Advanced")).click();
    }

    @Then("I am navigated to the advanced page")
    public void i_am_navigated_to_the_advanced_page() {
        String expectedHeading = "Advanced search";
        //taken as headingText
        String actualHeadingText = driver.findElement(By.id("gh-title")).getText();

        if (!expectedHeading.equals(actualHeadingText)) {
            fail("final page heading not Advanced search");
        }
    }

    @When("I search for {string}")
    public void i_search_for_iphone(String itemName) {
        //taken as searchInput
        driver.findElement(By.id("gh-ac")).sendKeys(itemName, Keys.ENTER);
    }


    @Then("I can verify there are more than {int} results displayed")
    public void i_can_verify_there_are_more_than_results_displayed(Integer int1) throws InterruptedException {
        Thread.sleep(2000);
        //taken
        String stringCountValue = driver.findElement(By.cssSelector("div.srp-controls__control.srp-controls__count:nth-child(1) h1.srp-controls__count-heading > span.BOLD:nth-child(1)")).getText().trim();
        int intResultValue = Integer.parseInt(stringCountValue.replace(",", ""));
        System.out.println(intResultValue + "  Results count found");
        if (intResultValue < 1000) {
            fail("There are less than 1000 items returned");
        }
    }


    @When("I search for {string} in {string}")
    public void i_search_for_in(String string, String string2) throws InterruptedException {
        driver.findElement(By.id("gh-ac")).sendKeys(string);
        //search for the category
        List<WebElement> categoryList = driver.findElements(By.xpath("//select[@id='gh-cat']/option"));
        for (WebElement cat : categoryList) {
            if (cat.getText().trim().toLowerCase().equals(string2)) {
                cat.click();
                break;
            }
        }
        Thread.sleep(500);
        driver.findElement(By.xpath("//input[@id='gh-btn']")).click();
        Thread.sleep(1000);
    }

    @Given("I click on Advanced")
    public void i_click_on_Advanced() {
        driver.findElement(By.linkText("Advanced")).click();
    }

    @When("I perform advanced search")
    public void i_perform_advanced_search(DataTable dataTable) throws InterruptedException {
        //taken as keywordSearchInput
        driver.findElement(By.xpath("//input[@id='_nkw']")).sendKeys(dataTable.cell(1, 0));
        // taken as excludeSearchInputBox
        driver.findElement(By.xpath("//input[@id='_ex_kw']")).sendKeys(dataTable.cell(1, 1));
        // taken as minPriceInputBox
        driver.findElement(By.xpath("//input[@name='_udlo']")).sendKeys(dataTable.cell(1, 2));
        // maxPriceInputBox
        driver.findElement(By.xpath("//input[@name='_udhi']")).sendKeys(dataTable.cell(1, 3));

        Thread.sleep(500);
        // taken as search advanceSearchBtn
        driver.findElement(By.xpath("//button[@id='searchBtnLowerLnk']")).click();
        Thread.sleep(500);

    }

    @Then("I can verify there are more than {int} results from advanced search")
    public void i_can_verify_there_are_more_than_results_from_advanced_search(Integer int1) throws InterruptedException {
        Thread.sleep(2000);
        String stringCountValue = driver.findElement(By.xpath("//span[@class='rcnt']")).getText().trim();
        int intResultValue = Integer.parseInt(stringCountValue.replace(",", ""));
        if (int1 > intResultValue) {
            fail("There are less than " + int1 + " items returned");
        }
    }

    @When("I click on {string}")
    public void i_click_on(String link) throws InterruptedException {
        driver.findElement(By.linkText(link)).click();
        Thread.sleep(500);
    }

    @Then("I can validate {string} and {string} are displayed")
    public void i_can_validate_and_are_displayed(String url, String title) throws InterruptedException {
        Thread.sleep(500);
        String actualUrl = driver.getCurrentUrl();
        String actualTitle = driver.findElement(By.xpath("//body//nav/ol//span[@class='b-breadcrumb__text b-link--tertiary truncate']")).getText();

        if (!url.equals(actualUrl)) {
            fail("The link is not on the correct page. expected " + url + " but got : " + actualUrl);
        }

        if (!actualTitle.contains(title)) {
            fail("Title  is not corrected. expected" + title + " but got :  " + actualTitle);
        }
    }

}

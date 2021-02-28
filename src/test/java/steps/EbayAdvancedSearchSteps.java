package steps;

import com.testframework.pages.AdvancedSearchPage;
import com.testframework.pages.EbayAdvancedSearchPage;
import com.testframework.pages.EbayHomePage;
import com.testframework.pages.SearchResultPage;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import static junit.framework.TestCase.fail;

public class EbayAdvancedSearchSteps {

    WebDriver driver;

    EbayAdvancedSearchPage ebayAdvancedSearchPage;
    EbayHomePage ebayHomePage;
    SearchResultPage searchResultPage;
    AdvancedSearchPage advancedSearchPage;

    public EbayAdvancedSearchSteps(Common_steps Common_steps) {
        this.driver = Common_steps.getDriver();
        ebayAdvancedSearchPage = new EbayAdvancedSearchPage(driver);
        ebayHomePage = new EbayHomePage(driver);
        searchResultPage = new SearchResultPage(driver);
        advancedSearchPage = new AdvancedSearchPage(driver);
    }

    @Given("I am on the ebay home page")
    public void i_am_on_the_ebay_home_page() {
        driver.get("https://www.ebay.co.uk/");
    }

    @When("I click on advanced link")
    public void i_click_on_advanced_link() {
        ebayHomePage.clickOnAdvancedSearch();
    }

    @Then("I am navigated to the advanced page")
    public void i_am_navigated_to_the_advanced_page() {
        String expectedHeading = "Advanced search";
        String actualHeadingText = ebayAdvancedSearchPage.getPageTitle();
        if (!expectedHeading.equals(actualHeadingText)) {
            fail("final page heading not Advanced search");
        }
    }

    @When("I search for {string}")
    public void i_search_for_iphone(String itemName) {
        ebayHomePage.searchForAndPressEnter(itemName);
    }


    @Then("I can verify there are more than {int} results displayed")
    public void i_can_verify_there_are_more_than_results_displayed(Integer int1) throws InterruptedException {
        Thread.sleep(2000);

        int intResultValue = searchResultPage.getResultCount();
        if (intResultValue < 1000) {
            fail("There are less than 1000 items returned");
        }
    }


    @When("I search for {string} in {string}")
    public void i_search_for_in(String string, String string2) throws InterruptedException {
        ebayHomePage.searchForAndPressEnter(string);
        List<WebElement> categoryList = ebayHomePage.getCategoryList();
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
        ebayHomePage.clickOnAdvancedSearch();
    }

    @When("I perform advanced search")
    public void i_perform_advanced_search(DataTable dataTable) {
        advancedSearchPage.typeInSearchKey(dataTable.cell(1, 0));
        advancedSearchPage.typeInExcludeKeyWard(dataTable.cell(1, 1));
        advancedSearchPage.typeMinPrice(dataTable.cell(1, 2));
        advancedSearchPage.typeMaxPrice(dataTable.cell(1, 3));
        advancedSearchPage.clickSearchBtn();
    }

    @Then("I can verify there are more than {int} results from advanced search")
    public void i_can_verify_there_are_more_than_results_from_advanced_search(Integer int1) throws InterruptedException {
        Thread.sleep(2000);
        int intResultValue = searchResultPage.getResultCount();
        if (int1 > intResultValue) {
            fail("There are less than " + int1 + " items returned");
        }
    }

    @When("I click on {string}")
    public void i_click_on(String link) throws InterruptedException {
        Thread.sleep(2000);
        if (link.equals("Home & Garden")){
        ebayHomePage.clickOnGardening();

        }else if (link.equals("Fashion")){
            ebayHomePage.clickOnFashion();
        }else{
            ebayHomePage.clickOnToys();
        }
        Thread.sleep(500);
    }

    @Then("I can validate {string} and {string} are displayed")
    public void i_can_validate_and_are_displayed(String url, String title) throws InterruptedException {
        Thread.sleep(500);
        String actualUrl = driver.getCurrentUrl();
        String actualTitle = driver.findElement(By.cssSelector(".b-pageheader__text")).getText();

        if (!url.equals(actualUrl)) {
            fail("The link is not on the correct page. expected " + url + " but got : " + actualUrl);
        }

        if (!actualTitle.contains(title)) {
            fail("Title  is not corrected. expected" + title + " but got :  " + actualTitle);
        }
    }

}

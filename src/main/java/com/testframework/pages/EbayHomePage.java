package com.testframework.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class EbayHomePage {
    final WebDriver driver;
    @FindBy(id = "gh-la")
    private WebElement eBayLogo;

    @FindBy(id = "gh-ac")
    private WebElement searchInputBox;

    @FindBy(id = "gh-as-a")
    private WebElement advancedSearchLink;

    @FindBy(xpath = "//select[@id='gh-cat']/option")
    private List<WebElement> categoryDropDown;

    @FindBy(linkText = "Home & Garden")
    private WebElement homeAndGardening;

    @FindBy(linkText = "Fashion")
    private WebElement fashionLink;

    @FindBy(linkText = "Toys")
    private WebElement toyLink;

    final WebDriverWait wait;


    public EbayHomePage(WebDriver driver) {
        this.driver = driver;
        wait = new WebDriverWait(driver, 5);
        PageFactory.initElements(driver, this);
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public void clickOnLogo() {
        eBayLogo.click();
    }

    public void searchForAndPressEnter(String item) {
        searchInputBox.sendKeys(item, Keys.ENTER);
    }

    public void clickOnAdvancedSearch() {
        advancedSearchLink.click();
    }

    public List<WebElement> getCategoryList() {
        return categoryDropDown;
    }

    public void clickOnGardening() throws InterruptedException {
        wait.until(p -> fashionLink.isDisplayed());
        homeAndGardening.click();
        Thread.sleep(3000);
    }

    public void clickOnFashion() throws InterruptedException {
        wait.until(p -> fashionLink.isDisplayed());
        fashionLink.click();
        Thread.sleep(3000);
    }

    public void clickOnToys() throws InterruptedException {
        wait.until((p) -> toyLink.isDisplayed());
        toyLink.click();
        Thread.sleep(3000);
    }
}

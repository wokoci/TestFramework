package com.testframework.pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EbayAdvancedSearchPage {
    final WebDriver driver;

    @FindBy(linkText = "Advanced")
    private WebElement advancedSearchLink;

    @FindBy(id = "gh-title")
    private WebElement pageTitle;


    public EbayAdvancedSearchPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    public String getPageTitle() {
        return pageTitle.getText();
    }



}

package com.testframework.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdvancedSearchPage {
    final WebDriver driver;
	@FindBy(xpath="//input[@id='_nkw']")
	private WebElement keywordSearchInput;

	@FindBy(xpath="//input[@id='_ex_kw']")
	private WebElement excludeSearchInputBox;

	@FindBy(xpath="//input[@name='_udlo']")
	private WebElement minPriceInputBox;

	@FindBy(xpath="//input[@name='_udhi']")
	private WebElement maxPriceInputBox;

	@FindBy(xpath="//button[@id='searchBtnLowerLnk']")
	private WebElement advanceSearchBtn;


    public AdvancedSearchPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public void typeInSearchKey(String search){
        keywordSearchInput.sendKeys(search);
    }

    public void typeInExcludeKeyWard(String exclude){
        excludeSearchInputBox.sendKeys(exclude);
    }

    public void typeMinPrice(String minPrice){
        minPriceInputBox.sendKeys(minPrice);
    }

    public void typeMaxPrice(String maxPrice){
        maxPriceInputBox.sendKeys(maxPrice);
    }

    public void clickSearchBtn(){
        advanceSearchBtn.click();
    }
}

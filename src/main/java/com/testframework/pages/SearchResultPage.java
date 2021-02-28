package com.testframework.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchResultPage {
   final WebDriver driver;

	@FindBy(css="h1>span:nth-child(1)")
	private WebElement searchCount;


    public SearchResultPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public int getResultCount(){
      String stringCountValue=  searchCount.getText().trim();
        return Integer.parseInt(stringCountValue.replace(",", ""));
    }

}

package elements;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EbayHomePageElements {
    WebDriver driver;

	@FindBy(linkText="Advanced")
	private WebElement advancedSearchLink;

	@FindBy(id="gh-title")
	private WebElement headingText;

	@FindBy(id="gh-ac")
	private WebElement searchInput;

	@FindBy(css="div.srp-controls__control.srp-controls__count:nth-child(1) h1.srp-controls__count-heading > span.BOLD:nth-child(1)")
	private WebElement stringCountValue;

	@FindBy(xpath="//select[@id='gh-cat']/option")
	private WebElement categoryList;

	@FindBy(xpath="//input[@id='gh-btn']")
	private WebElement searchBtn;


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

	@FindBy(linkText="Fashion")
	private WebElement fashionLink;

	@FindBy(linkText="Electronics")
	private WebElement electronicsLink;

	@FindBy(xpath="//body//nav/ol//span[@class='b-breadcrumb__text b-link--tertiary truncate']")
	private WebElement topMenuLinkText;




    public EbayHomePageElements(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }
}

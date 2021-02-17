package elements;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EbayLogoElements {

    private final WebDriver driver;

	@FindBy(id="gh-la")
	private WebElement ebayLogo;


    public EbayLogoElements(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }
}

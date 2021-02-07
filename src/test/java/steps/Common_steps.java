package steps;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Common_steps {

    private WebDriver driver;




    @Before
    public void setUp() {
        String browserName = System.getProperty("browser");
        System.out.println(browserName+ " :Is the browser name that has been captured from maven");
        System.setProperty("webdriver.gecko.driver", "src/main/resources/binaries/osx/marionette/64bit/geckodriver");
        driver = new FirefoxDriver();
    }


    @After
    public void tearDown() throws InterruptedException {
        driver.quit();
        Thread.sleep(1000);
    }


    public WebDriver getDriver() {
        return driver;
    }

}

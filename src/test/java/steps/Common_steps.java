package steps;

import drivers.WebDriverInstance;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;


public class Common_steps {
    private static WebDriver driver;

    @Before
    public void setUp() {
        String browserName = System.getProperty("browser");
        System.out.println(browserName + " :browser name");
        if (browserName == null) {
            browserName = "chrome";
        }
        driver = WebDriverInstance.getInstance().getDriver(browserName);
    }

    @After
    public void tearDown() throws InterruptedException {
        WebDriverInstance.getInstance().quiteDriver();
    }

    public WebDriver getDriver() {
        return driver;
    }
}

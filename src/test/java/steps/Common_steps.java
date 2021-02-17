package steps;

import drivers.DriverFactory;
import drivers.DriverType;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;


public class Common_steps {
    private WebDriver driver;

    @Before
    public void setUp() {
        String browserName = System.getProperty("browser");
        System.out.println(browserName + " :browser name");

        selectBrowser(browserName);
    }

    @After
    public void tearDown() throws InterruptedException {
        driver.quit();
        Thread.sleep(1000);
    }

    public WebDriver getDriver() {
        return driver;
    }


    private void selectBrowser(String browserName) {
        if (browserName == null) {
            driver = DriverFactory.getDriver(DriverType.CHROME);
        } else {
            switch (browserName) {
                case "firefox":
                    driver = DriverFactory.getDriver(DriverType.FIREFOX);
                    break;
                case "safari":
                    driver = DriverFactory.getDriver(DriverType.SAFARI);
                case "edge":
                    driver = DriverFactory.getDriver(DriverType.EDGE);
                default:
                    driver = DriverFactory.getDriver(DriverType.CHROME);
            }
        }
    }
}

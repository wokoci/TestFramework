package drivers;

import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class WebDriverInstance {
    private static final WebDriverInstance instance = new WebDriverInstance();

    private WebDriverInstance() {
    }

    private static final ThreadLocal<WebDriver> threadedDriver = new ThreadLocal<>();

    public WebDriver getDriver(String browser) {
        WebDriver driver = null;
        try {
            if (browser.equalsIgnoreCase("firefox")) {
                driver = DriverFactory.getDriver(DriverType.FIREFOX);
                threadedDriver.set(driver);
            }

            if (browser.equalsIgnoreCase("chrome")) {
                driver = DriverFactory.getDriver(DriverType.CHROME);
                threadedDriver.set(driver);
            }
            if (browser.equalsIgnoreCase("edge")) {
                driver = DriverFactory.getDriver(DriverType.EDGE);
                threadedDriver.set(driver);
            }
            if (browser.equalsIgnoreCase("safari")) {
                driver = DriverFactory.getDriver(DriverType.SAFARI);
                threadedDriver.set(driver);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        threadedDriver.get().manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        threadedDriver.get().manage().window().maximize();

        return threadedDriver.get();
    }

    public static WebDriverInstance getInstance() {
        return instance;
    }


    public void quiteDriver() {
        threadedDriver.get().quit();
        threadedDriver.set(null);
    }


}

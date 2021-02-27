package drivers;

import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class WebDriverInstance {
    private static final WebDriverInstance instance = new WebDriverInstance();

    private WebDriverInstance() {
    }

    private static ThreadLocal<WebDriver> threadedDrvier = new ThreadLocal<>();

    public WebDriver getDriver(String browser) {
        WebDriver driver = null;
        try {
            if (browser.equalsIgnoreCase("firefox")) {
                driver = DriverFactory.getDriver(DriverType.FIREFOX);
                threadedDrvier.set(driver);
            }

            if (browser.equalsIgnoreCase("chrome")) {
                driver = DriverFactory.getDriver(DriverType.CHROME);
                threadedDrvier.set(driver);
            }
            if (browser.equalsIgnoreCase("edge")) {
                driver = DriverFactory.getDriver(DriverType.EDGE);
                threadedDrvier.set(driver);
            }

            if (browser.equalsIgnoreCase("safari")) {
                driver = DriverFactory.getDriver(DriverType.SAFARI);
                threadedDrvier.set(driver);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        threadedDrvier.get().manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
        threadedDrvier.get().manage().window().maximize();

        return threadedDrvier.get();
    }

    public static WebDriverInstance getInstance() {
        return instance;
    }

    public void quiteDriver() {
        threadedDrvier.get().quit();
        threadedDrvier.set(null);
    }
}

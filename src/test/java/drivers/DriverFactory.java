package drivers;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.safari.SafariDriver;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

public class DriverFactory {
    private static final Map<DriverType, Supplier<WebDriver>> driverMap = new HashMap<>();
    private static final Supplier<WebDriver> chromeDriverSupplier = () -> {
        ChromeOptions options = BrowserOption.setChromeOptions();
        WebDriverManager.chromedriver().setup();
        return new ChromeDriver(options);
    };

    private static final Supplier<WebDriver> firefoxDriverSupplier = () -> {
        FirefoxOptions options = BrowserOption.setFirefoxOptions();
        WebDriverManager.firefoxdriver().setup();
        return new FirefoxDriver(options);
    };

    private static final Supplier<WebDriver> safariDriverSupplier = SafariDriver::new;

    private static final Supplier<WebDriver> edgeDriverSupplier = () -> {
        WebDriverManager.edgedriver().setup();
        return new EdgeDriver();
    };

    static {
        driverMap.put(DriverType.CHROME, chromeDriverSupplier);
        driverMap.put(DriverType.FIREFOX, firefoxDriverSupplier);
        driverMap.put(DriverType.SAFARI, safariDriverSupplier);
        driverMap.put(DriverType.EDGE, edgeDriverSupplier);
    }

    public static WebDriver getDriver(DriverType type) {
        return driverMap.get(type).get();
    }

}

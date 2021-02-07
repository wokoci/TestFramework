package testrunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"features"},
        glue = {"steps"},
        plugin = {"pretty", "html:Report"},
        strict = true,
        // dryRun = true,
        monochrome = true
        //   tags = {"@P500"}
        // name = {"Advanced"}
)
public class TestRunner {
}

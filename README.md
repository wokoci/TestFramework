# Simple Java test automation Framework


## Tools
1. Java 8 and above
2. Cucumber 
3. Selenium 
4. Maven
5. Java 8
6. dequelabs / axe-core

## Execution
close the repo
change into repo directory
open terminal
- for chrome: 
   - mvn clean verify -Dbrowser=chrome
- for Firefox:
   - mvn clean verify -Dbrowser=firefox
- for Edge:
   - mvn clean verify -Dbrowser=edge
- for Opera:
   - mvn clean verify -Dbrowser=opera

Note:
You will need the specified browsers installed to execute tests against 
selected browser

todo:
Add Jenkins for local CI
add sample automated testing using Axe


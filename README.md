This is the code for the XSS testing demo of the YUIConf 2012 talk "Security Testing of YUI-Powered Applications"

http://www.yuiblog.com/blog/2013/01/23/yuiconf-2012-dmitry-savintsev-and-albert-yu-on-security-testing-of-yui-powered-applications/

The slides are on http://www.slideshare.net/dimisec/security-testing-of-yui-powered-applications

To try the demo code, you need to put the code in the "yui" directory into your webserver root - on Mac with the default webserver setup, you can copy or symlink it to your Sites directory.

Below are brief descriptions of the directories and files and usage instructions:

webdriver_java/ - WebDriver code in Java 

cd webdriver_java/todo_bad
# the following command should produce failures as it tests vulnerable version of the app
mvn install

cd webdriver_java/todo_good
# the following command should succeed (no test failures) as it tests fixed version of the app
mvn install

webdriver_python - WebDriver code in Python

webdriver_js/ - demo of the Javascript binding for WebDriver
To use it, download selenium-server-standalone-2.29.0.jar from http://code.google.com/p/selenium/downloads/list (use the latest version available), and start the server 
with:

java -jar selenium-server-standalone-2.29.0.jar

then you can run the demo examples:

cd webdriver_js
node webdriver_bad.js (generates an alert)
node webdriver_good.js (no alert)

yui/src/
src/todo.html (vulnerable app) 
src/todo_good.html (fixed version) 

yui/tests
tests/xsstest06.html - YUI Test pointing to the vulnerable version (with failures)
tests/xsstest07.html - same test pointing to the fixed version (all tests pass) 

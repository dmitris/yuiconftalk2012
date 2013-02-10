var wd = require('/Users/dsavints/dev/hack/webdriver/build/javascript/node/webdriver');
var driver = new wd.Builder().
     usingServer('http://localhost:4444/wd/hub').
     withCapabilities({
       'browserName': 'firefox',
       'version': '',
       'platform': 'ANY',
       'javascriptEnabled': true
     }).
     build();
//driver.get("http://localhost/yui/src/todo.html#hack%20todo%20app%3Cimg%20src=bla%20onerror='document.amihacked=13579'>");     
driver.get('http://localhost/yui/src/todo.html#hack%20todo%20app%3Cimg%20src=bla%20onerror=alert%28String.fromCharCode%2882,69,77,69,77,66,69,82,32,83,69,67,85,82,73,84,89,32,84,69,83,84,73,78,71,33%29%29%3E');


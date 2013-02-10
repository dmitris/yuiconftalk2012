#!/usr/bin/env python

from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import NoAlertPresentException, WebDriverException
# import NoAlertPresentException

URL_GOOD = 'http://localhost/yui/src/todo_good.html#hack%20todo%20app%3Cimg%20src=bla%20onerror=alert%28String.fromCharCode%2882,69,77,69,77,66,69,82,32,83,69,67,85,82,73,84,89,32,84,69,83,84,73,78,71,33%29%29%3E';
URL_BAD = 'http://localhost/yui/src/todo.html#hack%20todo%20app%3Cimg%20src=bla%20onerror=alert%28String.fromCharCode%2882,69,77,69,77,66,69,82,32,83,69,67,85,82,73,84,89,32,84,69,83,84,73,78,71,33%29%29%3E';
driver = webdriver.Firefox()
driver.get(URL_GOOD)

try:
  alert = driver.switch_to_alert()
  mystr = "REMEMBER SECURITY TESTING!"
  if alert.text == mystr:
    print "Yep, we are (still) hacked :(";
  else:
    print "Alert but unexpected string? double-check:\n", alert.text
  alert.accept()
except NoAlertPresentException as e:
    print "OK"
except WebDriverException as e:
  print "WebDriverException: ", e.message
except Exception as e:
  print "Exception: ", e.message  
driver.quit()
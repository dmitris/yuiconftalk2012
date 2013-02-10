package com.yahoo.sectest;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.support.ui.ExpectedCondition;
//import org.openqa.selenium.support.ui.WebDriverWait;

public class WebDriverTest extends TestCase {
	public WebDriverTest(String testname) {
		super(testname);
	}

    public static Test suite()
    {
        return new TestSuite( WebDriverTest.class );
    }

    public void testTodoApp()
    {
      String url_alert = "http://localhost/yui/src/todo.html#hack%20todo%20app%3Cimg%20src=bla%20onerror=alert%28String.fromCharCode%2882,69,77,69,77,66,69,82,32,83,69,67,85,82,73,84,89,32,84,69,83,84,73,78,71,33%29%29%3E";
      String url_good = "http://localhost/yui/src/todo_good.html#hack%20todo%20app%3Cimg%20src=bla%20onerror='document.amihacked=13579'>";
      String url_bad = "http://localhost/yui/src/todo.html#hack%20todo%20app%3Cimg%20src=bla%20onerror='document.amihacked=13579'";

    	WebDriver driver = new FirefoxDriver();
      driver.get(url_good);    	
    	String title = driver.getTitle();
    	System.out.println("Page title is: [" + title + "]");
      assertTrue( title.equals("TodoApp" ));
      Long result = (Long) ((JavascriptExecutor)driver).executeScript("return document.amihacked");
      System.out.println("amihacked = " + result);
      assertTrue(result == null);

      driver.close();
    }
}

package com.css;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class NewCode {
	
	static WebDriver driver;
	
	
	@Given("Use should launch browser and url")
	public void use_should_launch_browser_and_url() throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver", "D:\\workspace\\SelTstng\\drivers\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("http://www.demo.guru99.com/telecom/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15000, TimeUnit.SECONDS);
		//driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	}
	@Given("User click Add customer")
	public void user_click_Add_customer()  {
		
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
		//WebDriverWait w = new WebDriverWait(driver, 100);
		//w.until(ExpectedConditions.elementToBeClickable(By.xpath("(//a[text()='Add Customer'])[1]"))).click();
	}
	@When("User provide valid details")
	public void user_provide_valid_details() {
		//driver.manage().timeouts().implicitlyWait(15000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("mathi");
		driver.findElement(By.id("lname")).sendKeys("arasi");
		driver.findElement(By.id("email")).sendKeys("mathi.svb@gmail.com");
		driver.findElement(By.xpath("//textarea[@name ='addr']")).sendKeys("chennai");
		driver.findElement(By.id("telephoneno")).sendKeys("1243433433");
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	}
	@When("User provide valid detailsoutline {string}, {string}, {string} , {string}, {string}")
	public void user_provide_valid_detailsoutline(String fname, String lname, String email, String address, String phone) throws InterruptedException {

		driver.manage().timeouts().implicitlyWait(15000, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(fname);
		driver.findElement(By.id("lname")).sendKeys(lname);
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.xpath("//textarea[@name ='addr']")).sendKeys(address);
		driver.findElement(By.id("telephoneno")).sendKeys(phone);
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@name='submit']")).click();
		
	}
	
	@When("User provide valid detailsonedlist")
	public void user_provide_valid_detailsonedlist(io.cucumber.datatable.DataTable dataTable) {
	   System.out.println("when -1");
	   List<String> oned = dataTable.asList(String.class);
	   System.out.println(oned);
	   driver.findElement(By.xpath("//label[text()='Done']")).click();
	   driver.findElement(By.id("fname")).sendKeys(oned.get(0));
		driver.findElement(By.id("lname")).sendKeys(oned.get(1));
		driver.findElement(By.id("email")).sendKeys(oned.get(2));
		driver.findElement(By.xpath("//textarea[@name ='addr']")).sendKeys(oned.get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(oned.get(4));
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	}
	@When("User provide valid detailsonedmap")
	public void user_provide_valid_detailsonedmap(io.cucumber.datatable.DataTable dataTable) {
		Map<String, String> ondmap = dataTable.asMap(String.class, String.class);
		System.out.println("when-1");
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(ondmap.get("fname"));
		driver.findElement(By.id("lname")).sendKeys(ondmap.get("lname"));
		driver.findElement(By.id("email")).sendKeys(ondmap.get("email"));
		driver.findElement(By.xpath("//textarea[@name ='addr']")).sendKeys(ondmap.get("address"));
		driver.findElement(By.id("telephoneno")).sendKeys(ondmap.get("phone"));
		driver.findElement(By.xpath("//input[@name='submit']")).click();	
	}
	@Then("Verify customer ID generated for entered details")
	public void verify_customer_ID_generated_for_entered_details() {

		Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"main\"]/div/div/table/tbody/tr[1]/td[2]")).isDisplayed());	
	}
	//static WebDriver driver;

/*	@Given("Use should launch browser and url")
	public void use_should_launch_browser_and_url() {
		System.setProperty("webdriver.chrome.driver", "D:\\workspace\\SelTstng\\drivers\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("http://www.demo.guru99.com/telecom/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15000, TimeUnit.SECONDS);
		
	} */

	@Given("User click Tarrif plan")
	public void user_click_Tarrif_plan() {
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@When("User provide valid detailstwodlist")
	public void user_provide_valid_detailstwodlist(io.cucumber.datatable.DataTable dataTable) {
	List<List<String>> twodlist = dataTable.asLists(String.class);
	System.out.println(twodlist);	
	driver.findElement(By.id("rental1")).sendKeys(twodlist.get(0).get(0));
	driver.findElement(By.id("local_minutes")).sendKeys(twodlist.get(0).get(1));
	driver.findElement(By.id("inter_minutes")).sendKeys(twodlist.get(1).get(2));
	driver.findElement(By.id("sms_pack")).sendKeys(twodlist.get(1).get(3));
	driver.findElement(By.id("minutes_charges")).sendKeys(twodlist.get(0).get(4));
	driver.findElement(By.id("inter_charges")).sendKeys(twodlist.get(0).get(5));
	driver.findElement(By.id("sms_charges")).sendKeys(twodlist.get(1).get(6));
	driver.findElement(By.xpath("//input[@name='submit']")).click();
	}
	
	@When("User provide valid details twodmap")
	public void user_provide_valid_details_twodmap(io.cucumber.datatable.DataTable dataTable) {
		System.out.println("twodmap:When:1");
		List<Map<String, String>> twodmap = dataTable.asMaps(String.class, String.class);
		System.out.println(twodmap);
		driver.findElement(By.id("rental1")).sendKeys(twodmap.get(0).get("rental"));
		driver.findElement(By.id("local_minutes")).sendKeys(twodmap.get(1).get("localminutes"));
		driver.findElement(By.id("inter_minutes")).sendKeys(twodmap.get(1).get("interminutes"));
		driver.findElement(By.id("sms_pack")).sendKeys(twodmap.get(0).get("smspack"));
		driver.findElement(By.id("minutes_charges")).sendKeys(twodmap.get(0).get("minutescharges"));
		driver.findElement(By.id("inter_charges")).sendKeys(twodmap.get(0).get("intercharges"));
		driver.findElement(By.id("sms_charges")).sendKeys(twodmap.get(1).get("smscharges"));
		driver.findElement(By.xpath("//input[@name='submit']")).click();
		
	}
	
	@Then("Verify Tarrif plan added")
	public void verify_Tarrif_plan_added() {

		Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"main\"]/div/h2")).isDisplayed());
	
		
	}

}

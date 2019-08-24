import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class NewTest {
	
	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", "D:\\workspace\\SelCucu\\driver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://www.google.com");
		
		
	}
	

}

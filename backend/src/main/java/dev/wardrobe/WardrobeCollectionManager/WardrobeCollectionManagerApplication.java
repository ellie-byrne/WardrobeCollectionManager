package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WardrobeCollectionManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(WardrobeCollectionManagerApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot() {
		return "Hello World!";
	}
}

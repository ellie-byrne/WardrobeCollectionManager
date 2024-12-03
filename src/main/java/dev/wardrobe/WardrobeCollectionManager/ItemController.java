package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/items")
public class ItemController {
    @GetMapping
    public ResponseEntity<String> allItems() {
        return new ResponseEntity<String>("All items", HttpStatus.OK);
    }
}

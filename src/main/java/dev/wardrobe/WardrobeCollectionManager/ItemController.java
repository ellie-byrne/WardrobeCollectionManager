package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ResponseEntity<List<Item>> getItems() {
        return new ResponseEntity<List<Item>>(itemService.findAllItems(), HttpStatus.OK);
    }

    @GetMapping("/{itemId}")
    public ResponseEntity<Optional<Item>> getSingleItem(@PathVariable String itemId) {
        return new ResponseEntity<Optional<Item>>(itemService.findItemByItemId(itemId), HttpStatus.OK);

    }
}

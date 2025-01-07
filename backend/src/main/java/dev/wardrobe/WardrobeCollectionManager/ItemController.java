package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ResponseEntity<List<Item>> getItems() {
        return new ResponseEntity<List<Item>>(itemService.findAllItems(), HttpStatus.OK);
    }

    @GetMapping("/{_id}")
    public ResponseEntity<Item> getSingleItem(@PathVariable ObjectId _id) {
        return new ResponseEntity<>(itemService.findItemById(_id), HttpStatus.OK);
    }
}

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

    @GetMapping("/{idString}")
    public ResponseEntity<Item> getSingleItem(@PathVariable String idString) {
        try {
            // Convert String to ObjectId
            ObjectId objectId = new ObjectId(idString);
            Item item = itemService.findItemById(objectId);
            if (item != null) {
                return new ResponseEntity<>(item, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        } catch (IllegalArgumentException e) {
            // Handle invalid ObjectId format
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

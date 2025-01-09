package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/items")
@CrossOrigin(origins="*")
public class ItemController {
    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Item>> getItemsByType(@PathVariable String type) {
        List<Item> items = itemService.findByType(type.toLowerCase());
        return ResponseEntity.ok(items);
    }

    @GetMapping("/{_id}")
    public ResponseEntity<Item> getSingleItem(@PathVariable ObjectId _id) {
        return new ResponseEntity<>(itemService.findItemById(_id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable ObjectId id, @RequestBody ItemUpdateDTO itemUpdateDTO) {
        Item updatedItem = itemService.updateItem(id, itemUpdateDTO);
        return ResponseEntity.ok(updatedItem);
    }
}
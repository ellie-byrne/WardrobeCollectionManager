package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/delete-items")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class DeleteItemController {

    private final DeleteItemService deleteItemService;

    @Autowired
    public DeleteItemController(DeleteItemService deleteItemService) {
        this.deleteItemService = deleteItemService;
    }

    @DeleteMapping("/delete-item/{itemId}")
    public ResponseEntity<Void> deleteItemById(@PathVariable String itemId) {
        try {
            ObjectId objectId = new ObjectId(itemId);  // Convert String to ObjectId
            deleteItemService.deleteById(objectId);    // Call service to delete item
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();  // Return a bad request if ID is invalid
        }
    }

    @DeleteMapping("/delete-all")
    public ResponseEntity<Void> deleteAllItems() {
        deleteItemService.deleteAll();
        return ResponseEntity.ok().build();
    }
}


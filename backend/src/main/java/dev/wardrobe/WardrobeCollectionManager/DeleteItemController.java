package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/delete-items")
public class DeleteItemController {
    public DeleteItemService deleteItemService;

    @Autowired
    public DeleteItemController(DeleteItemService deleteItemService ) {
        this.deleteItemService = deleteItemService;
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteItem(@PathVariable ObjectId _id) {
//        deleteItemService.deleteById(_id);
//        return ResponseEntity.ok().build();
//    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllItems() {
        deleteItemService.deleteAll();
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-item/{itemId}")
    public ResponseEntity<Void> deleteByName(@PathVariable String itemId) {
        deleteItemService.deleteByName(itemId);
        return ResponseEntity.ok().build();
    }
}

package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
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
    public ResponseEntity<List<Items>> allItems() {
        return new ResponseEntity<List<Items>>(itemService.allItems(), HttpStatus.OK);
    }

    @GetMapping("/{_id}")
    public ResponseEntity<Optional<Items>> getSingleItem(@PathVariable String _id) {
        return new ResponseEntity<Optional<Items>>(itemService.singleItem(_id), HttpStatus.OK);

    }
}

package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/add-items")
public class AddItemController {

    @Autowired
    private AddItemService addItemService ;

    @PostMapping()
    public ResponseEntity<AddItem> createNewItem(@RequestBody AddItemDTO dto) {
        AddItem savedData = addItemService.createItem(dto);
        return new ResponseEntity<>(savedData, HttpStatus.CREATED);
    }
}

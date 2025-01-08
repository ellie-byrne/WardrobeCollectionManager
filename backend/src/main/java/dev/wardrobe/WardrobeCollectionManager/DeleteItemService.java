package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteItemService {

    private final ItemRepository itemRepository;

    @Autowired
    public DeleteItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    // Delete by ObjectId
    public void deleteById(ObjectId _id) {
        if (itemRepository.existsById(_id)) {
            itemRepository.deleteById(_id);
        } else {
            throw new RuntimeException("Item not found with ID: " + _id.toString());
        }
    }

    // Delete all items
    public void deleteAll() {
        itemRepository.deleteAll();
    }

    // This method is not needed now if you're using ObjectId directly in the controller
    public void deleteByName(String _id) {
        itemRepository.findAll().stream()
                .filter(item -> item.get_id().equals(new ObjectId(_id)))
                .forEach(item -> itemRepository.deleteById(item.get_id()));
    }
}

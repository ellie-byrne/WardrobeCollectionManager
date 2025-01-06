package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import dev.wardrobe.WardrobeCollectionManager.AddItemDTO;

@Service
public class DeleteItemService {

    private final ItemRepository itemRepository;

    @Autowired
    public DeleteItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public void deleteById(ObjectId _id) {
        itemRepository.deleteById(_id);
    }

    public void deleteAll() {
        itemRepository.deleteAll();
    }

    public void deleteByName(String itemId) {
        itemRepository.findAll().stream()
                .filter(item -> item.getItemId().equals(itemId))
                .forEach(item -> itemRepository.deleteById(item.get_id()));
    }
}

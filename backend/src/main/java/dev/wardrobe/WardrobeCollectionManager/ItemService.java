package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> findAllItems() {
        return itemRepository.findAll();
    }

    public List<Item> findByType(String type) {
        System.out.println("Searching for items with type: " + type);
        List<Item> items = itemRepository.findAllByType(type);
        System.out.println("Found " + items.size() + " items");
        items.forEach(item -> System.out.println("Found item: " + item.getItem()));
        return items;
    }

    public Item findItemById(ObjectId id) {
        return itemRepository.findById(id).orElse(null);
    }

    public Item updateItem(ObjectId id, ItemUpdateDTO itemUpdateDTO) {
        Item item = itemRepository.findById(id).orElse(null);
        if (item != null) {
            item.setItem(itemUpdateDTO.getItem());
            item.setType(itemUpdateDTO.getType());
            return itemRepository.save(item);
        }
        return null;
    }
}
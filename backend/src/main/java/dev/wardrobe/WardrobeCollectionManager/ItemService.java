package dev.wardrobe.WardrobeCollectionManager;

import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ItemService {


    @Autowired
    private ItemRepository itemRepository;
    public List<Item> findAllItems() {
        return itemRepository.findAll();
    }

    public Item findItemById(ObjectId id) {
        return itemRepository.findById(id).orElse(null);
    }

    public List<Item> findByType(String type) {
        List<Item> items = itemRepository.findAllByType(type);
        System.out.println("Found " + items.size() + " items of type: " + type);
        return items;
    }

    public Item updateItem(ObjectId id, ItemUpdateDTO itemUpdateDTO) {
        Item item = itemRepository.findById(id).orElse(null);

        assert item != null;
        item.setItem(itemUpdateDTO.getItem());
        item.setType(itemUpdateDTO.getType());

        return itemRepository.save(item);
    }
}


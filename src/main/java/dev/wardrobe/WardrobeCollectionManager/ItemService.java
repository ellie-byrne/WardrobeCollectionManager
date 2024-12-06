package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {


    @Autowired
    private ItemRepository itemRepository;
    public List<Item> findAllItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> findItemByItemId(String itemId) {
        return itemRepository.findItemByItemId(itemId);

    }
}

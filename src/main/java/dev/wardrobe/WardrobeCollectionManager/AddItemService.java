package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class AddItemService {

    @Autowired
    private AddItemRepository addItemRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public AddItem createItem(AddItemDTO dto) {
        AddItem item = new AddItem(
                dto.getItemId(),
                dto.getItem(),
                dto.getDateAdded(),
                dto.getShopLink(),
                dto.getStorePhoto()
        );
        return addItemRepository.save(item);
    }
}

//    public AddItem createItem(String itemId, String item, String dateAdded, String shopLink, String storePhoto) {
//        AddItem addItem = addItemRepository.insert(new AddItem(itemId, item, dateAdded, shopLink, storePhoto));
//
//        Update update = new Update();
//        update.push("item", item);
//        Query query = new Query(Criteria.where("itemId").is(itemId));
//        var upResult = mongoTemplate.updateFirst(query, update, Item.class);
//        return addItem;
//    }
//}

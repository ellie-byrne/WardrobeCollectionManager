package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface ItemRepository extends MongoRepository<Items, String> {

}

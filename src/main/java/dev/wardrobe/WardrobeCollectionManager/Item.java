package dev.wardrobe.WardrobeCollectionManager;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "clothing-items")
@Data
//lombok.Data takes care of all getters and setters - I will come back and do this manually once I have a product
@AllArgsConstructor
//lombok.AllArgsConstructor takes all private fields as arguments
@NoArgsConstructor
//lombok.NoArgsConstructor takes no arguments in constructor
public class Item {

    @Id
    private ObjectId _id;
    private String itemId;
    private String item;
    private String dateAdded;
    private String shopLink;
    private List<String> filters;
    private String storePhoto;
    private List<String> uploadedPhotos;
    private List<String> review;

}

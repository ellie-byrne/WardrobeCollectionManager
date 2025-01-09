package dev.wardrobe.WardrobeCollectionManager;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "clothing-items")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class AddItem {
    @Id
    private ObjectId _id;
    private String itemId;
    private String item;
    private String type;
    private String shopLink;
    private String storePhoto;

    public AddItem(String itemId, String item, String type, String shopLink, String storePhoto) {
        this.itemId = itemId;
        this.item = item;
        this.type = type;
        this.shopLink = shopLink;
        this.storePhoto = storePhoto;
    }

}


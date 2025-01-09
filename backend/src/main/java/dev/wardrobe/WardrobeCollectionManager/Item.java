package dev.wardrobe.WardrobeCollectionManager;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;
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
@Builder
public class Item {

    @Id
    @JsonSerialize(using = ObjectIdSerializer.class)
    @Getter
    @Setter
    private ObjectId _id;
    private String itemId;
    private String item;
    private String type;
    private String shopLink;
    private List<String> filters;
    private String storePhoto;
    private List<String> uploadedPhotos;
    private List<String> review;

}

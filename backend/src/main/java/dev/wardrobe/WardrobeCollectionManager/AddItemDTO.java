package dev.wardrobe.WardrobeCollectionManager;

//Getters and Setters
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class AddItemDTO {
    private String itemId;
    private String item;
    private String type;
    private String shopLink;
    private String storePhoto;
}


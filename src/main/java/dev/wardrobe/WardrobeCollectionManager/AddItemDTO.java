package dev.wardrobe.WardrobeCollectionManager;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddItemDTO {
    private String itemId;
    private String item;
    private String dateAdded;
    private String shopLink;
    private String storePhoto;
}


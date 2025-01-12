package dev.wardrobe.WardrobeCollectionManager;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@SpringBootTest
class WardrobeCollectionManagerApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private MongoTemplate mongoTemplate;

	@BeforeEach
	void setUp() {
		mongoTemplate.dropCollection("items");
	}

	@Test
	void testGetAllItems() throws Exception {
		Item item1 = new Item();
		item1.set_id(new ObjectId());
		item1.setItem("T-shirt");
		item1.setType("top");
		item1.setStorePhoto("photo-url-1");

		Item item2 = new Item();
		item2.set_id(new ObjectId());
		item2.setItem("Jeans");
		item2.setType("bottom");
		item2.setStorePhoto("photo-url-2");

		mongoTemplate.save(item1);
		mongoTemplate.save(item2);

		mockMvc.perform(get("/api/v1/items"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[?(@.item == 'T-shirt')]").exists())
				.andExpect(jsonPath("$[?(@.item == 'Jeans')]").exists());
	}


	@Test
	void testGetItemsByType() throws Exception {
		Item item = new Item();
		item.set_id(new ObjectId());
		item.setItem("T-shirt");
		item.setType("top");
		item.setStorePhoto("photo-url");

		mongoTemplate.save(item);

		mockMvc.perform(get("/api/v1/items/type/top"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[0].item").value("T-shirt"))
				.andExpect(jsonPath("$[0].type").value("top"));
	}

	@Test
	void testGetSingleItem() throws Exception {
		ObjectId id = new ObjectId();
		Item item = new Item();
		item.set_id(id);
		item.setItem("T-shirt");
		item.setType("top");
		item.setStorePhoto("photo-url");

		mongoTemplate.save(item);

		mockMvc.perform(get("/api/v1/items/" + id))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.item").value("T-shirt"))
				.andExpect(jsonPath("$.type").value("top"));
	}

	@Test
	void testUpdateItem() throws Exception {
		ObjectId id = new ObjectId();
		Item item = new Item();
		item.set_id(id);
		item.setItem("T-shirt");
		item.setType("top");
		item.setStorePhoto("photo-url");

		mongoTemplate.save(item);

		String updatedItem = """
                {
                    "item": "Dress Shirt",
                    "type": "top"
                }
                """;

		mockMvc.perform(put("/api/v1/items/" + id)
						.contentType(MediaType.APPLICATION_JSON)
						.content(updatedItem))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.item").value("Dress Shirt"))
				.andExpect(jsonPath("$.type").value("top"));
	}

	@Test
	void testGetNonExistentItem() throws Exception {
		ObjectId nonExistentId = new ObjectId();
		mockMvc.perform(get("/api/v1/items/" + nonExistentId))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.item").doesNotExist());
	}
}
package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String itemId) {
        Review review = reviewRepository.insert(new Review(reviewBody));

        Update update = new Update();
        update.push("review", reviewBody);
        Query query = new Query(Criteria.where("itemId").is(itemId));
        var upResult = mongoTemplate.updateFirst(query, update, Item.class);
        return review;
    }
}

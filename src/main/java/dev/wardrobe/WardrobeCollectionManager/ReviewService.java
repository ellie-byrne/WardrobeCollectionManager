package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
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

        // Review review = reviewRepository.insert(new Review(body));

        mongoTemplate.update(Item.class)
                .matching(Criteria.where(itemId).is(itemId))
                    .apply(new Update().push("reviewIds").value(review.getId()))
                    .first();
        return review;
    }
}

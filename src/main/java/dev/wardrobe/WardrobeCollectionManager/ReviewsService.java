package dev.wardrobe.WardrobeCollectionManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewsService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Reviews createReview(String body, String id) {
        Reviews review = new Reviews(body);
        reviewRepository.insert(review);

        // Review review = reviewRepository.insert(new Review(body));

        mongoTemplate.update(Items.class)
                .matching(Criteria.where(id).is(id))
                .apply(new Update().push("review").value(review))
                .first();
        return review;
    }
}

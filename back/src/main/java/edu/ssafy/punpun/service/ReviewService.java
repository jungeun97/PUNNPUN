package edu.ssafy.punpun.service;

import edu.ssafy.punpun.entity.Child;
import edu.ssafy.punpun.entity.Review;

public interface ReviewService {
    //TODO : 파라미터가 너무 많다 줄일 수 없나?
    Review postReview(Child child, Long reservationId, String content, String keywordStr);
}
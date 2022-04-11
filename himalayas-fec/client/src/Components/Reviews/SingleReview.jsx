import React from "react";
import Stars from "simple-rating-stars";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { listReviews, metaReviews } from "../../lib/searchAPI.js";
import WriteReview from "./WriteReview.jsx";
import {
  productReviewsSelector,
  productMetaReviewsSelector,
  twoMore,
  showWriteReviewModal,
} from "../../lib/Atoms.jsx";

var SingleReview = ({ characteristics }) => {
  const specifiedReviewID = useRecoilValue(productReviewsSelector);
  console.log("😀 two reviews", specifiedReviewID);
  const [addTwoMoreReviews, setAddTwoMoreReviews] = useRecoilState(twoMore);
  const [showWriteReview, setShowWriteReview] =
    useRecoilState(showWriteReviewModal);
  const addTwoMore = () => {
    setAddTwoMoreReviews(addTwoMoreReviews + 2);
  };

  const showModal = () => {
    setShowWriteReview(true);
  };

  const hideModal = () => {
    setShowWriteReview(false);
  };

  return (
    <>
      {specifiedReviewID.map((review) => {
        return (
          <div key={review.review_id}>
            <Stars
              stars={review.rating}
              outOf={5}
              full={"#ebc634"}
              empty={"#ffffff"}
              stroke={"#000000"}
            />
            <p>date:{review.date}</p>

            <p>summary🙃:{review.summary}</p>
            <p>body👉: {review.body}</p>
            <p>recommend👍:{review.recommend}</p>
            <p>help: {review.helpfulness}</p>
            <p>
              photos:
              {review.photos.map((photo) => {
                return (
                  <img
                    key={photo.id}
                    src={photo.url}
                    width="150px"
                    height="200px"
                  ></img>
                );
              })}
            </p>
            <hr></hr>
          </div>
        );
      })}
      <button type="submit" onClick={addTwoMore}>
        MORE REVIEWS
      </button>
      <button type="submit" onClick={showModal}>
        ADD A REVIEW
      </button>
      {showWriteReview && (
        <WriteReview hideModal={hideModal} characteristics={characteristics} />
      )}
    </>
  );
};

export default SingleReview;

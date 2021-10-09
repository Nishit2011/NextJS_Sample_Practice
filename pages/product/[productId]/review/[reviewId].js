import React from "react";
import { useRouter } from "next/router";

const ReviewDetails = () => {
  const router = useRouter();
  const reviewId = router.query.reviewId;
  return <div>ReviewDetails {reviewId}</div>;
};

export default ReviewDetails;

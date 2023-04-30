import { useRouter } from 'next/router';
import React from 'react';

const Review = () => {
    const router = useRouter()
    const {productId,reviewId} = router.query;
    return (
        <div>
            <h1>Product detail no {productId} and review no {reviewId} </h1>
        </div>
    );
};

export default Review;
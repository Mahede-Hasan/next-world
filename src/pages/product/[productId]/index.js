import { useRouter } from 'next/router';
import React from 'react';

const ProductDetail = () => {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <div>
            <h1>Product detail {productId}</h1>
        </div>
    );
};

export default ProductDetail;
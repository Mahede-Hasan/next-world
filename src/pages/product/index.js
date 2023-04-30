import Link from 'next/link';
import React from 'react';

const Product = () => {
    return (
        <div>
            <Link href='/'>
                <span>Home</span>
            </Link>
            <h1>  <Link href='/product/1'>
                <span>Product-1</span>
            </Link></h1>
            <h1>  <Link href='/product/2'>
                <span>Product-2</span>
            </Link></h1>
            <h1>  <Link href='/product/3'>
                <span>Product-3</span>
            </Link></h1>
        </div>
    );
};

export default Product;
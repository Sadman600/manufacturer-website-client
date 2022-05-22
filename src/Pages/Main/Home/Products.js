import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('accessories.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [products]);
    return (
        <div className='my-5 p-5'>
            <h1 className='text-center text-5xl text-primary font-bold'>Our Accessories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    products.map((product, index) => <Product key={index} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
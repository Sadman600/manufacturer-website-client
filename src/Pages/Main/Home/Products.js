import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPage/Loading';
import Product from './Product';

const Products = () => {
    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('https://protected-fortress-62914.herokuapp.com/accessories').then(res =>
            res.json()
        )
    );

    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return 'An error has occurred: ' + error.message;
    }

    return (
        <div className='my-5 p-5'>
            <h1 className='text-center text-4xl text-primary font-bold'>Our Accessories</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.slice(0).reverse().slice(0, 6).map((product, index) => <Product key={index} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
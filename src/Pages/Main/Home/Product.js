import React from 'react';

const Product = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-3">
            <figure><img src="https://www.goodwillaccss.com/products/bbelblack2.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Elastic Belt</h2>
                <p>Our company holds vast experience in this domain and is involved in offering Garments Elastic Tape. </p>
                <h4 className='font-bold'>Order Quantity: 3 (minimum)</h4>
                <h4 className='font-bold'>Available Quantity: 13 pcs</h4>
                <h4 className='font-bold text-xl'>Price: $10</h4>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
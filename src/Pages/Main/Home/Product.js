import React from 'react';

const Product = ({ product }) => {
    const { img, name, description, minimumOrder, availableQuantity, price } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-3">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description} </p>
                <h4 className='font-bold'>Order Quantity: {minimumOrder} (minimum)</h4>
                <h4 className='font-bold'>Available Quantity: {availableQuantity} pcs</h4>
                <h4 className='font-bold text-xl'>Price: ${price}</h4>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
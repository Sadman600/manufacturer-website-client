import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../SharedPage/Loading';
import Order from './Order';

const Purchase = () => {
    const { purchaseId } = useParams();
    const { isLoading, error, data: purchase } = useQuery('purchase', () =>
        fetch(`http://localhost:5000/accessories/${purchaseId}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return 'An error has occurred: ' + error.message;
    }
    return (
        <div className='lg:flex'>

            <div className="card w-96 bg-base-100 shadow-sm mt-5 ml-16">
                <figure><img src={purchase.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{purchase.name}</h2>
                    <p>{purchase.description} </p>
                    <h4 className='font-bold'>Order Quantity: {purchase.minimumOrder} (minimum)</h4>
                    <h4 className='font-bold'>Available Quantity: {purchase.availableQuantity} pcs</h4>
                    <h4 className='font-bold text-xl'>Price: ${purchase.price}</h4>
                </div>
            </div>
            <Order key={purchase._id} purchase={purchase}></Order>
        </div>
    );
};

export default Purchase;
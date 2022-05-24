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
        <div>
            {purchase.name}
            <Order key={purchase._id} purchase={purchase}></Order>
        </div>
    );
};

export default Purchase;
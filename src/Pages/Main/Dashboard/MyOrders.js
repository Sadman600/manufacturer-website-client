import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../SharedPage/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { isLoading, error, data: orders } = useQuery('orders', () =>
        fetch(`http://localhost:5000/order/${email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return 'An error has occurred: ' + error.message
    }

    return (
        <div>
            MyOrders {orders.length}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <MyOrder key={index} order={order} index={index}></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
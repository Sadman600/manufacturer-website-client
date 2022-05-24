import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPage/Loading';
import { toast } from 'react-toastify';
import ManageAllOrder from './ManageAllOrder';
const ManageAllOrders = () => {
    const { isLoading, error, data: orders } = useQuery('orders', () =>
        fetch('http://localhost:5000/order').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return toast.error('An error has occurred: ' + error.message);
    }
    return (
        <div>
            ManageAllOrders {orders.length}
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
                            orders.map((order, index) => <ManageAllOrder key={index} order={order} index={index}></ManageAllOrder >)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;
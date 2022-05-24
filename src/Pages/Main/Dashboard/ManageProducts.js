import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPage/Loading';
import { toast } from 'react-toastify';
import ManageProduct from './ManageProduct';
const ManageProducts = () => {
    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('http://localhost:5000/accessories').then(res =>
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
            ManageProducts {products.length}
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Minimum Order</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProduct
                                key={index}
                                product={product}
                                index={index}></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageProducts;
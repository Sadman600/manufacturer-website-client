import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPage/Loading';
import { toast } from 'react-toastify';
import ManageProduct from './ManageProduct';
import ManageProductModal from './ManageProductModal';
const ManageProducts = () => {
    const [productDelete, setProductDelete] = useState(null);
    const { isLoading, error, data: products, refetch } = useQuery('products', () =>
        fetch('https://protected-fortress-62914.herokuapp.com/accessories').then(res =>
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
                                index={index}
                                setProductDelete={setProductDelete}
                            ></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
            {
                productDelete && <ManageProductModal
                    productDelete={productDelete}
                    setProductDelete={setProductDelete}
                    refetch={refetch}
                ></ManageProductModal>
            }
        </div>
    );
};

export default ManageProducts;
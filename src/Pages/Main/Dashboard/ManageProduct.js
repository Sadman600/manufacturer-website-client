import React from 'react';

const ManageProduct = ({ index, product }) => {
    const { _id, name, description, minimumOrder, availableQuantity, price } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{description}</td>
            <td>{minimumOrder}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td><button class="btn btn-xs capitalize">delete</button></td>
        </tr>
    );
};

export default ManageProduct;
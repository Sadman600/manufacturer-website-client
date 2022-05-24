import React from 'react';

const MyOrder = ({ index, order }) => {
    const { name, email, address, phone, productName, orderQuantity } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td><button class="btn btn-xs capitalize">cancle</button></td>
        </tr>
    );
};

export default MyOrder;
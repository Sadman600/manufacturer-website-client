/* import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
// import Order from './Order';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [count, setCount] = useState(3);
    const [user] = useAuthState(auth);
    const [purchase, setPurchase] = useState({});
    const { name, availableQuantity } = purchase;
    const { displayName, email } = user;
    useEffect(() => {
        fetch(`http://localhost:5000/accessories/${purchaseId}`)
            .then(res => res.json())
            .then(data => {
                setPurchase(data);
            });
    }, [purchaseId]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // const order = {
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     productName: e.target.productName.value,
        //     address: e.target.address.value,
        //     order: count
        // };
        console.log(name);
        // fetch('http://localhost:5000/order', {
        //     method: 'POST',
        //     body: JSON.stringify(order),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     });
    }
    return (
        <div>
            Purchase {purchase.name}

            <div className="hero min-h-screen">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body w-96 mx-auto ">

                        <div className="">
                            <label className="input-group">
                                <button onClick={() => setCount((count) => count - 1)} disabled={count === 3} className="btn">-</button>
                                <input type="text" name='quantity' value={count} readOnly className="input input-bordered w-full max-w-xs " />
                                <button onClick={() => setCount((count) => count + 1)} disabled={count >= availableQuantity} className="btn">+</button>
                            </label>
                        </div>

                        <form onSubmit={() => handlePlaceOrder()}>
                            <input type="text" name='name' value={displayName} readOnly className="input input-bordered w-full max-w-xs mt-1" />
                            <input type="text" name='email' value={email} readOnly className="input input-bordered w-full max-w-xs mt-1" />
                            <input type="text" name='productName' value={name} readOnly className="input input-bordered w-full max-w-xs mt-1" />
                            <textarea name='address' className="textarea textarea-bordered" placeholder="Address"></textarea>
                            <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs mt-1" />
                            <div className="form-control w-full ">
                                <input type="submit" value='Place Order' className=" btn btn-primary bg-gradient-to-r from-secondary to-primary text-white text-2xl font-bold w-full max-w-xs mt-1 capitalize" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase; */


/* import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Order = ({ purchase }) => {
    const [count, setCount] = useState(3);
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const { name, availableQuantity } = purchase;
    console.log(purchase);
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const order = {
            name: displayName,
            email: email,
            productName: name,
            address: e.target.address.value,
            order: count
        };
        console.log(order);
        // fetch('http://localhost:5000/order', {
        //     method: 'POST',
        //     body: JSON.stringify(order),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     });
    }
    return (
        <div className="hero min-h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body w-96 mx-auto ">
                    <label className="input-group">
                        <button onClick={() => setCount((count) => count - 1)} disabled={count === 3} className="btn">-</button>
                        <input type="text" name='quantity' value={count} readOnly className="input input-bordered w-full max-w-xs " />
                        <button onClick={() => setCount((count) => count + 1)} disabled={count >= availableQuantity} className="btn">+</button>
                    </label>
                    <form onSubmit={() => handlePlaceOrder()}>
                        <input type="text" name='name' value={displayName} readOnly className="input input-bordered w-full max-w-xs mt-1" />
                        <input type="text" name='email' value={email} readOnly className="input input-bordered w-full max-w-xs mt-1" />
                        <input type="text" name='productName' value={name} readOnly className="input input-bordered w-full max-w-xs mt-1" />
                        <textarea name='address' className="textarea textarea-bordered" placeholder="Address"></textarea>
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs mt-1" />
                        <div className="form-control w-full ">
                            <input type="submit" value='Place Order' className=" btn btn-primary bg-gradient-to-r from-secondary to-primary text-white text-2xl font-bold w-full max-w-xs mt-1 capitalize" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Order; */
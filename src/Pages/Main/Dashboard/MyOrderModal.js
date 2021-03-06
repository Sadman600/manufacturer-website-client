import React from 'react';
import { toast } from 'react-toastify';

const MyOrderModal = ({ deleteOrder, refetch, setDeleteOrder }) => {
    const { _id } = deleteOrder;
    const handleDeleteOrder = (id) => {
        fetch(`https://protected-fortress-62914.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your order cancle successfully');
                    setDeleteOrder(null);
                    refetch();
                }
            });
    }
    return (
        <div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">are you sure cancle your order ?</h3>

                    <div className="modal-action">
                        <button onClick={() => handleDeleteOrder(_id)} className="btn btn-error btn-xs capitalize">delete</button>
                        <label htmlFor="my-modal" className="btn  btn-xs capitalize">Cencle</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderModal;
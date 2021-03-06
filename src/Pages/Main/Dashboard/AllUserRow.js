import React from 'react';
import { toast } from 'react-toastify';
const AllUserRow = ({ index, user, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`https://protected-fortress-62914.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Faild to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(' successfully make an admin');
                }
            });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={handleMakeAdmin} className="btn btn-xs capitalize">Make Admin</button>}</td>
            <td><button className="btn btn-xs capitalize">delete</button></td>
        </tr>
    );
};

export default AllUserRow;
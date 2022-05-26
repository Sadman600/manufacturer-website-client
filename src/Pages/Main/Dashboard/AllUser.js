
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPage/Loading';
import AllUserRow from './AllUserRow';

const AllUser = () => {
    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch('https://protected-fortress-62914.herokuapp.com/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
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
            AllUser {users.length}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AllUserRow
                                key={index}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></AllUserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;
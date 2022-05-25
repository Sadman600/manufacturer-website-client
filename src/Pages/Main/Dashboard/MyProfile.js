import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedPage/Loading';

const MyProfile = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const name = user?.displayName;
    const { isLoading, error, data: loginUser } = useQuery('loginUser', () =>
        fetch(`http://localhost:5000/login/${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
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
    const { img, link, religion, location, nationality } = loginUser;
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="avatar ">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img ? img : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt='' />
                    </div>
                </div>
                <h2 class="card-title">{name}</h2>
                <p>{email}</p>
                <p>{link ? link : 'No profile link'}</p>
                <p>Religion: {religion ? religion : 'No religion'}</p>
                <p>Nationality: {nationality ? nationality : 'No nationality'}</p>
                <p>Location: {location ? location : 'No location'}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigate('updateProfile')} class="btn btn-primary capitalize">Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
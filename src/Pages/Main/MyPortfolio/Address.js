import React from 'react';
import sakibImg from '../../../images/sadman.jpg';
const Address = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:ml-48'>
                    <img src={sakibImg} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='lg:mr-48'>
                    <h1 className="text-4xl font-bold text-primary my-1">SADMAN SAKIB</h1>
                    <p className="">Address: Ashulia, Savar, Dhaka </p>
                    <p className="">Primary Mobile No: 01740105146 </p>
                    <p className="">Secondary Mobile No :01841997969 </p>
                    <p className="">Primary Email : sadmansakib600@gmail.com </p>
                </div>
            </div>
        </div>
    );
};

export default Address;
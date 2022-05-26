import React from 'react';
import arrOfObj from '../../../images/arrayOfObj.PNG';
const Blog4 = () => {

    return (
        <div className="card w-full bg-base-100 ">
            <div className="card-body">
                <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <div className=" w-full  image-full">
                    <img src={arrOfObj} alt="project-1" />

                </div>
            </div>
        </div>
    );
};

export default Blog4;
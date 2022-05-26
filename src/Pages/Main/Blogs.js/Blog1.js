import React from 'react';

const Blog1 = () => {
    return (

        <div className="card w-full bg-base-100 ">
            <div className="card-body">
                <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                <p>To optimize React rendering, my need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>

            </div>
        </div>

    );
};

export default Blog1;
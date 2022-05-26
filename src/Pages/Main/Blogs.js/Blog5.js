import React from 'react';

const Blog5 = () => {
    return (
        <div className="card w-full bg-base-100 ">
            <div className="card-body">
                <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                <p>Local (UI) state : Local state is data we manage in one or another component.</p>
                <p>Global (UI) state : Global state is data we manage across multiple components.</p>
                <p>Server state : Data that comes from an external server that must be integrated with our UI state.</p>
                <p>URL state : Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
        </div>
    );
};

export default Blog5;
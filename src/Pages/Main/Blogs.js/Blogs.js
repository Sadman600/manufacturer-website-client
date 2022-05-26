import React from 'react';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import Blog4 from './Blog4';
import Blog5 from './Blog5';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-primary text-5xl text-center font-bold my-2'>Our Blogs</h1>
            <Blog1></Blog1>
            <div class="divider"></div>
            <Blog2></Blog2>
            <div class="divider"></div>
            <Blog3></Blog3>
            <div class="divider"></div>
            <Blog4></Blog4>
            <div class="divider"></div>
            <Blog5></Blog5>
        </div>
    );
};

export default Blogs;
import React from 'react';
import Address from './Address';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

const MyPortfolio = () => {
    return (
        <div >
            <Address></Address>
            <div class="divider"></div>
            <Education></Education>
            <div class="divider"></div>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default MyPortfolio;
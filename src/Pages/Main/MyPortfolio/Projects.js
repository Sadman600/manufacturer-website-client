import React from 'react';
import project1 from '../../../images/top-project-1.PNG';
import project2 from '../../../images/top-project-2.PNG';
import project3 from '../../../images/top-project-3.PNG';
const Projects = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-primary text-lg font-bold my-2'>My Top Projects:</h1>
            <div>
                <h1 className='card-title'>Project-1</h1>
                <p>Live Side Link: <a href='https://it-management-service.web.app/' className="link link-accent">https://it-management-service.web.app/</a></p>
                <div className=" w-full  image-full">
                    <img src={project1} alt="project-1" />

                </div>
            </div>
            <div>
                <h1 className='card-title'>Project-2</h1>
                <p>Live Side Link: <a href='https://foodie-catering-service.firebaseapp.com/' className="link link-accent">https://foodie-catering-service.firebaseapp.com/</a></p>
                <div className=" w-full  image-full">
                    <img src={project2} alt="project-1" />

                </div>
            </div>
            <div>
                <h1 className='card-title'>Project-3</h1>
                <p>Live Side Link: <a href='https://app-product-shop.netlify.app/home' className="link link-accent">https://app-product-shop.netlify.app/home</a></p>
                <div className=" w-full  image-full">
                    <img src={project3} alt="project-1" />

                </div>
            </div>

            <div>
                <h1 className='card-title'>Project-4</h1>
                <p>Live Side Link: <a href='https://sadman600.github.io/my-phero-project2/index.html' className="link link-accent">https://sadman600.github.io/my-phero-project2/index.html</a></p>
            </div>
            <div>
                <h1 className='card-title'>Project-5</h1>
                <p>Live Side Link: <a href='https://sadman-sakib-community-center.netlify.app/' className="link link-accent">https://sadman-sakib-community-center.netlify.app/</a></p>
            </div>
            <div>
                <h1 className='card-title'>Project-6</h1>
                <p>Live Side Link: <a href='https://sakib-money-plan.netlify.app/' className="link link-accent">https://sakib-money-plan.netlify.app/</a></p>
            </div>
            <div>
                <h1 className='card-title'>Project-7</h1>
                <p>Live Side Link: <a href='https://brands-phone-company.netlify.app/' className="link link-accent">https://brands-phone-company.netlify.app/</a></p>
            </div>
            <div>
                <h1 className='card-title'>Project-8</h1>
                <p>Live Side Link: <a href='https://my-food-village.netlify.app/' className="link link-accent">https://my-food-village.netlify.app/</a></p>
            </div>

        </div>
    );
};

export default Projects;
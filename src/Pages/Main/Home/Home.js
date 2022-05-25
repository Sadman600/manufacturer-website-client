import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from './Banner';
import Manufacturer from './Manufacturer';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
            <Manufacturer></Manufacturer>
            <Footer></Footer>
        </div>
    );
};

export default Home;
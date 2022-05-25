import React from 'react';
// import banner1 from '../../../images/banner-1.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero " style={{ backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/50/61/99/1000_F_250619957_1aCdbRBJvzE0JVzajwSIkjyCS9Mx8C5z.jpg")` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold text-white text-left">We are all kinds of
                                <span className='text-warning mx-2'>Garments Accessories
                                    manufacturer</span>
                                & suppliers company</h1>
                            <p className="mb-5 text-white">Bangladeshi Garments Accessories manufacturer company in Dhaka Bangladesh providing all kinds of garments accessories since 2009. We offer tailored Garments accessories for leading Garments in and for the world-class international buyers.</p>
                            <button className=" rounded-full btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
                        </div>
                    </div>
                </div> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide1" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/02/50/61/99/1000_F_250619957_1aCdbRBJvzE0JVzajwSIkjyCS9Mx8C5z.jpg" alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://as1.ftcdn.net/v2/jpg/02/50/17/58/1000_F_250175891_qA6sXNik3VeqaHqy3uZLXHeknLZTVAVB.jpg" alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://as1.ftcdn.net/v2/jpg/02/50/39/94/1000_F_250399404_KXJtMTyaFWhU2h5MDGzZonWzjoyR4GqF.jpg" alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;


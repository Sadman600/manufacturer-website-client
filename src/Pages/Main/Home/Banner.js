import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/02/50/61/99/1000_F_250619957_1aCdbRBJvzE0JVzajwSIkjyCS9Mx8C5z.jpg" alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
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


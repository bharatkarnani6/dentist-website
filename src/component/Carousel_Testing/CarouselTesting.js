import React, { useState } from 'react';
import './CarouselTesting.scss';
import '../servicesPage/postEndodonticsSection/postEndodontics.scss'
import Slider from "react-slick";
import sliderpic1 from "../../assets/teeth1.png";
import sliderpic2 from "../../assets/cosmetic_bonding.png";
import astronaut from "../../assets/astronaut.png";
import celebrating from "../../assets/celebrating.png";
import education from "../../assets/education.png";
import taken from "../../assets/taken.png";

function CarouselTesting() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                 <button type="submit" className="previous2 round2">
                &#8250;
              </button>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <button type="submit" className="previous1 round1">
                &#8249;
              </button>
            </div>
        );
    };
    const images = [sliderpic1,sliderpic2,astronaut];
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <div className="Carousel">
            <div className="row">
                <div className="col-6 image">
                    <div className="back_color"></div>
                    <div className="slider_image">
                        <Slider {...settings}>
                            {images.map((img, idx) => (
                                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                                    <img src={img} alt={img}  />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="col-6 infos">
                    <h1>How it <br /> is Done ?</h1>
                    <p>Dental crowns are fabricated in the dental laboratory using the impression your dentist has made of your tooth after having prepared it. Because dental crowns encase the visible portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can be used to enhance the cosmetic appearance of a tooth.</p>
                </div>
            </div>
            
            
        </div>
    );
}

export default CarouselTesting;
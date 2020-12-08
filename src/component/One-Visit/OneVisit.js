import React, { useEffect, useState } from 'react';
import './OneVisit.scss';
import Image from '../../assets/CER-Press-image-CEREC-Ortho-SW-2.0-1.png';
import Slider from "react-slick";
import slider1 from '../../assets/cerec.png';
import slider2 from '../../assets/cerec-dental.png';
import slider3 from '../../assets/Intraoral-Scanner.png';
import slider4 from '../../assets/CER-Press-image-CEREC-Ortho-SW-2.0-1.png';
import Testimonials from './testimonials/testimonial';
import Parallax from 'react-rellax';
import AOS from "aos";
import "aos/dist/aos.css";


function OneVisit() {

    useEffect(() => {
        AOS.init();
    }, []);

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrows next_button" onClick={onClick}>
                <button style={{ outline: 'none' }} type="submit" className="previous2 round2">
                    &#8250;
              </button>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrows prev_button" onClick={onClick}>
                <button style={{ outline: 'none' }} type="submit" className="previous1 round1">
                    &#8249;
              </button>
            </div>
        );
    };
    const images = [slider1, slider2, slider3, slider4];
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: false,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };
    return (
        <div className="onevisit">
            <div className="row">
                <div className="col-6 text1" data-aos="fade-right" data-aos-duration="1000">
                    <h1>The first in <br /> Karnataka <br /> to implement <br /> One-Visit Dentistry</h1>
                    <p>We are one of the first in the nation to adopt one-day dentistry through CEREC (Chairside Economical Restoration of Esthetic Ceramics, the ultimate in digital dentistry technology.</p>

                </div>
                <div className="col-6">
                    <div className="background"></div>
                    <div className="image_1" data-aos="fade-left" data-aos-duration="1000">
                    </div>
                </div>
            </div>
            <div className="row sliders">
                <div className="col-6 text5" data-aos="fade-right" data-aos-duration="1000">
                    <h1>Orthodontics</h1>
                    <p>From traditional braces to invisible aligners, get the best alignment for your smile.</p>
                    <br />
                    <button className="btn btn-primary">Explore</button>

                    <div>
                        <Parallax speed={4}>
                            <h1 className="treatments text-center">TREATMENTS</h1>
                        </Parallax>
                    </div>

                    <div class="three-dots">
                        <span class="second"></span>
                        <span class="second"></span>
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="first"></span>

                    </div>

                </div>
                <div className="col-6 image_5">
                    <div className="back_colors"></div>
                    <div className="slider_images" data-aos="fade-left" data-aos-duration="1000">
                        <Slider {...settings}>
                            {images.map((img, idx) => (
                                <div className={idx === imageIndex ? "slides activeSlides" : "slides"}>
                                    <img src={img} alt={img} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="background_2"></div>
                    <div className="image_2" data-aos="fade-up-right" data-aos-duration="1000">
                    </div>
                </div>
                <div className="col-6 text2" data-aos="fade-left" data-aos-duration="1000">
                    <h1>Meet<br></br> Dr. Prashant Patil</h1>
                    <p>Read about the story of the one-of a kind, world-class dentistry in Karnataka and the man behind it.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 text3" data-aos="fade-right" data-aos-duration="1000">
                    <h1>Dental Tourism.</h1>
                    <h3>A paid vacation + your dental procedure</h3><br></br>
                    <p>Combine your paid vacation with your dental procedure schedule to save money or to get more value out of investment..</p>

                </div>
                <div className="col-6">
                    <div className="image_3" data-aos="fade-left" data-aos-duration="1000"></div>
                </div>
            </div>
            <div className="counter">
                <div className="row text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div className="col">
                        <h1>21</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="col">
                        <h1>311+</h1>
                        <p>Happy patients</p>
                    </div>
                    <div className="col">
                        <h1>10</h1>
                        <p>Advanced Dental Operatories</p>
                    </div>
                    <div className="col">
                        <h1>4</h1>
                        <p>Winning Awards</p>
                    </div>
                    <div className="col">
                        <h1>0</h1>
                        <p>Medical Specialist</p>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                <Testimonials />
            </div>
        </div>
    )
}
export default OneVisit;
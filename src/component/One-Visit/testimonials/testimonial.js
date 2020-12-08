import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import './testimonials.scss';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Testimonials() {

    useEffect(()=>{
        AOS.init();
    })

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrows next_button_2" onClick={onClick}>
                <button style={{outline:'none'}} type="submit" className="previous2 round2">
                    &#8250;
              </button>
              {/* <h1>Next</h1> */}
            </div>
        );
    };
    const numbers = [0, 1, 2];
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 2,
        nextArrow: <NextArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };
    return (
        <div className="testimonials">
            <Slider {...settings}>
                {numbers.map((i) => {
                    return (<div className={i === imageIndex ? "slides activeSlides" : "slides"} >
                        <div className="test">
                            
                        <div className="image" data-aos="zoom-in" data-aos-duration="1000">
                            <img src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
                        </div>
                        <div className="text_1" data-aos="zoom-in" data-aos-duration="1000">
                            <h1 style={{ color: '#227577' }}>Reena Khan</h1>
                            <p style={{ color: '#227577' }}>"Where science meets art to make you smile. Such a advanced technology I have ever seen."</p>
                        </div>

                    </div>
                    </div>);
                })}
                {/* <div>
                  <div className="image">
                      <img src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
                  </div>
                  <div className="text_1">
                          <h1 style={{color: '#227577'}}>Reena Khan</h1>
                          <p style={{color: '#227577'}}>"Where science meets art to make you smile. Such a advanced technology I have ever seen."</p>
                  </div>
      
                </div> */}
                {/* <div>
                <div className="image">
                      <img src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
                  </div>
                  <div className="text_1">
                          <h1 style={{color: '#227577'}}>Reena Khan</h1>
                          <p style={{color: '#227577'}}>"Where science meets art to make you smile. Such a advanced technology I have ever seen."</p>
                  </div>
                </div> */}
                {/* <div >
                <div className="image">
                      <img src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
                  </div>
                  <div className="text_1">
                          <h1 style={{color: '#227577'}}>Reena Khan</h1>
                          <p style={{color: '#227577'}}>"Where science meets art to make you smile. Such a advanced technology I have ever seen."</p>
                  </div>
                </div> */}

            </Slider>
        </div>
    );
}
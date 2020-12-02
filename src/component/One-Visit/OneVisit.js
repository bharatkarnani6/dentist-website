import React from 'react';
import './OneVisit.css';
import Image from '../../assets/CER-Press-image-CEREC-Ortho-SW-2.0-1.png';

function OneVisit(){
    return(
        <div className="onevisit">
            <div className="row">
                <div className="col-6 text1">
                    <h1>The first in Karnataka to implement One-Visit Dentistry</h1>
                    <p>We are one of the first in the nation to adopt one-day dentistry through CEREC (Chairside Economical Restoration of Esthetic Ceramics, the ultimate in digital dentistry technology.</p>
                </div>
                <div className="col-6">
                    <div className="background"></div>
                    <div className="image_1">
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="background_2"></div>
                        <div className="image_2">  
                        </div>
                </div>
                <div className="col-6 text2">
                    <h1>Meet<br></br> Dr. Prashant Patil</h1>
                    <p>Read about the story of the one-of a kind, world-class dentistry in Karnataka and the man behind it.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-6 text_3">
                <h1>Dental Tourism.</h1>
                    <h3>A paid vacation + your dental procedure</h3>
                    <p>Combine your paid vacation with your dental procedure schedule to save money or to get more value out of investment..</p>
                    
                </div>
                <div className="col-6">
                    <div className="image_3"></div>
                </div>
                </div>
        </div>
    )
}
export default OneVisit;
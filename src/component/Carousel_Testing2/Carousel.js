import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import heading1 from '../../assets/Group 553.png';
import heading2 from '../../assets/Group 678.png';

import Ring from '../../assets/Group 679.png';

export default function Carousel() {
    useEffect(() => {
        heading();
    })

   
    function heading() {
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:prefer-const
        const svgElement1 = document.getElementById('animation_heading');
        const maskedElement1 = document.querySelector('#mask-circle_heading');
        const circleFeedback1 = document.querySelector('#circle-shadow_heading');
        const svgPoint = svgElement1.createSVGPoint();
        // tslint:disable-next-line:typedef
        function cursorPoint(e, svg) {
            svgPoint.x = e.clientX;
            svgPoint.y = e.clientY;
            return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
        }
        // tslint:disable-next-line:typedef
        function update(svgCoords) {
            maskedElement1.setAttribute('cx', svgCoords.x);
            maskedElement1.setAttribute('cy', svgCoords.y);
            circleFeedback1.setAttribute('cx', svgCoords.x);
            circleFeedback1.setAttribute('cy', svgCoords.y);
        }
        // tslint:disable-next-line:typedef
        // tslint:disable-next-line:only-arrow-functions
        window.addEventListener('mousemove', (e) => {
            const scrol = window.pageYOffset + e.clientY;
            if(scrol < 375){
                update(cursorPoint(e, svgElement1));
                document.getElementById('circle-shadow_heading').style.display = 'block';
                document.getElementById('mask-circle_heading').style.display = 'block';
            } else {
                document.getElementById('circle-shadow_heading').style.display = 'none';
                document.getElementById('mask-circle_heading').style.display = 'none';
            }

           
        }, false);
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.targetTouches[0];
            if (touch) {
                update(cursorPoint(touch, svgElement1));
            }
        }, false);
    }

    return (
        <div>
            <svg className="heading_image" id="animation_heading">
                <rect width="100%" height="100%" fill="yellow" 
                fillOpacity="0"
                />
                <image xlinkHref={heading1} width="900" height="900" />
            </svg>
            <svg className="heading_image" id="animation_heading">
                <defs>
                    <clipPath id="mask1">
                        <circle id="mask-circle_heading" cx="50%" cy="50%" r="13%" style={{ fill: '#ffffff' }} />
                    </clipPath>
                    <filter id="this_image_heading" x="0%" y="0%" width="100%" height="100%">
                        <feImage cx="50%" cy="50%" r="15%" xlinkHref={Ring}/>
                    </filter>
                </defs>
                <g clipPath="url(#mask1)">
                    <rect width="100%" height="100%" fill="#46C1BB" />
                    <image xlinkHref={heading2} width="900" height="900" />
                </g>
                <circle id="circle-shadow_heading" cx="50%" cy="50%" r="15%" filter="url(#this_image_heading)" />
            </svg> 
        </div>   
    );
}
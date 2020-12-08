import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import heading1 from '../../assets/Group 553.png';
import heading2 from '../../assets/Group 678.png';



export default function Carousel() {
    useEffect(() => {
        heading();
    })

   
    function heading() {
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:prefer-const
        const svgElement = document.getElementById('animation_heading');
        const maskedElement1 = document.querySelector('#mask-circle_heading');
        const circleFeedback1 = document.querySelector('#circle-shadow_heading');
        const svgPoint = svgElement.createSVGPoint();
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
            update(cursorPoint(e, svgElement));
           
        }, false);
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.targetTouches[0];
            if (touch) {
                update(cursorPoint(touch, svgElement));
            }
        }, false);
    }

    return (
        <div>
            <svg className="heading_image" id="animation_heading">
                {/* <rect width="100%" height="100%" fill="yellow" /> */}
                <image xlinkHref={heading1} width="800" height="800" />
            </svg>

            <svg className="heading_image" id="animation_heading">
                <defs>
                    <clipPath id="mask">
                        <circle id="mask-circle_heading" cx="50%" cy="50%" r="14%" style={{ fill: '#ffffff' }} />
                    </clipPath>
                </defs>
                <g clipPath="url(#mask)">
                    <rect width="100%" height="100%" fill="#272730" />
                    <image xlinkHref={heading2} width="800" height="800" />
                </g>
                <circle id="circle-shadow_heading" cx="50%" cy="50%" r="14%" style={{ stroke: '#fff', fill: 'transparent', strokeWidth: '5' }} />
            </svg>
        </div>   
    );
}
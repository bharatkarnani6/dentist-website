import React, { useEffect } from 'react';
import './LandingPage.scss';
import Tooth from '../../assets/Tooth.png';
import Blue_Tooth from '../../assets/Tooth_blue.png';
// import Logo from '../../assets/flooop.png';
import Parallax from 'react-rellax';
import OneVisit from '../One-Visit/OneVisit';
import CommonNavBar from '../CommonNavBar/CommonNavBar';
import Logo from '../Logo/logo';
import heading1 from '../../assets/Group 553.png';
import heading2 from '../../assets/Group 678.png';
import Carousel from '../Carousel_Testing2/Carousel'
function LandingPage() {

    // var rellax = new Rellax('.rellax');
    // AOS.init();
    useEffect(() => {
        // AOS.init({duration: 2000})
        // heading();
        tooth();
    })

    // function heading() {
    //     const h = document.querySelector('#heading');
    //     const p = h.getBoundingClientRect();
    //     const c = document.querySelector('.cursor2');
    //     document.body.onmousemove = (e) => {
    //         /*Adjust the cursor position*/
    //         c.style.left = e.clientX + 'px';
    //         c.style.top = e.clientY + 'px';
    //         /*Adjust the clip-path*/
    //         h.style.setProperty('--x', ((200 + (e.clientX)) - p.top) + 'px');
    //         h.style.setProperty('--y', ((-190 + (e.clientY)) - p.left) + 'px');
    //     };
    // }

    function tooth() {
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:prefer-const

        const svgElement = document.getElementById('tooth');
        const maskedElement = document.querySelector('#mask-circle');
        const circleFeedback = document.querySelector('#circle-shadow');
        const svgPoint = svgElement.createSVGPoint();
        // tslint:disable-next-line:typedef
        function cursorPoint(e, svg) {
            svgPoint.x = e.clientX;
            svgPoint.y = e.clientY;
            return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
        }
        // tslint:disable-next-line:typedef
        function update(svgCoords) {
            maskedElement.setAttribute('cx', svgCoords.x);
            maskedElement.setAttribute('cy', svgCoords.y);
            circleFeedback.setAttribute('cx', svgCoords.x);
            circleFeedback.setAttribute('cy', svgCoords.y);
        }
        // tslint:disable-next-line:typedef
        // tslint:disable-next-line:only-arrow-functions
        window.addEventListener('mousemove', (e) => {
            const scro = window.pageYOffset + e.clientY;
            console.log(scro);

            if(scro > 400){
                update(cursorPoint(e, svgElement));
            }
           
        }, false);
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.targetTouches[0];
            if (touch) {
                update(cursorPoint(touch, svgElement));
            }
        }, false);
    }
    // function heading() {
    //     // tslint:disable-next-line:no-unused-expression
    //     // tslint:disable-next-line:prefer-const
    //     const svgElement = document.querySelector('svg');
    //     const maskedElement = document.querySelector('#mask-circle_heading');
    //     const circleFeedback = document.querySelector('#circle-shadow_heading');
    //     const svgPoint = svgElement.createSVGPoint();
    //     // tslint:disable-next-line:typedef
    //     function cursorPoint(e, svg) {
    //         svgPoint.x = e.clientX;
    //         svgPoint.y = e.clientY;
    //         return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
    //     }
    //     // tslint:disable-next-line:typedef
    //     function update(svgCoords) {
    //         maskedElement.setAttribute('cx', svgCoords.x);
    //         maskedElement.setAttribute('cy', svgCoords.y);
    //         circleFeedback.setAttribute('cx', svgCoords.x);
    //         circleFeedback.setAttribute('cy', svgCoords.y);
    //     }
    //     // tslint:disable-next-line:typedef
    //     // tslint:disable-next-line:only-arrow-functions
    //     window.addEventListener('mousemove', (e) => {
    //         update(cursorPoint(e, svgElement));
    //     }, false);
    //     document.addEventListener('touchmove', (e) => {
    //         e.preventDefault();
    //         const touch = e.targetTouches[0];
    //         if (touch) {
    //             update(cursorPoint(touch, svgElement));
    //         }
    //     }, false);
    // }
    return (
        <div>
            <section className="">
                {/* <Logo /> */}
                <div className="sky"></div>
               
                <div className="info">
                   <Carousel /> 
                    {/* <h1 id="heading" style={{ fontWeight: 'bold' }} className="text-center" data-text="WHERE SCIENCE MEETS ART">WHERE SCIENCE MEETS ART</h1>
                    <span className="cursor2"></span>
                     <svg className="heading_image">
                        <rect width="100%" height="100%" fill="yellow" />
                        <image xlinkHref={heading1} width="800" height="800" />
                    </svg>

                    <svg className="heading_image">
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
                    </svg> */}
                </div>
                <Parallax speed={8}>
                <div className="testing">
                    <svg id="tooth">
                        {/* <rect width="100%" height="100%" fill="pink" /> */}
                        <image xlinkHref={Tooth} width="800" height="800" />
                    </svg>

                    <svg id="tooth">
                        <defs>
                            <clipPath id="mask">
                                <circle id="mask-circle" cx="50%" cy="50%" r="14%" style={{ fill: '#ffffff' }} />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#mask)">
                            <rect width="100%" height="100%" fill="#272730" />
                            <image xlinkHref={Blue_Tooth} width="800" height="800" />
                        </g>
                        <circle id="circle-shadow" cx="50%" cy="50%" r="14%" style={{ stroke: '#fff', fill: 'transparent', strokeWidth: '5' }} />
                    </svg>
                </div>
            </Parallax>
            </section>
            <OneVisit />
        </div>

    )
}

export default LandingPage;
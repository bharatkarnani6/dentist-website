import React, { useEffect } from 'react';
import './LandingPage.scss';
import Tooth from '../../assets/Tooth.png';
import Blue_Tooth from '../../assets/Tooth_blue.png';
// import Logo from '../../assets/flooop.png';
import Parallax from 'react-rellax';
import OneVisit from '../One-Visit/OneVisit';
import CommonNavBar from '../CommonNavBar/CommonNavBar';
function LandingPage() {

    // var rellax = new Rellax('.rellax');
    // AOS.init();
    useEffect(() => {
        // AOS.init({duration: 2000})
        heading();
        tooth();
    })

    function heading() {
        const h = document.querySelector('#heading');
        const p = h.getBoundingClientRect();
        const c = document.querySelector('.cursor2');
        document.body.onmousemove = (e) => {
            /*Adjust the cursor position*/
            c.style.left = e.clientX + 'px';
            c.style.top = e.clientY + 'px';
            /*Adjust the clip-path*/
            h.style.setProperty('--x', ((200 + (e.clientX)) - p.top) + 'px');
            h.style.setProperty('--y', ((-190 + (e.clientY)) - p.left) + 'px');
        };
    }

    function tooth() {
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:prefer-const
        const svgElement = document.querySelector('svg');
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
            <section className="">
                {/* <CommonNavBar /> */}
                <div className='background__logobox'>
                <svg height="210" width="400">
                    <path fill="#fff" d="M 100 300 C 250 500 250 300 350 300 " transform="translate(-100 -290)" />
                </svg>
                <div className='background__logobox__logoimage'>
                    <div className='background__logobox__Swetha'>Swetha</div>
                    <div className='background__logobox__dentistry'>DENTISTRY</div>
                </div>
            </div>
                <div className="sky"></div>
                {/* <div className="menu">
                    <ul>
                        <li><div id="logo"><img src={Logo} /></div></li>
                            <li style={{float: 'right'}}><a className="active">About</a></li>
                            <li style={{float: 'right'}}><a >News</a></li>
                            <li style={{float: 'right'}}><a >Contact</a></li>
                            <li style={{float: 'right'}}><a >Home</a></li>
                    </ul>
                </div> */}
                <div className="info">
                    <h1 id="heading" style={{ fontWeight: 'bold' }} className="text-center" data-text="WHERE SCIENCE MEETS ART">WHERE SCIENCE MEETS ART</h1>
                    <span className="cursor2"></span>
                </div>
                <Parallax speed={6}>
                <div className="testing">
                    <svg>
                        <rect width="0%" height="0%" fill="pink" />
                        <image xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={Tooth} width="100%" height="100%" />
                    </svg>

                    <svg style={{padding:'100px'}}>
                        <defs>
                            <clipPath id="mask">
                                <circle id="mask-circle" cx="50%" cy="50%" r="14%" style={{ fill: '#ffffff' }} />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#mask)">
                            {/* <rect width="100%" height="100%" fill="#272730" /> */}
                            <image style={{position:'relative', right:'10%'}} xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={Blue_Tooth} width="100%" height="100%" />
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
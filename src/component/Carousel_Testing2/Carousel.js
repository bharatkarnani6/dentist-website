// import React, { useState } from 'react';
// import './Carousel.scss';
// import Slider from "react-slick";
// import sliderpic1 from "../../assets/teeth1.png";
// import sliderpic2 from "../../assets/cosmetic_bonding.png";
// import astronaut from "../../assets/astronaut.png";
// import celebrating from "../../assets/celebrating.png";
// import education from "../../assets/education.png";


// function Carousel() {
//     const NextArrow = ({ onClick }) => {
//         return (
//             <div className="arrow next" onClick={onClick}>
//                 <h1>Right</h1>
//             </div>
//         );
//     };

//     const PrevArrow = ({ onClick }) => {
//         return (
//             <div className="arrow prev" onClick={onClick}>
//                 <h1>left</h1>
//             </div>
//         );
//     };
//     const images = [astronaut,sliderpic2,sliderpic1];
//     const [imageIndex, setImageIndex] = useState(0);
//     const settings = {
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 2,
//     centerMode: true,
//     centerPadding: 0,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setImageIndex(next),
//   };

//     return (
//         <div className="testing">
//             <Slider {...settings}>
//                 {images.map((img, idx) => (
//                     <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
//                         <img src={img} alt={img} />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }

// export default Carousel;
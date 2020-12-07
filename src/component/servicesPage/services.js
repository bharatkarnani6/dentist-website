import React from 'react';
import Meta from "./meta/meta.js";
import Endodontics from "./endodonticsSection/endodontics"
// import PostEndodontics from "./postEndodonticsSection/postEndodontics"
import Slider from "./sliderSection/slider"
import Emi from "./emiSection/emi"
import OtherServices from "./otherServicesSection/otherServices"
import ReactSlider from "./otherServicesSection/reactSlider"
import ScheduleVisit from "./scheduleVisitSection/schedulevisit"
import Footer from "./footer/footer"


// const slideData = [
//   {
//     index: 0,
//     headline: 'New Fashion Apparel',
//     button: 'Shop now',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
//   },
//   {
//     index: 1,
//     headline: 'In The Wilderness',
//     button: 'Book travel',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
//   },
//   {
//     index: 2,
//     headline: 'For Your Current Mood',
//     button: 'Listen',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
//   },
//   {
//     index: 3,
//     headline: 'Focus On The Writing',
//     button: 'Get Focused',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
//   }
// ]


function Services() {
  return (
    <div className="App">
      <Meta/>
      <Endodontics/>
      {/* <PostEndodontics/> */}
      <Slider/>
      <Emi/>
      {/* <OtherServices/> */}
      {/* <ReactSlider heading="Example Slider" slides={slideData}/> */}
      <ScheduleVisit/>
      <Footer/>
      </div>
  );
}

export default Services;

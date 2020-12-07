import React from 'react';
import Meta from "../servicesPage/meta/meta.js";
import TopPicture from "./topPictureSection/topPicture"
import MidPicture from "./midPictureSection/midPicture"
import Story from "./storySection/story"
import Inspiration from "./inspirationSection/inspiration"
import ScheduleVisit from "../servicesPage/scheduleVisitSection/schedulevisit"
import Footer from "../servicesPage/footer/footer"


function Services() {
  return (
    <div className="App">
      <Meta/>
      <TopPicture/>
      <Story/>
      <MidPicture/>
      <Inspiration/>
      <ScheduleVisit/>
      <Footer/>
      </div>
  );
}

export default Services;

import React, { useEffect } from 'react';
import '../worldclassexperience/worldclassexperience.css'
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import secondImg from '../../assets/2.png';

function Worldclassexperiences() {

  useEffect(() => {
    var elem = document.getElementById("swiper-show");
    var top = 0;
    var left = 200;
    elem.style.top = top + 'px';
    elem.style.left = left + 'px';
    var id = setInterval(frame, 5);
    var secondid = null;
    function frame() {
      if (top === 330 && left === 500) {
        elem.textContent = '<  >';
        elem.style.backgroundColor = '#277E82';
        setTimeout(()=>{
          elem.textContent = 'Click & Drag';
          elem.style.backgroundColor = '#277E82';
          clearInterval(id);
          secondid = setInterval(secondframe,5);
        },700);
      }
      else {
        top += 1.5;
        left += 1.5;
        if(top > 50 && left > 50){
          elem.textContent = 'Click & drag';
          elem.style.backgroundColor = '#277E82';
          elem .style.color = 'white';
        }
        if (top === 330 || left === 500) {
          top = 330;
          left = 500;
        }
        elem.style.top = top + 'px';
        elem.style.left = left + 'px';
      }
    }

    function secondframe(){
      if(left === 82){
        clearInterval(secondid);
        elem.textContent = 'Click & Drag';
      }
      else{
        left -= 1;
        elem.style.top = top + 'px';
        elem.style.left = left + 'px';
      }
    }
  }, [])

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 20,
  }
  return (
    <div className='worldclassexperience'>
      <div className="animation">
        <h3 className='animation-heading'>WORLD CLASS EXPERIENCE</h3>
        <div className='swiper-container' style={{ padding: '60px 0px 0px 70px' }}>
          <span className='swiper-show' id='swiper-show'></span>
          <Swiper {...params}>
            <SwiperSlide><img src={secondImg} alt='firstimage' className='swiperimg' ></img></SwiperSlide>
            <SwiperSlide><img src={secondImg} alt='secondimage' className='swiperimg'></img></SwiperSlide>
            <SwiperSlide><img src={secondImg} alt='thirdimage' className='swiperimg'></img></SwiperSlide>
            <SwiperSlide><img src={secondImg} alt='fourthimage' className='swiperimg'></img></SwiperSlide>
          </Swiper>
        </div>

        <div className='schedule-container'>
          <h1 className='schedule-heading'>SCHEDULE A VISIT</h1>

          <div className='schedule-form row'>
            <div className='schedule-form-left col-md-6'>
              <form>
                <div className="form-group">
                  <label className='form-label'>Name</label><br />
                  <input type='text' className='form-input'></input><br />
                </div>
                <div className="form-group">
                  <label className='form-label'>Date</label><br />
                  <input type='text' className='form-input'></input><br />
                </div>
                <button type='submit' className='btn btn-light badge-pill form-btn'>Submit</button>
              </form>
            </div>

            <div className='schedule-form-right col-md-6'>
              <form>
                <div className="form-group">
                  <label className='form-label'>Phone</label><br />
                  <input type='text' className='form-input'></input><br />
                </div>
                <div className="form-group">
                  <label className='form-label'>Service Provided</label><br />
                  <input type='text' className='form-input'></input><br />
                </div>
                <button type='submit' className='btn btn-light badge-pill form-btn'>Call Us</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Worldclassexperiences;
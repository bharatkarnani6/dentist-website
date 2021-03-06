import React from 'react';
import '../ourexperts/ourexperts.scss'
import Expert from '../../assets/CER-Press-image-CEREC-Ortho-SW-2.0-1.png'
import Expertteeth from '../../assets/teeth1.png'
import Whatsapp from '../../assets/whatsapp.png'
import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import SubmitForm from '../sumbitform/sumbitform.js';
import BottomNav from '../bottomnav/bottomnav.js';
import Nav from '../../assets/icons8-menu-24.png'
import Play from '../../assets/hiclipart.com.png'
import Expertteethleft from '../../assets/NoPath - Copy (4)@2x.png'
function OurexpertsPage() {
  return (
    <div>
      <div className='backgroundourexpert'>

        <div className='backgroundourexpert__logobox'>
          <div className='backgroundourexpert__logobox__threedotnav'>
            <img

              src={Nav}
              alt='expert'
            />
            <div className='backgroundourexpert__logobox__logoimage'>
              <div className='backgroundourexpert__logobox__Swetha'>Swetha</div>
              <div className='backgroundourexpert__logobox__dentistry'>DENTISTRY</div>
            </div></div>

          <div className='backgroundourexpert__logobox__blueright'>
            <img
              className='imageblueright'
              src={Expert}
              alt='expert'
            />
          </div>
          <div>
            <div className='heading'>Get a ceramic restoration in a <br />single visit.
          <div className='des'>Long gone are the days where you needed to make multiple visits to the dentist to restore your teeth. <br />Cerec 3D is here to simplify all of your dental problems.</div>
              <div className='des'>CEREC or Cerec (Chairside Economical Restoration of Esthetic Ceramics, or CEramic REConstruction) is a method of <br />CAD/CAM dentistry developed by W. Mörmann and M. Brandestini at the University of Zurich in 1980 for creating dental <br />restorations. Using CAD/CAM (computer-aided design and computer-aided manufacturing), CEREC aids dentists to <br />design, produce, and insert individual metal-free ceramic restorations directly at the point of treatment (chairside) in a<br /> single appointment. </div>
              <br />
              <div className='des'>The dentist designs a virtual restoration (onlay, inlay, crown, or bridge) without taking impressions and combined with a <br />milling unit, is able to build the actual restoration while you are still in the chair. </div>
              <div className='des'> While it might sound like a fancy ‘gadget’, CEREC is actually much more. And in the hands of a skilled and experienced <br />CEREC® dentist, it is a powerful tool that propels us into a new way of experiencing modern dentistry which can be<br /> efficient, aesthetically beautiful and in many cases cost effective compared to other dental treatments.</div>

            </div>
            <div className='backgroundourexpert blueleft'>
          
             <img
                className='expertteeth'
                src={Expertteethleft}
                alt='expert'
              />
              <img
                className='image1'
                src={Expertteeth}
                alt='expert'
              />
              
              <img
              className='playbutton'
              src={Play}
              alt='expert'
            /> 
              <div>
                <div className='rightheading'>How is <br />it done?</div>
                <div className='rightheadingdescription'>Dental crowns are fabricated in the dental <br />laboratory using the impression your dentist<br /> has made of your tooth after having <br />prepared it. Because dental crowns encase <br />the visible portion of a tooth, any porcelain <br />crown (all-ceramic or porcelain-fused-to-<br />metal ones) can be used to enhance the<br /> cosmetic appearance of a tooth.</div>
              </div>
             
            </div>
         
          </div>
       
          <div class="three-dots">
          <span class="first"></span>
          <span class="first"></span>
          <span class="first"></span>
          <span class="first"></span>
          <span class="first"></span>
          <span class="first"></span>
      <span class="first"></span>
      <span class="second"></span>
      <span class="second"></span>
  <button
              type='submit'
              className='previous1 round1'
            >&#8249;
              </button>
              <button
              type='submit'
              className='previous2 round2'
            >&#8250;
              </button>
</div>
          <div>
            <SubmitForm />
          </div>
          <div>
            <BottomNav />
          </div>
        </div>
      </div>

    </div>


  );
}

export default OurexpertsPage;


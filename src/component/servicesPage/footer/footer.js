import react from "react";
import "./footer.css";
import w from "../../../assets/whatsapp.png"
import i from "../../../assets/instagram.png"
import t from "../../../assets/twitter.png"
import f from "../../../assets/facebook.png"
import y from "../../../assets/youtube.png"

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="row d-flex full-height ">
          <div className="col-lg-4 h-100 d-flex justify-content-center align-items-center">
            <div id="our-locations" className="justify-content-center">
              <div className="footer-heading footer-center">Our locations</div>
              <div className="footer-text footer-center">
                Trust Pharmacy, 1st Floor, Beside GOLD HUB MALL, Main Rd, opp. K
                B N Hospital, Gulbarga, Karnataka 585102
              </div>
              <button className="footer-button">Show on Maps</button>
              <div className="footer-text footer-center">
                92, New Jewargi Rd, Bhagyavanti Nagar, Santosh Colony, Gulbarga,
                Karnataka 585102
              </div>
              <button className="footer-button">Show on Maps</button>
            </div>
          </div>
          <div className="col-lg-2 h-100 d-flex justify-content-center align-items-center">
            <div id="our-timings">
                <div className="footer-heading footer-center">Our timings</div>
                <div className="footer-text footer-center">
                Mon. Wed, Thu: 9am to 5pm <br/>Tue: 11am to 7pm <br/>Fri: 9am to 1pm <br/>By Appointment Only<br/><br/><br/><br/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 footer-col"></div>
          <div className="col-lg-3 footer-col">
              <div className="social-media-tags">
                <img className='social-media-tag' src={w} alt='whatsapp-logo'/>
                <img className='social-media-tag' src={y} alt='expert'/>
                <img className='social-media-tag' src={t} alt='expert'/>
                <img className='social-media-tag' src={f} alt='expert'/>
                <img className='social-media-tag' src={i} alt='expert'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

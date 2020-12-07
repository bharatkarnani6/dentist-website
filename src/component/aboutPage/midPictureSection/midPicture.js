import React from 'react';
import "./midPicture.css";
import midpic from "../../../assets/experts.png";

function midPicture() {
  return (
    <div id="midPicture">
      <div id="background-div-mid" className="row">
      <div id="green-div-about-pic-mid" className="col-lg-6"></div>
      <div id="othediv2" className="col-lg-6"></div>  
      </div>

      <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
      <div>
        <img src={midpic} id="midpic" className="cropped2"/>
      </div>
      </div>
      <div className="col-lg-2"></div>
      </div>
      <br/><br/><br/>
    </div>
  );
}

export default midPicture;

import React from "react";
import "./topPicture.css";
import toppic from "../../../assets/experts.png";
function topPicture() {
  return (
    <div id="topPicture Section">
      {/* <div className="row">
        <div id="othediv1" className="col-lg-8"></div>
        <div id="greenbox" className="col-lg-4"></div>
      </div> */}

      <div id="background-div" className="row">
        <div id="othediv2" className="col-lg-6"></div>
        <div id="green-div-about-pic" className="col-lg-6"></div>
      </div>
      <div className="container-fluid">
        <div id="j2" className="jumbotron">
          <div className="container-fluid">
            <div className="row">
              <div
                id="top-title"
                className="col-lg-3 d-flex justify-content-center"
              >
                About
              </div>
              <div className="col-lg-9"></div>
            </div>

            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div>
                  <img
                    id="expertspic"
                    alt="expertstoppic"
                    className="cropped"
                    src={toppic}
                  />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>

            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default topPicture;

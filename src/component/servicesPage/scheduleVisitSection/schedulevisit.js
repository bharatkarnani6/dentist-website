import React from "react";
import "./schedulevisit.css";
function ScheduleVisit() {
  return (
    <div>
      <br />
      <div className="schedule-visit-container d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
            <div className="d-flex align-items-center">
            <div>
            <div id="schedule-visit-text" className="d-flex justify-content-center">
                Schedule a Visit
            </div>
            <div className="schedule-visit-form ">
            <form>
                <div >
                  <div className="input-top-schedule d-flex justify-content-center">
                    <input

                      className='input-one'
                      placeholder='Name'
                      type="text"

                    />
                    <input
                      className="input-two"
                      placeholder='Phone'
                      type="text"
                    />
                  </div>
                </div>
                <br/><br/><br/>
                <div >
                  <div className="input-bottom-schedule d-flex justify-content-center"> <input
                    className='input-one'
                    placeholder='Date'
                    type="text"
                  />
                    <input
                      className='input-two'
                      placeholder='Service Required'
                      type="text"
                    /></div>
                </div>
                <br/><br/>
                <div className="d-flex justify-content-center">
                  <button
                    type='submit'
                    className="button-schedule"

                  >Submit
                  </button>
                  <button
                    type='submit'
                    className="button-schedule"
                  >
                    CallUs
                    </button>
                </div>
              </form>
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleVisit;

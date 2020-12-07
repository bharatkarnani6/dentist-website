import react from "react";
import "./emi.css";
import handpic from "../../../assets/purchasing.png"

function Emi() {
  return (
    <div>
      <div id="emi-container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-7"></div>
          <div className="col-lg-3">
          <img alt="purchase" id="purchase" src={handpic}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emi;

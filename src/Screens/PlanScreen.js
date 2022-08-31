import React from "react";
import "./PlanScreen.css";

function PlanScreen() {
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //     db.collection
  // }, [])

  const renewalDate = new Date().toLocaleDateString();

  return (
    <div className="planScreen">
      <p className="renewal_date">Renewal Date : {renewalDate}</p>
      <div className="planScreen_plan">
        <div className="planScreen_info">
          <h5>Basic Plan</h5>
          <h6>Upto 720p</h6>
        </div>
        <div className="btn">
          <button className="subscribeButton">Subscribe</button>
        </div>
      </div>
      <div className="planScreen_plan">
        <div className="planScreen_info">
          <h5>Standard Plan</h5>
          <h6>Upto 1080p</h6>
        </div>
        <div className="btn">
          <button className="subscribeButton">Subscribe</button>
        </div>
      </div>
      <div className="planScreen_plan">
        <div className="planScreen_info">
          <h5>Premium Plan</h5>
          <h6>4k + HDR</h6>
        </div>
        <div className="btn">
          <button className="subscribeButton premium_btn">Current Plan</button>
        </div>
      </div>
    </div>
  );
}

export default PlanScreen;

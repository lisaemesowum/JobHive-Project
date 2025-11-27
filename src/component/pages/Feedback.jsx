import React from "react";
import { FaStar } from "react-icons/fa";
import feedback from "../../assets/feedback.jpg";
import "../styles/Feedback.css"
const Feedback = () => {
  return (
    <div id="Feedback" className="feedbackcontainer">
      {/* the left side */}
      <div className="feedback-form">
        <h2>We need Your FeedBack</h2>
        {/* star */}
        <div className="feedback-star">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} size={32} />
          ))}
        </div>
        {/* form */}
        <form>
          <textarea placeholder="Tell us what you think.............."></textarea>
          <button type="submit" className="feedback-btn">Submit Feedback</button>
        </form>
      </div>
      {/* // right image */}
      <div className="feedback-image">
        <img src={feedback} alt="feedback" />
      </div>
    </div>
  );
};

export default Feedback;

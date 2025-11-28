import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import feedbackLogo from "../../assets/feedback.jpg";
import "../styles/Feedback.css";
const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a star rating.Thank You");
      return;
    }
     if (feedback.trim() === "") {
      alert("Please write a feedback Message.Thank You");
      return;
    }
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);

    alert("Thank you for your feedback!");
    setRating(0);
    setFeedback("");
  };
  return (
    <div id="Feedback" className="feedbackcontainer">
      {/* the left side */}
      <div className="feedback-form">
        <h2>We need Your FeedBack</h2>
        {/* star */}
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={32}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              className={(hover || rating) >= star ? "star filled" : "star"}
            />
          ))}
        </div>
        {/* form */}
        <form onClick={handleSubmit}>
          <textarea
            placeholder="Tell us what you think.............."
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button type="submit" className="feedback-btn">
            Submit Feedback
          </button>
        </form>
      </div>
      {/* // right image */}
      <div className="feedback-image">
        <img src={feedbackLogo} alt="feedback" />
      </div>
    </div>
  );
};

export default Feedback;

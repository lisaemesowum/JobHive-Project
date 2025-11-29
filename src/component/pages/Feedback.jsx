import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import feedbackLogo from "../../assets/feedback.jpg";
import "../styles/Feedback.css";
const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRate, setHoverRate] = useState(null);
  const [feedback, setFeedback] = useState("");
  // for loading rating
  useEffect(() => {
    const savedRating = localStorage.getItem("rating");
    const savedFeedback = localStorage.getItem("feedback");

    if (savedRating) setRating(Number(savedRating));
    if (savedFeedback) setFeedback(savedFeedback);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("rating:", rating);
    localStorage.setItem("feedback:", feedback);

    alert("Thank you for your feedback!");
  };
  //
  const userRating = [1, 2, 3, 4, 5];

  return (
    <div id="Feedback" className="feedbackcontainer">
      {/* the left side */}
      <div className="feedback-form">
        <h2>We need Your FeedBack</h2>
        {/* star */}
        <div className="stars">
          {userRating.map((star) => (
            <FaStar
              key={star}
              size={32}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRate(star)}
              onMouseLeave={() => setHoverRate(null)}
              className={(hoverRate || rating) >= star ? "star filled" : "star"}
            />
          ))}
        </div>
        {/* form */}
        <form>
          <textarea
            value={feedback}
            placeholder="Tell us what you think.............."
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button type="submit" className="feedback-btn" onClick={handleSubmit}>
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

import React from "react";
import contactBg from "../../assets/contactBg.jpg";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div id="ContactUs" className="contact-page">
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="overlay">
          <h2>
            Get in{" "}
            <i style={{ color: "#ffaa00", fontStyle: "normal" }}>Touch</i>
          </h2>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <h3>Send Us a Message</h3>

          <div className="contactus-info">
            <p className="contact-us">
              <strong>Our Office Addrees:</strong>
              <br />
              123 College Avenue, Main City, NG
            </p>

            <p className="contact-us">
              <strong>Email:</strong>
              <br />
              jobhive7@.gmal.com
            </p>
            <p className="contact-us">
              <strong>Phone:</strong>
              <br />
              ‪+234 800 123 4567‬
            </p>
          </div>
        </div>
        <div className="contact-info">
          <h3>Job Hive Location</h3>
          <div className="map-container">
            <iframe
              title="Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.071382996715!2d7.4659!3d9.05785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b31c11c44f3%3A0x31f9c62e622f73bb!2sUniversity%20of%20Abuja!5e0!3m2!1sen!2sng!4v1694249588820!5m2!1sen!2sng"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

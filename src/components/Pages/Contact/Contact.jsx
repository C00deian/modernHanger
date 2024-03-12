import React from "react";
import "./Contact.css";
import Baner from './Banner/Baner'
// import Hanger from "../../assets/Hanger1.jpg";


function Contact() {
  return (
    <>
      <div className="Main-Contact bg-white min-h-screen relative">
        <Baner></Baner>
        <div className="container-fluid">
          <div className="Contact-Container">
            <div className="row ">
              <div className="col-lg-6 Contact">
                <p className="contact-paragraph">
                  You can email us anytime at Blueeaglepvtltd@gmail.com
                  <br />{" "}
                  <p className="contact-paragraph contactp2">
                    You can also call us Monday - Saturday from 9 a.m - 6 p.m
                    IST at +91 93153 37736
                  </p>
                </p>

                <p className="Contact-Address">
                  Plot No. 9 , Khasra No. 424, Bhankari Village , Pali Road
                  Industrial Area, Faridabad, Haryana - 121005
                </p>
              </div>
              <div className="col-lg-6 Contact-box">
                <div className="Contact-Form-container">
                  <h4 className="heading-h4">DROP US A LINE</h4>

                  <label for="Your Name" className="label">
                    {" "}
                    Your Name (requrid)
                  </label>

                  <input type="text" className="form-input"></input>

                  <label for="Your Name" className="label">
                    {" "}
                    Your Email (requrid)
                  </label>

                  <input type="text" className="form-input"></input>

                  <label for="Your Name" className="label">
                    {" "}
                    Your Phone Number{" "}
                  </label>

                  <input type="text" className="form-input"></input>
                  <label for="Your Name" className="label">
                    {" "}
                    Your Massgege
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="8"
                    className="form-input"
                  ></textarea>

                  <button className="send-btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}

export default Contact;

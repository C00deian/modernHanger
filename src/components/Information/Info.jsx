import React, { useState } from "react";
import "./Info.css";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import Acknowladge from "../assets/motivate.png";
import medal from "../assets/medal.png";
import happiness from "../assets/happiness.png";
import values from '../assets/values.png'
import trust from '../assets/trust.png'

function Info() {
  const [activeBox, setActiveBox] = useState(0);

  const boxes = [
    {
      image: Acknowladge,
      title: "Acknowledge Successes",
      description:
        "The ideal present for those you love, deserving of their appreciation for their dedication and quality.",
    },
    {
      image: medal,
      title: "Encourage Sportsmen",
      description:
        "Find and develop the youthful minds to gently guide them toward their objective.",
    },
    {
      image: happiness,
      title: "Recalls The Moments",
      description:
        "Your life's lowest points require additional fuel to keep you going.",
    },
    {
      image: trust,
      title: "Respect the accomplishments",
      description:
        "A present that increases the winning quotient and recognizes the accomplishment of your loved one.",
    },
    {
      image: values,
      title: "Organizing the Valuables",
      description:
        "Keep your priceless medals arranged instead of storing them in attics.",
    },
    // Add more boxes as needed
  ];

  const handlePrev = () => {
    setActiveBox((prev) => (prev === 0 ? boxes.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setActiveBox((prev) => (prev === boxes.length - 3 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="middle-section">
        <div className="container specific">
          <h4 className="heading"> What We Believe in</h4>
          <div className="box-container">
            {boxes.slice(activeBox, activeBox + 3).map((box, index) => (
              <div className="box" key={index}>
                <img src={box.image} alt="" />
                <h3>{box.title}</h3>
                <p>{box.description}</p>
              </div>
            ))}
          </div>
          <div className="slider-buttons">
            <button onClick={handlePrev} className="slider-btn">
              <MdOutlineArrowBackIosNew className="slider-icon" />
            </button>
            <button onClick={handleNext} className="slider-btn">
              <MdArrowForwardIos className="slider-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;

import React from 'react'
import './Info.css'

import Acknowladge from '../assets/motivate.png'
import medal from '../assets/medal.png'
import happiness from '../assets/happiness.png'

function Info() {



  return (
    <>
      <div className="middle-section">
        <div className="container specific ">
          <h4 className="heading"> What We Believe in</h4>
          <div className="box-container">
            <div className="box">
              <img src={Acknowladge} alt="" />
              <h3>Acknowledge Successes</h3>
              <p>
                The ideal present for those you love, deserving oftheir
                appreciation for their dedication and quality.
              </p>
              {/* <a href="#" className="btn">
                read more
              </a> */}
            </div>
            <div className="box">
              <img src={medal} alt="" />
              <h3>
                Encourage <br /> Sportsmen
              </h3>
              <p>
                Find and develop the youthful brains to gently guide them toward
                their objective.
              </p>
          
            </div>
            <div className="box">
              <img src={happiness} alt="" />
              <h3>
                Recalls The <br /> Moments
              </h3>
              <p>
                Your life's lowest points require additional fuel to keep you
                going.
              </p>
              {/* <a href="#" className="btn">
                read more
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info
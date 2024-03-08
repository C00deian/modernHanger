import React from 'react'

import './Catelogue.css'
import Nopain from '../assets/Catelogue/No pain no gain/No-Pain.jpg'
import MilesofMem from "../assets/Catelogue/Miles Of Memory/2.jpg";
import NeverGiveUp from '../assets/Catelogue/Never give up/Never-give-up.jpg'
import Runner from "../assets/Sports/Runner/Run.jpg";
import Sports from "../assets/Sports/Sports/Sports.jpg";
import Marathon from '../assets/Sports/Merathoner/2.jpg'
import Unstopable from "../assets/Catelogue/Unstopable/Unstoppable.jpg";
import { Link } from 'react-router-dom';
// import NeverGiveup from '../assets/Catelogue/Never give up/Never-give-up.jpg'




function Catelogue() {


  
  return (
    <>
      <div className="containerrr">
        <div className="box-containerrr">
          <Link to="/MoreInfo" className="MoreInfobtn">
            <div className="box">
              <img src={NeverGiveUp} alt="" className="img-fluid" />
              <h3>NEVER GIVE UP</h3>
              {/* <p>Every medal hanger is made to express your thoughts.</p> */}
            </div>
          </Link>
          <Link to="/Marathon">
            <div className="box">
              <img src={Marathon} alt="" className="img-fluid" />
              <h3>MARATHONER</h3>
              {/* <p>
              Get a guaranteed 30-day money back guarantee when you place an
              order.
            </p> */}
            </div>
          </Link>
          <Link to="/NoPain">
            <div className="box">
              <img src={Nopain} alt="" className="img-fluid" />
              <h3>NO-PAIN NO-GAIN</h3>
              {/* <p>
              Get a guaranteed 30-day money back guarantee when you place an
              order.
            </p> */}
            </div>
          </Link>
        </div>
      </div>

      <div className="containerrr">
        <div className="box-containerrr">
          <Link to="/Sports">
            <div className="box">
              <img src={Sports} alt="" className="img-fluid" />
              <h3>SPORTS</h3>
              {/* <p>Every medal hanger is made to express your thoughts.</p> */}
            </div>
          </Link>

          <Link to="/run">
            <div className="box">
              <img src={Runner} alt="" className="img-fluid" />
              <h3>RUNNER</h3>
              {/* <p>Every transaction is protected by end-to-end encryption</p> */}
            </div>
          </Link>

          <Link to="/UnStoppable">
            <div className="box">
              <img src={Unstopable} alt="" className="img-fluid" />
              <h3>UNSTOPPABLE</h3>
              {/* <p>Every transaction is protected by end-to-end encryption</p> */}
            </div>
          </Link>
          {/* <Link to="/Miles">
            <div className="box">
              <img src={MilesofMem} alt="" />
              <h3>MILES OF MEMORY</h3>
         
            </div>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Catelogue
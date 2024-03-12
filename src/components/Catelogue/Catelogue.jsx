import React from 'react'

import './Catelogue.css'
import Nopain from '../assets/Catelogue/No pain no gain/No-Pain.jpg'

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
        
            <div className="box hover-container">
              <img src={NeverGiveUp} alt="" className="img-fluid" />
           <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
                 <span className="line-through"> Rs. 1,080.00 </span>
                 <span className="text-red-600 ml-2  ">Rs. 598.00</span>
            </p>
              <Link to="/MoreInfo">
                <span className="overlay">View More</span>
              </Link>
            </div>
          
       
            <div className="box hover-container">
              <img src={Marathon} alt="" className="img-fluid" />
              <p className="m-2 p-3 text-large leading-5 font-semibold">
                Marathoner Medal Display <br />
                Hanger For Athletes <br />
                   <span className="line-through"> Rs. 1,080.00 </span>
                   <span className="text-red-600 ml-2  ">Rs. 598.00</span>
              </p>
              <Link to="/Marathon">
                <span className="overlay">View More</span>
              </Link>
            </div>
      
        
            <div className="box hover-container">
              <img src={Nopain} alt="" className="img-fluid" />
              <p className="m-2 p-3 text-large leading-5 font-semibold">
                Personalized Medal Display <br />
                Hanger For Athletes <br />
                   <span className="line-through"> Rs. 1,080.00 </span>
                   <span className="text-red-600 ml-2  ">Rs. 598.00</span>
              </p>
              <Link to="/NoPain">
                <span className="overlay">View More</span>
              </Link>
            </div>
        
        </div>
      </div>
      <div className="containerrr">
        <div className="box-containerrr">
    
            <div className="box hover-container">
              <img src={Sports} alt="" className="img-fluid" />
              <p className="m-2 p-3 text-large leading-5 font-semibold">
                Sports Medal Display <br />
                Hanger For Athletes <br />
                   <span className="line-through"> Rs. 1,080.00 </span>
                   <span className="text-red-600 ml-2  ">Rs. 598.00</span>
              </p>
              <Link to="/Sports">
                <span className="overlay">View More</span>
              </Link>
            </div>
       
            <div className="box hover-container">
              <img src={Runner} alt="" className="img-fluid" />
              <p className="m-2 p-3 text-large leading-5 font-semibold">
                Runner Medal Display <br />
                Hanger For Athletes <br />
                   <span className="line-through"> Rs. 1,080.00 </span>
                   <span className="text-red-600 ml-2  ">Rs. 598.00</span>
              </p>
              <Link to="/run">
                <span className="overlay">View More</span>
              </Link>
            </div>
    

            <div className="box hover-container">
              <img src={Unstopable} alt="" className="img-fluid" />
        <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
                 <span className="line-through"> Rs. 1,080.00 </span>
                 <span className="text-red-600 ml-2  ">Rs. 598.00</span>
            </p>
              <Link to="/UnStoppable">
                <span className="overlay">View More</span>
              </Link>
            </div>
       
        
        </div>
      </div>
    </>
  );
}

export default Catelogue
import React from "react";
import "./Shop.css";
import Button from "../../Button/Button"
import { Link } from "react-router-dom";
import NeverGiveUp1 from "../../assets/Catelogue/Never give up/Never-give-up.jpg";
import MilesofMeals from "../../assets/Catelogue/Miles Of Memory/2.jpg";
import UnStoppable from "../../assets/Catelogue/Unstopable/Unstoppable.jpg"
import NoPain from "../../assets/Catelogue/No pain no gain/No-Pain.jpg";
import Academy from "../../assets/Catelogue/Acadmic/2.jpg";
import Academy1 from "../../assets/Catelogue/Acadmic/3.jpg";



function Personalize() {

  return (
    <>
      <div className="mt-36 p-6 bg-white min-h-screen ">
        <div className="flex items-center  justify-center absolute right-[8%] md: top-[39%]">
          <Button title={"Best-Selling"} />
        </div>
        <div>
          <h1 className="text-center mb-5 ">Personalized Medal Hangers</h1>
        </div>
        <div className="containerrr">
          <div className="box-containerrr">
   
              <div className="box hover-container">
                <img src={NeverGiveUp1} alt="" className="img-fluid" />
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
                <img src={NoPain} alt="" className="img-fluid" />
                <p className="m-2 p-3 text-large leading-5 font-semibold">
                     Personalized  Medal Display <br />
                  Hanger For Athletes <br />
                  <span className="line-through"> Rs. 1,080.00 </span>
                  <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                </p>
                <Link to="/Nopain">
                  <span className="overlay">View More</span>
                </Link>
              </div>
          
   
              <div className="box hover-container">
                <img src={MilesofMeals} alt="" className="img-fluid" />
                <p className="m-2 p-3 text-large leading-5 font-semibold">
                     Personalized  Medal Display <br />
                  Hanger For Athletes <br />
                  <span className="line-through"> Rs. 1,080.00 </span>
                  <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                </p>
                <Link to="/Miles">
                  <span className="overlay">View More</span>
                </Link>
              </div>
        
          </div>
        </div>
        <div className="containerrr">
          <div className="box-containerrr">
    
              <div className="box hover-container">
                <img src={UnStoppable} alt="" className="img-fluid" />
                <p className="m-2 p-3 text-large leading-5 font-semibold">
                     Personalized  Medal Display <br />
                  Hanger For Athletes <br />
                  <span className="line-through"> Rs. 1,080.00 </span>
                  <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                </p>
                <Link to="/UnStoppable">
                  <span className="overlay">View More</span>
                </Link>
              </div>
       

              <div className="box hover-container">
                <img src={Academy} alt="" className="img-fluid" />
                <p className="m-2 p-3 text-large leading-5 font-semibold">
                    Personalized  Medal Display <br />
                  Hanger For Athletes <br />
                  <span className="line-through"> Rs. 1,080.00 </span>
                  <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                </p>
                <Link to="/Academy">
                  <span className="overlay">View More</span>
                </Link>
              </div>
          

          
              <div className="box hover-container">
                <img src={Academy1} alt="" className="img-fluid" />
                <p className="m-2 p-3 text-large leading-5 font-semibold">
                    Personalized  Medal Display <br />
                  Hanger For Athletes <br />
                  <span className="line-through"> Rs. 1,080.00 </span>
                  <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                </p>
                <Link to="/Academy">
                  <span className="overlay">View More</span>
                </Link>
              </div>
         
           
          </div>
        </div>
       
       
      
    </div>
    </>
  );
}

export default Personalize;

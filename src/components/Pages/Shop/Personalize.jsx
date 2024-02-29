import React from "react";
import "./Shop.css";
import Hanger from "../../assets/Hanger1.jpg";
import Footer from "../Footer/Footer";
import Button from "../../Button/Button";
import MiddleLast from "../../middleLast/MiddleLast";
import Whatsap from "../../whatsapp/Whatsap";

function Personalize() {
  return (
    <>
      <div className="mt-32 p-6 bg-white min-h-screen relative">
        <div>
          <h1 className="text-center">Personalized Medal Hangers</h1>
        </div>
        <div className="flex items-center justify-center absolute right-[30%] top-[12%]">
          <Button title={"Best-Selling"} />
        </div>
        <div className="justify-center items-center mt-24 gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Hanger} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              <del>
                <span>Rs. 1,999.00</span>
              </del>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Hanger} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Hanger} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Hanger} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>
      <MiddleLast />
      <Footer />
      <Whatsap></Whatsap>
    </>
  );
}

export default Personalize;

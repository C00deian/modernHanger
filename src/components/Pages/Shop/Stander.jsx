import React from "react";
import "./Shop.css";
import Footer from "../Footer/Footer";
import Button from "../../Button/Button";
import MiddleLast from "../../middleLast/MiddleLast";
import Whatsap from "../../whatsapp/Whatsap";
import AirRifale from  '../../assets/Sports/AirRifale/2.jpg'
import BadMinton from '../../assets/Sports/Badminton/2.jpg'
import Basketball from "../../assets/Sports/Basketball/2.jpg";
import Baseball from "../../assets/Sports/Baseball/2.jpg";
import Boxing from "../../assets/Sports/Boxing/2.jpg";
import Chess from "../../assets/Sports/ChessMaster/2.jpg";
import Marathon from "../../assets/Sports/Merathoner/2.jpg";
import Cricket from "../../assets/Sports/cricket/2.jpg";
import Run from "../../assets/Sports/Runner/Run3.jpg";
import Cycling from "../../assets/Sports/Cycling/2.jpg";
import Dancer from "../../assets/Sports/Dancer/2.jpg";
import Yoga from '../../assets/Sports/Yoga/2.jpg'

function Standerd() {
  return (
    <>
      <div className="mt-32 p-6 bg-white min-h-screen relative">
        <div>
          <h1 className="text-center">Sports Medal Hangers</h1>
        </div>
        <div className="flex items-center justify-center absolute right-[30%] top-[12%]">
          <Button title={"Best-Selling"} />
        </div>
        <div className="justify-center items-center mt-24 gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Run} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              <del>
                <span>Rs. 1,999.00</span>
              </del>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={BadMinton} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Basketball} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Baseball} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white min-h-screen relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Cycling} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              <del>
                <span>Rs. 1,999.00</span>
              </del>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={AirRifale} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Boxing} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Chess} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="p-6 bg-white min-h-screen relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Cricket} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              <del>
                <span>Rs. 1,999.00</span>
              </del>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Marathon} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Dancer} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Yoga} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Sports <br /> Medal Display <br />
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

export default Standerd;

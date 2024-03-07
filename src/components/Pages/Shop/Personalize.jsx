import React from "react";
import "./Shop.css";
import Hanger from "../../assets/Hanger1.jpg";
import NeverGiveUp from '../../assets/Catelogue/Never give up/Never-give-up3.jpg'
import Never from "../../assets/Catelogue/Never give up/Never-give-up1.jpg";
import Footer from "../Footer/Footer";
import Button from "../../Button/Button";
import MiddleLast from "../../middleLast/MiddleLast";
import Whatsap from "../../whatsapp/Whatsap";
import NoPain from "../../assets/Catelogue/No pain no gain/No-PainDetails-+.jpg";
import Sports from '../../assets/Catelogue/Sports/Sports3.jpg'
  import Sports1 from "../../assets/Catelogue/Sports/Sports1.jpg";
import Pain from "../../assets/Catelogue/No pain no gain/No-Pain1.jpg";
import Marathon from "../../assets/Catelogue/Merathoner/4.jpg";
import MilesofMeals from "../../assets/Catelogue/Miles Of Memory/4.jpg";
import Run from "../../assets/Catelogue/Runner/Run4.jpg";
import UnStoppable from "../../assets/Catelogue/Unstopable/Unstoppable5.jpg"
import MilesofMeal from "../../assets/Catelogue/Miles Of Memory/1.jpg";

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
            <img src={NeverGiveUp} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={MilesofMeal} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Never} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
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
            <img src={Marathon} alt="logo" className="w-72" />
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
            <img src={Run} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={UnStoppable} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={MilesofMeals} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
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
            <img src={NoPain} alt="logo" className="w-72" />
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
            <img src={Sports} alt="logo" className="w-72" />
            <p className="m- p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Pain} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large">
              Personalized <br /> Medal Display <br />
              Hanger For Athletes <br />
              Rs. 1,999.00 
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Sports1} alt="logo" className="w-72" />
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

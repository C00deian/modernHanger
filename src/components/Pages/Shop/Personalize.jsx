import React from "react";
import "./Shop.css";
import Button from "../../Button/Button"

import NeverGiveUp3 from "../../assets/Catelogue/Never give up/Never-give-up2.jpg";
import NeverGiveUp2 from "../../assets/Catelogue/Never give up/Never-give-up1.jpg";
import NeverGiveUp from "../../assets/Catelogue/Never give up/Never-give-up3.jpg";
import NeverGiveUp1 from "../../assets/Catelogue/Never give up/Never-give-up.jpg";

import MilesofMeals from "../../assets/Catelogue/Miles Of Memory/4.jpg";
import MilesofMeals1 from "../../assets/Catelogue/Miles Of Memory/2.jpg";
import MilesofMeals2 from "../../assets/Catelogue/Miles Of Memory/3.jpg";
import MilesofMeals3 from "../../assets/Catelogue/Miles Of Memory/1.jpg";

import UnStoppable from "../../assets/Catelogue/Unstopable/Unstoppable5.jpg";
import UnStoppable1 from "../../assets/Catelogue/Unstopable/Unstoppable4.jpg";
import UnStoppable2 from "../../assets/Catelogue/Unstopable/Unstoppable1.jpg";
import UnStoppable3 from "../../assets/Catelogue/Unstopable/Unstoppable2.jpg";

import NoPain from "../../assets/Catelogue/No pain no gain/No-PainDetails-+.jpg";
import Pain from "../../assets/Catelogue/No pain no gain/No-Pain.jpg";
import Pain1 from "../../assets/Catelogue/No pain no gain/No-Pain1.jpg";


import Academy2 from '../../assets/Catelogue/Acadmic/1.jpg'
import Academy3 from "../../assets/Catelogue/Acadmic/3.jpg";
import Academy from "../../assets/Catelogue/Acadmic/4.jpg";
import Academy1 from "../../assets/Catelogue/Acadmic/2.jpg";



function Personalize() {
  return (
    <>
      <div className="mt-32 p-6 bg-white min-h-screen relative">
        <div>
          <h1 className="text-center">Personalized Medal Hangers</h1>
        </div>
        <div className="flex items-center  xl:top-[13%] justify-center absolute right-[30%] md: top-[7%]">
          <Button title={"Best-Selling"} />
        </div>
        <div className="justify-center items-center mt-24 gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={NoPain} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2  ">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Pain} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Pain1} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={NoPain} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white  relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={NeverGiveUp} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={NeverGiveUp1} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={NeverGiveUp3} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={NeverGiveUp2} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white  relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={UnStoppable} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={UnStoppable1} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={UnStoppable3} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={UnStoppable2} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6  relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={MilesofMeals} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={MilesofMeals1} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>

          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={MilesofMeals2} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={MilesofMeals3} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 pb-28  relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Academy} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Academy1} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Academy3} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Academy2} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Personalized Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>
  
    </>
  );
}

export default Personalize;

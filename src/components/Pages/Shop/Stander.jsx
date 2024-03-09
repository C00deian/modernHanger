import React from "react";
import "./Shop.css";
import Button from "../../Button/Button";

import AirRifale from  '../../assets/Sports/AirRifale/4.jpg'
import AirRifale1 from '../../assets/Sports/AirRifale/2.jpg'
import AirRifale2 from '../../assets/Sports/AirRifale/3.jpg'
import AirRifale3 from '../../assets/Sports/AirRifale/1.jpg'

import BadMinton from '../../assets/Sports/Badminton/2.jpg'
import BadMinton1 from '../../assets/Sports/Badminton/1.jpg'
import BadMinton2 from '../../assets/Sports/Badminton/3.jpg'
import BadMinton3 from '../../assets/Sports/Badminton/4.jpg'

import Basketball from "../../assets/Sports/Basketball/2.jpg";
import Basketball1 from "../../assets/Sports/Basketball/1.jpg";
import Basketball2 from "../../assets/Sports/Basketball/3.jpg";
import Basketball3 from "../../assets/Sports/Basketball/4.jpg";

import Baseball from "../../assets/Sports/Baseball/2.jpg";
import Baseball1 from "../../assets/Sports/Baseball/1.jpg";
import Baseball2 from "../../assets/Sports/Baseball/3.jpg";
import Baseball3 from "../../assets/Sports/Baseball/4.jpg";


import Boxing from "../../assets/Sports/Boxing/2.jpg";
import Boxing1 from "../../assets/Sports/Boxing/4.jpg";
import Boxing2 from "../../assets/Sports/Boxing/3.jpg";
import Boxing3 from "../../assets/Sports/Boxing/1.jpg";


import Chess from "../../assets/Sports/ChessMaster/4.jpg";
import Chess1 from "../../assets/Sports/ChessMaster/2.jpg";
import Chess2 from "../../assets/Sports/ChessMaster/3.jpg";
import Chess3 from "../../assets/Sports/ChessMaster/1.jpg";

import Marathon1 from "../../assets/Sports/Merathoner/4.jpg";
import Marathon2 from "../../assets/Sports/Merathoner/2.jpg";
import Marathon3 from "../../assets/Sports/Merathoner/3.jpg";
import Marathon4 from "../../assets/Sports/Merathoner/1.jpg";

import Cricket1 from "../../assets/Sports/cricket/4.jpg";
import Cricket2 from "../../assets/Sports/cricket/2.jpg";
import Cricket3 from "../../assets/Sports/cricket/3.jpg";
import Cricket4 from "../../assets/Sports/cricket/1.jpg";

import Run1 from "../../assets/Sports/Runner/Run4.jpg";
import Run2 from "../../assets/Sports/Runner/Run3.jpg";
import Run3 from "../../assets/Sports/Runner/Run2.jpg";
import Run4 from "../../assets/Sports/Runner/Run1.jpg";

import Cycling1 from "../../assets/Sports/Cycling/4.jpg";
import Cycling2 from "../../assets/Sports/Cycling/2.jpg";
import Cycling3 from "../../assets/Sports/Cycling/3.jpg";
import Cycling4 from "../../assets/Sports/Cycling/1.jpg";

import Dancer1 from "../../assets/Sports/Dancer/4.jpg";
import Dancer2 from "../../assets/Sports/Dancer/2.jpg";
import Dancer3 from "../../assets/Sports/Dancer/3.jpg";
import Dancer4 from "../../assets/Sports/Dancer/1.jpg";

import Yoga1 from '../../assets/Sports/Yoga/4.jpg'
import Yoga2 from '../../assets/Sports/Yoga/2.jpg'
import Yoga3 from '../../assets/Sports/Yoga/3.jpg'
import Yoga4 from '../../assets/Sports/Yoga/1.jpg'

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
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Marathon1} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
              Marathoner Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2  ">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Marathon2} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
            Marathoner Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Marathon3} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
             Marathoner Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Marathon4} alt="logo" className="w-72" />
            <p className="m-2 p-3 text-large leading-5 font-semibold">
            Marathoner Medal Display <br />
              Hanger For Athletes <br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>
      

   
{/* AirRifale  */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={AirRifale} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Air Rifle  Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={AirRifale1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
             Air Rifle  Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={AirRifale2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
             Air Rifle  Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={AirRifale3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Air Rifle  Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* Badminton */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={BadMinton3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Badminton Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={BadMinton} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Badminton Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={BadMinton2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Badminton Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={BadMinton1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Badminton Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* Basketball */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Basketball3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Basketball Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Basketball} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Basketball Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Basketball2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Basketball Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Basketball1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Basketball Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* Baseball */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Baseball3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Baseball Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Baseball} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Baseball Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Baseball2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Baseball Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Baseball1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Baseball Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>
      
{/* Boxing */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Boxing1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Boxing Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Boxing} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Boxing Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Boxing2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Boxing Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Boxing3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Boxing Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      
      {/* Chess */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Chess} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Chess Master Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Chess1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Chess Master Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Chess2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Chess Master Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Chess3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Chess Master Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

   

{/* Criclet */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Cricket1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Cricket Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Cricket2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Cricket Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Cricket3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Cricket Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Cricket4} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Cricket Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>
{/* Run */}
 <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Run1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
          Runner Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Run2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
          Runner Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Run3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
          Runner Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Run4} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
          Runner Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* Cycline */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Cycling1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Cycling Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Cycling2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Cycling Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Cycling3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Cycling Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Cycling4} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Cycling Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

      
      {/* Dancers */}
      <div className="p-6 bg-white relative">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Dancer1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Best Dancer Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Dancer2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Best Dancer Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Dancer3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Best Dancer Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Dancer4} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Best Dancer Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

{/* Yoga */}
      <div className="p-6 bg-white relative pb-28 ">
        <div className="justify-center items-center  gap-6 flex flex-wrap  ">
          <div className="p-4 shadow-xl text-center  hover:bg-gray-100 duration-150 ">
            <img src={Yoga1} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Yoga Medal Display < br />
  Hanger For Athletes < br />

              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Yoga2} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Yoga Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Yoga3} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Yoga Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>
              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
          <div className="p-4 shadow-lg text-center hover:bg-slate-100 duration-150">
            <img src={Yoga4} alt="logo" className="w-72" />
                   <p className="m-2 p-3 text-large leading-5 font-semibold">
            Yoga Medal Display < br />
  Hanger For Athletes < br />
              <span className="line-through"> Rs. 1,999.00 </span>

              <span className="text-red-600 ml-2">Rs. 1,499.00</span>
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Standerd;

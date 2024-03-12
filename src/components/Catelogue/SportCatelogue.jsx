import React from 'react'
import './Catelogue.css'

import { Link } from 'react-router-dom';
import AirRifale1 from '../assets/Sports/AirRifale/2.jpg'
import Badminton from '../assets/Sports/Badminton/2.jpg'
import Basketball from '../assets/Sports/Basketball/2.jpg'
import Baseball from '../assets/Sports/Baseball/2.jpg'
import Boxing from '../assets/Sports/Boxing/2.jpg'
import Chess from '../assets/Sports/ChessMaster/2.jpg'
import Cricket from "../assets/Sports/cricket/2.jpg";
import Cycling from '../assets/Sports/Cycling/2.jpg'
import Dancer from '../assets/Sports/Dancer/2.jpg'
import Marathon from '../assets/Sports/Merathoner/2.jpg'
import Yoga from '../assets/Sports/Yoga/2.jpg'
import Runner from "../assets/Sports/Runner/Run.jpg";
import Football from '../assets/Sports/Football/2.jpg'
import bodyBuilding from '../assets/Sports/bodyBuilding/2.jpg'
import Sport from '../assets/Sports/Sports/Sports.jpg'

function SportCatelogue() {

    return (
        <>
            <div className="containerrr">
                <div className="box-containerrr ">
                    <div className="MoreInfobtn ">
                        <div className="box hover-container">
                            <img src={AirRifale1} alt="" className="img-fluid" />

                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                AirRifle Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>

                            </p>
                            <Link to='/rifle'>
                                <span className="overlay">View More</span>
                            </Link>

                        </div>

                    </div>
                    
                        <div className="box hover-container">
                            <img src={Marathon} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Marathoner Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Marathon" >
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                 
                 
                        <div className="box hover-container">
                            <img src={Badminton} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Badminton Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Badminton">
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                 
                </div>
            </div>
            <div className="containerrr">
                <div className="box-containerrr">
                
                        <div className="box hover-container">
                            <img src={Basketball} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Basketball Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Basketball" >
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
                            <img src={Baseball} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Baseball Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Baseball">
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                 

                </div>
            </div>
            <div className="containerrr">
                <div className="box-containerrr">
                    
                        <div className="box hover-container">
                            <img src={Cricket} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Cricket Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Cricket">
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                  

                   
                        <div className="box hover-container">
                            <img src={Cycling} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Cycling Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Cycling">
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                   

               
                        <div className="box hover-container">
                            <img src={Yoga} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Yoga Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Yoga" >
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                  

                </div>
            </div>


            <div className="containerrr">
                <div className="box-containerrr">
                
                        <div className="box hover-container">
                            <img src={Boxing} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Boxing Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Boxing">
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                 
                        <div className="box hover-container">
                            <img src={Chess} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Chess Master Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Chess">
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                  

               
                        <div className="box hover-container">
                            <img src={Dancer} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Dancer Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Dancer">
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
               

                </div>
            </div>
            <div className="containerrr">
                <div className="box-containerrr">
                        <div className="box hover-container">
                            <img src={bodyBuilding} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Body Building Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                            <Link to="/Boxing">
                                <span className="overlay">View More</span>
                            </Link>
                          
              

              </div>
                        <div className="box hover-container">
                            <img src={Football} alt="" className="img-fluid" />
                            <p className="m-2 p-3 text-large leading-5 font-semibold">
                                Football Medal Display <br />
                                Hanger For Athletes <br />
                                <span className="line-through"> Rs. 1,080.00 </span>
                                <span className="text-red-600 ml-2  ">Rs. 598.00</span>
                            </p>
                                <Link to="/Chess">
                                <span className="overlay">View More</span>
                            </Link>
                        </div>
                   

                   
                        <div className="box hover-container">
                            <img src={Sport} alt="" className="img-fluid" />
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
                    

                </div>
                </div>
                
        </>
    );
}

export default SportCatelogue
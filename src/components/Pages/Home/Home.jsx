import React from 'react'
import './Home.css'
import Hanger from '../../assets/Hanger1.jpg'
import Info from '../../Information/Info.jsx';
import MiddleLast from '../../middleLast/MiddleLast.jsx';
import Footer from "../Footer/Footer.jsx"
import NewLetter from '../../NewLetter/NewLetter.jsx';

function Home() {


    return (
      <>
        <div className="background-container container-fluid">
     
          <div className=" hanger-text1">
            <div className="row ">
              <div className="col-lg-6 title-box">
                <h1>CUSTOM MEDAL HANGERS</h1>
                {/* or use h2, h3, h4, h5, h6 based on your preference */}
                <p className="lead">
                  Engrave your name with 100+ customizable sports options
                </p>
                {/* <button type="button" className="btn btn-warning personal-btn">
                  PERSONALIZE NOW{" "}
                </button> */}
              </div>
              <div className="col-lg-6 hanger-box">
                <img
                  src={Hanger}
                  alt=""
                  className="hanger-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Next-box">
          <div className="card">
            <h2 className='text-center h2'>Make Memorable Times Last a Lifetime </h2>
            <p className='text-center'>
              The Medal Hangrer Were expertly  developed to  turn  your winning <br />
              moments into unforgetable memories
            </p>
            {/* <div class="shop-button">
              <button class="btn btn-warning shop" type="button">
                SHOP NOW
              </button>
          
            </div> */}
          </div>
{/* 
          <div className="container hanger-text">
            <div className="row hanger-container">
              <div className="col-lg-6 title-box">
                <h2 className="h3">
                  Customized Modal Hangers Are Needed for Remarkable Momente
                </h2>
           
                <p className="lead">
                  Engrave your name with 100+ customizable sports options
                </p>
              </div>
              <div className="col-lg-6 hanger-box">
                <img
                  src={Hanger}
                  alt=""
                  className="hanger-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div> */}
        </div>
        <Info></Info>
        <MiddleLast />
        <NewLetter></NewLetter>
          <Footer/> 
      </>
    );
}

export default Home
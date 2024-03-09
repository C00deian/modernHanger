import React from 'react'
import './Home.css'
import Hanger from '../../assets/Hanger1.jpg'
import Info from '../../Information/Info.jsx';
import Catelogue from '../../Catelogue/Catelogue.jsx';
import handleWhatsApp from "../../Utility/WhatsAppUtils.jsx";


function Home() {

    return (
      <>
        <div className="background-container container-fluid">
          <div className=" hanger-text1">
            <div className="row ">
              <div className="col-lg-6 title-box">
                <h1 className="h1">CUSTOM MEDAL HANGERS</h1>

                <p className="lead ">
                  Engrave your name with 100+ customizable sports options
                </p>
                <div className="shop-button">
                  <button className="btn btn-warning shop" type="button" onClick={handleWhatsApp}>
                   Customized Medal
                  </button>
                </div>
              </div>

              <div className="col-lg-6 hanger-box">
                <img
                  src={Hanger}
                  alt=""
                  className="hanger-img "
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Next-box">
          <div className="card">
            <h2 className="text-center h2">
              Make Memorable Times Last a Lifetime{" "}
            </h2>
            <p className="text-center">
              The Medal Hangrer Were expertly developed to turn your{" "}
              <del>winning</del> <br />
              moments into unforgetable memories
            </p>
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
        <Catelogue></Catelogue>
        <Info></Info>
      </>
    );
}

export default Home
import React from "react";
import "./MiddleLast.css";
import gear from '.././assets/gear.png'
import world from '.././assets/world.png'
import secure from '.././assets/secure.png'
import MoneyBack from '.././assets/moneyback.png'


function MiddleLast() {
  return (
  
      <div className="containerr">
        <div className="box-containerr">
          <div className="box">
            <img src={gear} alt="" />
            <h3>UNIQUE PERSONALIZED DESIGNS</h3>
            <p>Every medal hanger is made to express your thoughts.</p>
          </div>
          <div className="box">
            <img src={MoneyBack} alt="" />
            <h3>MONEY-BACK GURANTEE</h3>
            <p>
              Get a guaranteed 30-day money back guarantee when you place an
              order.
            </p>
          </div>
          <div className="box">
            <img src={world} alt="" />
            <h3>FREE SHIPPING</h3>
            <p>Get Free Shipping when you spend INR 1999 or more.</p>
          </div>
          <div className="box">
            <img src={secure} alt="" />
            <h3>100% SECURE PAYMENTS</h3>
            <p>Every transaction is protected by end-to-end encryption</p>
          </div>
    
        </div>
      </div>

  );
}

export default MiddleLast;

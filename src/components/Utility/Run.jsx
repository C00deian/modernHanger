import React from 'react'
import ProductDisplay from '../ProductDisplay';

import Marathon from '../assets/Sports/Runner/Run.jpg'
import Marathon1 from '../assets/Sports/Runner/Run1.jpg'
import Marathon2 from "../assets/Sports/Runner/Run2.jpg";
import Marathon3 from "../assets/Sports/Runner/Run3.jpg";
import Marathon4 from "../assets/Sports/Runner/Run4.jpg";
function Run() {
           const product1Details4 = {
             title: "Blueeagle Medal Hanger",
             brand: "Generic",
             price: "₹1,200.00",
             taxInfo: "Inclusive of all taxes",
             emiInfo: "EMI starts at ₹109 per month. EMI options",
             images: [Marathon, Marathon1, Marathon2, Marathon3, Marathon4],
             details: [
               "Colour: Black",
               "Brand: Generic",
               "Material: Metal",
               "Finish Type: Metallic",
               "Shape: Rectangular",
               "Included Components: Metal",
             ],
             about: [
               "Black in color",
               "Stylish Medal Holder Display: Use this high-quality medal holder...",
               "Functional and Versatile: Our medal holder is made to be both versatile...",
               "It's simple to set up your medal display with secure display and easy installation...",
             ],
           };
  return (
    <>
      <ProductDisplay productDetails={product1Details4} />
    
    </>
  );
}

export default Run
import React from 'react'
import ProductDisplay from '../ProductDisplay';


import Marathon1 from '../assets/Catelogue/No pain no gain/No-Pain.jpg'
import Marathon2 from "../assets/Catelogue/No pain no gain/No-Pain1.jpg";
import Marathon3 from "../assets/Catelogue/No pain no gain/No-PainDetails-+.jpg";


function Nopain() {
       const product1Details3 = {
   title: "Blueeagle Medal Hanger",
   brand: "Generic",
   price: "₹1,200.00",
   taxInfo: "Inclusive of all taxes",
   emiInfo: "EMI starts at ₹109 per month. EMI options",
   images: [
  Marathon2,
    Marathon1,
    Marathon3,
 
   ],
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
      <ProductDisplay productDetails={product1Details3} />
    </>
  );
}

export default Nopain
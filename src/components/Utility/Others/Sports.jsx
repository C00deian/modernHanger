import React from "react";
import ProductDisplay from "../../ProductDisplay";
import sports from "../../assets/Sports/Sports/Sports.jpg";
import sports1 from "../../assets/Sports/Sports/Sports1.1.jpg";
import sports2 from "../../assets/Sports/Sports/Sports1.jpg";
import sports3 from "../../assets/Sports/Sports/Sports2.jpg";
import sports4 from "../../assets/Sports/Sports/Sports3.jpg";

function Sports() {
  const product1Details6 = {
    title: "Blueeagle Medal Hanger",
    brand: "Generic",
    price: "₹ 598.00",
    taxInfo: "Inclusive of all taxes",
    emiInfo: "EMI starts at ₹109 per month. EMI options",
    images: [sports, sports1, sports2, sports3, sports4],
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
      <ProductDisplay productDetails={product1Details6} />
     
    </>
  );
}

export default Sports;

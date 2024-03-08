import React from "react";
import ProductDisplay from "../ProductDisplay";
import Footer from "../Pages/Footer/Footer";
import NewLetter from "../NewLetter/NewLetter";
import MiddleLast from "../middleLast/MiddleLast";
import Whatsap from "../whatsapp/Whatsap";

import Marathon from "../assets/Catelogue/Unstopable/Unstoppable.jpg";
import Marathon1 from "../assets/Catelogue/Unstopable/Unstoppable1.jpg";
import Marathon2 from "../assets/Catelogue/Unstopable/Unstoppable2.jpg";
import Marathon3 from "../assets/Catelogue/Unstopable/Unstoppable3.jpg";
import Marathon4 from "../assets/Catelogue/Unstopable/Unstoppable4.jpg";
import Marathon5 from "../assets/Catelogue/Unstopable/Unstoppable5.jpg";

function UnStoppable() {
  const product1Details5 = {
    title: "Blueeagle Medal Hanger",
    brand: "Generic",
    price: "₹1,200.00",
    taxInfo: "Inclusive of all taxes",
    emiInfo: "EMI starts at ₹109 per month. EMI options",
    images: [Marathon, Marathon1, Marathon2, Marathon3, Marathon4, Marathon5],
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
      <ProductDisplay productDetails={product1Details5} />
      <MiddleLast />
      <NewLetter />
      <Footer />
      <Whatsap />
    </>
  );
}

export default UnStoppable;

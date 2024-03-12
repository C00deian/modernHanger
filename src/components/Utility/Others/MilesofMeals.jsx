import React from "react";
import ProductDisplay from "../../ProductDisplay";
import Miles1 from "../../assets/Catelogue/Miles Of Memory/1.jpg";
import Miles2 from "../../assets/Catelogue/Miles Of Memory/2.jpg";
import Miles3 from "../../assets/Catelogue/Miles Of Memory/3.jpg";
import Miles4 from "../../assets/Catelogue/Miles Of Memory/4.jpg";

function MilesofMeals() {
  const product1Details2 = {
    title: "Blueeagle Medal Hanger",
    brand: "Generic",
    price: "₹ 598.00",
    taxInfo: "Inclusive of all taxes",
    emiInfo: "EMI starts at ₹109 per month. EMI options",
    images: [Miles2, Miles1, Miles3, Miles4],
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
      <ProductDisplay productDetails={product1Details2} />
    
    </>
  );
}

export default MilesofMeals;

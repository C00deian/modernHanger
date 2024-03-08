
import "./Blog.css";
import ProductDisplay from "../../ProductDisplay";

import Footer from "../Footer/Footer";
import NewLetter from "../../NewLetter/NewLetter";
import MiddleLast from "../../middleLast/MiddleLast";
import Whatsap from "../../whatsapp/Whatsap";

import NeverGiveUp from "../../assets/Catelogue/Never give up/Never-give-up.jpg";
import NeverGiveUp1 from "../../assets/Catelogue/Never give up/Never-give-up1.jpg";
import NeverGiveUp2 from "../../assets/Catelogue/Never give up/Never-give-up2.jpg";
import NeverGiveUp3 from "../../assets/Catelogue/Never give up/Never-give-up3.jpg";
import NeverGiveUp4 from "../../assets/Catelogue/Never give up/Never-give-up4.jpg";

function Blog() {

 const product1Details = {
   title: "Blueeagle Medal Hanger",
   brand: "Generic",
   price: "₹1,200.00",
   taxInfo: "Inclusive of all taxes",
   emiInfo: "EMI starts at ₹109 per month. EMI options",
   images: [
     NeverGiveUp,
     NeverGiveUp1,
     NeverGiveUp2,
     NeverGiveUp3,
     NeverGiveUp4,
   ],
   details: [
     
     "Colour:  Black",
     "Brand:  Generic",
     "Material:  Metal",
     "Finish Type:  Metallic",
     "Shape:  Rectangular",
     "Included Components:  Metal",
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
      <ProductDisplay productDetails={product1Details} />
      <MiddleLast />
      <NewLetter />
      <Footer />
      <Whatsap />
    </>
  );
}

export default Blog;

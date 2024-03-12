import React from 'react'
import Badminton0 from '../../assets/Sports/Badminton/2.jpg'
import Badminton1 from '../../assets/Sports/Badminton/1.jpg'
import Badminton2 from '../../assets/Sports/Badminton/3.jpg'
import Badminton3 from '../../assets/Sports/Badminton/4.jpg'
import ProductDisplay from "../../ProductDisplay";
function Badminton() {
    const badminton = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 498.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [Badminton0,
            Badminton1,
            Badminton2,
            Badminton3],
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
            <ProductDisplay productDetails={badminton} />

        </>
    );
}

export default Badminton
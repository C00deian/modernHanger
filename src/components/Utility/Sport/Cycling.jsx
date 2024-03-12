import React from 'react'
import Cycling0 from '../../assets/Sports/Cycling/4.jpg'
import Cycling1 from '../../assets/Sports/Cycling/2.jpg'
import Cycling2 from '../../assets/Sports/Cycling/3.jpg'
import Cycling3 from '../../assets/Sports/Cycling/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function Cycling() {
    const cycling = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            Cycling1,
            Cycling0,
            Cycling2,
            Cycling3],
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
            <ProductDisplay productDetails={cycling} />

        </>
    );
}

export default Cycling
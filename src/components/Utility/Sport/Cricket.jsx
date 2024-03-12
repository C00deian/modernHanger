import React from 'react'
import Cricket0 from '../../assets/Sports/cricket/4.jpg'
import Cricket1 from '../../assets/Sports/cricket/2.jpg'
import Cricket2 from '../../assets/Sports/cricket/3.jpg'
import Cricket3 from '../../assets/Sports/cricket/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function Cricket() {
    const cricket = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            Cricket1,
            Cricket0,
            Cricket2,
            Cricket3],
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
            <ProductDisplay productDetails={cricket} />

        </>
    );
}

export default Cricket
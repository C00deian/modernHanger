import React from 'react'
import Football0 from '../../assets/Sports/Football/4.jpg'
import Football1 from '../../assets/Sports/Football/2.jpg'
import Football2 from '../../assets/Sports/Football/3.jpg'
import Football3 from '../../assets/Sports/Football/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function Football() {
    const football = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            Football1,
            Football0,
            Football2,
            Football3],
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
            <ProductDisplay productDetails={football} />

        </>
    );
}

export default Football
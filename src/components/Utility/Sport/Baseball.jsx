import React from 'react'
import Baseball0 from '../../assets/Sports/Baseball/4.jpg'
import Baseball1 from '../../assets/Sports/Baseball/2.jpg'
import Baseball2 from '../../assets/Sports/Baseball/3.jpg'
import Baseball3 from '../../assets/Sports/Baseball/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function Baseball() {
    const baseball = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            Baseball1,
            Baseball0,
            Baseball2,
            Baseball3],
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
            <ProductDisplay productDetails={baseball} />

        </>
    );
}

export default Baseball
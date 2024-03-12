import React from 'react'
import Basketball0 from '../../assets/Sports/Basketball/4.jpg'
import Basketball1 from '../../assets/Sports/Basketball/2.jpg'
import Basketball2 from '../../assets/Sports/Basketball/3.jpg'
import Basketball3 from '../../assets/Sports/Basketball/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function Basketball() {
    const basketball = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            Basketball1,
            Basketball0,
            Basketball2,
            Basketball3],
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
            <ProductDisplay productDetails={basketball} />

        </>
    );
}

export default Basketball
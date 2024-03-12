import React from 'react'
import Yoga0 from '../../assets/Sports/Yoga/4.jpg'
import Yoga1 from '../../assets/Sports/Yoga/2.jpg'
import Yoga2 from '../../assets/Sports/Yoga/3.jpg'
import Yoga3 from '../../assets/Sports/Yoga/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function Yoga() {
    const yoga = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            Yoga1,
            Yoga0,
            Yoga2,
            Yoga3],
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
            <ProductDisplay productDetails={yoga} />

        </>
    );
}

export default Yoga
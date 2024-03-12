import React from 'react'
import AirRifale from '../../assets/Sports/AirRifale/4.jpg'
import AirRifale1 from '../../assets/Sports/AirRifale/2.jpg'
import AirRifale2 from '../../assets/Sports/AirRifale/3.jpg'
import AirRifale3 from '../../assets/Sports/AirRifale/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function Airrfile() {
    const AirRifle = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            
            AirRifale1,
            AirRifale,
            AirRifale2,
            AirRifale3],
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
            <ProductDisplay productDetails={AirRifle} />

        </>
    );
}

export default Airrfile
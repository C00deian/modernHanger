import React from 'react'
import bodyBuilding0 from '../../assets/Sports/bodyBuilding/4.jpg'
import bodyBuilding1 from '../../assets/Sports/bodyBuilding/2.jpg'
import bodyBuilding2 from '../../assets/Sports/bodyBuilding/3.jpg'
import bodyBuilding3 from '../../assets/Sports/bodyBuilding/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function BodyBuild() {
    const bodybuild = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            bodyBuilding1,
            bodyBuilding0,
            bodyBuilding2,
            bodyBuilding3],

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
            <ProductDisplay productDetails={bodybuild} />

        </>
    );
}

export default BodyBuild
import React from 'react'
import ChessMaster0 from '../../assets/Sports/ChessMaster/4.jpg'
import ChessMaster1 from '../../assets/Sports/ChessMaster/2.jpg'
import ChessMaster2 from '../../assets/Sports/ChessMaster/3.jpg'
import ChessMaster3 from '../../assets/Sports/ChessMaster/1.jpg'
import ProductDisplay from "../../ProductDisplay";

function ChessMaster() {
    const chess = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [
            ChessMaster1,
            ChessMaster0,
            ChessMaster2,
            ChessMaster3],
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
            <ProductDisplay productDetails={chess} />

        </>
    );
}

export default ChessMaster
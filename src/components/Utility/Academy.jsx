import React from 'react'
import ProductDisplay from '../ProductDisplay';

import Academy1 from '../assets/Catelogue/Acadmic/1.jpg'
import Academy2 from '../assets/Catelogue/Acadmic/2.jpg'
import Academy3 from '../assets/Catelogue/Acadmic/3.jpg'
import Academy4 from '../assets/Catelogue/Acadmic/4.jpg'
function Academy() {
    const acadmey = {
        title: "Blueeagle Medal Hanger",
        brand: "Generic",
        price: "₹ 598.00",
        taxInfo: "Inclusive of all taxes",
        emiInfo: "EMI starts at ₹109 per month. EMI options",
        images: [Academy2, Academy1,  Academy3, Academy4],
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
            <ProductDisplay productDetails={acadmey} />

        </>
    );
}

export default Academy
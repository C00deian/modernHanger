// ProductDisplay.js
import React, { useState } from "react";
import './Pages/Blog/Blog.css'

const ProductDisplay = ({ productDetails }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="Main-Container mt-28">
      <div className="main-box">
        <img
          src={hoveredImage || productDetails.images[0]}
          alt=""
          width="540px"
        />
        <div className="small-container">
          {productDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              width="60%"
              className={`img-small ${hoveredImage === image ? "hovered" : ""}`}
              onMouseOver={() => setHoveredImage(image)}
              onMouseOut={() => setHoveredImage(null)}
            />
          ))}
        </div>
      </div>
      <div className="product-details-container">
        <h2>{productDetails.title}</h2>
        <hr />
        <div className="brand">Brand: {productDetails.brand}</div>
        <div className="price">{productDetails.price}</div>
        <div className="taxes">{productDetails.taxInfo}</div>
        <div className="emi">{productDetails.emiInfo}</div>
        <hr />
        {/* Product Details section */}
        <div className="product-details">
          <h3>Product Details</h3>
          <ul>
            {productDetails.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <hr />
        {/* About this item section */}
        <div className="about-item">
          <h3>About this item</h3>
          {productDetails.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

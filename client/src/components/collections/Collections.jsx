import React from "react";
import "./collections.css";
import Image from "../image/Image";

const Collections = () => {
  return (
    <div className="collections">
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedroom</h1>
          <span>1pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedroom</h1>
          <span>1pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedroom</h1>
          <span>1pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedroom</h1>
          <span>1pins . 1w</span>
        </div>
      </div>
    </div>
  );
};

export default Collections;

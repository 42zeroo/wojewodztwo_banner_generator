import React, { useRef, useEffect } from "react";
import { ReactComponent as Map } from "./Poland_map.svg";
import "./PolandMap.scss";

const PolandMap = ({ wojewodztwoToFill }) => {
  const mapRef = useRef();
  useEffect(() => {
    const allG = mapRef.current.getElementsByTagName("g");
    for (var i = 0; i < allG.length; i++) {
      console.log(
        `${allG[i]?.attributes["data-q-text"]?.value} === ${wojewodztwoToFill}`
      );
      allG[i]?.classList.remove("filled");
      if (
        allG[i] !== undefined &&
        allG[i]?.attributes["data-q-text"]?.value === wojewodztwoToFill
      ) {
        allG[i]?.classList.add("filled");
      }
    }
  });
  return (
    <div
      className={`poland-map--container poland-map--${wojewodztwoToFill}-filled`}
    >
      <Map ref={mapRef} />
    </div>
  );
};

export default PolandMap;

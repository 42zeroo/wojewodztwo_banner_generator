import React, { useRef, useEffect } from "react";
import { ReactComponent as Map } from "./Poland_map.svg";
import "./PolandMap.scss";
const wojewodztwaPolskaWschodnia = [
  "Swietokrzyskie",
  "Podkarpackie",
  "Lubelskie",
  "Podlaskie",
  "Warminsko-Mazurskie",
];

const PolandMap = ({ wojewodztwoToFill }) => {
  const mapRef = useRef();
  useEffect(() => {
    const allG = mapRef.current.getElementsByTagName("g");
    if (wojewodztwoToFill === "Cala Polska") {
      for (var k = 0; k < allG.length; k++) allG[k]?.classList.add("filled");
      return;
    }
    if (wojewodztwoToFill === "Polska Wschodnia") {
      for (var w = 0; w < allG.length; w++) {
        allG[w]?.classList.remove("filled");
        for (var f = 0; f < wojewodztwaPolskaWschodnia.length; f++) {
          if (
            allG[w] !== undefined &&
            allG[w]?.attributes["data-q-text"]?.value ===
              wojewodztwaPolskaWschodnia[f]
          ) {
            allG[w]?.classList.add("filled");
          }
        }
      }
      return;
    }
    for (var i = 0; i < allG.length; i++) {
      allG[i]?.classList.remove("filled");
      if (
        allG[i] !== undefined &&
        allG[i]?.attributes["data-q-text"]?.value === wojewodztwoToFill
      ) {
        allG[i]?.classList.add("filled");
      }
    }
    return;
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

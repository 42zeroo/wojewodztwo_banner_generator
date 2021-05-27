import React, { useRef, useEffect } from "react";
import { ReactComponent as Map } from "./Poland_map.svg";
import "./PolandMap.scss";

const PolandMap = ({ wojewodztwoToFill }) => {
  const wojewodztwoNameHandler = (nameToTranslate) => {
    switch (nameToTranslate) {
      case "Łódzkie":
        return "\u0141\xF3dzkie";
      case "Wielkopolskie":
        return "Wielkopolskie";
      case "Śląskie":
        return "\u015Al\u0105skie";
      case "Opolskie":
        return "Opolskie";
      case "Dolno\u015Bl\u0105skie":
        return "Dolnośląskie";
      case "Lubuskie":
        return "Lubuskie";
      case "Zachodniopomorskie":
        return "Zachodniopomorskie";
      case "Pomorskie":
        return "Pomorskie";
      case "Kujawsko-Pomorskie":
        return "Kujawsko-Pomorskie";
      case "Warmińsko-Mazurskie":
        return `Warmi\u0144sko-Mazurskie`;
      case "Świętokrzyskie":
        return "\u015Awi\u0119tokrzyskie";
      case "Małopolskie":
        return "Ma\u0142opolskie";
      case "Podkarpackie":
        return "Podkarpackie";
      case "Lubelskie":
        return "Lubelskie";
      case "Podlaskie":
        return "Podlaskie";
      case "Mazowieckie":
        return "Mazowieckie";
      default:
        return "";
    }
  };
  const mapRef = useRef();
  useEffect(() => {
    const allG = mapRef.current.getElementsByTagName("g");
    for (var i = 0; i < allG.length; i++) {
      console.log(allG[i]?.attributes["data-q-text"]?.value);
      allG[i]?.classList.remove("filled");
      if (
        allG[i] !== undefined &&
        allG[i]?.attributes["data-q-text"]?.value ===
          wojewodztwoNameHandler(wojewodztwoToFill)
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

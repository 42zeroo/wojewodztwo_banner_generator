import React from "react";
import inWojewodztwoTranslator from "../../functions/inWojewodztwoTranslator";
import PolandMap from "../PolandMap";

const ToRenderArea = ({ image, toRenderId, logo, text, whatToFill }) => {
  return (
    <div
      id={toRenderId}
      style={{
        backgroundColor: !image ? "#03359e" : "rgba(138, 163, 255, 0.3)",
      }}
    >
      <div class="to-render--content-wrapper">
        <img
          style={{
            display: !image ? "none" : "flex",
          }}
          alt="background--for--render"
          className="to-render--background-image"
          src={image}
        />
        <img
          src={logo}
          style={{
            display: !logo ? "none" : "flex",
          }}
          alt="logo--for--render"
          className="to-render--logo"
        />
        <p
          style={{
            paddingTop: typeof logo === "undefined" ? "130px" : "44px",
          }}
          className="to-render--header"
        >
          {text}
        </p>
        <p className="to-render--header-wojewodztwo">
          {inWojewodztwoTranslator(whatToFill)}
        </p>

        <PolandMap className="poland-map" wojewodztwoToFill={whatToFill} />
      </div>
    </div>
  );
};

export default ToRenderArea;

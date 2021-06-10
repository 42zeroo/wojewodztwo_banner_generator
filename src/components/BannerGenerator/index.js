import React, { useState } from "react";
import ToRenderArea from "./ToRenderArea";
import Form from "./Form";
import "./BannerGenerator.scss";

const BannerGenerator = ({ idToRender }) => {
  const [image, setImage] = useState();
  const [logo, setLogo] = useState();
  const [text, setText] = useState();
  const [wojewodztwoToFill, setWojewodztwoToFill] = useState("");
  return (
    <>
      <h1>
        JAK CHCESZ 5 TO MOGE CI ZA 200 ODDAC KOZAKA, ALE TANIEJ NA PEWNO NIE BO
        KONCOWE MAM.
      </h1>
      <h2>Jak chcesz wieksza paczke taniej to jutro</h2>
      <Form
        idToRender={idToRender}
        setImage={setImage}
        setLogo={setLogo}
        setText={setText}
        setWojewodztwoToFill={setWojewodztwoToFill}
        wojewodztwoToFill={wojewodztwoToFill}
      />
      <ToRenderArea
        image={image}
        toRenderId={idToRender}
        logo={logo}
        text={text}
        whatToFill={wojewodztwoToFill}
      />
    </>
  );
};

export default BannerGenerator;

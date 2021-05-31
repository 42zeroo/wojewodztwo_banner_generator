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
      <Form
        idToRender={idToRender}
        setImage={setImage}
        setLogo={setLogo}
        setText={setText}
        setWojewodztwoToFill={setWojewodztwoToFill}
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

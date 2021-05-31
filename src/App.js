import "./App.scss";
import React, { useState, useRef } from "react";
import exportAsPicture from "./functions/exportAsPicture";
import PolandMap from "./components/PolandMap";
import wojewodztwa from "./data/wojewodztwa";
import inWojewodztwoTranslator from "./functions/inWojewodztwoTranslator";

function App() {
  const [image, setImage] = useState();
  const [logo, setLogo] = useState();
  const [text, setText] = useState();
  const [wojewodztwoToFill, setWojewodztwoToFill] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onLogoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setLogo(URL.createObjectURL(event.target.files[0]));
    }
  };
  const toRenderRef = useRef();
  return (
    <div>
      <div
        className="App"
        id="to-render"
        style={{
          width: "1400px",
          height: "700px",
          backgroundColor: !image ? "#03359e" : "rgba(138, 163, 255, 0.3)",
        }}
        ref={toRenderRef}
      >
        <div style={{ width: "1000px", height: "700px" }}>
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
          <p className="to-render--header">{text}</p>
          <p className="to-render--header-wojewodztwo">
            w wojewodztwie {inWojewodztwoTranslator(wojewodztwoToFill)}
          </p>

          <PolandMap
            className="poland-map"
            wojewodztwoToFill={wojewodztwoToFill}
          />
          <p style={{ float: "right", opacity: "0" }}>xd</p>
        </div>
      </div>
      <div className="form">
        <div>
          <p>Tło:</p>
          <input
            type="file"
            onChange={onImageChange}
            className="filetype"
            id="group_image"
          />
        </div>

        <div>
          <p>Logo:</p>
          <input
            type="file"
            onChange={onLogoChange}
            className="filetype"
            id="group_image"
          />
        </div>

        <div>
          <p>Tekst:</p>{" "}
          <input type="textarea" onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <p>Województwo:</p>
          <select
            onChange={(e) => setWojewodztwoToFill(e.target.value)}
            name="woj"
            id="woj"
          >
            {wojewodztwa.map((w) => (
              <>
                <option value={w.raw}>{w.polish}</option>
              </>
            ))}
          </select>
        </div>

        <button
          style={{
            width: "175px",
            background: "transparent",
            border: "5px solid #000ff0",
          }}
          onClick={() => exportAsPicture("to-render")}
        >
          Wygeneruj obrazek
        </button>
      </div>
    </div>
  );
}

export default App;

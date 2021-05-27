import "./App.css";
import React, { useState } from "react";
import exportAsPicture from "./functions/exportAsPicture";
import PolandMap from "./components/PolandMap";
import wojewodztwa from "./data/wojewodztwa";

function App() {
  const [image, setImage] = useState();
  const [logo, setLogo] = useState();
  const [text, setText] = useState();
  const [wojewodztwoToFill, setWojewodztwoToFill] = useState("");
  const inWojewodztwoTranslator = (wojName) => {
    switch (wojName) {
      case "Lubelskie":
        return "Lubelskim";
      case "Podlaskie":
        return "Podlaskim";
      case "Mazowieckie":
        return "Mazowieckim";
      case "Podkarpackie":
        return "Podkarpackim";
      case "Malopolskie":
        return "Małopolskim";
      case "Swietokrzyskie":
        return "Świętokrzyskim";
      case "Warminsko-Mazurskie":
        return "Warmińsko-Mazurskim";
      case "Kujawsko-Pomorskie":
        return "Kujawsko-Pomorskim";
      case "Pomorskie":
        return "Pomorskim";
      case "Zachodniopomorskie":
        return "Zachodniopomorskim";
      case "Lubuskie":
        return "Lubuskim";
      case "Dolnoslaskie":
        return "Dolnośląskim";
      case "Lodzkie":
        return "Łódzkim";
      case "Wielkopolskie":
        return "Wielkopolskim";
      case "Slaskie":
        return "Śląskim";
      case "Opolskie":
        return "Opolskim";
      default:
        return "";
    }
  };
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
  return (
    <div>
      <div className="App" id="to-render">
        <img className="to-render--background-image" src={image} />
        <div data-logo-src={`url(${logo})`} className="to-render--logo" />
        <p className="to-render--header">{text}</p>
        <p className="to-render--header-wojewodztwo">
          w wojewodztwie {inWojewodztwoTranslator(wojewodztwoToFill)}
        </p>

        <PolandMap
          className="poland-map"
          wojewodztwoToFill={wojewodztwoToFill}
        />
      </div>
      <input
        type="file"
        onChange={onImageChange}
        className="filetype"
        id="group_image"
      />
      <input
        type="file"
        onChange={onLogoChange}
        className="filetype"
        id="group_image"
      />
      Text: <input type="text" onChange={(e) => setText(e.target.value)} />
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
      <button onClick={() => exportAsPicture("to-render")}>Klik</button>
    </div>
  );
}

export default App;

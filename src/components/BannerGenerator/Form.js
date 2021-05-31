import React from "react";
import wojewodztwa from "../PolandMap/data/wojewodztwa";
import areas from "../PolandMap/data/areas";
import exportAsPicture from "../../functions/exportAsPicture";

const Form = ({
  idToRender,
  setImage,
  setLogo,
  setText,
  setWojewodztwoToFill,
}) => {
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
          {areas.map((a) => (
            <option value={a.raw}>{a.polish}</option>
          ))}
        </select>
      </div>

      <button
        style={{
          width: "175px",
          background: "transparent",
          border: "5px solid #000ff0",
        }}
        onClick={() => exportAsPicture(idToRender)}
      >
        Wygeneruj obrazek
      </button>
    </div>
  );
};

export default Form;

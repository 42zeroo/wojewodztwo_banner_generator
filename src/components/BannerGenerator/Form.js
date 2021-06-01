import React from "react";
import wojewodztwa from "../PolandMap/data/wojewodztwa";
import areas from "../PolandMap/data/areas";
import exportAsPicture from "../../functions/exportAsPicture";
import {
  InputLabel,
  FormControl,
  Button,
  TextField,
  MenuItem,
  Select,
} from "@material-ui/core";

const Form = ({
  idToRender,
  setImage,
  setLogo,
  setText,
  setWojewodztwoToFill,
  wojewodztwoToFill,
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
        <TextField
          label="Tekst banneru"
          multiline
          rows={4}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setWojewodztwoToFill(e.target.value)}
        >
          {wojewodztwa.map((w) => (
            <>
              <MenuItem value={w.raw}>{w.polish}</MenuItem>
            </>
          ))}
          {areas.map((a) => (
            <MenuItem value={a.raw}>{a.polish}</MenuItem>
          ))}
        </select>
      </div>

      <Button color="primary" onClick={() => exportAsPicture(idToRender)}>
        Wygeneruj obrazek
      </Button>
    </div>
  );
};

export default Form;

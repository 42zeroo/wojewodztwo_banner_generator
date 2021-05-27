import * as htmlToImage from "html-to-image";
import saveAs from "./saveAs";

const exportAsPicture = (id) => {
  htmlToImage.toPng(document.getElementById(id)).then((dataUrl) => {
    saveAs(dataUrl, "my-node.png");
  });
};
export default exportAsPicture;

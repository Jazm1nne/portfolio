import { appearAboutImage } from "./about.js"
import { typeWriter } from "./typing.js";
import handleForm from "./form.js";
import scrollToAbout from "./callToAction.js";

function init() {
    appearAboutImage();
    typeWriter(0);
    handleForm();
    scrollToAbout();
}
init()
  
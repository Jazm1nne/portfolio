import { appearAboutImage } from "./about.js"
import { typeWriter } from "./typing.js";
import handleForm from "./form.js";
import showProject from "./project.js";

function init() {
    appearAboutImage();
    typeWriter(0);
    handleForm();
    showProject();
}
init()
  
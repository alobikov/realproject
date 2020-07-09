import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeFormState from "./modules/state";
import timer from './modules/timer';

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const formState = {
        winShape: 0,
        frameType: "tree",
        profile: "xex",
    };
    const deadline = "2020-07-14"

    changeFormState(formState);
    modal(formState);
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(
        ".decoration_slider",
        ".no_click",
        ".decoration_content > div > div",
        "after_click"
    );
    tabs(
        ".balcon_icons",
        ".balcon_icons_img",
        ".big_img > img",
        "do_image_more",
        "inline-block"
    );
    forms(formState);
    timer('#timer', deadline);
});

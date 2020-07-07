console.log(1);
import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";

document.addEventListener("DOMContentLoaded", () => {
  modal();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
});

function changeFormState(form) {
  const winShape = document.querySelectorAll(".balcon_icons_img");
  const width = document.querySelector("#width");
  const heigth = document.querySelector("#height");
  const frameType = document.querySelector("#view_type");
  const winProfiles = document.querySelectorAll(".checkbox");

  winShape.forEach((item, idx) => {
    item.addEventListener("click", () => {
      form["winShape"] = idx;
      console.log(form);
    });
  });

  width.addEventListener("input", () => {
    width.value = width.value.replace(/\D/, "");
    form["width"] = width.value;
  });
  heigth.addEventListener("input", () => {
    heigth.value = heigth.value.replace(/\D/, "");
    form["heigth"] = heigth.value;
  });
  frameType.addEventListener("input", () => {
    form["frame_type"] = frameType.value;
  });
  winProfiles.forEach((profile, i) => {
    profile.addEventListener("change", () => {
      i === 0 ? (form["profile"] = "cold") : (form["profile"] = "warm");
      winProfiles.forEach((item, j) => {
        if (i == j) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    });
  });
}
export default changeFormState;

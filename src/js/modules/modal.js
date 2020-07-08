function modal(formState) {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      modalWindows = document.querySelectorAll("[data-modal]");

    trigger.forEach((trig) => {
      trig.addEventListener("click", (e) => {
        if (e.target) e.preventDefault();
        modalWindows.forEach((modal) => (modal.style.display = "none"));
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        if (trig.getAttribute("glaze-type") === "cold") {
          formState.profile = "cold";
        } else {
          formState.profile = "warm";
        }
        // console.log(formState);
      });
    });
    close.addEventListener("click", (e) => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
    // close event handler when clicked outside modal
    modal.addEventListener("click", (e) => {
      if (closeClickOverlay && modal === e.target) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }
  function showModalOnTimeout(selector, delay) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, delay);
  }
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".glazing_price_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
  // showModalOnTimeout(".popup", 60000);
}
export default modal;

function modal() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach((trig) => {
      trig.addEventListener("click", (e) => {
        if (e.target) e.preventDefault();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });
    close.addEventListener("click", (e) => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
    // close event handler when clicked outside modal
    modal.addEventListener("click", (e) => {
      if (modal === e.target) {
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
  // showModalOnTimeout(".popup", 60000);
}
export default modal;

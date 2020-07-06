function modal() {
  console.log("modal.js is here");
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach((triger) => {
      triger.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(modal);
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });
    close.addEventListener("click", (e) => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
    modal.addEventListener("click", (e) => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
  }
  function showModalOnTimeout(modal, delay) {
    setTimeout(() => {
      document.querySelector(modal).style.display = "block";
      document.body.style.overflow = "hidden";
    }, delay);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  showModalOnTimeout(".popup", 3000);
}
export default modal;

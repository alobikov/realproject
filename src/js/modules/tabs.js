import { _ } from "core-js";

const tabs = (headerSelector, tabSelector, contentSelector, activeTab) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  header.addEventListener("click", ({ target }) => {
    if (
      target &&
      target.parentNode.classList.contains(
        tabSelector.replace(/\./, "") ||
          target.classList.contains(tabSelector.replace(/\./, ""))
      )
    ) {
      tab.forEach((item, idx) => {
        if (target.parentNode === item || target === item) {
          hideTabContent();
          showTabContent(idx);
        }
      });
    }
  });

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tab.forEach((item) => {
      item.classList.remove(activeTab);
    });
  }

  function showTabContent(idx = 0) {
    content[idx].style.display = "block";
    tab[idx].classList.add(activeTab);
  }

  hideTabContent();
  showTabContent();
};

export default tabs;

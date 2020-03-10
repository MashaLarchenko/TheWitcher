var details = document.querySelectorAll(".parsys_item");
for (i = 0; i < details.length; i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  var details = event.target.parentNode.children;
  for (i = 0; i < details.length; i++) {
    if (
      details[i].tagName != "DETAILS" ||
      !details[i].hasAttribute("open") ||
      event.target == details[i]
    ) {
      continue;
    }
    details[i].removeAttribute("open");
  }
}

let switchActiveEl = current => {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  current.classList.add("active");
  let currentButton = document.querySelector(".current_tab");
  let currentPanel = document.querySelector(".current_panel");
  currentPanel.classList.remove("current_panel");
  currentButton.classList.remove("current_tab");
};

let tabButtons = document.querySelectorAll(".tab_button");
let tabContent = document.querySelectorAll(".tab_content");
let about = document.querySelector(".about");
let characters = document.querySelector(".characters");
let books = document.querySelector(".books");
let episodes = document.querySelector(".episodes");

about.addEventListener("click", e => {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  about.classList.add("active");
});

characters.addEventListener("click", e => {
  switchActiveEl(characters);
  let charactersTab = document.querySelector(".b_first");
  let firstTab = document.querySelector(".tab_content.first");
  charactersTab.classList.add("current_tab");
  firstTab.classList.add("current_panel");
});

books.addEventListener("click", e => {
  switchActiveEl(books);
  let charactersTab = document.querySelector(".b_sec");
  let firstTab = document.querySelector(".tab_content.sec");
  charactersTab.classList.add("current_tab");
  firstTab.classList.add("current_panel");
});

episodes.addEventListener("click", e => {
  switchActiveEl(episodes);
  let charactersTab = document.querySelector(".b_third");
  let firstTab = document.querySelector(".tab_content.third");
  charactersTab.classList.add("current_tab");
  firstTab.classList.add("current_panel");
});

tabButtons.forEach(item => {
  item.addEventListener("click", e => {
    let currentButton = document.querySelector(".current_tab");
    let currentPanel = document.querySelector(".current_panel");
    currentButton.classList.remove("current_tab");
    e.target.classList.add("current_tab");

    if (e.target.classList.contains("b_first")) {
      currentPanel.classList.remove("current_panel");
      let firstTab = document.querySelector(".tab_content.first");
      firstTab.classList.add("current_panel");
    } else if (e.target.classList.contains("b_sec")) {
      currentPanel.classList.remove("current_panel");
      let secTab = document.querySelector(".tab_content.sec");
      secTab.classList.add("current_panel");
    } else if (e.target.classList.contains("b_third")) {
      currentPanel.classList.remove("current_panel");
      let thirdTab = document.querySelector(".tab_content.third");
      thirdTab.classList.add("current_panel");
    }
  });
});

import { Observer } from "./observer.js";
import { Navigator } from "./navigator.js";

const observer = new Observer();
const navigator = new Navigator();

document.addEventListener("DOMContentLoaded", onload);

async function onload(e) {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link")) {
      e.preventDefault();
      navigator.navigateTo(e.target.href);
    }
  });
  navigator.router();
  //   observer.observeHeader();
}

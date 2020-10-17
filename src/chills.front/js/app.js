import { Events } from "./events.js";
import { Observer } from "./observer.js";

const events = new Events();
const observer = new Observer();

document.addEventListener("DOMContentLoaded", onload);

function onload(e) {
  events.menuIconEvent();
  events.searchIconEvent();
  events.imageLinksEvent();

  observer.observeHeader();
}

import { Events } from "./events.js";

const events = new Events();

document.addEventListener("DOMContentLoaded", onload);

function onload(e) {
  events.menuIconEvent();
  events.searchIconEvent();
}

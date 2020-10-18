import { Events } from "./events.js";
import { Observer } from "./observer.js";
import { API } from "./api.js";
import { UI } from "./ui.js";

const events = new Events();
const observer = new Observer();
const api = new API();
const ui = new UI();

document.addEventListener("DOMContentLoaded", onload);

async function onload(e) {
  const posts = await api.getAllPosts();
  const post = await api.getSinglePost("odd-is-good");
  console.log(posts);
  console.log(post);

  const topP = await ui.renderTopPosts();
  topPosts.appendChild(topP);

  events.menuIconEvent();
  events.searchIconEvent();
  events.imageLinksEvent();

  observer.observeHeader();
}

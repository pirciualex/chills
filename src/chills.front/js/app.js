import { Events } from "./events.js";
import { Observer } from "./observer.js";
import { API } from "./api.js";

const events = new Events();
const observer = new Observer();
const api = new API();

document.addEventListener("DOMContentLoaded", onload);

async function onload(e) {
  const posts = await api.getAllPosts();
  const post = await api.getSinglePost("odd-is-good");
  console.log(posts);
  console.log(post);

  events.menuIconEvent();
  events.searchIconEvent();
  events.imageLinksEvent();

  observer.observeHeader();
}

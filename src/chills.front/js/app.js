import { Events } from "./events.js";
import { Observer } from "./observer.js";
import { UI } from "./ui.js";

const events = new Events();
const observer = new Observer();
const ui = new UI();

document.addEventListener("DOMContentLoaded", onload);

async function onload(e) {
    const topP = await ui.renderTopPosts();
    const allP = await ui.renderAllPosts();
    topPosts.appendChild(topP);
    document.querySelector("#posts").appendChild(allP);

    events.menuIconEvent();
    events.searchIconEvent();
    events.imageLinksEvent();

    observer.observeHeader();
}

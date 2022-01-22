import { UI } from "./ui.js";
import { Events } from "./events.js";

/**
 * This class is used for navigating through parts of the app
 */
export class Navigator {
  constructor() {
    this.ui = new UI();
    this.events = new Events();
  }
  /**
     * Loads the content of the page based on the location
     * @param {string} location the complete location of the resource
     * @param {string} hash the hash used as a url parameter
     */
  async loadContent(location, hash) {
    if (location.includes("/index.html")) {
      const topP = await this.ui.renderTopPosts();
      const allP = await this.ui.renderAllPosts();
      document.querySelector("#topPosts").appendChild(topP);
      document.querySelector("#posts").appendChild(allP);

      this.events.menuIconEvent();
      this.events.searchIconEvent();
      this.events.imageLinksEvent();
    } else if (location.includes("/post.html")) {
      this.events.menuIconEvent();
      this.events.imageLinksEvent();
      this.events.searchIconEvent();
      console.log(hash);
    }
  }
}

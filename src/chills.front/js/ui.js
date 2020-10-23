import { API } from "./api.js";

/**
 * This class creates various UI elements
 */
export class UI {
  constructor() {
    this.api = new API();
  }

  /**
     * Renders the top posts present on the home page
     */
  async renderTopPosts() {
    const posts = await this.api.getAllPosts();
    const postsUrl = `${this.api.baseUrl}/posts`;

    const topPosts = document.createElement("div");
    topPosts.className = "container top-posts";
    topPosts.innerHTML = `
    <div class="top-post">
        <a href="${postsUrl}/${posts[3].slug}" class="img-link">
            <img
                class="img-fluid top-img"
                src="${posts[3].imageURL}"
            />
        </a>
        <div class="top-content padding">
            <a href="${postsUrl}/${posts[3].slug}" class="light-link">
                ${this.formatDate(posts[3].createdAt)}
            </a>
            <a href="${postsUrl}/${
      posts[3].slug
    }" class="light-link title-link">
                <h2>${posts[3].title}</h2>
            </a>
            <p>
                ${posts[3].description}
            </p>
            <span class="comment-tag">
                <a
                    href="#"
                    class="btn btn-primary-outline comments-bubble"
                >
                    ${posts[3].comments}
                </a>
            </span>
            <div class="tags">
                <a href="#" class="tag light-link">tag1</a>
                <a href="#" class="tag light-link">tag2</a>
            </div>
        </div>
    </div>

    <div class="top-post">
        <div class="top-content padding">
            <a href="${postsUrl}/${posts[4].slug}" class="light-link">
                ${this.formatDate(posts[3].createdAt)}
            </a>
            <a href="${postsUrl}/${
      posts[4].slug
    }" class="light-link title-link">
                <h2>${posts[4].title}</h2>
            </a>
            <p>
                ${posts[4].description}
            </p>
            <span class="comment-tag">
                <a
                    href="#"
                    class="btn btn-primary-outline comments-bubble"
                >
                    ${posts[4].comments}
                </a>
            </span>
            <div class="tags">
                <a href="#" class="tag light-link">tag1</a>
                <a href="#" class="tag light-link">tag2</a>
            </div>
        </div>
        <a href="${postsUrl}/${posts[4].slug}" class="img-link">
            <img
                class="img-fluid top-img"
                src="${posts[4].imageURL}"
            />
        </a>
    </div>
    `;
    return topPosts;
  }

  /**
     * Renders all posts on the home page
     */
  async renderAllPosts() {
    const posts = await this.api.getAllPosts();
    const postsUrl = `${this.api.baseUrl}/posts`;

    const allPosts = document.createElement("div");
    allPosts.className = "container";
    let postsHtml = "";
    posts.forEach((p) => {
      postsHtml += `
            <div class="card">
                <a href="${postsUrl}/${p.slug}" class="img-link">
                    <img
                        class="img-fluid card-img-top"
                        src="${p.imageURL}"
                    />
                </a>
                <div class="card-body">
                    <a href="${postsUrl}/${p.slug}" class="light-link title-link">
                        <h2>${p.title}</h2>
                    </a>
                    <a href="${postsUrl}/${p.slug}" class="light-link date">
                        ${this.formatDate(p.createdAt)}
                    </a>
                    <p>
                        ${p.description}
                    </p>
                    <hr />
                    <div class="info">
                        <div class="tags">
                            <a href="#" class="tag light-link">tag1</a>
                            <a href="#" class="tag light-link">tag2</a>
                        </div>
                        <span class="comments">
                            <a href="${postsUrl}/${p.slug}" class="light-link">${p.comments}</a>
                        </span>
                    </div>
                </div>
            </div>
            `;
    });

    allPosts.innerHTML = `
        <h3>Here you will find something for you</h3>
        <div class="posts">
            ${postsHtml}
        </div>
        `;

    return allPosts;
  }

  formatDate(d) {
    const date = new Date(d);
    return `${date.getDate()} ${
      new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(date)
    } ${date.getFullYear()}`;
  }
}

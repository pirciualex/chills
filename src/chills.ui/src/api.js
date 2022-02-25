/**
 * This class works as an interface for communicating with the back-end
 */
export class API {
  constructor() {
    this.baseUrl = "https://localhost:5001/api";
  }

  /**
   * GET all posts
   */
  async getAllPosts() {
    const response = await fetch(`${this.baseUrl}/posts`);
    const data = await response.json();
    return data;
  }

  /**
   * GET a single post by slug
   * @param {string} slug
   */
  async getSinglePost(slug) {
    const response = await fetch(`${this.baseUrl}/posts/${slug}`);
    const data = response.json();
    return data;
  }
}

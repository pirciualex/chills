export class API {
  constructor() {
    this.baseUrl = "https://localhost:5001/api";
  }

  async getAllPosts() {
    const response = await fetch(`${this.baseUrl}/posts`);
    const data = await response.json();
    return data;
  }

  async getSinglePost(slug) {
    const response = await fetch(`${this.baseUrl}/posts/${slug}`);
    const data = response.json();
    return data;
  }
}

/**
 * This class adds event listeners to various UI elements as needed
 */
export class Events {
  /**
  * An event listener for the search icon of the navbar
  */
  searchIconEvent() {
    let searchIcon = document.querySelector("#search-icon");
    searchIcon.addEventListener("click", () => {
      // document.querySelector(".search-form").style.display = "block";
      document
        .querySelector(".search-form")
        .classList.add("search-form-active");
    });
    let closeSearch = document.querySelector("#close-search");
    closeSearch.addEventListener("click", () => {
      // document.querySelector(".search-form").style.display = "none";
      document
        .querySelector(".search-form")
        .classList.remove("search-form-active");
    });
  }

  /**
     * An event listener for the hamburger icon
     */
  menuIconEvent() {
    const menuIcon = document.querySelector("#menu-icon");
    menuIcon.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(".side-navbar")
        .classList.toggle("side-navbar-active");
      document
        .querySelector(".main-navbar")
        .classList.toggle("hamburger-active");

      if (window.innerWidth >= 992) {
        document.querySelector("body").classList.toggle("r-margin");
        document
          .querySelector(".main-navbar")
          .classList.toggle("right");
      }
    });
  }
}

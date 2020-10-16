/**
 * This class adds event listeners to various UI elements as needed
 */
export class Events {
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

/**
 * This class adds event listeners to various UI elements as needed
 */
export class Events {
  imageLinksEvent() {
    let imgLinks = document.querySelectorAll(".img-link");
    imgLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        let overlay = document.createElement("div");
        overlay.className = "link-overlay center";
        overlay.innerHTML = `<i class="i-link"></i>`;
        link.appendChild(overlay);
        for (let i = 0; i < 1; i += 0.1) {
          // setTimeout(setOpacity(i, el), 3000);
          setTimeout(() => {
            overlay.style.opacity = i;
            // console.log(overlay);
          }, 100);
        }
        // clearInterval();
        // fadeIn(overlay);
      });
      link.addEventListener("mouseleave", () => {
        for (let i = 1; i > 0; i -= 0.1) {
          // setTimeout(setOpacity(i, el), 3000);
          setTimeout(() => {
            link.lastChild.style.opacity = i;
            // alert("cleared");
            // console.log(overlay);
          }, 100);
        }
        // clearInterval();
        setTimeout(() => {
          link.removeChild(link.lastChild);
          // alert("cleared");
        }, 500);
      });
    });
  }

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

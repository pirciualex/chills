/**
 * This class creates observers for various components
 */
export class Observer {
  /**
     * Observer for the navbar
     */
  observeHeader() {
    const header = document.querySelector("header");
    let rm;
    if (window.innerWidth >= 992) {
      rm = "-78% 0px 0px 0px";
    } else {
      rm = "-50% 0px 0px 0px";
    }
    // else {
    //     rm = "-10% 0px 0px 0px";
    // }
    const headerOptions = {
      rootMargin: rm,
    };
    const headerObserver = new IntersectionObserver(
      (entries, headerObserver) => {
        const mainNavbar = document.querySelector(".main-navbar");
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            mainNavbar.classList.add("main-navbar-active");
          } else if (
            mainNavbar.classList.contains("main-navbar-active")
          ) {
            mainNavbar.classList.remove("main-navbar-active");
          }
        });
      },
      headerOptions,
    );

    headerObserver.observe(header);
  }
}

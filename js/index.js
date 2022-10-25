window.addEventListener("load", () => {
  const welcomeContent = document.querySelector(".welcome-content p");
  welcomeContent.textContent = "Hi, Welcome to my portfolio!";

  const smallScreen = 768;
  const isSmallScreen = window.matchMedia(
    `(max-width: ${smallScreen}px)`
  ).matches;

  const navItems = document.querySelectorAll("header li");
  if (isSmallScreen) {
    navItems.forEach((item) => {
      item.style.visibility = "visible";
    });
  }

  const navAnimationOption = isSmallScreen
    ? [".hamburger", { autoAlpha: 1 }]
    : [navItems, { autoAlpha: 1, stagger: { each: 0.2 } }];

  gsap
    .timeline()
    .to(welcomeContent, { autoAlpha: 1, duration: 3 })
    .to(welcomeContent.parentNode, { display: "none" })
    .to(".page-container", { height: "auto" })
    .to(...navAnimationOption)
    .to("header h1", { autoAlpha: 1, duration: 0.3 })
    .to("header .job-title", { autoAlpha: 1, duration: 0.3 })
    .to("header .desc", { autoAlpha: 1, duration: 0.3 })
    .to("header .social-list i", {
      autoAlpha: 1,
      duration: 0.3,
      stagger: { each: 0.2 },
    });
});

/*
    handle hamburger
 */
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "scroll";
  }
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "scroll";
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});

window.addEventListener("load", () => {
  const innerHeight = window.innerHeight;
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

  scrollTrigger(innerHeight);
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

const scrollAnimation = (
  innerHeight,
  target,
  trigger = target,
  startTrigger = 70
) => {
  gsap.from(target, {
    duration: 1,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: trigger,
      start: `-=${innerHeight} ${startTrigger}%`,
    },
  });
};

const scrollTrigger = (innerHeight) => {
  const h2s = gsap.utils.toArray("h2");
  h2s.forEach((h2) => {
    scrollAnimation(innerHeight, h2);
  });

  scrollAnimation(innerHeight, "#about-me");
  scrollAnimation(innerHeight, "#skils");

  const projects = gsap.utils.toArray(".project");
  projects.forEach((project) => {
    scrollAnimation(innerHeight, project);
  });
  const blogs = gsap.utils.toArray("article");

  blogs.forEach((blog) => {
    scrollAnimation(innerHeight, blog);
  });

  scrollAnimation(
    innerHeight,
    "#contact .social-list i",
    "#contact .social-list i",
    90
  );
};

window.addEventListener("load", () => {
  const welcomeContent = document.querySelector(".welcome-content p");
  welcomeContent.textContent = "Hi, Welcome to my portfolio!";

  gsap
    .timeline()
    .to(welcomeContent, { autoAlpha: 1, duration: 3 })
    .to(welcomeContent.parentNode, { display: "none" })
    .to(".page-container", { display: "block" })
    .to("header li", { autoAlpha: 1, stagger: { each: 0.2 } })
    .to("header h1", { autoAlpha: 1 })
    .to("header .job-title", { autoAlpha: 1 })
    .to("header .desc", { autoAlpha: 1 })
    .to("header .social-list i", { autoAlpha: 1, stagger: { each: 0.2 } });
});

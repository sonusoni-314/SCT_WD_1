const header = document.getElementById("siteHeader");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");

const onScroll = () => {
  const shouldActivate = window.scrollY > 60;
  header.classList.toggle("is-scrolled", shouldActivate);
};

const toggleMenu = () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

window.addEventListener("scroll", onScroll);
menuToggle.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

onScroll();

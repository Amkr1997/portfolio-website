/*Implementing smooth scrolling*/

/*
const btnScrollTo = document.querySelector(".btn-cta");
const aboutMe = document.querySelector(".section-about-us");

btnScrollTo.addEventListener("click", function (e) {
  const coords = aboutMe.getBoundingClientRect();
  console.log(coords);
  console.log(e.target.getBoundingClientRect());

  console.log(coords.left);
  console.log(coords.top);
  console.log(window.pageXOffset);
  console.log(window.pageYOffset);
  console.log(window);

  // scrolling
  window.scrollTo(
    coords.left + window.pageXOffset,
    coords.top + window.pageYOffset
  );
});*/

/////////////////////////////////////////////////////
/* Setting the date */

const year = document.querySelector(".year");
const currentDate = new Date().getFullYear();
year.textContent = currentDate;

/////////////////////////////////////////////////////
/* make navigation work */
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////
/*Implementing smooth scrolling*/

const allLinks = document.querySelectorAll("a:link");
//console.log(allLinks);

allLinks.forEach((links) =>
  links.addEventListener("click", function (e) {
    e.preventDefault();
    const href = links.getAttribute("href");
    // console.log(href);

    // scroll back to the top.
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to the sections.
    if (href !== "#" && href.startsWith("#")) {
      // console.log(href);
      const sectionEl = document.querySelector(href);
      //console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close navigation bar
    if (links.classList.contains("nav-elements")) {
      header.classList.toggle("nav-open");
    }
  })
);

/////////////////////////////////////////////////////
/* Implementing sticky nav */

const heroEl = document.querySelector(".section-hero");
const nav = document.querySelector(".header");
const body = document.querySelector("body");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-96px`,
});

observer.observe(heroEl);

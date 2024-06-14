//Hamburger Nav

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.getElementById("body");
//Add new Hamburger on click
const hamburgers = document.querySelector(".hamburgers");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("fixed_body");

  // document.querySelector("html").style.overflow = "hidden";
});

hamburgers.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("fixed_body");

  // document.querySelector("html").style.overflow = "hidden";
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("fixed_body");
  })
);

//End: Hamburger Nav

// CONTACT HOVER SECTION

$(".li-contact-1").hover(
  function () {
    $(this).find("img").attr("src", "assets/images/img-call-active.png");
  },

  function () {
    $(this).find("img").attr("src", "assets/images/img-call.png");
  }
);

$(".li-contact-2").hover(
  function () {
    $(this).find("img").attr("src", "assets/images/img-loc-active.png");
  },

  function () {
    $(this).find("img").attr("src", "assets/images/img-loc.png");
  }
);

$(".li-contact-3").hover(
  function () {
    $(this).find("img").attr("src", "assets/images/img-mail-active.png");
  },

  function () {
    $(this).find("img").attr("src", "assets/images/img-mail.png");
  }
);

$(".li-contact-4").hover(
  function () {
    $(this).find("img").attr("src", "assets/images/img-clock-active.png");
  },

  function () {
    $(this).find("img").attr("src", "assets/images/img-clock.png");
  }
);

$(document).ready(function () {
  $("ul.navigational_links > li").click(function (e) {
    $("ul.navigational_links > li").removeClass("active");
    $(this).addClass("active");
  });

  $(".slick-testimonial").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: ".arrow_left2",
    // nextArrow: ".arrow_right2",
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.getElementById("body");

hamburger.addEventListener("click", () => {
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

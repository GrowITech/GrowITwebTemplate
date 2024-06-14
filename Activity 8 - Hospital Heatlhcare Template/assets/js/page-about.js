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

$(document).ready(function () {
  $(".ul-testimonial").slick({
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".ul-doctors").slick({
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".ul-news").slick({
    infinite: true,
    slidesToShow: 2,
    dots: true,
    centerPadding: "40px",
    rows: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
          rows: 1,
        },
      },
    ],
  });

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
});

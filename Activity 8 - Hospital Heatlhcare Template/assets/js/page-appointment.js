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

// DatePicker Restriction Dates

$(function () {
  var dtToday = new Date();
  var $dateInput = $("#txtDate");

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  var mm = String(dtToday.getMonth() + 1).padStart(2, "0"); // January is 0
  var dd = String(dtToday.getDate()).padStart(2, "0");
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  var maxDate = year + "-" + month + "-" + day;
  var minDate = year + "-" + mm + "-" + dd; // Minimum date is today

  // or instead:
  // var maxDate = dtToday.toISOString().substr(0, 10);

  // alert(maxDate);
  $("#txtDate").attr("min", maxDate);

  //
  //
  //
  //
  // Codes in Disabling Sundays
  // Function to check if a given date is a Sunday
  function isSunday(date) {
    var dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 0; // Sunday is represented by 0
  }

  // Disable Sundays in the date picker
  function disableSundays() {
    $('input[type="date"]').on("change", function () {
      var selectedDate = $(this).val();
      if (isSunday(selectedDate)) {
        alert("We are closed on Sundays. Please select another date.");
        $(this).val("");
      }
    });
  }

  // Call disableSundays function on document ready
  disableSundays();
});

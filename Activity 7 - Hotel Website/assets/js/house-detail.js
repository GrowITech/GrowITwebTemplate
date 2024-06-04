document.querySelector(".decrement").setAttribute("disabled", "disabled");
document.querySelector(".decrement").style.cursor = "not-allowed";

var valueCount;
var total_price;

//plus
document.querySelector(".increment").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").innerText;
  valueCount = document.getElementById("quantity2").innerText;
  valueCount++;
  total_price = valueCount * 280;
  document.getElementById("quantity").innerText = valueCount;
  document.getElementById("quantity2").innerText = valueCount;
  document.getElementById("total-price").innerText = total_price;

  if (valueCount > 1) {
    document.querySelector(".decrement").removeAttribute("disabled");
    document.querySelector(".decrement").style.cursor = "pointer";
    document.querySelector(".num-nights").innerText = "nights";
  }
});

//minus
document.querySelector(".decrement").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").innerText;
  valueCount = document.getElementById("quantity2").innerText;
  valueCount--;
  total_price = valueCount * 280;
  document.getElementById("quantity").innerText = valueCount;
  document.getElementById("quantity2").innerText = valueCount;
  document.getElementById("total-price").innerText = total_price;
  if (valueCount == 1) {
    document.querySelector(".decrement").setAttribute("disabled", "disabled");
    document.querySelector(".decrement").style.cursor = "not-allowed";
    document.querySelector(".num-nights").innerText = "night";
  }
});

$(function () {
  var range = $("#quantity");
  $("#popupDatepicker").datepicker({
    minDate: 1,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
  });
  $("#datepicker").click(function (e) {
    var visible = $("#popupDatepicker").datepicker("widget").is(":visible");
    $("#popupDatepicker").datepicker(visible ? "hide" : "show");
  });
});

$("#date").datepicker({
  numberOfMonths: 2,
  onSelect: function (selectedDate) {
    if (!$(this).data().datepicker.first) {
      $(this).data().datepicker.inline = true;
      $(this).data().datepicker.first = selectedDate;
    } else {
      if (selectedDate > $(this).data().datepicker.first) {
        $(this).val($(this).data().datepicker.first + " - " + selectedDate);
      } else {
        $(this).val(selectedDate + " - " + $(this).data().datepicker.first);
      }
      $(this).data().datepicker.inline = false;
    }
  },
  onClose: function () {
    delete $(this).data().datepicker.first;
    $(this).data().datepicker.inline = false;
  },
});

//Hamburger Nav

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

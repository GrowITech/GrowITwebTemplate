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

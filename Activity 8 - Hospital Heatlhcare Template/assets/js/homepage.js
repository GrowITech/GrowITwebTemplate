$(window).on("hashchange", function () {
  $("div.tab").hide();
  $(location.hash).fadeIn("slow");
});

$("a.hash").on("click", function (e) {
  e.preventDefault();
  location.hash = $(this).data("hash");
});

$(".li-contact-1").hover(
  function () {
    $(this).find("img").attr("src", "assets/images/img-loc.png");
  },

  function () {
    $(this).find("img").attr("src", "assets/images/img-loc-active.png");
  }
);

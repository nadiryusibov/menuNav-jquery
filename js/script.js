//Jquery menu bar start
$(document).ready(function () {
  $(".center").click(function () {
    $("#slide").slideToggle("slow");
  });

  $(".menu-toggle i").click(function () {
    $(this).toggleClass("fas fa-times");
    $(".nav-menu").toggleClass("active");
  });
});

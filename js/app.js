/*NavBar Background Chnage*/
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").addClass("nav_bg");
    } else {
      $(".navbar").removeClass("nav_bg");
    }
  });
});

/* Navbar Mobile */
jQuery(".burger").click(function () {
  jQuery(".nav_links").toggleClass("nav_active");
  jQuery(".navbar").toggleClass("nav_overflw");
  jQuery(".burger").toggleClass("toggle");
});

/* Scroll Animation */
ScrollReveal({ reset: false });

ScrollReveal().reveal(".fade-in", {
  duration: 1000,
  move: 0,
});

ScrollReveal().reveal(".slide-right", {
  duration: 1000,
  origin: "left",
  distance: "100px",
  easing: "ease-in-out",
});

ScrollReveal().reveal(".slide-left", {
  duration: 1000,
  origin: "right",
  distance: "100px",
  easing: "ease-in-out",
});

ScrollReveal().reveal(".slide-up", {
  duration: 1000,
  origin: "bottom",
  distance: "30px",
  easing: "cubic-bezier(.37,.01,.74,1)",
});

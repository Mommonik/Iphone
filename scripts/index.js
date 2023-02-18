$(document).ready(function () {
  let width = $(window).width();
  let hiddenRow = $(".expandable");
  let needWidth = 720;
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".expand-btn").html("Уменьшить");
      $("#services").css("height", "1150px");
    } else {
      $(".expand-btn").html("Расширить");
      $("#services").css("height", "750px");
    }
  });
  $(".play-btn").click(function () {
    $(".modal-canvas").show();
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").hide();
  });
  $(".img").click(function () {
    $(".img").animate({ left: "250px" });
  });
  if (width < needWidth) {
    $("nav").html("");
  } else {
    $("nav").html(
      "<a href='#welcome' class='activ-link'>Home</a> <a href='#find'>Find a service</a> <a href='#projects'>Apps</a> <a href='#contact'>Testimonials</a> <a href='#about'>About us</a>"
    );
  }

  if (width < needWidth) {
    $(".lines").show();
  }
  $(".lines").click(function () {
    $(".side-bar").slideDown(500);
    $("body").css("background: rgba(0, 0, 0, 0.3);");
  });
  $(".close").click(function () {
    $(".side-bar").slideUp("slow");
  });
  if (width > needWidth) {
    $(".side-bar").html("");
  }
  if (width > needWidth) {
    $(".side-flex").html("");
  }
  let win = $(window);

  $(window).on("scroll", function () {
    let window1 = win.scrollTop();
    console.log(window1);
    let needWin = 800;
    if (window1 > needWin) {
      $(".scroll-img").show(400);
    } else {
      $(".scroll-img").hide(400);
    }
  });
  $(window).on("scroll", function () {
    let window1 = win.scrollTop();
    let needSlide = 2000;
    if (window1 > needSlide) {
      $(".ncard1").slideDown(1000);
      setTimeout(function () {
        $(".ncard2").slideDown(1000);
      }, 500);
      setTimeout(function () {
        $(".ncard3").slideDown(1000);
      }, 1000);
    } else {
      $(".news-card").hide();
    }
  });
  $(".welcome-img").click(function () {
    $(".all-slider").show();
  });
  $(".slider-close").click(function () {
    $(".all-slider").hide();
  });
  $(".arrow-right").click(function () {
    $(".img3").hide();
    $(".arrow-left").click(function () {
      $(".img3").show();
    });
  });
});

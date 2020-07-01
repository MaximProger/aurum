$(document).ready(function () {
  // ЛИЧНЫЙ КАБИНЕТ

  // Burger menu
  $(".lk-burger").on("click", function () {
    $(this).toggleClass("active");
    $("#lkMenu").toggleClass("active");
    $("#personalMenu").removeClass("active");
    $("body").toggleClass("overflow");
  });

  $(".personal-burger").on("click", function () {
    $(this).toggleClass("active");
    $("#personalMenu").toggleClass("active");
    $("#lkMenu").removeClass("active");
    $("body").toggleClass("overflow");
    $("section").toggleClass("overflow");
  });

  /* Smooth scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $(".lk-menu-link").removeClass("active");
    $(".personal-burger").removeClass("active");
    $(".lk-menu-wrapper--personal").removeClass("active");
    $("body").removeClass("overflow");
    $("section").removeClass("overflow");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });
  // ЛИЧНЫЙ КАБИНЕТ END

  // РЕГИСТРАЦИЯ

  // Выпадающий список
  $(".registration-form-dropdown").on("click", function () {
    $(this).toggleClass("show");
  });

  $(".registration-form-dropdown-list-value").on("click", function () {
    $(".registration-form-dropdown-text").text($(this).text());
  });

  // Навигация
  $("[data-content=registrationContent-1]").on("click", function () {
    $(".registration-item").removeClass("active");
    $(".registration-content").removeClass("active");
    $(this).addClass("active");
    $("#registrationContent-1").addClass("active");
  });

  $("[data-content=registrationContent-2]").on("click", function () {
    $(".registration-item").removeClass("active");
    $(".registration-content").removeClass("active");
    $(this).addClass("active");
    $("#registrationContent-2").addClass("active");
  });

  $("[data-content=registrationContent-3]").on("click", function () {
    $(".registration-item").removeClass("active");
    $(".registration-content").removeClass("active");
    $(this).addClass("active");
    $("#registrationContent-3").addClass("active");
  });

  // темные крошки на мобилках
  if ($(window).width() < 992) {
    $("#locationDocument").addClass("location--dark");
  }
  // РЕГИСТАЦИЯ END
});

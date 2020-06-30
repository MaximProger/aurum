$(document).ready(function () {
  // Burger menu
  $(".lk-burger").on("click", function () {
    $(this).toggleClass("active");
    $("#lkMenu").toggleClass("active");
    $("body").toggleClass("overflow");
  });

  $(".personal-burger").on("click", function () {
    $(this).toggleClass("active");
    $("#personalMenu").toggleClass("active");
    $("body").toggleClass("overflow");
    $("section").toggleClass("overflow");
  });

  /* Smooth scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
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

  // Show more -- Agency
  $(".agency__link").on("click", function (event) {
    event.preventDefault();
    $(this).hide();
    $(".agency__text").removeClass("hidden");
  });

  // Intro Map
  $(".intro__map__item").on("click", function () {
    $(".intro__map__item").removeClass("active");
    $(this).addClass("active");

    if ($(this).data("slide") == "1") {
      galleryTop.slideTo(1, 1000);
    } else if ($(this).data("slide") == "2") {
      galleryTop.slideTo(2, 1000);
    } else if ($(this).data("slide") == "3") {
      galleryTop.slideTo(3, 1000);
    } else if ($(this).data("slide") == "4") {
      galleryTop.slideTo(4, 1000);
    }
  });

  // Modal Window
  $(".modal__close").on("click", function () {
    $(".modal__mask").hide(500);
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".modal__mask").hide(500);
    }
  });

  $(document).mouseup(function (e) {
    let modalctr = $(".modal__mask");
    let modal = $(".modal__window");
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
      modalctr.hide();
    }
  });

  $(".projects__link").on("click", function (event) {
    event.preventDefault();
    $(".modal__mask").show(500);
  });

  // Detail New
  var newsdetailhumbs = new Swiper(".newsdetail-thumbs", {
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var newsdetailTop = new Swiper(".newsdetail-top", {
    spaceBetween: 4,
    navigation: {
      nextEl: ".newsdetail__next",
      prevEl: ".newsdetail__prev",
    },
    thumbs: {
      swiper: newsdetailhumbs,
    },
    pagination: {
      el: ".newsdetail__progress",
      type: "progressbar",
    },
    breakpoints: {
      1199: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1.1,
      },
    },
  });

  // News List
  $(".newslist__shormore").on("click", function (event) {
    event.preventDefault();
    $(this).hide();
    $(".newslist__item--special").removeClass("hidden");
    $(".newslist__nav--tablet .intro__nav__item").removeClass("hidden");
  });
});

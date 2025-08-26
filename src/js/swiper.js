import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

const swiperGallery = new Swiper(".swiper", {
  modules: [Navigation, Autoplay],
  speed: 1000,
  loop: true,
  wrapperClass: "list-gallery",
  slideClass: "item-gallery",
  spaceBetween: 20,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
  slidesPerView: 1,
  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
});

const swiperTours = new Swiper(".swiper-tour", {
  modules: [Navigation],
  speed: 1000,
  wrapperClass: "list-upcoming",
  slideClass: "iteam-upcoming",
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const modalToursSwiper = new Swiper(".modalSwiper", {
  wrapperClass: "modalSwiperWraper",
  slideClass: "modalSwiperSlide",
  pagination: {
    el: ".swiper-pagination",
  },
});

<template>
  <div class="content">
    <div class="slader-container">
      <div class="container">
        <p class="name-slader">Галерея</p>
        <div class="slader-container__row">
          <div class="slader-container__colunm">
            <div
              class="img-galary"
              :class="{ sladermarg: slides.length % 2 !== 0 }"
              v-for="slideContent in slides"
              :key="slideContent.id"
            >
              <div class="img-galary__wrap">
                <a
                  href="#popup"
                  class="popup-link"
                  @click="openImg(slideContent)"
                >
                  <span class="img-galary__loop">
                    <img src="../assets/img/search.png" alt />
                  </span>
                </a>

                <img
                  class="img-galary__img"
                  :src="require(`../../public/img/` + slideContent.img)"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="hyt">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        virtual
      >
        <swiper-slide v-for="slideContent in slides" :key="slideContent.id">
          <img :src="require('../assets/img/' + slideContent.img )" alt="img" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/img1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/img1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/img1.jpg" alt />
        </swiper-slide>
        <swiper-slide v-slot="{ isActive }">
          <div>Заборы лучшие {{ isActive ? 'active' : 'not active' }}</div>
        </swiper-slide>
      </swiper>
    </div>-->
    </div>

    <div id="popup" class="popup">
      <div class="popup__body">
        <div class="popup__content">
          <div class="popup__title-phoenix">
            <a href="#" class="popup__close close-popup">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M24.6133 0.00572781L0 24.6121L2.38323 26.996L26.9965 2.38963L24.6133 0.00572781Z"
                    fill="white"
                  />
                  <path
                    d="M2.38713 0.00406837L0.00390625 2.38797L24.6172 26.9943L27.0004 24.6104L2.38713 0.00406837Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="27" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div class="popup__image" v-for="slide in newslider" :key="slide.id">
            <img :src="require('../assets/img/' + slide.img)" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper core and required components
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Virtual,
// } from "swiper";

// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";
// import { compile } from "vue";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// SwiperCore.use([Virtual]);

// Import Swiper styles
export default {
  name: "slider",
  data() {
    return {
      newslider: [],
      title: "Галерея",
      publicPath: process.env.BASE_URL,
      slides: [
        { id: 1, img: "gallery-1.jpg" },
        { id: 2, img: "gallery-2.jpg" },
        { id: 3, img: "gallery-3.jpg" },
        { id: 4, img: "gallery-4.jpg" },
        { id: 5, img: "gallery-5.jpg" },
        { id: 6, img: "gallery-6.jpg" },
        { id: 7, img: "gallery-7.jpg" },
        { id: 8, img: "gallery-11.jpg" },
        { id: 9, img: "gallery-9.jpg" },
        { id: 10, img: "gallery-10.jpg" },
        { id: 11, img: "gallery-8.jpg" },
        { id: 12, img: "gallery-12.jpg" },
        { id: 13, img: "gallery-13.jpg" },
        { id: 14, img: "gallery-14.jpg" },
        { id: 15, img: "gallery-15.jpg" },
        { id: 16, img: "gallery-16.jpg" }
      ]
    };
  },
  components: {
    //  Swiper,
    //  SwiperSlide,
  },
  methods: {
    openImg(slideContent) {
      this.newslider.splice(slideContent, 1);
      this.newslider.push({
        id: slideContent.id,
        img: slideContent.img
      });
      localStorage.setItem("newslider", JSON.stringify(this.newslider));
    }
  },
  computed: {
    evenNumbers: function() {
      return this.slides.filter(function(slides) {
        for (let i = 0; i < slides.length; i++) {
          result += slides[i];
          if (result.length % 2 === 0) {
            console.log(result.length);
            return result;
          } else {
            console.log(result - 1);
            return result;
          }
        }
      });
    }
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
  mounted() {
    const popupLinks = document.querySelectorAll(".popup-link");
    const body = document.querySelector("body");
    const lockPadding = document.querySelectorAll(".lock-padding");
    let unlock = true;

    const timeout = 800;

    if (popupLinks.length > 0) {
      for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
          const popupName = popupLink.getAttribute("href").replace("#", "");
          const curentPopup = document.getElementById(popupName);
          popupOpen(curentPopup);
          e.preventDefault();
        });
      }
    }
    const popupCloseIcon = document.querySelectorAll(".close-popup");
    if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function(e) {
          popupClose(el.closest(".popup"));
          e.preventDefault();
        });
      }
    }

    function popupOpen(curentPopup) {
      if (curentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");
        if (popupActive) {
          popupClose(popupActive, false);
        } else {
          bodyLock();
        }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function(e) {
          if (!e.target.closest(".popup__content")) {
            popupClose(e.target.closest(".popup"));
          }
        });
      }
    }

    function popupClose(popupActive, doUnlock = true) {
      if (unlock) {
        popupActive.classList.remove("open");
        if (doUnlock) {
          bodyUnLock();
        }
      }
    }

    function bodyLock() {
      const lockPaddingValue =
        window.innerWidth -
        document.querySelector(".wrapper").offsetWidth +
        "px";

      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = lockPaddingValue;
        }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add("lock");

      unlock = false;
      setTimeout(function() {
        unlock = true;
      }, timeout);
    }

    function bodyUnLock() {
      setTimeout(function() {
        if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
          }
        }
        body.style.paddingRight = "0px";
        body.classList.remove("lock");
      }, timeout);

      unlock = false;
      setTimeout(function() {
        unlock = true;
      }, timeout);
    }

    document.addEventListener("keydown", function(e) {
      if (e.which === 27) {
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);
      }
    });

    (function() {
      // проверяем поддержку
      if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function(css) {
          var node = this;
          while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
          }
          return null;
        };
      }
    })();
    (function() {
      // проверяем поддержку
      if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches =
          Element.prototype.matchesSelector ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      }
    })();

    // export default popup;
  }
};
</script>

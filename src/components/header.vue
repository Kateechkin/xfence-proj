<template>
  <div class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link to="/" class="header__routerbig">
          <div class="header-img">
            <svg
              width="186"
              height="47"
              viewBox="0 0 186 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.66272 0H1.00529L1.37236 0.545415L16.324 22.7621L0.387049 45.4558L0 46.007H0.673476H14.6466H14.8419L14.9444 45.8408L23.8145 31.4696L32.413 43.8405L32.5174 43.9907H32.7004H46.6735H47.3719L46.9539 43.4312L31.1592 22.2924L45.9641 2.57644L46.3847 2.01628H45.6842H32.5767H32.3973L32.2926 2.16188L24.0652 13.5986L15.6855 0.164763L15.5827 0H15.3885H1.66272ZM17.0391 22.5709L2.32015 0.7H15.1943L23.7475 14.412L24.0237 14.8549L24.3286 14.4311L32.7561 2.71628H44.9837L30.442 22.0817L30.2846 22.2913L30.4415 22.5014L45.9751 43.2907H32.8833L24.0845 30.6316L23.7798 30.1932L23.4993 30.6476L14.4513 45.307H1.34695L17.0352 22.9674L17.1735 22.7705L17.0391 22.5709ZM56.3935 21.63V15.47H70.4335V9.35H48.4735V37.35H56.3935V27.75H68.7535V21.63H56.3935ZM96.6175 37.35V31.23H81.9775V26.11H94.4175V20.19H81.9775V15.47H96.0975V9.35H74.1375V37.35H96.6175ZM127.653 37.35V9.35H119.893V24.27L107.533 9.35H101.013V37.35H108.773V22.43L121.133 37.35H127.653ZM139.279 36.07C141.626 37.2967 144.266 37.91 147.199 37.91C149.759 37.91 152.066 37.4567 154.119 36.55C156.172 35.6433 157.879 34.3367 159.239 32.63L154.199 28.07C152.386 30.2567 150.186 31.35 147.599 31.35C146.079 31.35 144.719 31.0167 143.519 30.35C142.346 29.6833 141.426 28.75 140.759 27.55C140.119 26.3233 139.799 24.9233 139.799 23.35C139.799 21.7767 140.119 20.39 140.759 19.19C141.426 17.9633 142.346 17.0167 143.519 16.35C144.719 15.6833 146.079 15.35 147.599 15.35C150.186 15.35 152.386 16.4433 154.199 18.63L159.239 14.07C157.879 12.3633 156.172 11.0567 154.119 10.15C152.066 9.24333 149.759 8.79 147.199 8.79C144.266 8.79 141.626 9.41666 139.279 10.67C136.959 11.8967 135.132 13.6167 133.799 15.83C132.466 18.0433 131.799 20.55 131.799 23.35C131.799 26.15 132.466 28.6567 133.799 30.87C135.132 33.0833 136.959 34.8167 139.279 36.07ZM185.25 37.35V31.23H170.61V26.11H183.05V20.19H170.61V15.47H184.73V9.35H162.77V37.35H185.25Z"
                fill="#F7F7F7"
              />
            </svg>
          </div>
        </router-link>
        <router-link to="/" class="header__routermini">
          <div class="header-img__mini">
            <svg
              width="186"
              height="47"
              viewBox="0 0 186 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.66272 0H1.00529L1.37236 0.545415L16.324 22.7621L0.387049 45.4558L0 46.007H0.673476H14.6466H14.8419L14.9444 45.8408L23.8145 31.4696L32.413 43.8405L32.5174 43.9907H32.7004H46.6735H47.3719L46.9539 43.4312L31.1592 22.2924L45.9641 2.57644L46.3847 2.01628H45.6842H32.5767H32.3973L32.2926 2.16188L24.0652 13.5986L15.6855 0.164763L15.5827 0H15.3885H1.66272ZM17.0391 22.5709L2.32015 0.7H15.1943L23.7475 14.412L24.0237 14.8549L24.3286 14.4311L32.7561 2.71628H44.9837L30.442 22.0817L30.2846 22.2913L30.4415 22.5014L45.9751 43.2907H32.8833L24.0845 30.6316L23.7798 30.1932L23.4993 30.6476L14.4513 45.307H1.34695L17.0352 22.9674L17.1735 22.7705L17.0391 22.5709ZM56.3935 21.63V15.47H70.4335V9.35H48.4735V37.35H56.3935V27.75H68.7535V21.63H56.3935ZM96.6175 37.35V31.23H81.9775V26.11H94.4175V20.19H81.9775V15.47H96.0975V9.35H74.1375V37.35H96.6175ZM127.653 37.35V9.35H119.893V24.27L107.533 9.35H101.013V37.35H108.773V22.43L121.133 37.35H127.653ZM139.279 36.07C141.626 37.2967 144.266 37.91 147.199 37.91C149.759 37.91 152.066 37.4567 154.119 36.55C156.172 35.6433 157.879 34.3367 159.239 32.63L154.199 28.07C152.386 30.2567 150.186 31.35 147.599 31.35C146.079 31.35 144.719 31.0167 143.519 30.35C142.346 29.6833 141.426 28.75 140.759 27.55C140.119 26.3233 139.799 24.9233 139.799 23.35C139.799 21.7767 140.119 20.39 140.759 19.19C141.426 17.9633 142.346 17.0167 143.519 16.35C144.719 15.6833 146.079 15.35 147.599 15.35C150.186 15.35 152.386 16.4433 154.199 18.63L159.239 14.07C157.879 12.3633 156.172 11.0567 154.119 10.15C152.066 9.24333 149.759 8.79 147.199 8.79C144.266 8.79 141.626 9.41666 139.279 10.67C136.959 11.8967 135.132 13.6167 133.799 15.83C132.466 18.0433 131.799 20.55 131.799 23.35C131.799 26.15 132.466 28.6567 133.799 30.87C135.132 33.0833 136.959 34.8167 139.279 36.07ZM185.25 37.35V31.23H170.61V26.11H183.05V20.19H170.61V15.47H184.73V9.35H162.77V37.35H185.25Z"
                fill="#F7F7F7"
              />
            </svg>
          </div>
        </router-link>

        <HeaderItem />
        <div class="header-contact">
          <a href="tel:+7(383)375-00-28">
            <p class="header-contact__p">8 (383) 375-00-28</p></a
          >
          <div class="header-cart" @click="ShowCart(), (scrolled = !scrolled)">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5654 25.2132H12.5672C12.5687 25.2132 12.5701 25.2129 12.5716 25.2129H33.2871C33.7971 25.2129 34.2455 24.8746 34.3857 24.3842L38.956 8.38813C39.0545 8.04327 38.9854 7.67253 38.7697 7.38629C38.5537 7.10005 38.216 6.93164 37.8574 6.93164H9.93031L9.11355 3.25605C8.99721 2.73326 8.53363 2.36133 7.99805 2.36133H1.14258C0.511482 2.36133 0 2.87281 0 3.50391C0 4.135 0.511482 4.64648 1.14258 4.64648H7.0816C7.22621 5.29781 10.9902 22.2359 11.2068 23.2104C9.9925 23.7383 9.14062 24.949 9.14062 26.3555C9.14062 28.2455 10.6783 29.7832 12.5684 29.7832H33.2871C33.9182 29.7832 34.4297 29.2717 34.4297 28.6406C34.4297 28.0095 33.9182 27.498 33.2871 27.498H12.5684C11.9385 27.498 11.4258 26.9854 11.4258 26.3555C11.4258 25.7265 11.9367 25.2147 12.5654 25.2132ZM36.3426 9.2168L32.4251 22.9277H13.4848L10.4379 9.2168H36.3426Z"
                fill="#E4E4E4"
              />
              <path
                d="M11.4258 33.2109C11.4258 35.101 12.9635 36.6387 14.8535 36.6387C16.7435 36.6387 18.2812 35.101 18.2812 33.2109C18.2812 31.3209 16.7435 29.7832 14.8535 29.7832C12.9635 29.7832 11.4258 31.3209 11.4258 33.2109ZM14.8535 32.0684C15.4834 32.0684 15.9961 32.581 15.9961 33.2109C15.9961 33.8408 15.4834 34.3535 14.8535 34.3535C14.2236 34.3535 13.7109 33.8408 13.7109 33.2109C13.7109 32.581 14.2236 32.0684 14.8535 32.0684Z"
                fill="#E4E4E4"
              />
              <path
                d="M27.5742 33.2109C27.5742 35.101 29.1119 36.6387 31.002 36.6387C32.892 36.6387 34.4297 35.101 34.4297 33.2109C34.4297 31.3209 32.892 29.7832 31.002 29.7832C29.1119 29.7832 27.5742 31.3209 27.5742 33.2109ZM31.002 32.0684C31.6319 32.0684 32.1445 32.581 32.1445 33.2109C32.1445 33.8408 31.6319 34.3535 31.002 34.3535C30.372 34.3535 29.8594 33.8408 29.8594 33.2109C29.8594 32.581 30.372 32.0684 31.002 32.0684Z"
                fill="#E4E4E4"
              />
            </svg>

            <div class="header-cart__index" v-if="total > 0">
              <p>{{ total }}</p>
            </div>
          </div>
          <div class="burger">
            <transition name="fade" mode="out-in" class="burger__block">
              <template>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  v-if="!show"
                  @click="show = !show"
                  key="menu"
                  class="burger__img"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3359 7.83594H0.664062C0.297301 7.83594 0 8.13324 0 8.5C0 8.86676 0.297301 9.16406 0.664062 9.16406H16.3359C16.7027 9.16406 17 8.86676 17 8.5C17 8.13324 16.7027 7.83594 16.3359 7.83594Z"
                    fill="white"
                  />
                  <path
                    d="M16.3359 2.52344H0.664062C0.297301 2.52344 0 2.82074 0 3.1875C0 3.55426 0.297301 3.85156 0.664062 3.85156H16.3359C16.7027 3.85156 17 3.55426 17 3.1875C17 2.82074 16.7027 2.52344 16.3359 2.52344Z"
                    fill="white"
                  />
                  <path
                    d="M16.3359 13.1484H0.664062C0.297301 13.1484 0 13.4457 0 13.8125C0 14.1793 0.297301 14.4766 0.664062 14.4766H16.3359C16.7027 14.4766 17 14.1793 17 13.8125C17 13.4457 16.7027 13.1484 16.3359 13.1484Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  @click="show = !show"
                  v-else
                  key="clear"
                  class="burger__img2"
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
              </template>
            </transition>
            <transition name="fade" mode="out-in" class="fade">
              <div class="menu" v-if="show">
                <router-link to="/" class="menu__routermini">
                  <div class="menu__mini">
                    <svg
                      width="186"
                      height="47"
                      viewBox="0 0 186 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.66272 0H1.00529L1.37236 0.545415L16.324 22.7621L0.387049 45.4558L0 46.007H0.673476H14.6466H14.8419L14.9444 45.8408L23.8145 31.4696L32.413 43.8405L32.5174 43.9907H32.7004H46.6735H47.3719L46.9539 43.4312L31.1592 22.2924L45.9641 2.57644L46.3847 2.01628H45.6842H32.5767H32.3973L32.2926 2.16188L24.0652 13.5986L15.6855 0.164763L15.5827 0H15.3885H1.66272ZM17.0391 22.5709L2.32015 0.7H15.1943L23.7475 14.412L24.0237 14.8549L24.3286 14.4311L32.7561 2.71628H44.9837L30.442 22.0817L30.2846 22.2913L30.4415 22.5014L45.9751 43.2907H32.8833L24.0845 30.6316L23.7798 30.1932L23.4993 30.6476L14.4513 45.307H1.34695L17.0352 22.9674L17.1735 22.7705L17.0391 22.5709ZM56.3935 21.63V15.47H70.4335V9.35H48.4735V37.35H56.3935V27.75H68.7535V21.63H56.3935ZM96.6175 37.35V31.23H81.9775V26.11H94.4175V20.19H81.9775V15.47H96.0975V9.35H74.1375V37.35H96.6175ZM127.653 37.35V9.35H119.893V24.27L107.533 9.35H101.013V37.35H108.773V22.43L121.133 37.35H127.653ZM139.279 36.07C141.626 37.2967 144.266 37.91 147.199 37.91C149.759 37.91 152.066 37.4567 154.119 36.55C156.172 35.6433 157.879 34.3367 159.239 32.63L154.199 28.07C152.386 30.2567 150.186 31.35 147.599 31.35C146.079 31.35 144.719 31.0167 143.519 30.35C142.346 29.6833 141.426 28.75 140.759 27.55C140.119 26.3233 139.799 24.9233 139.799 23.35C139.799 21.7767 140.119 20.39 140.759 19.19C141.426 17.9633 142.346 17.0167 143.519 16.35C144.719 15.6833 146.079 15.35 147.599 15.35C150.186 15.35 152.386 16.4433 154.199 18.63L159.239 14.07C157.879 12.3633 156.172 11.0567 154.119 10.15C152.066 9.24333 149.759 8.79 147.199 8.79C144.266 8.79 141.626 9.41666 139.279 10.67C136.959 11.8967 135.132 13.6167 133.799 15.83C132.466 18.0433 131.799 20.55 131.799 23.35C131.799 26.15 132.466 28.6567 133.799 30.87C135.132 33.0833 136.959 34.8167 139.279 36.07ZM185.25 37.35V31.23H170.61V26.11H183.05V20.19H170.61V15.47H184.73V9.35H162.77V37.35H185.25Z"
                        fill="#F7F7F7"
                      />
                    </svg>
                  </div>
                </router-link>
                <ul>
                  <li
                    v-for="(link, el) in menu"
                    :key="el.id"
                    class="header-item__li"
                    @click="show = !show"
                  >
                    <router-link
                      :to="{ name: link.routerName }"
                      class="header-item__a"
                      >{{ link.title }}</router-link
                    >
                  </li>
                  <li
                    class="header-item__a"
                    @click="ShowCart(), (scrolled = !scrolled)"
                  >
                    Корзина
                  </li>
                </ul>
                <div class="menu-footer">
                  <div class="menu-footer__p">
                    <p>г. Новосибирск, ул. Бетонная 6</p>
                  </div>
                  <div class="menu-footer__p">
                    <p>8 (383) 375-00-28</p>
                  </div>
                  <div class="menu-footer__mail">
                    <p>xfeneru@gmail.com</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <!-- <CartEmpty
        v-if="!CART.lenght"
        v-show="show2"
        @closecart="closecart()"
        @activeScrolling="activeScrolling()"
      /> -->
      <!-- v-if="showModal" -->
      <modal-cart
        v-show="showModal"
        v-for="(items, index) in CART"
        :key="items.id"
        :cart_data="items"
        @deleteCart="deleteCart(index)"
        @close="showModal = false"
        @activeScrolling="activeScrolling()"
        v-bind:modal_cart="CART"
      >
      </modal-cart>
      <modal-cart-empty
        v-if="!total"
        v-show="showModal"
        @close="showModal = false"
        @activeScrolling="activeScrolling()"
        v-bind:modal_cart_empty="CART"
      >
      </modal-cart-empty>

      <!-- <Cart
        v-for="(items, index) in CART"
        :key="items.id"
        :cart_data="items"
        :scrolled="scrolled"
        @deleteCart="deleteCart(index)"
        @activeScrolling="activeScrolling()"
        @closecart="closecart()"
        v-show="show2"
      /> -->
    </div>
  </div>
</template>

<script>
import ModalCart from "@/components/modal-cart.vue";
import ModalCartEmpty from "@/components/modal-cart-empty.vue";
// import CartEmpty from "@/components/cart/cart-empty.vue";
import HeaderItem from "@/components/header-item";
// import Cart from "@/components/cart/cart.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "header",
  data() {
    return {
      show: false,
      show2: false,
      scrolled: false,
      last_known_scroll_position: 0,
      showModal: false,

      menu: [
        {
          id: 1,
          routerName: "Index",
          title: "Главная",
          completed: false,
        },
        {
          id: 2,
          routerName: "catalog",
          title: "Каталог",
          completed: false,
        },
        {
          id: 3,
          routerName: "slader",
          title: "Галерея",
          completed: false,
        },
        {
          id: 4,
          routerName: "contact",
          title: "Контакты",
          completed: false,
        },
      ],
    };
  },
  components: {
    HeaderItem,
    ModalCart,
    ModalCartEmpty,
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    ...mapActions(["DELETE_FROM_BEFORE"]),
    ...mapActions(["ADD_TO_CART"]),

    deleteCart(index) {
      this.DELETE_FROM_CART(index);
    },

    ShowCart() {
      if (this.showModal) {
        this.showModal = false;
      } else this.showModal = true;
    },

    closecart() {
      if (this.show2) {
        this.show2 = false;
      } else this.show2 = true;
    },
    disableScrolling() {
      document.body.classList.add("hidden");
    },

    activeScrolling() {
      if (this.scrolled) {
        this.scrolled = false;
      } else {
        this.scrolled = true;
      }
    },
  },

  computed: {
    ...mapGetters(["CART"]),

    total() {
      return this.CART.length;
    },
    doSomething() {
      if (window.innerWidth <= 1024 && this.scrolled === true) {
        document.body.classList.add("hidden");
        return this.scrolled;
      } else {
        document.body.classList.remove("hidden");
        return this.scrolled;
      }
    },
  },
  watch: {
    doSomething() {
      if (window.innerWidth <= 1024 && this.scrolled === true) {
        document.body.classList.add("hidden");
        return this.scrolled;
      } else {
        document.body.classList.remove("hidden");
        return this.scrolled;
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <transition name="modal" @click="$emit('close'), activeScrolling()">
    <div class="cart">
      <!-- v-if="$route.meta.showCart2" -->
      <div class="cart__block">
        <div class="cart__title">
          <h1>Корзина</h1>
        </div>
        <div class="cart__close" @click="$emit('close'), activeScrolling()">
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
                fill="#A9A9A9"
              />
              <path
                d="M2.38713 0.00403785L0.00390625 2.38794L24.6172 26.9943L27.0004 24.6104L2.38713 0.00403785Z"
                fill="#A9A9A9"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="27" height="27" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="cart__empty">
          <h1>Кажется, Ваша корзина пуста.</h1>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal-cart-empty",
  props: {
    modal_cart_empty: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    activeScrolling() {
      this.$emit("activeScrolling");
    },
  },
};
</script>

<style>
</style>
<template>
  <transition name="modal">
    <div class="cart" id="cart">
      <div class="cart-wrap">
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
        </div>
        <CartItem
          v-for="(item, index) in BEFORECART"
          :key="item.article"
          :id="index"
          v-bind:cart_item_data="item"
          @deleteCart="deleteCart(index)"
          :class="{ 'last-item': index === BEFORECART.length - 1 }"
        />
        <div class="cart__fix">
          <div class="cart__price">
            <p>
              Общая стоимость: <span> {{ cartTotalCost }}</span> ₽
            </p>
          </div>

          <router-link :to="{ name: 'order' }">
            <button
              type="submit"
              class="cart__btn"
              @click="$emit('close'), activeScrolling()"
            >
              Оформить заказ
            </button>
          </router-link>
        </div>
      </div>
      <div class="mini-block-footer">
        <Footer />
      </div>
    </div>
  </transition>
</template>

<script>
import CartItem from "@/components/cart/cart-item.vue";
import Footer from "@/components/footer";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "modal-cart",
  props: {
    modal_cart: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    ...mapActions(["DELETE_FROM_BEFORE"]),
    deleteCart(index) {
      this.DELETE_FROM_BEFORE(index);
      this.$emit("deleteCart");
    },
    closecart() {
      this.$emit("closecart");
    },
    activeScrolling() {
      this.$emit("activeScrolling");
    },
  },
  computed: {
    ...mapGetters(["BEFORECART"]),
    cartTotalCost() {
      let result = [];
      const pricerow = 2250;
      for (const item of this.BEFORECART) {
        if (item.selectedRow === true) {
          result.push(item.price * item.section + pricerow * item.row);
        } else {
          result.push(item.price * item.section);
        }
      }
      result = result.reduce(function (sum, el) {
        return sum + el;
      });
      return result;
    },
  },

  components: {
    CartItem,
    Footer,
  },
};
</script>

<style>
</style>
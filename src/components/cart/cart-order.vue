<template>
  <div class="cart-item">
    <!-- <CartOrderItem
      v-for="product in item"
      :key="product.id"
      :product="product"
    /> -->
    <div class="cart-item__block">
      <div class="cart-item__img">
        <img :src="require(`../../../public/img/` + item.image)" alt="img" />
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">
          <h2>{{ item.name }}</h2>
        </div>
        <div class="cart-item__cross">
          <p>Цвет перекладин:</p>
          <div
            class="cart-item__color"
            :style="{ backgroundColor: item.ColorCross }"
          ></div>
        </div>
        <div class="cart-item__barrels" v-if="item.ColorBarrels">
          <p>Цвет штакетник:</p>
          <div
            class="cart-item__color"
            :style="{ backgroundColor: item.ColorBarrels }"
          ></div>
        </div>
        <div class="cart-item__section">
          <p>Количество секций:</p>
          <span>{{ item.section }}</span>
        </div>
        <div class="cart-item__section" v-if="item.selectedRow == true">
          <p>Количество столбов:</p>
          <span>{{ item.row }}</span>
        </div>

        <div class="cart-item__row" v-if="item.selectedRow == true">
          <p>
            Цвет столбов:
            <!-- <span>{{ row }}</span> -->
          </p>
          <div
            class="cart-item__color"
            :style="{ backgroundColor: item.ColorRow }"
          ></div>
        </div>
        <div class="cart-item__price">
          <h2>
            Цена:
            <span>{{ item.price }}</span>
          </h2>
          <div class="cart-item__trash" @click="deleteCart(item)">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.714 2.57144H12.214V1.92857C12.214 0.863449 11.3506 0 10.2855 0H7.71403C6.64891 0 5.78546 0.863449 5.78546 1.92857V2.57144H1.28545C0.930395 2.57144 0.642578 2.85925 0.642578 3.21431C0.642578 3.56936 0.930432 3.85714 1.28545 3.85714H1.98422L3.21402 17.4156C3.24434 17.7476 3.52349 18.0013 3.85689 18H14.1426C14.476 18.0014 14.7551 17.7477 14.7855 17.4156L16.0152 3.85714H16.714C17.0691 3.85714 17.3569 3.56932 17.3569 3.21427C17.3569 2.85922 17.0691 2.57144 16.714 2.57144ZM7.07116 1.92857C7.07116 1.57352 7.35898 1.2857 7.71403 1.2857H10.2855C10.6405 1.2857 10.9283 1.57352 10.9283 1.92857V2.57144H7.0712V1.92857H7.07116ZM13.5557 16.7143H4.44382L3.27832 3.85714H6.42833H14.7244L13.5557 16.7143Z"
                fill="#A9A9A9"
              />
              <path
                d="M7.07103 14.7427C7.07095 14.7418 7.07091 14.7409 7.07084 14.7401L6.42797 5.7401C6.40277 5.38504 6.0945 5.11768 5.73949 5.14288C5.38443 5.16808 5.11707 5.47635 5.14227 5.83136L5.78514 14.8313C5.80913 15.1684 6.09006 15.4294 6.42801 15.4286H6.4743C6.82849 15.404 7.09566 15.0969 7.07103 14.7427Z"
                fill="#A9A9A9"
              />
              <path
                d="M9.00029 5.14282C8.64524 5.14282 8.35742 5.43064 8.35742 5.78569V14.7857C8.35742 15.1407 8.64524 15.4285 9.00029 15.4285C9.35534 15.4285 9.64316 15.1407 9.64316 14.7857V5.78569C9.64316 5.43064 9.35534 5.14282 9.00029 5.14282Z"
                fill="#A9A9A9"
              />
              <path
                d="M12.2608 5.14288C11.9058 5.11768 11.5976 5.38504 11.5724 5.7401L10.9295 14.7401C10.9035 15.0942 11.1694 15.4023 11.5235 15.4283C11.5246 15.4284 11.5256 15.4285 11.5267 15.4286H11.5724C11.9103 15.4294 12.1912 15.1684 12.2152 14.8313L12.8581 5.83136C12.8833 5.47635 12.6159 5.16812 12.2608 5.14288Z"
                fill="#A9A9A9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'cart-order',
  data () {
    return {
      // styleObject: {
      //   background: this.cart_item_data.cross,
      //   fontSize: "13px",
      // },
    }
  },
  props: {
    item: {
      type: Array,
      default () {
        return {}
      }
    }
  },

  methods: {
    deleteCart (item) {
      this.$emit('deleteCart')
    }
  }
}
</script>
<style lang="sass" scoped>
.cart-item
  width: 93%

.cart-item__img
  margin: 0px 20px 0px 53px
  img
    width: 199px
    height: 152px
.cart-item__color
  position: initial
  width: 20px
  height: 20px
.cart-item__name
  h2
    font-size: 22px

    margin: 0px 0px 0px 0px
.cart-item__cross
  justify-content: space-between
  p
    font-size: 15px

.cart-item__barrels
  display: flex
  justify-content: space-between
  p
    font-size: 15px
.cart-item__row
  display: flex
  justify-content: space-between
  p
    font-size: 15px
.cart-item__info
  width: 100%
  p
    font-size: 15px
.cart-item__trash
  position: initial
  margin: 0px 0px 0px 0px
  svg
    width: 18px
    height: 18px

.cart-item__price
  justify-content: space-between
  p
    font-size: 22px
  span
    font-size: 22px
.cart-item__block::after
  width: 69%
  left: 29%
</style>

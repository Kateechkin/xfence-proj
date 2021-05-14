<template>
  <div class="cart-item" id="cart-item">
    <div class="cart-item__block">
      <div class="cart-item__img">
        <img
          :src="require(`../../../public/img/` + cart_item_data.image)"
          alt="img"
        />
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">
          <h2>{{ cart_item_data.name }}</h2>
        </div>

        <div class="cart-item__cross">
          <p>
            Цвет перекладин:

            <!-- <span>{{ cross }}</span> -->
          </p>
          <div class="cart-item__color" :style="styleObjectCross"></div>
        </div>
        <div class="cart-item__barrels" v-if="cart_item_data.ColorBarrels">
          <p>
            Цвет штакетник:
            <!-- <span>{{ barrels }}</span> -->
          </p>
          <div class="cart-item__color" :style="styleObjectBarrels"></div>
        </div>
        <div class="cart-item__section">
          <p>
            Количество секций:
            <!-- <span>{{ cart_item_data.section }}</span> -->
          </p>
          <div class="input-number">
            <div class="input-number__minus" id="inputm" @click="minus">-</div>
            <input
              class="input-number__input"
              type="text"
              pattern="^[0-9]+$"
              id="input"
              v-bind:value="cart_item_data.section"
              :v-model="cart_item_data.section"
              disabled
            />
            <div class="input-number__plus" id="inputp" @click="plus">+</div>
          </div>
        </div>
        <div
          class="cart-item__section"
          v-if="cart_item_data.row && cart_item_data.selectedRow"
        >
          <p>Количество столбов:</p>
          <div class="input-number2">
            <div class="input-number__minus" id="inputmin" @click="minusrow">
              -
            </div>
            <input
              class="input-number__input"
              type="text"
              pattern="^[0-9]+$"
              id="inputrow"
              v-bind:value="cart_item_data.row"
              disabled
            />
            <div class="input-number__plus" id="inputolus" @click="plusrow">
              +
            </div>
          </div>
        </div>
        <div class="cart-item__row" v-if="cart_item_data.selectedRow">
          <p>
            Цвет столбов:
            <!-- <span>{{ row }}</span> -->
          </p>
          <div class="cart-item__color" :style="styleObjectRow"></div>
        </div>

        <div class="cart-item__price">
          <h2>
            Цена:
            <span>{{ cart_item_data.price }}</span>
          </h2>
          <div class="cart-item__trash" @click="deleteCart(cart_item_data)">
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
export default {
  name: 'cart-item',
  data () {
    return {
      // styleObject: {
      //   background: this.cart_item_data.cross,
      //   fontSize: "13px",
      // },
    }
  },
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    deleteCart (cart_item_data) {
      this.$emit('deleteCart')
    },
    minus () {
      let val = this.cart_item_data.section
      val = Number.parseInt(val)
      if (val > 1) {
        val--

        this.cart_item_data.section = val
        return this.cart_item_data.section
      }
    },
    plus () {
      let val = this.cart_item_data.section
      val = Number.parseInt(val)
      val++
      this.cart_item_data.section = val

      return this.cart_item_data.section
    },
    minusrow () {
      let val = this.cart_item_data.row
      val = Number.parseInt(val)
      if (val > 1) {
        val--
        this.cart_item_data.row = val
        return this.cart_item_data.row
      }
    },
    plusrow () {
      let val = this.cart_item_data.row
      val = Number.parseInt(val)
      val++
      this.cart_item_data.row = val

      return this.cart_item_data.row
    }
  },
  computed: {
    ...mapGetters(['BEFORECART']),
    styleObjectCross () {
      return {
        backgroundColor: this.cart_item_data.ColorCross
      }
    },
    styleObjectBarrels () {
      return {
        backgroundColor: this.cart_item_data.ColorBarrels
      }
    },
    styleObjectRow () {
      return {
        backgroundColor: this.cart_item_data.ColorRow
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.cart_item p
  font-size: 20px
  background: white
  color: #fff
.input-number
  margin: 0px 58px 0px 0px
</style>

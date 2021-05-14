<template>
  <div class="product__columns">
    <div class="product__wrap">
      <div class="product__img">
        <img
          class="js-slide__img"
          :src="require(`../../../public/img/` + product_data.image)"
          alt="img"
          v-bind:class="{ objectfit: category.categpath == `fence` }"
        />
      </div>
      <div class="product__info">
        <div class="product__name">
          <p>{{ product_data.name }}</p>
        </div>
        <div class="product__article">
          <p>
            Арт.<span>{{ product_data.article }}</span>
          </p>
        </div>
        <div class="product__price">
          <p>
            Цена: <span>{{ product_data.price }} рублей</span>
          </p>
        </div>
        <div class="product__description">
          <p>Описание:</p>
          <span>
            {{ product_data.description }}
          </span>
        </div>
      </div>
    </div>
    <div class="product__choice">
      <div class="form">
        <div class="form__cross">
          <p>Цвет перекладин:</p>
          <div class="form__input">
            <template v-for="colors in product_data.colors" :key="colors.id">
              <label class="checkbox-other">
                <input
                  type="radio"
                  id="checkbox-id"
                  v-bind:value="colors.color"
                  v-model="selectedColorCross"
                />
                <span
                  for="checkbox-id"
                  class="span"
                  :style="{ backgroundColor: colors.color }"
                ></span>
              </label>
            </template>
          </div>
        </div>

        <div class="form__barr">
          <div class="form__cross" v-if="category.categpath === 'fence'">
            <p>Цвет штакетника:</p>
            <div class="form__input">
              <template v-for="colors in product_data.colors" :key="colors.id">
                <label class="checkbox-other">
                  <input
                    type="radio"
                    id="checkbox-id"
                    v-bind:value="colors.color"
                    v-model="selectedColorBarrels"
                  />
                  <span
                    for="checkbox-id"
                    class="span"
                    :style="{ backgroundColor: colors.color }"
                  ></span>
                </label>
              </template>
            </div>
          </div>
        </div>
        <div class="form__section">
          <p>Кол-во секций:</p>
          <div class="input-number-pr">
            <div class="input-number-pr__minus" id="inputm" @click="minus">
              -
            </div>
            <input
              class="input-number-pr__input"
              type="text"
              pattern="^[0-9]+$"
              id="input"
              placeholder="1"
              v-model="section"
            />
            <div class="input-number-pr__plus" id="inputp" @click="plus">+</div>
          </div>
          <!-- <div class="input-number-decs">
          <input
            id="number"
            type="number"
            min="1"
            v-model="section"
            placeholder="1"
          />
        </div> -->
        </div>
        <div class="form-wrap">
          <div class="form__row">
            <p>Столбы:</p>
            <label class="checkbox-other">
              <input
                type="checkbox"
                id="checkbox-id"
                value="false"
                v-model="selectedRow"
              />
              <span for="checkbox-id" class="row-span"></span>
            </label>
          </div>
          <div class="form__wrap-row" v-if="selectedRow === true">
            <div class="form__section2">
              <p>Кол-во столбов:</p>
              <div class="input-number-pr">
                <div
                  class="input-number-pr__minus"
                  id="inputminus"
                  @click="minusrow"
                >
                  -
                </div>
                <input
                  class="input-number-pr__input"
                  type="text"
                  pattern="^[0-9]+$"
                  id="inputrow"
                  min="1"
                  v-model="row"
                  placeholder="1"
                />
                <div
                  class="input-number-pr__plus"
                  id="inputplus"
                  @click="plusrow"
                >
                  +
                </div>
              </div>
              <!-- <div class="input-number-decs">
              <input
                id="number"
                type="number"
                min="1"
                v-model="row"
                placeholder="1"
                class="input-number__input"
              />
            </div> -->
            </div>
            <div class="form__colorrow">
              <span
                v-if="errColor === true && this.selectedColorRow.length === 0"
                class="span-error"
              >
                Пожалуйста, выберите цвет
              </span>
              <!-- v-if="selectedRow === true && selectedColorRow.length === 0 " -->
              <div class="form__cross">
                <p>Цвет столбов:</p>
                <div class="form__input">
                  <template
                    v-for="colors in product_data.colors"
                    :key="colors.id"
                  >
                    <label class="checkbox-other">
                      <input
                        type="radio"
                        id="checkbox-id"
                        v-bind:value="colors.color"
                        v-model="selectedColorRow"
                      />
                      <span
                        for="checkbox-id"
                        class="span"
                        :style="{ backgroundColor: colors.color }"
                      ></span>
                    </label>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form__btn">
          <input
            type="button"
            value="Добавить в корзину"
            class="add-btn"
            :class="{
              btnotactive:
                (selectedColorCross.length ||
                  (selectedColorBarrels.length && section.length)) === 0
            }"
            :disabled="
              (selectedColorCross.length ||
                (selectedColorBarrels.length && section.length)) === 0
            "
            @click="addtoCart(product_data), scrollToEnd(), show()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "products",
  data() {
    return {
      cart: {},
      errColor: false,
      section: "1",
      row: "1",
      selectedColorCross: [],
      selectedColorBarrels: [],
      selectedColorRow: [],
      selectedRow: ""
    };
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  // computed: {
  //   errColor() {
  //     if (this.selectedColorRow.length === 0) {
  //       return this.errColors === true;
  //     } else {
  //       return this.errColors === false;
  //     }
  //   },
  // },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    minus() {
      let val = this.section;
      val = Number.parseInt(val);
      if (val > 1) {
        val--;
        this.section = val;
        return this.section;
      }
    },
    plus() {
      let val = this.section;
      val = Number.parseInt(val);
      val++;
      this.section = val;

      return this.section;
    },
    minusrow() {
      let val = this.row;
      val = Number.parseInt(val);
      if (val > 1) {
        val--;
        this.row = val;
        return this.row;
      }
    },
    plusrow() {
      let val = this.row;
      val = Number.parseInt(val);
      val++;
      this.row = val;

      return this.row;
    },
    addtoCart(product_data) {
      if (this.category.categpath === "fence") {
        this.BEFORECART.push({
          name: product_data.name,
          price: product_data.price,
          image: product_data.image,
          ColorCross: this.selectedColorCross,
          ColorBarrels: this.selectedColorBarrels,
          ColorRow: this.selectedColorRow,
          selectedRow: this.selectedRow,
          section: this.section,
          row: this.row
        }),
          localStorage.setItem("beforecart", JSON.stringify(this.BEFORECART));
        this.ADD_TO_CART(this.BEFORECART);
      } else if (this.selectedRow === true && this.selectedColorRow.length) {
        this.BEFORECART.push({
          name: product_data.name,
          price: product_data.price,
          image: product_data.image,
          ColorCross: this.selectedColorCross,
          ColorRow: this.selectedColorRow,
          selectedRow: this.selectedRow,
          section: this.section,
          row: this.row
        }),
          localStorage.setItem("beforecart", JSON.stringify(this.BEFORECART));
        this.ADD_TO_CART(this.BEFORECART);
      } else if (
        this.selectedRow === true &&
        this.selectedColorRow.length === 0
      ) {
        this.errColor = true;
      } else {
        this.BEFORECART.push({
          name: product_data.name,
          price: product_data.price,
          image: product_data.image,
          ColorCross: this.selectedColorCross,
          section: this.section
        }),
          localStorage.setItem("beforecart", JSON.stringify(this.BEFORECART));
        this.ADD_TO_CART(this.BEFORECART);
      }
    },
    scrollToEnd: function() {
      var container = this.$el.querySelector("#header");
      if (window.innerWidth < 800) {
        const slide = document.getElementById("app");

        const top = window.scrollY + slide.getBoundingClientRect().y;

        window.scrollTo({
          top,
          behavior: "smooth"
        });
      }
    },
    show() {
      this.$root.$emit("show");
    }
    // addtoCart(product_data) {
    //   // this.cart.splice(product, 1);
    //   this.CART.push({
    //     name: product_data.name,
    //     price: product_data.price,
    //     ColorCross: this.selectedColorCross,
    //     ColorBarrels: this.selectedColorBarrels,
    //     ColorRow: this.selectedColorRow,
    //     selectedRow: this.selectedRow,
    //     section: this.section,
    //     row: this.row,
    //   }),
    //     this.ADD_TO_CART(this.CART);
    // },
  },
  computed: {
    ...mapGetters(["BEFORECART"]),
    ...mapGetters(["CART"]),

    styleObjectCross() {
      return {
        backgroundColor: this.product_data.color
      };
    },
    styleObjectBarrels() {
      return {
        backgroundColor: this.product_data.formBarrels
      };
    },
    styleObjectRow() {
      return {
        backgroundColor: this.product_data.formRow
      };
    },
    cartsection() {
      return this.$store.getters.CartSect();
    },

    category() {
      return this.$store.getters.CategoriesPath(this.$route.params.categpath);
    }
  }
};
</script>

<style></style>

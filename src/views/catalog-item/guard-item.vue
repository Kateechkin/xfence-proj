<template>
  <div class="content">
    <div class="product">
      <div class="container">
        <div class="breadcrumbs">
          <router-link
            :to="'/catalog/' + catalogs.path + '/' + category.categpath"
            >Вернуться к каталогу</router-link
          >
        </div>

        <div class="product__row">
          <Products
            v-for="product in PRODUCTID"
            :key="product.id"
            v-bind:product_data="product"
          />
          <!-- v-for="product in PRODUCTID"
            :key="product.id" -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/components/products/products.vue";

import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "product-list",
  data() {
    return {};
  },
  components: {
    Products,
  },
  created() {
    axios
      .get(
        `https://xfence.ru/api/catalog/${this.$route.params.path}/${this.$route.params.categpath}/${this.$route.params.id}`,
        //   "https://6578b14bf930.ngrok.io/api/catalog/" +
        //     this.catalogs.path +
        //     "/" +
        //     this.categories.categpath,
        {}
      )
      .then((response) => {
        (this.product = response.data),
          this.$store.dispatch("GET_PRODUCTITEM", this.product);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  methods: {
    ...mapActions(["GET_PRODUCTITEM"]),

    ...mapActions(["DELETE_FROM_CART"]),
    deleteCart(index) {
      this.cart.splice(index, 1);
    },

    closecart() {
      if (this.show) {
        this.show = false;
      } else this.show = true;
    },
    ShowCart() {
      if (this.show2) {
        this.show2 = false;
      } else this.show2 = true;
    },
  },
  computed: {
    ...mapGetters(["PRODUCTID"]),
    ...mapGetters(["CART"]),

    catalogs() {
      return this.$store.getters.CatalogPath(this.$route.params.path);
    },
    category() {
      return this.$store.getters.CategoriesPath(this.$route.params.categpath);
    },
    products() {
      return this.$store.getters.ProductId(this.$route.params.id);
    },
  },
};
</script>

<style lang="sass" scoped>
.breadcrumbs
  margin: 0px 0px 15px 0px
</style>

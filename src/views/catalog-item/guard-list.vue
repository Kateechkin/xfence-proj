<template>
  <div class="content">
    <div class="guard-list">
      <div class="container">
        <div class="breadcrumbs">
          <router-link :to="'/catalog/' + catalogs.path">Назад</router-link>
        </div>
        <div class="guard-list__row">
          <div class="guard-list__colunm">
            <GuardListItem
              v-for="product in PRODUCTS"
              :key="product.id"
              :class="{ imgodd: product.length % 2 !== 0 }"
              v-bind:product_data="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GuardListItem from "@/components/guard-list/guard-list-item.vue";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "guard-list",
  data() {
    return {};
  },
  components: {
    GuardListItem,
  },
  created() {
    axios
      .get(
        `https://xfence.ru/api/catalog/${this.$route.params.path}/${this.$route.params.categpath}`,
        //   "https://6578b14bf930.ngrok.io/api/catalog/" +
        //     this.catalogs.path +
        //     "/" +
        //     this.categories.categpath,
        {}
      )
      .then((response) => {
        (this.products = response.data),
          this.$store.dispatch("GET_PRODUCTS", this.products);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    catalogs() {
      return this.$store.getters.CatalogPath(this.$route.params.path);
    },
    categories() {
      return this.$store.getters.CategoriesPath(this.$route.params.categpath);
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),
  },
  beforeMount() {
    document.title = this.categories.name;
  },
  beforeUpdate() {
    document.title = this.categories.name;
  },
  mounted() {
    this.GET_PRODUCTS()
      .then((response) => {
        if (response.data) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   mounted() {
  //     this.$store.dispatch("GET_PRODUCTS", this.products);
  //   },
};
</script>

<style lang="sass" scoped>
.breadcrumbs
  margin: 0px 0px 15px 0px
</style>

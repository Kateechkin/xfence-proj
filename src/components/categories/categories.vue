<template>
  <div class="categories">
    <div class="categories__row">
      <CategItem
        v-for="categ in CATEGORIES"
        :key="categ.id"
        v-bind:categories_data="categ"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import CategItem from "@/components/categories/categories-item.vue";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      categories: [
        {
          id: "1",
          image: "wicket.jpg",
          name: "Калитки",
          categpath: "wicket"
        },
        { id: "2", image: "goal.jpg", name: "Ворота", categpath: "goal" },
        { id: "3", image: "fence.jpg", name: "Заборы", categpath: "fence" }
      ]
    };
  },
  components: {
    CategItem
  },
  created() {
    // axios
    //   .get(
    //     `https://e430fbd60ad0.ngrok.io/api/catalog/${this.$route.params.path}`,
    //     {}
    //   )
    //   .then((response) => {
    //     (this.categ = response.data),
    //       this.$store.dispatch("GET_CATEGORIES", this.categ);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return error;
    //   });
  },
  computed: {
    ...mapGetters(["CATEGORIES"])
  },
  methods: {
    ...mapActions(["GET_CATEGORIES"])
  },

  mounted() {
    store.dispatch("GET_CATEGORIES", this.categories);
  }

  // computed: {
  //   catalogs() {
  //     return this.$store.getters.CatalogPath(this.$route.params.path);
  //   },
  // }
};
</script>

<style></style>

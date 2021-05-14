<template>
  <div class="content">
    <section class="section-production">
      <div class="section-production__title">
        <div class="breadcrumbs container">
          <router-link :to="'/catalog/'">Назад</router-link>
        </div>
        <h1>Категория {{ catalogs.name }}</h1>
      </div>
      <div class="section-production__text">
        <p>
          Мы производим ограждения на любой вкус и любые ваши требования. Наши
          продукты помогут облагородить владения с минимальными усилиями.
        </p>
      </div>
      <Categories />
    </section>
  </div>
</template>

<script>
import Categories from "@/components/categories/categories";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Categ",

  computed: {
    catalogs() {
      return this.$store.getters.CatalogPath(this.$route.params.path);
    }
  },
  methods: {},

  components: {
    Categories
  },
  beforeMount() {
    document.title = this.catalogs.name;
  },
  beforeUpdate() {
    document.title = this.catalogs.name;
  }
};
</script>

<style lang="sass" scoped>
.section-production
  padding: 0 0 95px 0
</style>

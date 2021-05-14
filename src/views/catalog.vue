<template>
  <div class="content">
    <section class="section-production">
      <div class="section-production__title">
        <h1>Мы производим</h1>
      </div>
      <div class="section-production__text">
        <p>
          Мы производим ограждения на любой вкус и любые ваши требования. Наши
          продукты помогут облагородить владения с минимальными усилиями.
        </p>
      </div>
      <Catalogs />
    </section>
  </div>
</template>

<script>
import Catalogs from "@/components/catalog/catalogs.vue";

export default {
  name: "Catalog",
  data() {
    return {
      title: "Каталог"
    };
  },
  components: {
    Catalogs
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  }
};
</script>

<style lang="sass" scoped>
.section-production
  padding: 0 0 95px 0
</style>

<template>
  <router-link
    :to="
      '/catalog/' +
      catalogs.path +
      '/' +
      categories.categpath +
      '/' +
      product_data.id
    "
  >
    <div class="guard-list__item guard-block">
      <div class="guard-block__img">
        <img
          :src="require(`../../../public/img/` + product_data.image)"
          alt="img"
          v-bind:class="{ objectfit: categories.categpath == `fence` }"
        />
      </div>
      <div class="guard-block__info">
        <div class="guard-block__name">
          <p>{{ product_data.name }}</p>
        </div>
        <div class="guard-block__price">
          <p>
            Цена: <span>{{ product_data.price }} рублей</span>
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'guard-list-item',
  data () {
    return {}
  },
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    catalogs () {
      return this.$store.getters.CatalogPath(this.$route.params.path)
    },
    categories () {
      return this.$store.getters.CategoriesPath(this.$route.params.categpath)
    }
  }
}
</script>

<style>
</style>

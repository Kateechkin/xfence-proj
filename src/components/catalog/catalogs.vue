<template>
  <div class="categories">
    <div class="categories__row">
      <CatalogItem
        v-for="catalogitem in CATALOGS"
        :key="catalogitem.id"
        v-bind:category_data="catalogitem"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store'
import CatalogItem from '@/components/catalog/catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'catalog',
  data () {
    return {
      catalogs: [
        { id: '1', image: 'index3.jpg', name: 'Standart', path: 'standart' },
        { id: '2', image: 'index2.jpg', name: 'Guard', path: 'guard' },
        { id: '3', image: 'index4.jpg', name: 'Prestige', path: 'prestige' }
      ]
    }
  },
  components: {
    CatalogItem
  },

  computed: {
    ...mapGetters(['CATALOGS'])
  },
  methods: {
    ...mapActions(['GET_CATALOGS'])
  },

  mounted () {
    store.dispatch('GET_CATALOGS', this.catalogs)

    // this.GET_CATALOGS()
    //   .then((response) => {
    //     if (response.data) {
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
}
</script>

<style>
</style>

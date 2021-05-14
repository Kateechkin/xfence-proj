<template>
  <div class="categories__column">
    <router-link :to="'/catalog/' + category_data.path">
      <div class="categories__item categ-block">
        <div class="categ-block__img">
          <img
            :src="require(`../../../public/img/` + category_data.image)"
            alt="img"
          />
          <div class="categ-block__btn btn">
            <svg
              width="29"
              height="4"
              viewBox="0 0 29 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.1768 2.17678C28.2744 2.07915 28.2744 1.92085 28.1768 1.82322L26.5858 0.232233C26.4882 0.134602 26.3299 0.134602 26.2322 0.232233C26.1346 0.329864 26.1346 0.488155 26.2322 0.585786L27.6464 2L26.2322 3.41421C26.1346 3.51184 26.1346 3.67014 26.2322 3.76777C26.3299 3.8654 26.4882 3.8654 26.5858 3.76777L28.1768 2.17678ZM0 2.25L28 2.25V1.75L0 1.75L0 2.25Z"
                fill="#E1E1E1"
              />
            </svg>
            <p>Серия "{{ category_data.name }}"</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'catalog-list',
  data () {
    return {}
  },
  props: {
    category_data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style>
</style>

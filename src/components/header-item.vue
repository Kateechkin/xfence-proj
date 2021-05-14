<template>
  <div class="header-none">
    <div class="header-item">
      <ul class="header-item__item" id="header-item">
        <li v-for="(link, el) in menu" :key="el.id" class="header-item__li">
          <router-link :to="{ name: link.routerName }" class="header-item__a">{{
            link.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-item',
  data () {
    return {
      show: false,
      menu: [
        {
          id: 1,
          routerName: 'Index',
          title: 'Главная',
          completed: false
        },
        {
          id: 2,
          routerName: 'catalog',
          title: 'Каталог',
          completed: false
        },
        {
          id: 3,
          routerName: 'slader',
          title: 'Галерея',
          completed: false
        },
        {
          id: 4,
          routerName: 'contact',
          title: 'Контакты',
          completed: false
        }
      ]
    }
  },
  components: {},
  watch: {
    firstName: function (val) {
      try {
        var el = document
          .getElementById('header-item')
          .getElementsByTagName('a')
        var url = document.location.href
        for (var i = 0; i < el.length; i++) {
          if (url == el[i].href) {
            el[i].className += ' act'
          }
        }
      } catch (e) {}
    }
  }
}
</script>

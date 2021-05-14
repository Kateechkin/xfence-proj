<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap");
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,

    Footer
  },
  mounted () {
    // const script = document.createElement("script");
    // script.id = "ymaps";
    // script.src =
    //   "https://api-maps.yandex.ru/2.1/?apikey=0a85810d-f050-434c-ab6b-0851b6fda2a8&lang=ru_RU";
    // document.head.append(script);
  }
  // destroyed() {
  //   document.head.querySelector("script#ymaps").remove();
  //   // ymaps = null
  // },
}
</script>

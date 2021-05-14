<template>
  <div id="map" style="width: 850px; height: 700px;"></div>
</template>

<script>
export default {
  name: 'map',

  components: {},
  mounted () {
    ymaps.ready(function () {
      var myMap = new ymaps.Map(
        'map',
        {
          center: [54.961274, 82.912767],
          zoom: 16
        },
        {
          searchControlProvider: 'yandex#search'
        }
      )
    })
  },
  beforeMount () {}
}
</script>

<template>
  <div id="map" style="width: 100%; height: 400px;">
    <yandex-map :settings="settings" :coords="coords" :zoom="10">
      <!--Markers-->
    </yandex-map>
  </div>
</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'map',
  data () {
    return {
      coords: [54.82896654088406, 39.831893822753904]
    }
  },
  components: {
    yandexMap,
    ymapMarker
  }
}
</script>

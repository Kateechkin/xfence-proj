<template>
  <div id="map">
    <img
      src="../assets/img/map.png"
      alt="map"
      style="width: 100%; height: 700px"
    />
  </div>
</template>

<script>
export default {
  name: "map",
  data() {
    return {
      map: null,
      coordinates: [],
    };
  },
  // mounted() {
  //   // Установить скрипты для использования яндекс карты
  //   const scriptYandexMap = document.createElement("script");
  //   scriptYandexMap.setAttribute(
  //     "src",
  //     "https://api-maps.yandex.ru/2.1/?apikey=0a85810d-f050-434c-ab6b-0851b6fda2a8&lang=ru_RU"
  //   );
  //   document.head.appendChild(scriptYandexMap);

  //   // Инициализировать яндекс карту
  //   scriptYandexMap.addEventListener("load", () =>
  //     Promise.all([this.initializeYandexMap(), this.getCoordData()]).then(
  //       this.setMarkers
  //     )
  //   );
  // },
  // methods: {
  //   getCoordData() {
  //     return new Promise((r) =>
  //       setTimeout(() => {
  //         this.coordinates = [[54.961274, 82.912767]];
  //         r();
  //       }, 1000)
  //     );
  //   },
  //   initializeYandexMap() {
  //     return new Promise((r) =>
  //       ymaps.ready(() => {
  //         this.map = new ymaps.Map("map", {
  //           center: [54.961274, 82.912767],
  //           zoom: 17,
  //           controls: ["fullscreenControl"],
  //           searchControlProvider: "yandex#search",
  //         });
  //         r();
  //       })
  //     );
  //   },
  //   setMarkers() {
  //     for (let i = 0; i < this.coordinates.length; i++) {
  //       const placemark = new ymaps.Placemark(this.coordinates[i]);
  //       this.map.geoObjects.add(placemark);
  //     }
  //   },
  // },
};
</script>

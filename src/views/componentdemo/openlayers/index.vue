<script setup lang="ts">
import { ref, onMounted } from "vue";
import "ol/ol.css";
import type {olLayerTileConfig} from "@/utils/ol"
import ol from "@/utils/ol"
console.log(ol);

const map = ref();
let initMap=(dom: HTMLDivElement) => {
  let layers = [
    new ol.layer.Tile({
      title: "天地图矢量图层",
      zIndex: 1,
      source: new ol.source.XYZ({
        url:
          "https://t{0-6}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=" /* TiandituKey */ +
          "27c199d949d448c75e9a241e996d65da", //TiandituKey为天地图密钥,
        wrapX: false,
        projection: "EPSG:3857",
        crossOrigin: "anonymous",
      }),
      isBaseLayer: true,
    } as olLayerTileConfig),
    new ol.layer.Tile({
      title: "天地图矢量注记图层",
      zIndex: 1,
      source: new ol.source.XYZ({
        url:
          "https://t{0-6}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=" /* TiandituKey */ +
          "27c199d949d448c75e9a241e996d65da", //TiandituKey为天地图密钥
        projection: "EPSG:3857",
        crossOrigin: "anonymous",
      }),
      isBaseLayer: true,
    } as olLayerTileConfig),
  ];
  map.value = new ol.Map({
    layers: layers,
    view: new ol.View({
      center: [114.064839, 22.548857], // 中心位置
      zoom: 10, // 缩放登级
      maxZoom: 18,
      projection: "EPSG:4326", // 使用坐标系
    }),
    target: dom,
  });
};
onMounted(() => {
  let container = document.querySelector("#map");
  initMap(container as HTMLDivElement);
});
</script>

<template>
  <div id="map-con">
    <div id="map"></div>
  </div>
</template>

<style scoped lang="less">
#map-con {
  border: 1px solid red;
  width: 100%;
  height: 55vh;
  #map {
    height: 100%;
  }
}


</style>

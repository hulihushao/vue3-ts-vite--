<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZDI3OWU4MC1kYWIyLTQwODAtYjI4Yi02OGQxMjI3ZGYxNTIiLCJpZCI6MTM5NjE5LCJpYXQiOjE2ODQzOTY2NDZ9.C-gPfQrkW_maMsY0MpnFpxEfRAITCMJJkgBTOOLaCGc";
let viewer: any = null;
onMounted(() => {
  viewer = new Cesium.Viewer("cesium", {
    imageryProvider:
      /** new Cesium.ArcGisMapServerImageryProvider({
      url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
    }) */
      new Cesium.WebMapTileServiceImageryProvider({
        url:
          "https://{s}.tianditu.gov.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0" +
          "&LAYER=img&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
          "&style=default&format=tiles&tk=27c199d949d448c75e9a241e996d65da",
        layer: "tdtImg_c",
        style: "default",
        format: "tiles",
        tileMatrixSetID: "c",
        subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        tilingScheme: new Cesium.GeographicTilingScheme(),
        tileMatrixLabels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
        ],
        maximumLevel: 50,
      }),
    baseLayerPicker: false,
    selectionIndicator: false,
    animation: false,
    geocoder: false,
    timeline: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    infoBox: true,
    fullscreenButton: true,
    terrainProvider: Cesium.createWorldTerrain(),
  });
  // 去除logo
  viewer.cesiumWidget.creditContainer.style.display = "none";
  // 使用ViewportQuad创建一个显示图片的区域
  var viewportQuad = new Cesium.ViewportQuad();
  viewportQuad.rectangle = new Cesium.BoundingRectangle(3, 3, 30, 30);
  viewer.scene.primitives.add(viewportQuad);

  viewportQuad.material = new Cesium.Material({
    fabric: {
      type: "Image",
      uniforms: {
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0),
        image: "/logo.svg",
      },
    },
  });
  const buildingTileset = viewer.scene.primitives.add(
    Cesium.createOsmBuildings()
  );

  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-15.0),
    },
  });
});
</script>
<template>
  <div id="cesium-con">
    <div id="cesium"></div>
  </div>
</template>

<style scoped lang="less">
#cesium-con {
  height:50vh;
  border: 1px solid red;
  #cesium {
    height: 100%;
  }
}
</style>

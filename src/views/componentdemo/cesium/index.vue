<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZDI3OWU4MC1kYWIyLTQwODAtYjI4Yi02OGQxMjI3ZGYxNTIiLCJpZCI6MTM5NjE5LCJpYXQiOjE2ODQzOTY2NDZ9.C-gPfQrkW_maMsY0MpnFpxEfRAITCMJJkgBTOOLaCGc";
let viewer: any = ref();
onMounted(() => {
  viewer.value = new Cesium.Viewer("cesium", {
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
  viewer.value.imageryLayers.addImageryProvider(
    new Cesium.WebMapTileServiceImageryProvider({
      url: "https://t0.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk=27c199d949d448c75e9a241e996d65da",
      layer: "tdtAnnoLayer",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible",
    })
  );
  viewer.value.scene.globe.depthTestAgainstTerrain = false; //开启地形深度检测 解决鼠标指针和点不重合
  viewer.value.cesiumWidget.screenSpaceEventHandler.removeInputAction(
    Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  );
  // 去除logo
  viewer.value.cesiumWidget.creditContainer.style.display = "none";
  // 使用ViewportQuad创建一个显示图片的区域
  var viewportQuad = new Cesium.ViewportQuad();
  viewportQuad.rectangle = new Cesium.BoundingRectangle(3, 3, 30, 30);
  viewer.value.scene.primitives.add(viewportQuad);

  viewportQuad.material = new Cesium.Material({
    fabric: {
      type: "Image",
      uniforms: {
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0),
        image: "/logo.svg",
      },
    },
  });
  viewer.value.scene.primitives.add(Cesium.createOsmBuildings());
  setTimeout(() => {
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.value.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-122.40476, 37.78207, 700),
      orientation: {
        heading: Cesium.Math.toRadians(-30.0),
        pitch: Cesium.Math.toRadians(-15.0),
      },
    });
  }, 4000);
});
onBeforeUnmount(() => {
  viewer.value && viewer.value.destroy();
  viewer.value = null;
});
</script>
<template>
  <div id="cesium-con">
    <div id="cesium"></div>
  </div>
</template>

<style scoped lang="less">
#cesium-con {
  height: 55vh;
  border: 1px solid red;
  #cesium {
    height: 100%;
  }
}
</style>

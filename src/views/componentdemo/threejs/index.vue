<script setup lang="ts">
import { ref, onMounted } from "vue";
// 引入three.js
import * as THREE from "three";

// 创建一个3维度场景
const scene = new THREE.Scene();
// 给3维度场景添加物体
/**
 * 第一步：定义物体形状 -- 几何体Geometry : https://threejs.org/docs/index.html?q=geometry
 * 第二步：物体外观 -- 材质Material https://threejs.org/docs/index.html?q=Materia 文档搜索关键词geometry可以看到threejs提供各种几何体相关API
 * 第三步：创建一个物体 -- 网格模型Mesh https://threejs.org/docs/index.html?q=Mesh#api/zh/objects/Mesh
 * 第四步：添加物体到场景中  .add()
 */
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100);
// 定义一个基础网格材质(MeshBasicMaterial)，设置为红色
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000, // 红色材质
});
/**
// 创建要给网格模型，用来表示生活中的物体
const mesh = new THREE.Mesh(geometry, material);

//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 10, 0);

// 把mesh添加到场景中
scene.add(mesh);
 */
/**
 * 定义相机
 */

// 定义相机输出画布的尺寸(单位:像素px)
const width =window.innerWidth; //宽度
const height = window.innerHeight //高度
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面

// 实例化一个透视投影相机对象
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

// 根据需要设置相机位置具体值
camera.position.set(200, 200, 200);

// 相机的视线，观察目标点坐标 相机观察目标指向Threejs 3D空间中某个位置
camera.lookAt(0, 0, 0); //坐标原点
// camera.lookAt(mesh.position); //指向网格模型mesh

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/**
 * 创建webGL渲染器 对象
 */

// 创建webGL渲染器 对象
const renderer = new THREE.WebGLRenderer();
// 定义threejs输出画布的尺寸(单位:像素px)

renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.render(scene, camera); //执行渲染操作
function animate() {

    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
onMounted(() => {
  // 把渲染结果canvas画布，也就是照片提案加到网页中
  document.getElementById("webgl").appendChild(renderer.domElement);
  
});
</script>

<template>
  <div id="webgl"></div>
</template>

<style scoped></style>

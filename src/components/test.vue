<template>
  <div id="home">
    <div class="container-fluid">
      <div class="row">
        <div id="c" width="500" height="500"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import * as THREE from "three";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
// import { TGALoader } from "three/examples/jsm/loaders/TGALoader.js";
// import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  name: "home",

  components: {
    /*ftr*/
  },
  data() {
    return {
      // camera: null,
      // scene: null,
      // renderer: null,
      // geometry: null,
      // material: null,
      // mesh: null,
      // position: null,
      // container: null,
      // controls: null,
      // loader: null,
      // stats: null,
    };
  },

  mounted() {
    this.init();
    // this.init2();
  },
  methods: {
    init: function () {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    },
  },
};
</script>

<style scoped>
</style>

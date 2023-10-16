 //importing THREE library
 import * as THREE from 'https://unpkg.com/three/build/three.module.js';

 //Aquí va el Javascript.

 //Creación de la escena.
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 //Creación de un cubo.
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

 camera.position.z = 50;

 //Renderisado de la escena.
 function animate() {
    requestAnimationFrame(animate);
  
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  };
  
  animate();
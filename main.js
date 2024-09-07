import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

//CREATE a canvas 
const canvas = document.getElementById('canvas');

//create a scene
//create a camera
//create a object: geometry + material = mesh
//add mesh to scene
//create lighting
//add lighting to scene
//create renderer
//add renderer to canvas
//animate
//within animate render the scene
//call animate

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFD1DC);

//add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//position the camera
camera.position.z = 10;

//create a mesh object
//create a geometry
const geometry = new THREE.OctahedronGeometry(3,2);
const material = new THREE.MeshNormalMaterial({ flatShading: true });
const octahedron = new THREE.Mesh(geometry, material);
octahedron.position.y = 2;

const boxGeometry = new THREE.BoxGeometry(4, 0.2, 4);
const boxMaterial = new THREE.MeshNormalMaterial({ flatShading: true });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -4;

//add the mesh to the scene
scene.add(octahedron);
scene.add(box);

//create lighting
const light = new THREE.SpotLight(0xffffdf, 100);
light.position.set(1,1,1);
scene.add(light);

//create renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);  
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//animate
function animate() {
    requestAnimationFrame(animate);
    octahedron.rotation.x += 0.01;
    octahedron.rotation.y += 0.01;
    box.rotation.x += 0.005;
    box.rotation.y += 0.005;

    controls.update();

    renderer.render(scene, camera);
}

//handel window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();




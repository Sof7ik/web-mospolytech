import * as THREE from "https://unpkg.com/three/build/three.module.js";

let cube = null;

// DOM
const canvasWrapper = document.getElementById("canvas-wrapper");
const form = document.getElementById("color-change");

function changeCubeColor(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const color = formData.get("color[]");

    cube.material.color.set(color);

    renderer.render(scene, camera);
}

form.addEventListener("submit", changeCubeColor);

// THREE js
const clock = new THREE.Clock();

const scene = new THREE.Scene();
scene.background = new THREE.Color('gray');
// scene.fog = new THREE.Fog('gray', 1, 5);

let camera = new THREE.PerspectiveCamera(
    60,
    canvasWrapper.clientWidth / canvasWrapper.clientHeight,
    1,
    1000
);

let cameraTarget = new THREE.Vector3(0, 0, 0);
camera.position.x = 0;
camera.position.y = 6;
camera.position.z = -15;

camera.lookAt(cameraTarget);

const geometry = new THREE.PlaneGeometry(10, 10);
const material = new THREE.MeshPhongMaterial({
    color: 'green',
    dithering: true,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(geometry, material);
plane.position.x = 0
plane.position.y = 5
plane.position.z = 5
plane.receiveShadow = true;

let vertices = [
    0, 0, 0,
    10, 0, 0,
    10, 0, 10,
    0, 0, 10
];

let indices = [
    2, 1, 0,
    0, 3, 2
];

let geometry1 = new THREE.BufferGeometry();

geometry1.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(vertices), 3)
);
geometry1.setIndex(indices);
geometry1.computeVertexNormals();

let material1 = new THREE.MeshPhongMaterial({ color: "red", dithering: true, side: THREE.DoubleSide });

let plane1 = new THREE.Mesh(geometry1, material1);
plane1.position.set(-5, 0, -5);
plane1.receiveShadow = true;

scene.add(camera);
scene.add(plane);
scene.add(plane1);

const geometry2 = new THREE.BoxGeometry( 3, 3, 3 );
const material2 = new THREE.MeshPhongMaterial( {
    color: "blue",
    dithering: true,
    specular: 0x111111,
    shininess: 200
} );

cube = new THREE.Mesh( geometry2, material2 );
cube.position.y = 1.5;
cube.position.x = 3;
cube.position.z = -3;
cube.castShadow = true;
scene.add( cube );

let vertices1 = [
    0, 0, 0,
    4, 0, 0,
    2, 0, 4,
    2, 4, 2
];

let indices1 = [
    2, 1, 0,
    0, 3, 2,
    1, 0, 3,
    3, 2, 1
];

let geometry3 = new THREE.BufferGeometry();
geometry3.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(vertices1), 3)
);
geometry3.setIndex(indices1);
geometry3.computeVertexNormals();
let material3 = new THREE.MeshPhongMaterial({ color: "BlueViolet", dithering: true, side: THREE.DoubleSide });
let triangle = new THREE.Mesh(geometry3, material3);
triangle.position.set(-4, 0.5, -2);
triangle.castShadow = true;
scene.add(triangle);

const light = new THREE.PointLight( "#fff", 1, 100);
light.position.set(0, 6, -15);
light.castShadow = true;
scene.add( light );

const spotLight = new THREE.SpotLight("#ffffff");
spotLight.position.set(0, 5, 0);
spotLight.castShadow = true;
spotLight.intensity = 2;
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 25;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;
spotLight.shadow.bias = -0.01;
spotLight.target.position.set(0, 0, 0);
scene.add(spotLight)

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight);
canvasWrapper.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

renderer.render(scene, camera);


let x1 = null;
let y1 = null;

let angle = 0.1; // текущий угол
// let angularSpeed = THREE.Math.degToRad(20); // угловая скорость - градусов в секунду
let angularSpeed = 2; // угловая скорость - градусов в секунду
let delta = 0;
let radius = 20;

function render(xPosition, yPosition) {
    requestAnimationFrame(render);
    const elapsedTime = clock.getElapsedTime();

    camera.position.x = Math.cos(elapsedTime * 0.5) * 10;
    camera.position.z = Math.sin(elapsedTime * 0.5) * 10;
    camera.lookAt(cameraTarget);

    renderer.render(scene, camera);
}


function onMouseMove(event) {
    // animate(event.clientX)
    render(event.clientX, event.clientY);
}

function onMouseDown(event) {
    // console.log("mouse down")
    canvasWrapper.addEventListener("mousemove", onMouseMove);
    x1 = event.clientX;
    y1 = event.clientY

    // console.log("x1", x1);
}

function onMouseUp(event) {
    // console.log("mouse up")
    canvasWrapper.removeEventListener("mousemove", onMouseMove);
    x1 = null;
    y1 = null;
}

canvasWrapper.addEventListener("wheel", (e) => {

})

// canvasWrapper.addEventListener("pointerdown", onMouseDown);
// canvasWrapper.addEventListener("pointerup", onMouseUp);

document.addEventListener('keydown', event => {
    if(event.key === "+" && event.shiftKey) {
        camera.position.z = camera.position.z + 1;
    }
    else if (event.key === "_" && event.shiftKey) {
        camera.position.z = camera.position.z - 1;
    }

    camera.lookAt(cameraTarget);

    renderer.render(scene, camera);
})

// render();
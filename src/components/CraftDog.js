import react, { useState, useEffect, useRef } from "react";
import "./CraftDog.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CraftDog = () => {
  const [dogCute, setDogCute] = useState();
  const [camera, setCamera] = useState();
  const [scene] = useState(new THREE.Scene());
  const [renderer, setRenderer] = useState();
  const [controls, setControls] = useState();

  const containerRef = useRef();

  // Functions
  function handleWindowResize() {
    console.log("window resize");
    const { current: container } = containerRef;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.render(scene, camera);
    }
  }

  useEffect(() => {
    const { current: container } = containerRef;

    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      // Create camera
      const fov = 35;
      const aspect = scW / scH;
      const near = 0.1;
      const far = 5000;

      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 0, 5);
      setCamera(camera);

      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(scW, scH);
      renderer.setPixelRatio(window.devicePixelRatio);
      setRenderer(renderer);

      // Add canvas for container
      containerRef.current.appendChild(renderer.domElement);

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);

      // Grab the file 3d model
      const loader = new GLTFLoader();
      loader.load("/3d/scene.gltf", function (gltf) {
        const obj = gltf.scene;
        setDogCute(obj);
        obj.name = "dog cute";
        scene.add(obj);
        renderer.render(scene, camera);

        animte();
        function animte() {
          requestAnimationFrame(animte);
          obj.rotation.y += 0.005;
          renderer.render(scene, camera);
        }
      });
    }

    window.addEventListener("resize", handleWindowResize);
  }, []);

  return <div className="CraftDog" ref={containerRef}></div>;
};

export default CraftDog;

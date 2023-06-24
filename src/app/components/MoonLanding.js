import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Stars() {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    starsRef.current.rotation.y = elapsedTime * 0.1; // Adjust the rotation speed as needed
  });

  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

  const positions = [];
  const scales = [];

  const starCount = 1000;

  for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;

    positions.push(x, y, z);

    const scale = Math.random() * 3;
    scales.push(scale);
  }

  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  starGeometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

  return <points ref={starsRef} geometry={starGeometry} material={starMaterial} />;
}

function Scene() {
  const sceneRef = useRef();
  const controlsRef = useRef();

  const { camera } = useThree();

  const gltf = useLoader(GLTFLoader, '/moon_landing.glb');

  useFrame(({ clock }) => {
    // Update the rotation of the scene
    const elapsedTime = clock.getElapsedTime();
    sceneRef.current.rotation.y = elapsedTime * 0.05; // Adjust the rotation speed as needed
  });
  camera.position.set(0, 3, -22); // Set the camera position

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[0, 4, -13]} />
      <group ref={sceneRef}>
        <primitive object={gltf.scene} />
        <Stars />
      </group>

      <OrbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        enableZoom
        zoomSpeed={0.5}
        minDistance={12}
        maxDistance={12}
        target={[0, 0, 0]}
      />
    </>
  );
}

function MoonLanding() {
  return (
    <Canvas style={{ width: '100vw', height: '80vh' }} tabIndex={0}>
      <Scene />
    </Canvas>
  );
}

export default MoonLanding;

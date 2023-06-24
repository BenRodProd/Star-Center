import { extend, useFrame, useLoader } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { Suspense } from 'react';

extend({ GLTFLoader });

const EarthModel = React.memo(() => {
  const gltf = useLoader(GLTFLoader, '/earth.glb');

  useFrame(({ clock }) => {
    // Update the rotation of the Earth model
    gltf.scene.rotation.y += 0.01;
  });

  return <primitive object={gltf.scene} scale={0.00005} position={[0, 0, 0]} />;
});

EarthModel.displayName = 'EarthModel';

function EarthComponent() {
  return (
    <Canvas gl="webgl2"  antialias={'false'}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <EarthModel />
      </Suspense>
    </Canvas>
  );
}

export default EarthComponent;

import { extend, useFrame } from '@react-three/fiber';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

extend({ Canvas });

function IssModel() {
  const gltf = useLoader(GLTFLoader, '/astronaut2.glb');

  useFrame(({ clock }) => {
    // Update the position, rotation, and scale of the model

    const rotationAngle = (60 * Math.PI) / 180; // Convert 60 degrees to radians

    gltf.scene.rotation.x += rotationAngle / 1000; // Rotate around the y-axis
    gltf.scene.rotation.z += rotationAngle / 1000; // Rotate around the z-axis
    gltf.scene.scale.set(0.1, 0.1, 0.1); // Set the scale of the model
  });

  return <primitive object={gltf.scene} />;
}

function Astronaut() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.5} position={[10, 10, 5]} />
        <IssModel />
      </Suspense>
    </Canvas>
  );
}

export default Astronaut;

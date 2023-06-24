import { extend, useFrame } from '@react-three/fiber';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

extend({ GLTFLoader });

function MarsModel() {
  const gltf = useLoader(GLTFLoader, '/mars.glb');

  useFrame(({ clock }) => {
    // Update the rotation of the Earth model
    gltf.scene.rotation.y += 0.001;
    gltf.scene.rotation.x += 0.001;
    gltf.scene.scale.set(0.05, 0.05, 0.05); // Set the scale of the model
  });

  return <primitive object={gltf.scene} />;
}

function Mars() {
  return (
 
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <MarsModel />
      </Suspense>
    </Canvas>
   
  );
}

export default Mars;

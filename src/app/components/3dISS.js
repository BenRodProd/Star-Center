import { extend, useFrame } from '@react-three/fiber';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

extend({ Canvas });

function IssModel() {
  const gltf = useLoader(GLTFLoader, '/iss.gltf');

  useFrame(({ clock }) => {
    // Update the position, rotation, and scale of the model
   
    
 
    gltf.scene.rotation.x += 0.005; // Increase the rotation angle over time
    gltf.scene.rotation.y += 0.005; // Increase the rotation angle over time
    gltf.scene.rotation.z += 0.005; // Increase the rotation angle over time
    gltf.scene.scale.set(0.001, 0.001, 0.001); // Set the scale of the model
  });

  return <primitive object={gltf.scene} />;
}

function Iss() {
  return (
    <Canvas><Suspense fallback={null}><ambientLight intensity={0.1} /> 
        <directionalLight intensity={0.5} position={[10, 10, 5]} />
        <IssModel /></Suspense>
    </Canvas>
  );
}

export default Iss;

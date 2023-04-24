import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import CanvasLoader from "../Loader";
import { AmbientLight } from "three"; // Importer la light


const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};
const Logo = () => {
    const logo = useGLTF("./Logo/scene.gltf");
    return (
        <primitive object={logo.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
};

const EarthCanvas = () => {
  return (
      <Canvas
          shadows
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
          />
          <Earth />
{/*            <Logo />*/}

            <ambientLight intensity={100} color="white" /> {/* Ajouter la light ici */}

          <Preload all />
        </Suspense>
      </Canvas>
  );
};

export default EarthCanvas;

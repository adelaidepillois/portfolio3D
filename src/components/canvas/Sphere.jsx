import React, { useRef, useState, Suspense } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Sphere = ({ modelPath, scale = 30, position = [0, 0, 0] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);

    return (
        <>
            <primitive
                ref={ref}
                object={gltf.scene}
                position={position}
                scale={20}
            />
        </>
    );
};

const ModelViewer = ({ modelPath, scale = 40, position = [-100, -100, -100] }) => {
    return (
        <Canvas>
            <ambientLight intensity={0} color="white" /> {/* Ajouter la light ici */}
            <pointLight position={[0, 0, 0]} />
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Sphere modelPath={modelPath} scale={scale} position={position} />
            </Suspense>
        </Canvas>
    );
};

export default ModelViewer;

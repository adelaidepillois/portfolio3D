import React, { useRef, useState, Suspense } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Logo = ({ modelPath, scale = 30, position = [0, 0, 0] }) => {
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

const ModelViewer = ({ modelPath, scale = 40, position = [-10, -10, -15] }) => {
    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 0, 10],
            }}>
            <pointLight position={[0, 0, 100000000000]} />
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Logo modelPath={modelPath} scale={30} position={position} />
            </Suspense>
        </Canvas>
    );
};

export default ModelViewer;

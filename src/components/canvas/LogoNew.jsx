import React, { useRef, useState, Suspense } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {Scene} from "./Scene";
const LogoNew = () => {
    return (
        <Canvas>
            <ambientLight/>
            <OrbitControls/>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    );
};

export default LogoNew;


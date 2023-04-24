import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./../../public/Logo/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={materials.Material}
        position={[0.05, 0, 0]}
        rotation={[1.57, 0, 0]}
        scale={[1, 0.75, 1]}
      />
    </group>
  );
}

useGLTF.preload("./../../public/Logo/scene.gltf");

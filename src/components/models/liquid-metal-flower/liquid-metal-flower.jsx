import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const LiquidMetalFlower = (props) => {
  const { nodes } = useGLTF("/models/GlowingLiquidMetalFlower.glb");
  const innerRef = useRef();
  const middleRef = useRef();
  const outerRef = useRef();

  useFrame(() => {
    if (innerRef.current) {
      innerRef.current.rotation.y -= 0.01; // Rotate inner petals counterclockwise
    }
    if (middleRef.current) {
      middleRef.current.rotation.y += 0.01; // Rotate middle petals clockwise
    }
    if (outerRef.current) {
      outerRef.current.rotation.y -= 0.01; // Rotate outer petals clockwise
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={innerRef}
        geometry={nodes.innerPetals.geometry}
        material={nodes.innerPetals.material}
      />
      <mesh
        ref={middleRef}
        geometry={nodes.middlePetals.geometry}
        material={nodes.middlePetals.material}
      />
      <mesh
        ref={outerRef}
        geometry={nodes.outerPetals.geometry}
        material={nodes.outerPetals.material}
      />
      <mesh geometry={nodes.opal.geometry} material={nodes.opal.material} />
      <mesh geometry={nodes.glowingSphere.geometry} material={nodes.glowingSphere.material} />
    </group>
  );
};

useGLTF.preload("/models/LiquidMetalFlower.glb");

export { LiquidMetalFlower };

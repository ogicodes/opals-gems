"use client";

import { Text, Float, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";
import { HandSculpture, LiquidMetalFlower } from "@/components/models";

const LiquidOpal = () => {
  const mesh = useRef<THREE.Mesh>();
  const { viewport } = useThree();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <group scale={Math.min(viewport.width, viewport.height) / 5}>
      <Text
        color="white"
        fontSize={Math.min(viewport.width, viewport.height) / 6}
        font="fonts/BebasNeue-Regular.ttf"
        position={[0, 2.5, -2]}
      >
        {`OPAL'S JEWELS & GEMS`}
      </Text>
      <Float>
        <LiquidMetalFlower />
      </Float>
      <HandSculpture
        scale={6}
        position={[-1.8, -1.8, 0]}
        rotation={[-0.1, -0.2, -1.6]}
      />
      <OrbitControls enableZoom={false} />
    </group>
  );
};

export { LiquidOpal };

"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

import {
  AbstractOpal,
  AquaCrystal,
  Crystal,
  CrystalHeart,
  IcyBlueCrystal,
  PinkCrystal,
  RedPurpleCrystal,
  RedPurpleCrystalCluster,
  VioletCrystal,
  RedGreenCrystal,
} from "@/components/models";

const Models = () => {
  const modelRefs = useMemo(
    () => Array.from({ length: 11 }, () => React.createRef<THREE.Mesh>()),
    []
  );
  const A = 5;

  const startPositions = useRef(
    Array.from(
      { length: modelRefs.length },
      (_, i) => i * ((Math.PI * 2) / modelRefs.length)
    )
  );

  useFrame(() => {
    modelRefs.forEach((ref, i) => {
      if (ref.current) {
        startPositions.current[i] += 0.001;
        if (startPositions.current[i] > Math.PI * 2)
          startPositions.current[i] = 0;

        const t = startPositions.current[i];
        const x = A * Math.sin(t);
        const y = 0;
        const z = A * Math.sin(t) * Math.cos(t);
        ref.current.position.set(x, y, z);
      }
    });
  });

  return (
    <>
      <Float>
        <AbstractOpal
          scale={0.001}
          rotation={[0, 0, 0]}
          position={[-2, -1, 0]}
        />
      </Float>
      <Float>
        <AquaCrystal scale={5} rotation={[0, 0, 0]} position={[-2, 2, 0]} />
      </Float>
      <Float>
        <Crystal scale={0.1} rotation={[0, 3, 0]} position={[1, 3, -2]} />
      </Float>
      <Float>
        <CrystalHeart scale={1} rotation={[0, 0, 0]} position={[1.5, 0, 0]} />
      </Float>
      <Float>
        <IcyBlueCrystal
          scale={0.2}
          rotation={[0, 0, 0]}
          position={[-3, 0, 0]}
        />
      </Float>
      <Float>
        <PinkCrystal scale={0.2} rotation={[0, 0, 0]} position={[-6, 0, 0]} />
      </Float>
      <Float>
        <RedPurpleCrystal
          scale={0.02}
          rotation={[0, 0, 0]}
          position={[8, 0, 0]}
        />
      </Float>
      <Float>
        <RedPurpleCrystalCluster
          scale={0.02}
          rotation={[0, 0, 0]}
          position={[7, 6, -4]}
        />
      </Float>
      <Float>
        <VioletCrystal
          scale={0.002}
          rotation={[0, 0, 0]}
          position={[5, 2, 0]}
        />
      </Float>
      <Float>
        <RedGreenCrystal
          scale={0.8}
          rotation={[0, 0, 0]}
          position={[-6, -3, 0]}
        />
      </Float>
    </>
  );
};

export { Models };

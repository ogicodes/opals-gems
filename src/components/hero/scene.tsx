"use client";

import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, PerformanceMonitor, Environment } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";
import dynamic from "next/dynamic";

const LiquidOpal = dynamic(
  () => import("@/components/hero").then((mod) => mod.LiquidOpal),
  { ssr: false },
);

const Scene = () => {
  const [dpr, setDpr] = useState(1.5);

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        dpr={dpr}
        gl={{
          alpha: true,
          antialias: true,
          stencil: false,
          depth: true,
        }}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />
        <Environment preset="studio" environmentIntensity={0.1} />
        <EffectComposer multisampling={4}>
          <DepthOfField
        focusDistance={0}
        focalLength={0.2}
        bokehScale={4}
        height={480}
          />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <LiquidOpal />
      </Canvas>
    </Suspense>
  );
};

export { Scene };

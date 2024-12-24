"use client";

import { Canvas, extend, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Text, Loader } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import dynamic from "next/dynamic";

const AboutUsModels = dynamic(
  () => import("@/components/about-us").then((mod) => mod.Models),
  { ssr: false }
);

const ViewportAwareText = () => {
  const { viewport } = useThree();
  const materialRef = useRef();

  // Check if the viewport width is small enough to be considered "mobile"
  const isMobile = viewport.width < 4; // Adjust threshold based on your 3D scene's scale
  const isTablet = viewport.width >= 4 && viewport.width < 6.8;

  // Calculate dynamic font sizes and positions based on viewport width and height
  const titleFontSize = isMobile
    ? viewport.width * 0.8
    : isTablet
    ? 1.4
    : viewport.width * 0.07; // Adjust title font size relative to width
  const bodyFontSize = isMobile
    ? viewport.width * 0.09
    : isTablet
    ? 0.2
    : viewport.width * 0.02; // Adjust body font size relative to width

  return (
    <group
      rotation={[-0.2, 0, 0]}
      position={[0, 0.2, 0]}
      scale={Math.min(viewport.width, viewport.height) / 10}
    >
      <Text
        material={materialRef.current}
        fontSize={titleFontSize}
        font="fonts/BebasNeue-Regular.ttf"
        position={
          isMobile
            ? [0, viewport.height * 1.2, 0]
            : isTablet
            ? [0, viewport.width * 0.9, 0]
            : [viewport.width * 0.6, viewport.height * 0.6, 0]
        }
      >
        About Us
      </Text>
      <Text
        color="white"
        fontSize={bodyFontSize}
        font="fonts/PPNeueMontreal-Bold.otf"
        position={
          isMobile
            ? [0, viewport.height * 0.4, 0]
            : isTablet
            ? [0, viewport.height * 0.16, 0]
            : [viewport.width * 0.24, viewport.height * 0.26, 0]
        }
        maxWidth={
          isMobile
            ? viewport.width * 2.4
            : isTablet
            ? viewport.width * 1.2
            : viewport.width * 0.7
        } // Max width to trigger wrapping
        lineHeight={1.6} // Line height for spacing
        textAlign="justify"
        material={materialRef.current}
      >
        Hailing from Toronto, Ontario, Opal grew up immersed in a vibrant arts
        culture, where weekends were often spent wandering vendor markets and
        hunting for hidden treasures in local thrift stores. With parents who
        specialize in carpentry and leatherworking, Opal was naturally drawn to
        craftsmanship from an early age. The art of transforming raw materials
        into something beautiful, observed in their parents’ work, sparked a
        passion for creating jewelry that blends creativity, skill, and personal
        expression.
      </Text>
      <Text
        color="white"
        fontSize={bodyFontSize}
        font="fonts/PPNeueMontreal-Bold.otf"
        position={
          isMobile
            ? [0, -viewport.height * 0.4, 0]
            : isTablet
            ? [0, -viewport.height * 0.5, 0]
            : [-viewport.width * 0.2, -viewport.height * 0.33, 0]
        }
        maxWidth={
          isMobile
            ? viewport.width * 2.2
            : isTablet
            ? viewport.width * 1
            : viewport.width * 0.7
        } // Max width to trigger wrapping
        lineHeight={1.6} // Space between lines
        textAlign="justify"
      >
        Despite their big-city upbringing, Opal has always felt most at home in
        nature. Now residing in the Muskoka Region of Ontario, they have fully
        embraced a small-town, outdoor-focused lifestyle. Opal’s jewelry is a
        fusion of these two worlds colliding: sleek lines and delicate details
        merge seamlessly with organic forms, each piece reflecting Opal’s
        evolving perspective—ever-changing, yet steadfastly true to their core
        as an artist.
      </Text>
    </group>
  );
};

const Scene = () => {
  const materialRef = useRef();

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, stencil: false, depth: true }}
      >
        <group rotation={[0.3, 0, -0.4]} position={[0, 0.1, -0.5]}>
          <AboutUsModels />
        </group>
        <ViewportAwareText />
        <Environment preset="dawn" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Suspense>
  );
};

export { Scene };

"use client";

import { Canvas, extend } from "@react-three/fiber";
import { Environment, OrbitControls, Text, Loader } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import dynamic from "next/dynamic";

const AboutUsModels = dynamic(
  () => import("@/components/about-us").then((mod) => mod.Models),
  { ssr: false }
);

// Custom ShaderMaterial for a horizontal three-color gradient
class HorizontalThreeColorGradientMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        color1: { value: new THREE.Color("#ECA2BD") }, // pastelPink
        color2: { value: new THREE.Color("#96CDDF") }, // pastelBlue
        color3: { value: new THREE.Color("#DEECDD") }, // pastelBeige
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec2 vUv;
        void main() {
          vec3 gradientColor;
          if (vUv.x < 0.5) {
            gradientColor = mix(color1, color2, vUv.x * 2.0); // Left to middle gradient (pink to blue)
          } else {
            gradientColor = mix(color2, color3, (vUv.x - 0.5) * 2.0); // Middle to right gradient (blue to beige)
          }
          gl_FragColor = vec4(gradientColor, 1.0);
        }
      `,
    });
  }
}

// Register the custom material so it can be used in the component
extend({ HorizontalThreeColorGradientMaterial });

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
        <group rotation={[-0.2, 0, 0]} position={[0, 0.2, 0]}>
          <Text
            material={materialRef.current}
            fontSize={0.6}
            font="fonts/BebasNeue-Regular.ttf"
            position={[4.5, 3.3, 0]}
          >
            About Us
          </Text>
          <Text
            color="white"
            fontSize={0.15}
            font="fonts/PPNeueMontreal-Bold.otf"
            position={[2.8, 1.5, 0]}
            maxWidth={7} // Max width to trigger wrapping
            lineHeight={1.6} // Line height for spacing
            textAlign="justify"
            material={materialRef.current}
          >
            Hailing from Toronto, Ontario, Opal grew up immersed in a vibrant
            arts culture, where weekends were often spent wandering vendor
            markets and hunting for hidden treasures in local thrift stores.
            With parents who specialize in carpentry and leatherworking, Opal
            was naturally drawn to craftsmanship from an early age. The art of
            transforming raw materials into something beautiful, observed in
            their parents’ work, sparked a passion for creating jewelry that
            blends creativity, skill, and personal expression.
          </Text>
          <Text
            color="white"
            fontSize={0.15}
            font="fonts/PPNeueMontreal-Bold.otf"
            position={[-1.8, -2.1, 0]}
            maxWidth={7} // Max width to trigger wrapping
            lineHeight={1.6} // Space between lines
            textAlign="justify"
          >
            Despite their big-city upbringing, Opal has always felt most at home
            in nature. Now residing in the Muskoka Region of Ontario, they have
            fully embraced a small-town, outdoor-focused lifestyle. Opal’s
            jewelry is a fusion of these two worlds colliding: sleek lines and
            delicate details merge seamlessly with organic forms, each piece
            reflecting Opal’s evolving perspective—ever-changing, yet
            steadfastly true to their core as an artist.
          </Text>
        </group>
        <Environment preset="dawn" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Suspense>
  );
};

export { Scene };

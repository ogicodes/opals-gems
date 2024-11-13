'use client'
import { Canvas, extend } from '@react-three/fiber'
import { Environment, OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import React, { useRef } from 'react'
import AboutUsModels from './AboutUsModels'

// Custom ShaderMaterial for a horizontal three-color gradient
class HorizontalThreeColorGradientMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        color1: { value: new THREE.Color('#ECA2BD') }, // pastelPink
        color2: { value: new THREE.Color('#96CDDF') }, // pastelBlue
        color3: { value: new THREE.Color('#DEECDD') }, // pastelBeige
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
    })
  }
}

// Register the custom material so it can be used in the component
extend({ HorizontalThreeColorGradientMaterial })

export default function Scene() {
  const materialRef = useRef()

  return (
    <Canvas>
      <group rotation={[0.3, 0, -0.4]} position={[0, 0.1, -0.5]}>
        <AboutUsModels />
      </group>
      <group rotation={[-0.2, 0, 0]} position={[0, 0.2, 0]}>
        <Text material={materialRef.current} fontSize={0.6} font='fonts/BebasNeue-Regular.ttf' position={[4.5, 3.3, 0]}>
          About Us
        </Text>
        <Text
          color='white'
          fontSize={0.15}
          font='fonts/PPNeueMontreal-Bold.otf'
          position={[2.8, 1.5, 0]}
          maxWidth={7} // Max width to trigger wrapping
          lineHeight={1.6} // Line height for spacing
          textAlign='justify'
          material={materialRef.current}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
          explicabo. dolores amet, dicta sunt ullamq consequuntur magni sequi aliquam laboriosam, esse voluptatem.
          beatae vitae dicta beatae vitae dicta rem volute aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit a eos qui incidt consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam ratione corporis suscipit
          velit in ea voluptate as paraiatur? quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam aycfe nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui quam nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
        </Text>
        <Text
          color='white'
          fontSize={0.15}
          font='fonts/PPNeueMontreal-Bold.otf'
          position={[-1.8, -2.1, 0]}
          maxWidth={7} // Max width to trigger wrapping
          lineHeight={1.6} // Space between lines
          textAlign='justify'
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
          explicabo. dolores amet, dicta sunt ullamq consequuntur magni sequi aliquam laboriosam, esse voluptatem.
          beatae vitae dicta beatae vitae dicta rem volute aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit a eos qui incidt consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam ratione corporis suscipit
          velit in ea voluptate as paraiatur? quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam aycfe nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui quam nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
        </Text>
      </group>
      <Environment preset='dawn' />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

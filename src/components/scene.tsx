'use client'

import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}

export default function Scene() {
  return (
    <Canvas>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-1, 0.5]}
      >
        {/* Add ambient lighting */}
        <ambientLight />
        {/* Add a directional light */}
        <directionalLight position={[5, 5, 5]} />
        {/* Include a 3D object */}
        <Box />
        {/* OrbitControls allow rotating the camera around */}
        <OrbitControls />
      </Float>
    </Canvas>
  )
}

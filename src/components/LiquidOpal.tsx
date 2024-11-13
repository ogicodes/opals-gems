import { MeshTransmissionMaterial, useGLTF, Text, Float, OrbitControls } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { HandModel } from './Models'

type GLTFResult = GLTF & {
  nodes: { [name: string]: THREE.Mesh }
  materials: { [name: string]: THREE.Material }
}

export default function LiquidOpal() {
  const mesh = useRef<THREE.Mesh>()
  const { nodes } = useGLTF('/models/LiquidMetalFlower.glb') as unknown as GLTFResult
  const { viewport } = useThree()

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <group scale={Math.min(viewport.width, viewport.height) / 5}>
      <Text
        color='white'
        fontSize={Math.min(viewport.width, viewport.height) / 4}
        font='fonts/BebasNeue-Regular.ttf'
        position={[0, 2.5, -2]}
      >
        OPAL'S JEWELS & GEMS
      </Text>
      <Float>
        <mesh geometry={nodes.petals.geometry} ref={mesh} position={[0, 0.5, 0]}>
          <MeshTransmissionMaterial
            backside
            backsideThickness={1}
            samples={16}
            thickness={0.2}
            anisotropicBlur={0.1}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            clearcoat={1}
            envMapIntensity={0.9}
            transparent={true}
            opacity={0.95}
          />
        </mesh>
        <mesh geometry={nodes.Sphere001.geometry} position={[0, 0.5, 0]}>
          <MeshTransmissionMaterial
            thickness={3}
            roughness={1}
            transmission={1}
            ior={0}
            chromaticAberration={1}
            backside
          />
        </mesh>
      </Float>
      <HandModel scale={6} position={[-1.8, -1.8, 0]} rotation={[-0.1, -0.2, -1.6]} />
      <OrbitControls enableZoom={false} />
    </group>
  )
}

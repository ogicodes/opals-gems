import React from 'react'
import { useGLTF } from '@react-three/drei'

const RedGreenCrystal = (props) => {
  const { nodes, materials } = useGLTF('/models/RedGreenCrystal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Stone_low_1_Stone_low_1_0.geometry} material={materials.Stone_low_1} scale={0.455} />
      <mesh geometry={nodes.pPlane1_lambert1_0.geometry} material={materials.lambert1} scale={0.455} />
    </group>
  )
}

useGLTF.preload('/models/RedGreenCrystal.glb')

export { RedGreenCrystal }

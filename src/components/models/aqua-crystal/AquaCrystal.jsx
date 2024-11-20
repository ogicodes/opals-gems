import React from 'react'
import { useGLTF } from '@react-three/drei'

const AquaCrystal = (props) => {
  const { nodes, materials } = useGLTF('/models/AquaCrystal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials['1001']} scale={0.122} />
    </group>
  )
}

useGLTF.preload('/models/AquaCrystal.glb')

export { AquaCrystal }

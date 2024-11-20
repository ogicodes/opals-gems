import React from 'react'
import { useGLTF } from '@react-three/drei'

const LiquidMetalFlower = (props) => {
  const { nodes } = useGLTF('/models/LiquidMetalFlower.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.petals.geometry} material={nodes.petals.material} />
    </group>
  )
}

useGLTF.preload('/models/LiquidMetalFlower.glb')

export { LiquidMetalFlower }

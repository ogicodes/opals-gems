import React from 'react'
import { useGLTF } from '@react-three/drei'

const PinkCrystal = (props) => {
  const { nodes, materials } = useGLTF('/models/PinkCrystal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Crystal} position={[0, 0.955, 0]} scale={0.672} />
    </group>
  )
}

useGLTF.preload('/models/PinkCrystal.glb')

export { PinkCrystal }

import React from 'react'
import { useGLTF } from '@react-three/drei'

const IcyBlueCrystal = (props) => {
  const { nodes, materials } = useGLTF('/models/IcyBlueCrystal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ctystal_L_lambert1_0.geometry} material={materials.lambert1} />
    </group>
  )
}

useGLTF.preload('/models/IcyBlueCrystal.glb')

export { IcyBlueCrystal }

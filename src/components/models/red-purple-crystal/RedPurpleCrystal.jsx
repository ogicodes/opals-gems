import React from 'react'
import { useGLTF } from '@react-three/drei'

const RedPurpleCrystal = (props) => {
  const { nodes, materials } = useGLTF('/models/RedPurpleCrystal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.wire_087224198} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/RedPurpleCrystal.glb')

export { RedPurpleCrystal }

import React from 'react'
import { useGLTF } from '@react-three/drei'

const VioletCrystal = (props) => {
  const { nodes, materials } = useGLTF('/models/VioletCrystal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Crystal_LP_Material_0.geometry}
        material={materials.Material}
        position={[-47.748, 24.008, -80.222]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/models/VioletCrystal.glb')

export { VioletCrystal }

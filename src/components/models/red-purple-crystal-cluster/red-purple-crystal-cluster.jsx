import React from 'react'
import { useGLTF } from '@react-three/drei'

const RedPurpleCrystalCluster = (props) => {
  const { nodes, materials } = useGLTF('/models/RedPurpleCrystalCluster.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.crystal17_2_crystal_17_2_0.geometry}
        material={materials.crystal_17_2}
        position={[0, 18.492, 0]}
        scale={16.987}
      />
    </group>
  )
}

useGLTF.preload('/models/RedPurpleCrystalCluster.glb')

export { RedPurpleCrystalCluster }

import React from 'react'
import { useGLTF } from '@react-three/drei'

const HandSculpture = (props) => {
  const { nodes, materials } = useGLTF('/models/HandSculpture.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.hand_low_hand001_0.geometry}
        material={materials['hand.001']}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.335}
      />
    </group>
  )
}

useGLTF.preload('/models/HandSculpture.glb')

export { HandSculpture }

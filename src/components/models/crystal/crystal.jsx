import React from 'react'
import { useGLTF } from '@react-three/drei'

const Crystal = (props) => {
  const { nodes, materials } = useGLTF('/models/Crystal-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.PaletteMaterial001}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.274, 3.296, 2.067]}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials.PaletteMaterial002}
        position={[-1.057, -0.396, -1.777]}
        rotation={[0.599, 0.174, -2.311]}
        scale={[2.501, 2.212, 4.292]}
      />
    </group>
  )
}

useGLTF.preload('/models/Crystal-transformed.glb')

export { Crystal }

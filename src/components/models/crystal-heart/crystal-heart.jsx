import React from 'react'
import { useGLTF } from '@react-three/drei'

const CrystalHeart = (props) => {
  const group = React.useRef()
  const { nodes, materials } = useGLTF('/models/CrystalHeart.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='RootNode'>
          <group name='Crystal_Heart' position={[0, 0.839, -0.001]} scale={0.01}>
            <mesh
              name='Crystal_Heart_Crystal_Heart_Mat_0'
              geometry={nodes.Crystal_Heart_Crystal_Heart_Mat_0.geometry}
              material={materials.Crystal_Heart_Mat}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/CrystalHeart.glb')

export { CrystalHeart }

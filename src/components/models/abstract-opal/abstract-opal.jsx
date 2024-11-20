import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const AbstractOpal = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/AbstractOpal.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='RootNode' scale={3.657}>
          <group name='pPyramid1' position={[0, 97.583, 0]} rotation={[1.075, -1.385, 2.766]} scale={2.295}>
            <mesh
              name='pPyramid1_lambert2_0'
              geometry={nodes.pPyramid1_lambert2_0.geometry}
              material={materials.lambert2}
            />
          </group>
          <group name='nurbsCircle1' position={[0, 205.078, 0]} rotation={[-0.402, -0.002, 0.004]} scale={3.809} />
        </group>
        <mesh
          name='pPyramid2_lambert2_0'
          geometry={nodes.pPyramid2_lambert2_0.geometry}
          material={materials.lambert2}
          position={[0, 356.87, 0]}
          rotation={[1.075, -1.385, 2.766]}
          scale={8.394}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/AbstractOpal.glb')

export { AbstractOpal }

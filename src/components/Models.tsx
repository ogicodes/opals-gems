import { useGLTF } from '@react-three/drei'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { forwardRef } from 'react'

type GLTFResult = GLTF & {
  nodes: { [name: string]: THREE.Mesh }
  materials: { [name: string]: THREE.Material }
}

const HandModel = (props) => {
  const { scene } = useGLTF('/models/HandSculpture.glb') as unknown as GLTFResult
  return <primitive object={scene} {...props} />
}

const CrystalModel = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/crystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const AbstractOpal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/AbstractOpal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const AquaCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/AquaCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const CrystalHeart = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/CrystalHeart.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const GhostCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/GhostCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const IcyCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/IcyCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const IcyBlueCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/IcyBlueCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const PinkCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/PinkCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const PurpleCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/PurpleCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const RedGreenCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/RedGreenCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const RedPurpleCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/RedPurpleCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const RedPurpleCrystalCluster = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/RedPurpleCrystalCluster.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

const VioletCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/VioletCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})

export {
  HandModel,
  CrystalModel,
  AbstractOpal,
  AquaCrystal,
  CrystalHeart,
  GhostCrystal,
  IcyCrystal,
  IcyBlueCrystal,
  PinkCrystal,
  PurpleCrystal,
  RedGreenCrystal,
  RedPurpleCrystal,
  RedPurpleCrystalCluster,
  VioletCrystal,
}

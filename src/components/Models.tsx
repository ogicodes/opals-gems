'use client'

import { useGLTF } from '@react-three/drei'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { forwardRef, JSX } from 'react'

type GLTFResult = GLTF & {
  nodes: { [name: string]: THREE.Mesh }
  materials: { [name: string]: THREE.Material }
}

const HandModel = (props: JSX.IntrinsicAttributes & { [properties: string]: any }) => {
  const { scene } = useGLTF('/models/HandSculpture.glb') as unknown as GLTFResult
  return <primitive object={scene} {...props} />
}
HandModel.displayName = 'HandModel'

const CrystalModel = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/crystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
CrystalModel.displayName = 'CrystalModel'

const AbstractOpal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/AbstractOpal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
AbstractOpal.displayName = 'AbstractOpal'

const AquaCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/AquaCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
AquaCrystal.displayName = 'AquaCrystal'

const CrystalHeart = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/CrystalHeart.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
CrystalHeart.displayName = 'CrystalHeart'

const GhostCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/GhostCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
GhostCrystal.displayName = 'GhostCrystal'

const IcyCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/IcyCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
IcyCrystal.displayName = 'IcyCrystal'

const IcyBlueCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/IcyBlueCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
IcyBlueCrystal.displayName = 'IcyBlueCrystal'

const PinkCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/PinkCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
PinkCrystal.displayName = 'PinkCrystal'

const PurpleCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/PurpleCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
PurpleCrystal.displayName = 'PurpleCrystal'

const RedGreenCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/RedGreenCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
RedGreenCrystal.displayName = 'RedGreenCrystal'

const RedPurpleCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/RedPurpleCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
RedPurpleCrystal.displayName = 'RedPurpleCrystal'

const RedPurpleCrystalCluster = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/RedPurpleCrystalCluster.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
RedPurpleCrystalCluster.displayName = 'RedPurpleCrystalCluster'

const VioletCrystal = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { scene } = useGLTF('/models/VioletCrystal.glb') as unknown as GLTFResult
  return <primitive ref={ref} object={scene} {...props} />
})
VioletCrystal.displayName = 'VioletCrystal'

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

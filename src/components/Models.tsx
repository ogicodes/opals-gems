import { useGLTF } from '@react-three/drei'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

type GLTFResult = GLTF & {
  nodes: { [name: string]: THREE.Mesh }
  materials: { [name: string]: THREE.Material }
}

const HandModel = (props) => {
  const { scene } = useGLTF('/models/Hand.glb') as unknown as GLTFResult
  return <primitive object={scene} {...props} />
}

const CrystalModel = (props) => {
  const { scene } = useGLTF('/models/crystal.glb') as unknown as GLTFResult
  return <primitive object={scene} {...props} />
}

const CardModel = (props) => {
  const { scene } = useGLTF('/models/tarotcard.glb') as unknown as GLTFResult
  return <primitive object={scene} {...props} />
}

export { HandModel, CrystalModel, CardModel }

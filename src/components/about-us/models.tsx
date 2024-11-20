'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import {
  AbstractOpal,
  AquaCrystal,
  Crystal,
  CrystalHeart,
  IcyBlueCrystal,
  PinkCrystal,
  RedPurpleCrystal,
  RedPurpleCrystalCluster,
  VioletCrystal,
  RedGreenCrystal,
} from '@/components/models'

const Models = () => {
  const modelRefs = useMemo(() => Array.from({ length: 11 }, () => React.createRef<THREE.Mesh>()), [])
  const A = 5

  const startPositions = useRef(
    Array.from({ length: modelRefs.length }, (_, i) => i * ((Math.PI * 2) / modelRefs.length)),
  )

  useFrame(() => {
    modelRefs.forEach((ref, i) => {
      if (ref.current) {
        startPositions.current[i] += 0.001
        if (startPositions.current[i] > Math.PI * 2) startPositions.current[i] = 0

        const t = startPositions.current[i]
        const x = A * Math.sin(t)
        const y = 0
        const z = A * Math.sin(t) * Math.cos(t)
        ref.current.position.set(x, y, z)
      }
    })
  })

  return (
    <>
      <AbstractOpal scale={0.001} rotation={[0, 0, 0]} position={[0, 0, 0]} />
      <AquaCrystal scale={3} rotation={[0, 0, 0]} position={[0.5, 0, 0]} />
      <Crystal scale={0.01} rotation={[0, 0, 0]} position={[1, 0, 0]} />
      <CrystalHeart scale={0.05} rotation={[0, 0, 0]} position={[1.5, 0, 0]} />
      <IcyBlueCrystal scale={0.02} rotation={[0, 0, 0]} position={[2, 0, 0]} />
      <PinkCrystal scale={0.02} rotation={[0, 0, 0]} position={[2.5, 0, 0]} />
      <RedPurpleCrystal scale={0.02} rotation={[0, 0, 0]} position={[3, 0, 0]} />
      <RedPurpleCrystalCluster scale={0.01} rotation={[0, 0, 0]} position={[3.5, 0, 0]} />
      <VioletCrystal scale={0.002} rotation={[0, 0, 0]} position={[4, 0, 0]} />
      <RedGreenCrystal scale={0.002} rotation={[0, 0, 0]} position={[4.5, 0, 0]} />
    </>
  )
}

export { Models }

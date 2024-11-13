'use client'
import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { Bloom, BrightnessContrast, EffectComposer, HueSaturation, LUT, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode, LUTCubeLoader } from 'postprocessing'
import LiquidOpal from './LiquidOpal'

import * as THREE from 'three'

export default function Scene() {
  const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube') as unknown as THREE.Texture
  return (
    <Canvas>
      <LiquidOpal />
      <Environment files='./hdr/HDR_blue_nebulae-1.hdr'>
        <group rotation={[0, 0, 1]}>
          <Lightformer
            form='circle'
            intensity={5}
            position={[0, 10, -10]}
            scale={200}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
          <Lightformer
            intensity={0.05}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[-5, 1, -1]}
            rotation-y={Math.PI / 2}
            scale={[50, 10, 1]}
          />
          <Lightformer
            intensity={0.05}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[10, 1, 0]}
            rotation-y={-Math.PI / 2}
            scale={[50, 10, 1]}
          />
          <Lightformer
            color='navy'
            intensity={0.1}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[0, 1, 0]}
            scale={[10, 100, 1]}
          />
        </group>
      </Environment>
      <EffectComposer enableNormalPass>
        <Bloom mipmapBlur luminanceThreshold={1} intensity={1} />
        <LUT lut={texture} />
        <BrightnessContrast brightness={0} contrast={0.1} />
        <HueSaturation hue={0} saturation={-0.25} />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </Canvas>
  )
}

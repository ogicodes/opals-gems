'use client'

import { Canvas, addEffect } from '@react-three/fiber'
import { View, Preload, Float, Environment, OrbitControls } from '@react-three/drei'
import { HandModel, CrystalModel, CardModel } from '../src/components/Models'
import { ButtonsCard } from './components/ui/tailwindcss-buttons'
import { BackgroundBeams } from './components/ui/background-beams'
import ImageGallery from '@/components/ImageGallery'
import UpcomingFairs from '@/components/UpcomingFairs'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

// Use lenis smooth scroll
const lenis = new Lenis({ syncTouch: true })
// Integrate into fibers own raf loop instead of opening another
addEffect((t) => lenis.raf(t))

export default function Page() {
  return (
    <main>
      {/* Heading */}
      <div className='flex justify-center items-center mt-10'>
        <h1 className=' font-regular text-4xl text-center md:text-6xl lg:text-8xl'>
          Opal's <br /> Jewels and Gems
        </h1>
      </div>

      {/* Section 1: Crystal Hand Scene */}
      <View className=' h-[650px]'>
        <Common />
        <Float floatingRange={[-1, 0.5]}></Float>
        <HandModel scale={0.08} position={[0, -2, 0]} rotation={[1.8, 0, 0]} />
        <OrbitControls />
      </View>

      {/* Button */}
      <div className='flex justify-center items-center'>
        <ButtonsCard>
          <button className='p-[3px] relative rounded-lg'>
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]' />
            <div className='px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent font-mono'>
              Where To Find Us
            </div>
          </button>
        </ButtonsCard>
      </div>

      {/* About Us Section */}
      <section className='container mx-auto p-8'>
        <div className='flex flex-col items-start mb-8'>
          <h2 className='text-4xl font-regular'>About Us</h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center mb-12'>
          <div className='lg:w-3/5 text-lg leading-relaxed'>
            <p className='text-justify font-mono'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              explicabo. dolores amet, dicta sunt ullamq consequuntur magni sequi aliquam laboriosam, esse voluptatem.
              beatae vitae dicta beatae vitae dicta rem volute aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit a eos qui incidt
              consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
              ratione corporis suscipit velit in ea voluptate as paraiatur? quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam aycfe nisi ut aliquid ex ea commodi consequatur? Quis autem vel
              eum iure reprehenderit qui quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
              nulla
            </p>
          </div>
          <div className='lg:w-2/5 mt-8 lg:mt-0 lg:ml-8'>
            <View className='view scale' style={{ height: 300 }}>
              <Common />
              <Float
                speed={1} // Animation speed, defaults to 1
                rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[-1, 0.5]}
              >
                <CardModel scale={0.5} position={[0, 0, 0]} rotation={[0, 3.2, 0]} />
              </Float>
              <OrbitControls />
            </View>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row-reverse items-center'>
          <div className='lg:w-3/5 text-lg leading-relaxed'>
            <p className='text-justify font-mono'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              explicabo. dolores amet, dicta sunt ullamq consequuntur magni sequi aliquam laboriosam, esse voluptatem.
              beatae vitae dicta beatae vitae dicta rem volute aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit a eos qui incidt
              consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
              ratione corporis suscipit velit in ea voluptate as paraiatur? quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam aycfe nisi ut aliquid ex ea commodi consequatur? Quis autem vel
              eum iure reprehenderit qui quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
              nulla
            </p>
          </div>
          <div className='lg:w-2/5 mt-8 lg:mt-0 lg:mr-8'>
            <View className='view scale' style={{ height: 300 }}>
              <Common />
              <Float
                speed={1} // Animation speed, defaults to 1
                rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[-1, 0.5]}
              >
                <CrystalModel scale={0.4} position={[0, -2, 0]} rotation={[0, 3.5, 0]} />
              </Float>
              <OrbitControls />
            </View>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className='container mx-auto p-8'>
        <div className='flex flex-col items-end mb-8'>
          <h2 className='text-4xl font-regular'>Gallery</h2>
          <ImageGallery />
        </div>
      </section>
      <section className='flex flex-col lg:flex-row justify-between items-center w-full'>
        <div
          className='visme_d'
          data-title='Form Test'
          data-url='pvpjmkgo-form-test'
          data-domain='forms'
          data-full-page='false'
          data-min-height='500px'
          data-form-id='101973'
        ></div>
        <ScriptLoader src='https://static-bundles.visme.co/forms/vismeforms-embed.js' />
        <UpcomingFairs />
      </section>
      <section className='container mx-auto p-8'>
        <div className='flex flex-row justify-between items-center mb-8'>
          <p className=' font-mono text-sm font-bold'>All Rights Reserved</p>
          <p className=' font-mono text-sm font-bold'>Opal's Jewels and Gems 2024</p>
        </div>
      </section>
      {/** Fixed fullscreen canvas on top of everything, events tied to index root */}
      <Canvas style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden', zIndex: -1 }}>
        <View.Port />
        <Preload all />
      </Canvas>
      <BackgroundBeams />
    </main>
  )
}

// Component to load external script
function ScriptLoader({ src }: { src: string }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [src])

  return null
}

// Common scene setup
function Common() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset='dawn' />
    </>
  )
}

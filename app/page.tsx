'use client'

import { addEffect } from '@react-three/fiber'
import { BackgroundBeams } from './components/ui/background-beams'
import ImageGallery from '@/components/ImageGallery'
import UpcomingFairs from '@/components/UpcomingFairs'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamic Import for scene components
const Scene = dynamic(() => import('@/components/scene'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

// Dynamic Import for About Us Scene components
const AboutUsScene = dynamic(() => import('@/components/AboutUsScene'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

// Use lenis smooth scroll
const lenis = new Lenis({ syncTouch: true })
// Integrate into fibers own raf loop instead of opening another
addEffect((t) => lenis.raf(t))

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

export default function Page() {
  return (
    <main>
      {/* Floating Opal Hero Section*/}
      <section className='relative h-screen'>
        <Scene />
      </section>

      {/* About Us Section */}
      <section className='relative h-screen'>
        <AboutUsScene />
      </section>

      {/* Gallery Section */}
      <section className='container mx-auto p-8'>
        <div className='flex flex-col items-end mb-8'>
          <h2 className='text-6xl font-bold bg-gradient-to-r from-pastelPink via-pastelBlue to-pastelBeige text-transparent bg-clip-text animate-gradient-flow'>
            Gallery
          </h2>
          <ImageGallery />
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <section className='p-14'>
        <div className='flex flex-row justify-between items-center mb-2'>
          <p className=' font-mono text-sm font-bold'>All Rights Reserved</p>
          <p className=' font-mono text-sm font-bold'>Opal&apos;s Jewels and Gems 2024</p>
        </div>
      </section>
      <BackgroundBeams className='z-[-2]' />
    </main>
  )
}

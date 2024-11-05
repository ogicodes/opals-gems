'use client'

import Scene from '@/components/scene'

export default function Page() {
  return (
    <main>
      <div className='flex justify-center items-center mt-10'>
        <h1 className='font-mono font-semibold text-4xl text-center md:text-6xl lg:text-8xl'>
          Opal's <br /> Jewels and Gems
        </h1>
      </div>
      <div className=' w-full h-[600px]'>
        <Scene />
      </div>
      <div className='flex justify-center items-center'>
        <button className='p-[3px] relative rounded-lg'>
          <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]' />
          <div className='px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
            Lit up borders
          </div>
        </button>
      </div>
    </main>
  )
}

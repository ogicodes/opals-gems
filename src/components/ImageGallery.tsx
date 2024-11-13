'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import placeholder from '../../public/images/placeholder.png'

// Define the structure of our image objects
import { StaticImageData } from 'next/image'

interface ImageItem {
  src: StaticImageData
  alt: string
}

// Sample image data - replace with your own images
const images: ImageItem[] = [
  { src: placeholder, alt: 'Sample image 1' },
  { src: placeholder, alt: 'Sample image 2' },
  { src: placeholder, alt: 'Sample image 3' },
  { src: placeholder, alt: 'Sample image 4' },
  { src: placeholder, alt: 'Sample image 5' },
  { src: placeholder, alt: 'Sample image 6' },
  { src: placeholder, alt: 'Sample image 7' },
  { src: placeholder, alt: 'Sample image 8' },
  { src: placeholder, alt: 'Sample image 9' },
  { src: placeholder, alt: 'Sample image 10' },
  { src: placeholder, alt: 'Sample image 11' },
  { src: placeholder, alt: 'Sample image 12' },
  { src: placeholder, alt: 'Sample image 13' },
  { src: placeholder, alt: 'Sample image 14' },
  { src: placeholder, alt: 'Sample image 15' },
  { src: placeholder, alt: 'Sample image 16' },
  { src: placeholder, alt: 'Sample image 17' },
  { src: placeholder, alt: 'Sample image 18' },
  { src: placeholder, alt: 'Sample image 19' },
  { src: placeholder, alt: 'Sample image 20' },
]

export default function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<ImageItem | null>(null)

  const openLightbox = (image: ImageItem) => {
    setCurrentImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentImage(null)
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group'
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className='object-cover w-full h-full transition-all duration-300 filter grayscale group-hover:filter-none'
            />
          </div>
        ))}
      </div>

      {lightboxOpen && currentImage && (
        <div className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'>
          <button
            onClick={closeLightbox}
            className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300'
          >
            <X size={32} />
            <span className='sr-only'>Close</span>
          </button>
          <div className='max-w-4xl max-h-full p-4'>
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className='object-contain w-full h-full'
            />
          </div>
        </div>
      )}
    </div>
  )
}

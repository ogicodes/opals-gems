"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import opalsGems1 from "../../public/images/opalsgems1.jpeg";
import opalsGems2 from "../../public/images/opalsgems2.jpeg";
import opalsGems3 from "../../public/images/opalsgems3.jpeg";
import opalsGems4 from "../../public/images/opalsgems4.jpeg";
import opalsGems5 from "../../public/images/opalsgems5.jpeg";
import opalsGems6 from "../../public/images/opalsgems6.jpeg";
import opalsGems7 from "../../public/images/opalsgems7.jpeg";

// Define the structure of our image objects
import { StaticImageData } from "next/image";

interface ImageItem {
  src: StaticImageData;
  alt: string;
}

// Sample image data - replace with your own images
const images: ImageItem[] = [
  { src: opalsGems1, alt: "Sample image 1" },
  { src: opalsGems2, alt: "Sample image 2" },
  { src: opalsGems3, alt: "Sample image 3" },
  { src: opalsGems4, alt: "Sample image 4" },
  { src: opalsGems5, alt: "Sample image 5" },
  { src: opalsGems6, alt: "Sample image 6" },
  { src: opalsGems7, alt: "Sample image 7" },
];

export default function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageItem | null>(null);

  const openLightbox = (image: ImageItem) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-all duration-300 filter grayscale group-hover:filter-none"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
          >
            <X size={32} />
            <span className="sr-only">Close</span>
          </button>
          <div className="max-w-4xl max-h-full p-4">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

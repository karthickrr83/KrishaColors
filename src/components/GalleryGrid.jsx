import { useState } from 'react';
import { galleryImages } from '../data/content';

const GalleryGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🔥 Section Heading */}
      <div className="container-base">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
          Project Gallery
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl">
          Explore our premium painting transformations across Tamil Nadu.
        </p>
      </div>

      {/* 🎬 Gallery Grid */}
      <div className="container-base mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl"
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.title}
              className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-500" />

            {/* Title */}
            <div className="absolute bottom-4 left-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-sm font-semibold">
                {image.title}
              </p>
            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-brand-yellow/50 transition duration-300"></div>
          </div>
        ))}
      </div>

      {/* 🎥 FULLSCREEN MODAL */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md">

          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-2xl font-bold hover:scale-125 transition"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-3xl hover:scale-125 transition"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-3xl hover:scale-125 transition"
          >
            ›
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl w-full px-4">

            {/* Image */}
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].title}
              className="w-full max-h-[80vh] object-cover rounded-2xl shadow-2xl animate-fadeIn"
            />

            {/* Caption */}
            <p className="mt-4 text-center text-gray-300 text-sm">
              {galleryImages[activeIndex].title}
            </p>
          </div>
        </div>
      )}

      {/* ✨ Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease;
        }
      `}</style>
    </section>
  );
};

export default GalleryGrid;
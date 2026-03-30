import { useState } from 'react';
import { galleryImages } from '../data/content';

const GalleryGrid = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="container-base py-14">
      <h2 className="section-heading">Project Gallery</h2>
      <p className="section-subheading">Browse selected projects across Tamil Nadu homes and businesses.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setActiveImage(image)}
            className="group relative overflow-hidden rounded-2xl"
            aria-label={`Open ${image.title}`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveImage(null)}
        >
          <figure className="max-w-3xl overflow-hidden rounded-2xl bg-white">
            <img src={activeImage.src} alt={activeImage.title} className="max-h-[80vh] w-full object-cover" />
          </figure>
        </div>
      ) : null}
    </section>
  );
};

export default GalleryGrid;

import Seo from '../components/Seo';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => (
  <main>
    <Seo
      title="Gallery | Painting Contractor in Tamil Nadu"
      description="View completed home and commercial painting projects by Krisha Colors across Tamil Nadu."
    />
    <section className="container-base py-14">
      <h1 className="section-heading">Our Work Gallery</h1>
      <p className="section-subheading">From classic finishes to modern textures, each project reflects precision and craftsmanship.</p>
    </section>
    <GalleryGrid />
  </main>
);

export default Gallery;

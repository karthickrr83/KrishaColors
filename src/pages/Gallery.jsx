import Seo from '../components/Seo';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => (
  <main>
    <Seo
      title="Gallery | Painters in Coimbatore"
      description="See completed wall painting and home painting projects by Krisha Colours in Coimbatore, including interior and exterior transformations."
      keywords="wall painting Coimbatore, home painting Coimbatore, painters in Coimbatore, interior painting Coimbatore, exterior painting Coimbatore"
    />
    <section className="container-base py-14">
      <h1 className="section-heading">Our Painting Portfolio</h1>
      <p className="section-subheading">Explore our latest Coimbatore painting projects for interiors, exteriors and designer walls that deliver durable beauty.</p>
    </section>
    <GalleryGrid />
  </main>
);

export default Gallery;

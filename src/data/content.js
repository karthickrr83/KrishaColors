export const services = [
  {
    title: 'Interior Painting',
    description: 'Dust-free, low-odor premium finishes for villas, apartments, and independent homes.',
    icon: '🏠',
  },
  {
    title: 'Exterior Painting',
    description: 'Weather-resistant coatings that protect and elevate your property facade in Tamil Nadu climate.',
    icon: '🏢',
  },
  {
    title: 'Texture & Designer Walls',
    description: 'Modern accent walls and textures designed to match your lifestyle and interiors.',
    icon: '🎨',
  },
  {
    title: 'Waterproofing & Repairs',
    description: 'Crack filling, seepage treatment, and prep work for durable, flawless paint outcomes.',
    icon: '🛡️',
  },
];

export const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: [
    'Coimbatore Living Room Wall Painting',
    'Tamil Nadu Exterior Painting Transformation',
    'Coimbatore Bedroom Interior Paint',
    'Modern Texture Wall Finish in Coimbatore',
    'Exterior House Painting in Coimbatore',
    'Commercial Space Painting in Tamil Nadu',
    'Interior Painting for Family Homes',
    'Designer Wall Painting in Coimbatore',
  ][i],
  src: `https://images.unsplash.com/photo-${
    ['1578301978018-3005759f48f7', '1562259929-b4e1fd3aef09', '1505693416388-ac5ce068fe85', '1489515217757-5fd1be406fef', '1505691938895-1758d7feb511', '1538688525198-9b88f6f53126', '1582719188393-bb71ca45dbb9', '1616046229478-9901c5536a45'][i]
  }?auto=format&fit=crop&w=900&q=80`,
}));

export const beforeAfter = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
    after: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80',
    after: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  },
];

export const testimonials = [
  {
    name: 'Raghavan S.',
    role: 'Homeowner, Coimbatore',
    quote: 'Professional team, clear timelines, and beautiful finish. Our home looks brand new.',
  },
  {
    name: 'Vidhya K.',
    role: 'Villa Owner, Chennai',
    quote: 'Loved their design suggestions and neat execution. Highly recommended for premium projects.',
  },
  {
    name: 'Pradeep M.',
    role: 'Retail Store, Madurai',
    quote: 'They completed our commercial painting with zero business disruption. Great service quality.',
  },
];

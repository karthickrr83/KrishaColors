import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULT_KEYWORDS = [
  'wall painting Coimbatore',
  'home painting Coimbatore',
  'painters in Coimbatore',
  'interior painting Coimbatore',
  'exterior painting Coimbatore',
].join(', ');

const buildLocalBusinessJsonLD = (url, image, description) => ({
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Krisha Colours',
  description,
  url,
  telephone: '+919715334907',
  email: 'crazykarthi83@gmail.com',
  image,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Coimbatore, Tamil Nadu',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.0168,
    longitude: 76.9558,
  },
  areaServed: ['Coimbatore', 'Tamil Nadu'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:30',
      closes: '19:00',
    },
  ],
});

const Seo = ({ title, description, keywords = DEFAULT_KEYWORDS, image }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const jsonLd = useMemo(
    () => buildLocalBusinessJsonLD(currentUrl, image || 'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80', description),
    [currentUrl, image, description]
  );

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default Seo;

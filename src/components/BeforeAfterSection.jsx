import { useState } from 'react';

/* 🔥 Reusable Slider Component */
const BeforeAfterSlider = ({ before, after }) => {
  const [slider, setSlider] = useState(50);

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        height: 320,
        cursor: 'ew-resize',
        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSlider(
          Math.max(
            5,
            Math.min(95, ((e.clientX - rect.left) / rect.width) * 100)
          )
        );
      }}
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSlider(
          Math.max(
            5,
            Math.min(
              95,
              ((e.touches[0].clientX - rect.left) / rect.width) * 100
            )
          )
        );
      }}
    >
      {/* AFTER */}
      <img
        src={after}
        alt="After painting transformation by Krisha Colours"
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* BEFORE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 ${100 - slider}% 0 0)`,
        }}
      >
        <img
          src={before}
          alt="Before painting condition for wall painting project"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            background: '#374151',
            color: '#fff',
            padding: '5px 12px',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          BEFORE
        </div>
      </div>

      {/* AFTER TAG */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          background: '#1B4FD8',
          color: '#fff',
          padding: '5px 12px',
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 700,
        }}
      >
        AFTER
      </div>

      {/* SLIDER */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${slider}%`,
          width: 3,
          background: '#fff',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            color: '#1B4FD8',
            fontWeight: 700,
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
        >
          ⇄
        </div>
      </div>
    </div>
  );
};

/* 🔥 MAIN SECTION */
const BeforeAfterSection = () => {
  const data = [
    {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
      after: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800',
    },
    {
      before: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    },
    {
      before: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    },
  ];

  return (
    <section style={{ padding: '100px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#0F172A',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Before <span style={{ color: '#F59E0B' }}>&</span> After
        </h2>

        <p style={{ marginTop: 10, color: '#475569' }}>
          Real transformations delivered by Krisha Colors.
        </p>

        {/* GRID */}
        <div
          style={{
            marginTop: 50,
            display: 'grid',
            gap: 30,
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {data.map((item, index) => (
            <BeforeAfterSlider
              key={index}
              before={item.before}
              after={item.after}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;
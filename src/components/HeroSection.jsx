import { useState, useEffect } from 'react';

const phone = import.meta.env.VITE_BUSINESS_PHONE || '+919715334907';

/* Small floating info card that sits on top of the hero image */
function FloatBadge({ style, children }) {
  return (
    <div
      style={{
        position: 'absolute',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  // ✅ SAFE CALL HANDLER (ADDED ONLY FOR SAFETY)
  const handleCall = (e) => {
    e.preventDefault();
    window.location.href = `tel:${phone}`;
  };

  return (
    <section
      style={{
        padding: '120px 5vw 80px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
      }}
    >

      <div style={{
        position:'absolute', top:-180, right:-180,
        width:600, height:600, borderRadius:'50%',
        background:'rgba(59,130,246,0.07)', pointerEvents:'none',
      }} />

      <div style={{
        position:'absolute', bottom:-120, left:-100,
        width:440, height:440, borderRadius:'50%',
        background:'rgba(245,158,11,0.07)', pointerEvents:'none',
      }} />

      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:
          'radial-gradient(circle, rgba(27,79,216,0.055) 1px, transparent 1px)',
        backgroundSize:'30px 30px',
      }} />

      <div
        className="kc-hero-grid"
        style={{
          maxWidth:1200,
          margin:'0 auto',
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:60,
          alignItems:'center',
          width:'100%',
          position:'relative',
          zIndex:1,
        }}
      >

        {/* LEFT SIDE */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(38px)',
            transition:'opacity 0.85s ease, transform 0.85s ease',
          }}
        >

          <div style={{
            display:'inline-flex',
            alignItems:'center',
            gap:8,
            background:'#EEF2FF',
            border:'1.5px solid #C7D7FD',
            padding:'6px 16px',
            borderRadius:999,
            marginBottom:24,
          }}>
            <span style={{
              width:7,
              height:7,
              borderRadius:'50%',
              background:'#1B4FD8',
              display:'inline-block',
              animation:'kc-pulse 2.2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize:12.5,
              fontWeight:700,
              color:'#1B4FD8',
              letterSpacing:'0.07em',
              textTransform:'uppercase',
            }}>
              Trusted Painting Contractor in Tamil Nadu
            </span>
          </div>

          <h1 style={{
            fontSize:'clamp(2.2rem, 4.4vw, 3.6rem)',
            fontWeight:900,
            lineHeight:1.1,
            color:'#0F172A',
            fontFamily: "'Poppins', sans-serif",
            marginBottom:22,
            letterSpacing:'-1.5px',
          }}>
            Premium Painting<br />
            <span style={{ color:'#1B4FD8' }}>Services</span> That<br />
            Transform Spaces<br />
            <span style={{ color:'#F59E0B' }}>&amp;</span> Build Trust
          </h1>

          <p style={{
            fontSize:17,
            color:'#475569',
            lineHeight:1.8,
            marginBottom:38,
            maxWidth:460,
          }}>
            Krisha Colors delivers interior, exterior, and designer painting with
            expert workmanship, transparent pricing, and on-time completion —
            across Tamil Nadu.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:14, marginBottom:44 }}>

            {/* ✅ CALL BUTTON (ONLY CHANGE IS onClick safety) */}
            <a
              href={`tel:${phone}`}
              onClick={handleCall}
              style={{
                background:'#1B4FD8',
                color:'#fff',
                padding:'14px 28px',
                borderRadius:12,
                fontSize:15,
                fontWeight:800,
                textDecoration:'none',
                display:'inline-flex',
                alignItems:'center',
                gap:8,
                boxShadow:'0 6px 24px rgba(27,79,216,0.35)',
                transition:'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(27,79,216,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(27,79,216,0.35)';
              }}
            >
              📞 Call Now
            </a>

            <a
              href="/contact"
              style={{
                background:'transparent',
                color:'#1B4FD8',
                padding:'13px 28px',
                borderRadius:12,
                fontSize:15,
                fontWeight:800,
                textDecoration:'none',
                display:'inline-flex',
                alignItems:'center',
                gap:8,
                border:'2px solid #1B4FD8',
                transition:'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1B4FD8';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1B4FD8';
              }}
            >
              ✉ Enquiry
            </a>
          </div>

          <div style={{ display:'flex', flexWrap:'wrap', gap:22 }}>
            {[
              { icon:'✅', label:'Licensed & Insured' },
              { icon:'🏆', label:'Award Winning' },
              { icon:'⚡', label:'On-Time Delivery' },
            ].map(c => (
              <div key={c.label} style={{ display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ fontSize:15 }}>{c.icon}</span>
                <span style={{ fontSize:13, fontWeight:700, color:'#374151' }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(52px)',
            transition:'opacity 0.9s ease 0.18s, transform 0.9s ease 0.18s',
            position:'relative',
          }}
        >

          <div style={{
            borderRadius:28,
            overflow:'hidden',
            aspectRatio:'4/3',
            background:'#E2E8F0',
            boxShadow:'0 32px 80px rgba(27,79,216,0.15)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80"
              alt="Professional wall painters in Coimbatore by Krisha Colours"
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              style={{
                width:'100%',
                height:'100%',
                objectFit:'cover',
                display:'block',
                opacity: imgLoaded ? 1 : 0,
                transition:'opacity 0.5s ease',
              }}
            />
          </div>

          <FloatBadge style={{ bottom:-26, left:-26 }}>
            <div style={{ textAlign:'center' }}>
              <div style={{
                fontSize:28,
                fontWeight:900,
                color:'#1B4FD8',
                fontFamily:'Poppins, sans-serif',
                lineHeight:1,
              }}>850+</div>
              <div style={{ fontSize:11, color:'#9CA3AF', fontWeight:600, marginTop:3 }}>
                Projects Done
              </div>
            </div>

            <div style={{ width:1, height:36, background:'#E5E7EB' }} />

            <div style={{ textAlign:'center' }}>
              <div style={{
                fontSize:28,
                fontWeight:900,
                color:'#F59E0B',
                fontFamily:'Poppins, sans-serif',
                lineHeight:1,
              }}>12+</div>
              <div style={{ fontSize:11, color:'#9CA3AF', fontWeight:600, marginTop:3 }}>
                Years Exp.
              </div>
            </div>
          </FloatBadge>

          <div style={{
            position:'absolute',
            top:-20,
            right:-20,
            background:'linear-gradient(135deg, #1B4FD8, #2563EB)',
            color:'#fff',
            borderRadius:16,
            padding:'14px 20px',
            textAlign:'center',
            minWidth:82,
            boxShadow:'0 12px 36px rgba(27,79,216,0.42)',
          }}>
            <div style={{ fontSize:24, fontWeight:900, lineHeight:1 }}>98%</div>
            <div style={{ fontSize:10, fontWeight:700, opacity:0.88, marginTop:3 }}>
              Satisfaction
            </div>
          </div>

          <FloatBadge style={{ bottom:28, right:-22 }}>
            <span style={{ fontSize:20 }}>⭐</span>
            <div>
              <div style={{
                fontSize:13,
                fontWeight:800,
                color:'#92400E',
                lineHeight:1.2,
              }}>
                4.9 / 5.0
              </div>
              <div style={{ fontSize:10, color:'#B45309', fontWeight:600 }}>
                Google Rating
              </div>
            </div>
          </FloatBadge>

        </div>
      </div>

      <style>{`
        @keyframes kc-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.72); }
        }

        @media (max-width: 767px) {
          .kc-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
# Krisha Colors - Painting Contractor Website

Production-ready React (Vite) + Tailwind CSS marketing website for a **Painting Contractor in Tamil Nadu**.

## Tech Stack
- React (Vite)
- Tailwind CSS
- React Router
- EmailJS (contact form)
- No backend

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment template:
   ```bash
   cp .env.example .env
   ```
3. Add your EmailJS keys in `.env`.
4. Start development server:
   ```bash
   npm run dev
   ```

## Build
```bash
npm run build
npm run preview
```

## EmailJS Environment Variables
```env
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_BUSINESS_PHONE=
VITE_WHATSAPP_NUMBER=
```

## Folder Structure
```text
src/
  components/
    BeforeAfterSection.jsx
    ContactForm.jsx
    FloatingActions.jsx
    GalleryGrid.jsx
    HeroSection.jsx
    Navbar.jsx
    ScrollToTopButton.jsx
    ScrollToTopOnRoute.jsx
    Seo.jsx
    ServicesCards.jsx
    Testimonials.jsx
  data/
    content.js
  hooks/
    useSeo.js
  layout/
    Footer.jsx
  pages/
    About.jsx
    Contact.jsx
    Gallery.jsx
    Home.jsx
    Services.jsx
  App.jsx
  index.css
  main.jsx
```

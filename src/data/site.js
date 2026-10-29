// ------------------------------------------------------------
// All the editable content for the site lives in this file.
// Change text, phone numbers or image links here, save, and the
// page updates. You should not need to touch index.astro for
// everyday content edits.
// ------------------------------------------------------------

// Photos are free Unsplash placeholders for now.
// See README "Open items before launch".
const unsplash = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?fm=jpg&q=70&w=${w}&auto=format&fit=crop`;

export const site = {
  name: 'Ritz Floor & Decor',
  legalName: 'Ritz Floor & Decor Ltd',
  title: 'Ritz Floor & Decor | Flooring & tile showroom, Chilliwack & Hope',
  description:
    'Vinyl, laminate, engineered wood, hardwood, carpet and porcelain and ceramic tile from around the world. Lowest prices in the area guaranteed, with supply and install from showrooms in Chilliwack and Hope.',

  // Main phone (Chilliwack) used in the header and the bottom bar
  phone: '604-702-2233',
  phoneHref: 'tel:16047022233',
  email: 'ritzfloor@gmail.com',
  facebook: 'https://www.facebook.com/RitzFloorDecor/',

  // Paste your Formspree form URL here, e.g. 'https://formspree.io/f/abcdwxyz'
  // Leave it empty and the form will only show the thank-you message.
  formEndpoint: '',

  nav: [
    { label: 'Flooring', href: '#floors' },
    { label: 'Installation', href: '#install' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit us', href: '#visit' },
  ],

  hero: {
    eyebrow: 'Now serving 2 locations · Chilliwack & Hope',
    title: 'The latest floors from around the world,',
    titleAccent: 'under one roof.',
    text: 'Vinyl, laminate, engineered wood, carpet and porcelain and ceramic tile, with the lowest prices in the area guaranteed and installers who finish on time.',
    img: unsplash('photo-1585128792020-803d29415281', 1600),
    imgAlt: 'Living room with warm wood flooring',
    // Colours of the 5 "plank" bars that slide in over the hero photo
    planks: ['#D9561A', '#F08A4B', '#FBF7F1', '#F39A5E', '#D9561A'],
  },

  proof: [
    { t: 'Lowest price', d: 'Guaranteed in the area' },
    { t: 'Two showrooms', d: 'Chilliwack & Hope' },
    { t: 'Supply & install', d: 'Removal, installation, delivery' },
    { t: 'Home & commercial', d: 'Any size of space' },
  ],

  floorsIntro: {
    title: 'Walk the showroom.',
    text: 'Our knowledgeable staff will help you choose the right floor for your home or commercial space, and your budget.',
  },
  floors: [
    { t: 'Vinyl', img: unsplash('photo-1560185008-b033106af5c3'), d: 'Waterproof and hard-wearing, ideal for kitchens and basements.' },
    { t: 'Laminate', img: unsplash('photo-1611072337226-1140ab367200'), d: 'The look of wood at a friendlier price.' },
    { t: 'Engineered wood', img: unsplash('photo-1598718544285-7180f670198b'), d: 'Real hardwood on a stable core.' },
    { t: 'Hardwood', img: unsplash('photo-1548268364-3acee266b695'), d: 'Solid, timeless and refinishable.' },
    { t: 'Porcelain tile', img: unsplash('photo-1515895309288-a3815ab7cf81'), d: 'Stone looks that stand up to anything.' },
    { t: 'Ceramic tile', img: unsplash('photo-1534503442463-e0ddba45cf4c'), d: 'From reputable global brands, plus carpet for bedrooms and stairs.' },
  ],

  installIntro: {
    title: 'On budget.',
    titleAccent: 'On time.',
    text: 'We respect your budget, finish on time and complete every flooring project to the highest standard.',
  },
  install: [
    { n: 'i', t: 'Choose in store', d: 'Compare samples side by side with help from our staff.' },
    { n: 'ii', t: 'Measure & quote', d: 'A clear installed price, with the lowest-price guarantee.' },
    { n: 'iii', t: 'Removal & install', d: 'Courteous, efficient installers take out the old floor and put in the new.' },
    { n: 'iv', t: 'Pickup or delivery', d: 'Doing it yourself? Pick up in store or have it delivered.' },
  ],

  reviewsIntro: { title: '100% recommend.', note: 'From our customers on Facebook' },
  // Names are "Ritz customer" until the client confirms real names.
  reviews: [
    { q: 'The staff were friendly, knowledgeable and truly cared about helping me find the perfect flooring. The installation was smooth and professional, done on time with great attention to detail.', n: 'Ritz customer' },
    { q: 'The quality of their tiles and floors is top-notch, and Dave’s expertise shines through in every interaction. He goes above and beyond, and the prices are very reasonable.', n: 'Ritz customer' },
  ],

  storesIntro: { title: 'Two showrooms.', titleAccent: 'Come and see.' },
  stores: [
    {
      c: 'Chilliwack',
      street: 'Unit 16, 5725 Vedder Road',
      city: 'Chilliwack',
      a: 'Unit 16, 5725 Vedder Road, Chilliwack, BC',
      p: '604-702-2233',
      tel: 'tel:16047022233',
      map: 'https://maps.google.com/?q=5725+Vedder+Road+Chilliwack+BC',
    },
    {
      c: 'Hope',
      street: '509 Wallace Street',
      city: 'Hope',
      a: '509 Wallace Street, Hope, BC',
      p: '236-355-1000',
      tel: 'tel:12363551000',
      map: 'https://maps.google.com/?q=509+Wallace+St+Hope+BC',
    },
  ],

  quote: {
    title: 'Get an install quote.',
    text: 'Tell us the rooms and rough square footage. We’ll come back with product options and an installed price.',
    chipsLabel: 'Flooring type',
    chips: ['Vinyl', 'Laminate', 'Engineered', 'Hardwood', 'Carpet', 'Tile'],
    detailsLabel: 'Rooms & approx. sq ft',
    submitLabel: 'Request my quote',
    thanks: 'Thanks. We’ll be in touch with options and pricing.',
    error: 'Sorry, something went wrong sending your request. Please call us or try again.',
  },

  credit: { label: 'Website by Backpack Digital Media', href: 'https://backpackdigitalmedia.com' },
};

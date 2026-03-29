// ================================================================
//  CLIENT CONFIG — EDIT THIS FILE FOR EACH NEW CLIENT
//  Then deploy the website/ folder to Netlify
// ================================================================
window.CLIENT = {

  // --- Business info ---
  name:        "Business Name",
  tagline:     "Short description of what you do",
  logoSrc:     "assets/logo.png",   // drop client logo in assets/
  logoEmoji:   "🔧",               // fallback if no logo file
  phone:       "(403) 555-0000",
  email:       "info@business.com",
  address:     "Calgary, AB",

  // --- Brand color (one hex code changes everything) ---
  primaryColor: "#2563eb",
  primaryDark:  "#1d4ed8",

  // --- Hero section ---
  heroHeadline:          "Your compelling headline",
  heroHeadlineHighlight: "highlight",   // this word shows muted inside the headline
  heroSub:    "One or two sentences about your service. Keep it benefit-focused.",
  heroStats: [
    { value: "5★",   label: "Rated by locals" },
    { value: "100%", label: "Satisfaction guaranteed" },
  ],
  bookButtonText: "Book Now",

  // --- Services section ---
  servicesEyebrow: "Services",
  servicesTitle:   "Everything your [business] needs.",
  servicesSub:     "Short line about what you offer.",
  services: [
    { name: "Service One",   description: "What it includes and who it helps." },
    { name: "Service Two",   description: "What it includes and who it helps." },
    { name: "Service Three", description: "What it includes and who it helps." },
  ],

  // --- Pricing section ---
  pricingEyebrow: "Pricing",
  pricingTitle:   "Simple, transparent pricing.",
  pricingSub:     "We confirm everything before we start.",
  pricingNote:    "",   // optional footnote e.g. "* Rush add-on: $15"
  pricing: [
    {
      category: "Main Services",
      items: [
        { name: "Service One",   price: "$50" },
        { name: "Service Two",   price: "$40" },
      ],
    },
    {
      category: "Add-ons",
      items: [
        { name: "Add-on One", price: "$20" },
      ],
    },
  ],

  // --- How it works ---
  processEyebrow: "Process",
  processTitle:   "How it works.",
  process: [
    { title: "Book online",    desc: "Pick a date and time from our booking page." },
    { title: "We prepare",     desc: "We review your request and confirm details." },
    { title: "We do the work", desc: "Professional service, done right." },
    { title: "You're ready",   desc: "We text you when everything's done." },
  ],

  // --- Contact & social ---
  instagram:         "",    // full URL or leave ""
  facebook:          "",    // full URL or leave ""
  googleMapsLink:    "",    // Google Maps link

  // --- Booking page URL (your Railway backend) ---
  bookingUrl: "https://YOUR-APP.up.railway.app/book",
};

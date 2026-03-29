// ================================================================
//  CLIENT CONFIG — EDIT THIS FILE FOR EACH NEW CLIENT
// ================================================================
window.CLIENT = {

  // --- Business info ---
  name:        "Business Name",
  tagline:     "Short description of what you do",
  logoSrc:     "assets/logo.png",
  logoEmoji:   "🔧",
  phone:       "(403) 555-0000",
  email:       "info@business.com",
  address:     "Calgary, AB",

  // --- Brand color ---
  primaryColor: "#2563eb",
  primaryDark:  "#1d4ed8",

  // --- Hero (home page) ---
  heroEyebrow:   "Calgary's #1 Rated",
  heroHeadline:  "Your Main Headline Here",
  heroHighlight: "Headline",   // this word gets the brand color
  heroSub:       "A compelling one or two sentence description of your service and why locals choose you.",
  heroStats: [
    { value: "5★",   label: "Google Rating" },
    { value: "200+", label: "Happy Customers" },
    { value: "24h",  label: "Response Time" },
  ],

  // --- Services ---
  servicesEyebrow: "What We Offer",
  servicesTitle:   "Services built around you.",
  servicesSub:     "Everything you need, nothing you don't. Priced fairly and done right.",
  services: [
    { name: "Service One",   description: "What it includes and why customers love it.",  icon: "✦" },
    { name: "Service Two",   description: "What it includes and why customers love it.",  icon: "✦" },
    { name: "Service Three", description: "What it includes and why customers love it.",  icon: "✦" },
    { name: "Service Four",  description: "What it includes and why customers love it.",  icon: "✦" },
  ],

  // --- Pricing ---
  pricingEyebrow: "Pricing",
  pricingTitle:   "Transparent pricing. No surprises.",
  pricingSub:     "We confirm everything before we start. No hidden fees.",
  pricingNote:    "",
  pricing: [
    {
      category: "Main Services",
      items: [
        { name: "Service One", price: "$50" },
        { name: "Service Two", price: "$40" },
      ],
    },
    {
      category: "Add-ons",
      items: [
        { name: "Add-on One", price: "$20" },
        { name: "Add-on Two", price: "$15" },
      ],
    },
    {
      category: "Packages",
      items: [
        { name: "Starter Pack", price: "$75" },
        { name: "Full Package",  price: "$120" },
      ],
    },
  ],

  // --- Process ---
  processEyebrow: "How It Works",
  processTitle:   "Simple from start to finish.",
  process: [
    { title: "Book Online",    desc: "Pick a date and time that works for you. Takes 60 seconds.",       icon: "01" },
    { title: "We Confirm",     desc: "You'll get a text confirmation immediately after booking.",         icon: "02" },
    { title: "We Do the Work", desc: "Show up and let us handle everything. Professional every time.",    icon: "03" },
    { title: "Leave a Review", desc: "We follow up automatically and make it easy to share your experience.", icon: "04" },
  ],

  // --- Reviews page ---
  reviewsEyebrow: "What Customers Say",
  reviewsTitle:   "Trusted by locals across Calgary.",
  reviewsSub:     "Don't take our word for it.",
  reviews: [
    { name: "Sarah M.",  rating: 5, text: "Absolutely incredible service. Fast, affordable, and they actually care about doing it right. Will 100% be back." },
    { name: "James K.",  rating: 5, text: "Best experience I've had with a local business in Calgary. Booked online in under a minute, confirmed by text, done." },
    { name: "Priya D.",  rating: 5, text: "Professional, friendly, and worth every penny. My go-to from now on." },
    { name: "Tyler B.",  rating: 5, text: "Super easy to book and the results were exactly what I needed. Highly recommend." },
    { name: "Lisa C.",   rating: 4, text: "Great service and fair prices. Really appreciated the follow-up text after my appointment." },
    { name: "Omar H.",   rating: 5, text: "These guys are the real deal. Showed up, did the job, and made sure I was happy before they left." },
  ],
  googleReviewLink: "https://g.page/your-business",
  totalReviews: "150+",
  avgRating: "4.9",

  // --- Contact page ---
  contactEyebrow: "Get In Touch",
  contactTitle:   "We'd love to hear from you.",
  contactSub:     "Reach out any time. We typically respond within a few hours.",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday",        time: "10:00 AM – 4:00 PM" },
    { day: "Sunday",          time: "Closed" },
  ],

  // --- Social links ---
  instagram:      "",
  facebook:       "",
  googleMapsLink: "",

  // --- Booking URL (Railway backend) ---
  bookingUrl: "https://YOUR-APP.up.railway.app/book",
};

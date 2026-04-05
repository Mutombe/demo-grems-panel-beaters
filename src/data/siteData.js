export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Grems Panel Beaters",
    legalName: "GREMS PANEL BEATERS",
    tagline: "Precision Repair. Factory Finish.",
    description:
      "Grems Panel Beaters is a trusted auto body repair workshop in Tynwald, Harare. Specializing in panel beating, spray painting, and accident damage repair, we restore vehicles to factory-fresh condition with meticulous craftsmanship.",
    phone: "+263 71 893 3866",
    phoneRaw: "+263718933866",
    whatsappNumber: "263718933866",
    email: "repairs@gremspanelbeaters.co.zw",
    address: "Tynwald, 1188 22nd St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.6,
    ratingRounded: 5,
    reviewCount: 7,
    established: "2015",
    yearsExperience: "9+",
    projectsCompleted: "4,000+",
    employees: "12+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "grems-panel-beaters-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Grems",
    logoLine2: "Panel Beaters",
  },

  hero: {
    badge: "Tynwald's Trusted Auto Body Repair Specialists",
    titleParts: [
      { text: "PRECISION " },
      { text: "REPAIR", highlight: true },
      { text: " FACTORY FINISH." },
    ],
    subtitle:
      "From minor dents to major collision repair, Grems Panel Beaters restores your vehicle to showroom condition. 4,000+ repairs completed with uncompromising quality.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "See Our Work",
    trustBadge: "4,000+ Vehicles Restored",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=85", alt: "Grems Panel Beaters professional image 1" },
      { url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85", alt: "Grems Panel Beaters professional image 2" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=85", alt: "Grems Panel Beaters showcase" },
    ],
  },

  stats: [
    { number: "4000+", label: "Vehicles Repaired" },
    { number: "9+", label: "Years Experience" },
    { number: "100%", label: "Colour Match Rate" },
    { number: "48hr", label: "Average Turnaround" },
  ],

  servicesPreview: [
    {
      title: "Panel Beating",
      desc: "Expert metalwork to reshape, repair, and restore damaged body panels to their original contours using precision tools.",
      icon: "Wrench",
    },
    {
      title: "Spray Painting",
      desc: "Computer-matched paint mixing and professional spray booth application for flawless, factory-grade finishes.",
      icon: "Star",
    },
    {
      title: "Dent Removal",
      desc: "Paintless dent removal for minor dents and dings. Quick turnaround with no paint disturbance needed.",
      icon: "Car",
    },
    {
      title: "Accident Repair",
      desc: "Comprehensive collision damage repair including structural straightening, panel replacement, and complete refinishing.",
      icon: "HardHat",
    },
    {
      title: "Insurance Claims",
      desc: "Direct billing with major insurers. We handle all claims paperwork and assessor coordination on your behalf.",
      icon: "Lightbulb",
    },
    {
      title: "Custom Work",
      desc: "Body kit installation, custom paint jobs, and cosmetic modifications for customers wanting a unique look.",
      icon: "Buildings",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Panel Beating",
        slug: "panel-beating",
        desc: "Expert metalwork to reshape, repair, and restore damaged body panels to their original contours using precision tools.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      },
      {
        title: "Spray Painting",
        slug: "spray-painting",
        desc: "Computer-matched paint mixing and professional spray booth application for flawless, factory-grade finishes.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
      },
      {
        title: "Dent Removal",
        slug: "dent-removal",
        desc: "Paintless dent removal for minor dents and dings. Quick turnaround with no paint disturbance needed.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      },
      {
        title: "Accident Repair",
        slug: "accident-repair",
        desc: "Comprehensive collision damage repair including structural straightening, panel replacement, and complete refinishing.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
      },
      {
        title: "Insurance Claims",
        slug: "insurance-claims",
        desc: "Direct billing with major insurers. We handle all claims paperwork and assessor coordination on your behalf.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      },
      {
        title: "Custom Work",
        slug: "custom-work",
        desc: "Body kit installation, custom paint jobs, and cosmetic modifications for customers wanting a unique look.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Grems",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in panel beating.",
        client: "Commercial Client",
        services: ["Panel Beating", "Spray Painting"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Grems",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in spray painting.",
        client: "Residential Client",
        services: ["Spray Painting", "Dent Removal"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Grems",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in dent removal.",
        client: "Industrial Client",
        services: ["Dent Removal", "Accident Repair"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Grems",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in accident repair.",
        client: "Institutional Client",
        services: ["Accident Repair", "Insurance Claims"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Grems",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in insurance claims.",
        client: "Commercial Client",
        services: ["Insurance Claims", "Custom Work"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Grems",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in custom work.",
        client: "Residential Client",
        services: ["Custom Work", "Panel Beating"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Grems fixed a huge dent on my fender and the repair is completely invisible. Even the paint match is perfect. Highly recommend.",
      name: "Kudakwashe Nyathi",
      role: "Honda Accord Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "After a rear-end collision I was devastated, but Grems made my car look brand new. The insurance process was handled entirely by them.",
      name: "Rutendo Chigombe",
      role: "Insurance Claim Client",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "Fast, affordable, and the quality is excellent. I have referred all my friends and family to Grems. They never disappoint.",
      name: "Bernard Matambo",
      role: "Repeat Customer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "I wanted a custom paint job on my GTI and Grems delivered beyond my expectations. The metallic finish is absolutely flawless.",
      name: "Tino Madzore",
      role: "Custom Paint Client",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Grems Panel Beaters was founded in Tynwald with one mission: deliver factory-quality body repairs at fair prices. Our workshop on 22nd Street has grown from a small operation into one of Harare's most trusted panel beating facilities.",
      "With over 4,000 vehicles repaired, our reputation is built on precision craftsmanship, honest assessments, and turnaround times that respect your schedule. Every repair is treated as if it were our own vehicle.",
    ],
    values: [
      { title: "Computer Colour Matching", desc: "Our spectrophotometer matches your exact paint code for seamless, invisible repairs." },
      { title: "Fast Turnaround", desc: "Most repairs completed within 48 hours. We respect your time and get you back on the road quickly." },
      { title: "Insurance Approved", desc: "Approved by major insurance companies. We handle all claims paperwork and assessor appointments." },
      { title: "Warranty on All Work", desc: "Every repair comes with a written warranty covering workmanship and paint durability." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Grems fixed a huge dent on my fender and the repair is completely invisible. Even the paint match is perfect. Highly recommend.", name: "Kudakwashe Nyathi", role: "Honda Accord Owner", rating: 5 },
      { text: "After a rear-end collision I was devastated, but Grems made my car look brand new. The insurance process was handled entirely by them.", name: "Rutendo Chigombe", role: "Insurance Claim Client", rating: 5 },
      { text: "Fast, affordable, and the quality is excellent. I have referred all my friends and family to Grems. They never disappoint.", name: "Bernard Matambo", role: "Repeat Customer", rating: 5 },
      { text: "I wanted a custom paint job on my GTI and Grems delivered beyond my expectations. The metallic finish is absolutely flawless.", name: "Tino Madzore", role: "Custom Paint Client", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Grems Panel Beaters",
        address: "Tynwald, 1188 22nd St, Harare, Zimbabwe",
        phone: "+263 71 893 3866",
        email: "repairs@gremspanelbeaters.co.zw",
      },
    ],
  },

  homeCta: {
    title: "RESTORE YOUR RIDE",
    subtitle: "Dents, scratches, collision damage -- no job too big or too small. Get a free quote from Grems Panel Beaters today.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Grems! I need a quote for panel beating/spray painting.",
    backgroundImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=85",
  },

  footer: {
    description: "Grems Panel Beaters is a trusted auto body repair workshop in Tynwald, Harare. Specializing in panel beating, spray painting, and accident damage repa...",
    copyright: "Grems Panel Beaters",
  },
};

export default siteData;

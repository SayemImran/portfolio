export const projects = [
  {
    id: "01",
    title: "Blood Drops",
    desc: "Full-stack blood management system with JWT authentication and donation feature.",
    tags: ["Django", "Python", "ReactJS", "PostgreSQL"],
    image: "/bloodDrops.png",
    live: "https://blooddrops.vercel.app/",
    code: "https://github.com/SayemImran/Blood-Drops",
    challenges: "Synchronizing real-time blood request notifications and managing PostgreSQL transaction isolation levels for concurrent bookings. Ensuring user data privacy for donors while maintaining accessibility was also a key hurdle.",
    improvements: "Integrating automated SMS alerts via Twilio for emergency blood requests, adding location-based searching using Google Maps API, and implementing a donor reward system to encourage repeat donations."
  },
  {
    id: "02",
    title: "DigiTools",
    desc: "Digital tools marketplace built with modern web standards.",
    tags: ["ReactJS", "TailwindCSS"],
    image: "/digitools.png",
    live: "https://digitools-by-imran.netlify.app/",
    code: "https://github.com/SayemImran/digitools",
    challenges: "Optimizing image loading and bundle size for instant pages on mobile devices. Creating a seamless mock checkout flow solely using client-side state without a full backend router.",
    improvements: "Integrating a Node.js/Express backend to handle automated downloads of purchased assets, adding seller dashboards to track store analytics, and adding support for cryptocurrency payments."
  },
  {
    id: "03",
    title: "Keen Keeper",
    desc: "A social application to keep your friends close.",
    tags: ["Next.JS", "TailwindCSS"],
    image: "/keenkeeper.png",
    live: "https://keen-keeper-ten-pi.vercel.app/",
    code: "https://github.com/SayemImran/keen-keeper",
    challenges: "Designing and structuring relative database relationships using key-value mappings on the client-side to persist friend lists, statuses, and custom groups seamlessly.",
    improvements: "Adding real-time status updates and messaging using WebSockets (Socket.io), creating shared virtual spaces/whiteboards, and integrating third-party calendar synchronizations."
  },
  {
    id: "04",
    title: "Qurbani Hut",
    desc: "A full-stack web application that simplifies the process of sacrificing animals for religious purposes, providing a seamless and user-friendly platform for customers to book and manage their qurbani orders.",
    tags: ["Next.JS", "TailwindCSS", "BetterAuth", "MongoDB"],
    image: "/qurbani.png",
    live: "https://qurbanihut-bd.vercel.app/",
    code: "https://github.com/SayemImran/qurbanihut",
    challenges: "Building a complex scheduling database to accommodate slaughter timings, vet approvals, and distribution workflows. Handling heavy image uploads for livestock while maintaining rapid page loads.",
    improvements: "Adding an automated delivery tracking system with SMS/WhatsApp notifications, implementing a multi-vendor platform model for cattle farms, and developing a weight prediction estimation tool."
  },
  {
    id: "05",
    title: "Petverse",
    desc: "A digital SaaS platform for pet adoption.",
    tags: ["Next.JS", "TailwindCSS", "BetterAuth", "MongoDB", "JWT", "Sonner", "HeroUI"],
    image: "/petverse.png",
    live: "https://petverse-bd.vercel.app/",
    code: "https://github.com/SayemImran/petverse/",
    challenges: "Integrating BetterAuth inside Next.js Middleware to protect routes securely while ensuring zero layout shift. Managing a complex pet registration wizard with multiple nested states.",
    improvements: "Implementing a real-time chat service between pet shelters and prospective adopters, designing an interactive match-maker quiz to recommend pets based on living space, and integrating a pet medical records manager."
  },
  {
    id: "06",
    title: "Resell Hub",
    desc: "A digital SaaS platform for buying and selling used goods.",
    tags: ["Next.JS", "TailwindCSS", "BetterAuth", "MongoDB", "JWT", "Stripe", "Sonner", "HeroUI"],
    image: "/resellhub.png",
    live: "https://resell-hub-bd.vercel.app/",
    code: "https://github.com/SayemImran/resell-hub-client/",
    challenges: "Configuring Stripe webhooks correctly to guarantee reliable delivery of purchase confirmations under unreliable network conditions. Building a real-time product search with keyword auto-suggestions.",
    improvements: "Adding a bidding/auction engine with time-decay algorithms, integrating a verification badge system for verified sellers to boost user trust, and introducing in-app VoIP or voice chat for easy negotiations."
  }
];

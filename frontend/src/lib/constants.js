export const BUSINESS = {
  name: "Gutter Cleaning Jacksonville Florida",
  shortName: "Jacksonville Gutter Cleaning",
  phone: "877-736-0586",
  email: "support@guttercleaningjacksonvilleflorida.com",
  address: "3937 Spring Park Rd, Jacksonville, FL 32207, United States",
  addressShort: "3937 Spring Park Rd, Jacksonville, FL 32207",
  website: "https://guttercleaningjacksonvilleflorida.com",
  hours: "Mon-Sat: 7:00 AM - 7:00 PM",
};

export const IMAGES = {
  cleaning: "https://customer-assets.emergentagent.com/job_03a31ffd-f6c4-4f89-acfa-6c0e9c9c5b5e/artifacts/hc4lrkfm_gutter-cleaning-jacksonville.webp",
  installation: "https://customer-assets.emergentagent.com/job_03a31ffd-f6c4-4f89-acfa-6c0e9c9c5b5e/artifacts/nhpd4hy7_Gutter-Cleaning.webp",
  repair: "https://customer-assets.emergentagent.com/job_03a31ffd-f6c4-4f89-acfa-6c0e9c9c5b5e/artifacts/vc878wvo_Gutter-Repair-Jacksonville-FL.webp",
  downspout: "https://customer-assets.emergentagent.com/job_03a31ffd-f6c4-4f89-acfa-6c0e9c9c5b5e/artifacts/givkl1iq_Downspout-Services-Jacksonville.webp",
  replacement: "https://customer-assets.emergentagent.com/job_03a31ffd-f6c4-4f89-acfa-6c0e9c9c5b5e/artifacts/vhz41fzr_Gutter-Replacement-jacksonville-florida.webp",
  hero: "https://images.unsplash.com/photo-1647579350687-d409523aabcc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxmbG9yaWRhJTIwaG91c2UlMjBleHRlcmlvcnxlbnwwfHx8fDE3NzU0MTk1OTl8MA&ixlib=rb-4.1.0&q=85",
  worker: "https://images.unsplash.com/photo-1556137805-b67cc1d7d328?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxndXR0ZXIlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NzU0MTk2MTZ8MA&ixlib=rb-4.1.0&q=85",
  guards: "https://images.unsplash.com/photo-1509696223-7ee1a055ab87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxndXR0ZXIlMjBndWFyZCUyMG1lc2glMjBwcm90ZWN0aW9ufGVufDB8fHx8MTc3NTQxOTc0MXww&ixlib=rb-4.1.0&q=85",
};

export const SERVICES = [
  {
    title: "Gutter Cleaning",
    description: "Thorough local gutter cleaning that removes debris, prevents clogs, and protects homes from water damage year-round.",
    image: IMAGES.cleaning,
    slug: "gutter-cleaning",
  },
  {
    title: "Gutter Installation",
    description: "Professional gutter installation with durable materials and expert fitting for long-lasting rainwater control.",
    image: IMAGES.installation,
    slug: "gutter-installation",
  },
  {
    title: "Gutter Repair",
    description: "Fast gutter repair fixing leaks, loose sections, and storm damage to restore proper drainage and safety.",
    image: IMAGES.repair,
    slug: "gutter-repair",
  },
  {
    title: "Gutter Guards",
    description: "High-quality gutter guards that block leaves and debris, reducing maintenance and improving water flow.",
    image: IMAGES.guards,
    slug: "gutter-guards",
  },
  {
    title: "Downspout Services",
    description: "Complete downspout cleaning and installs to direct rainwater away and protect your foundation.",
    image: IMAGES.downspout,
    slug: "downspout-services",
  },
  {
    title: "Gutter Replacement",
    description: "Reliable gutter replacement upgrading worn systems with efficient, long-lasting drainage solutions.",
    image: IMAGES.replacement,
    slug: "gutter-replacement",
  },
];

export const SERVICE_AREAS = {
  main: ["St Johns, FL", "Orange Park, FL", "Jacksonville Beach, FL", "Atlantic Beach, FL", "Neptune Beach, FL", "Baldwin, FL", "Fernandina Beach, FL", "Yulee, FL", "Callahan, FL", "Nocatee, FL", "Ponte Vedra Beach, FL"],
  neighborhoods: ["Arlington", "Southside", "Mandarin", "Riverside", "Avondale", "San Marco", "Baymeadows", "Deerwood", "Springfield", "Ortega", "Julington Creek"],
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/cost-guide", label: "Cost Guide" },
  { to: "/about", label: "About" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const SUB_SERVICES = [
  { to: "/services/gutter-installation", label: "Gutter Installation", image: IMAGES.installation },
  { to: "/services/gutter-repair", label: "Gutter Repair", image: IMAGES.repair },
  { to: "/services/gutter-replacement", label: "Gutter Replacement", image: IMAGES.replacement },
  { to: "/services/gutter-guards", label: "Gutter Guards", image: IMAGES.guards },
  { to: "/services/downspout-services", label: "Downspout Services", image: IMAGES.downspout },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Clearing Gutters of Debris", desc: "We remove leaves, twigs, pine needles, and other debris from your gutters using special hand tools." },
  { num: "02", title: "Unclog Downspouts", desc: "Downspouts are checked for blockages and cleared where necessary." },
  { num: "03", title: "Flushing Gutters & Downspouts", desc: "The entire system is flushed using high-pressure equipment to clear dirt and grime." },
  { num: "04", title: "Rainwater Flow Test", desc: "We inspect for drainage issues, leaks, damage, and wear. Problems are identified and repaired." },
  { num: "05", title: "Exterior Clean (Optional)", desc: "The exterior is cleaned, leaving your gutters gleaming and restoring curb appeal." },
  { num: "06", title: "Disposal of Debris", desc: "All debris is gathered, bagged, and disposed of per Jacksonville council guidelines." },
];

export const TESTIMONIALS = [
  { name: "Sarah M.", location: "Mandarin, Jacksonville", text: "Best gutter cleaning service in Jacksonville! They showed up on time, were incredibly professional, and left everything spotless. Highly recommend!", rating: 5 },
  { name: "Robert K.", location: "Riverside, Jacksonville", text: "After Hurricane season, our gutters were a mess. These guys came out same day and got everything flowing again. Great pricing too!", rating: 5 },
  { name: "Linda P.", location: "San Marco, Jacksonville", text: "We've used them three times now. Always reliable, fair pricing, and they do excellent work. Our go-to gutter company.", rating: 5 },
  { name: "James T.", location: "Ponte Vedra Beach", text: "Our coastal home gets a lot of salt and sand buildup. This team did an amazing job cleaning and flushing our entire gutter system. Very thorough!", rating: 5 },
  { name: "Maria G.", location: "Arlington, Jacksonville", text: "Called for an emergency after a bad storm knocked debris into our gutters. They were here within 2 hours and fixed everything. Lifesaver!", rating: 5 },
  { name: "David W.", location: "Southside, Jacksonville", text: "I manage several rental properties and use them for all my gutter maintenance. Consistent quality, fair prices, and they always show up when they say they will.", rating: 5 },
  { name: "Patricia H.", location: "St. Johns, FL", text: "Had gutter guards installed last year and just had them cleaned for the first time. Barely any debris! Great recommendation from the team. Worth every penny.", rating: 5 },
  { name: "Michael R.", location: "Atlantic Beach, FL", text: "Very professional crew. They took before and after photos so I could see the difference. My downspouts were completely clogged and I didn't even know it.", rating: 5 },
  { name: "Angela C.", location: "Avondale, Jacksonville", text: "We have a historic home with original gutters. They were so careful and knowledgeable about older systems. Cleaned everything perfectly without any damage.", rating: 5 },
  { name: "Thomas B.", location: "Nocatee, FL", text: "New homeowner here and had no idea my gutters needed cleaning already. They did a full inspection, cleaned everything out, and gave me a maintenance schedule. Super helpful!", rating: 5 },
];

export const FAQ_ITEMS = [
  { q: "What is gutter cleaning?", a: "Gutter cleaning is the process of removing leaves, debris, dirt, and blockages from your gutter system and downspouts. This ensures rainwater flows freely away from your roof and foundation, preventing water damage, mold, and structural issues." },
  { q: "How often should I clean my gutters in Jacksonville?", a: "In Jacksonville, Florida, we recommend cleaning your gutters 2-4 times per year: early spring before heavy rains, mid-summer during storm season, fall when trees shed leaves, and after major storms or hurricanes." },
  { q: "How much does gutter cleaning cost in Jacksonville?", a: "Gutter cleaning in Jacksonville typically costs $90-$160 for a 1-story home, $150-$270 for a 2-story home, and $250-$380 for a 3-story home. Prices vary based on gutter length, debris level, and accessibility." },
  { q: "Will you clean my gutter guards?", a: "Yes! We clean gutter guards as part of our service. Over time, debris can accumulate on top of guards and reduce water flow. We remove buildup and ensure your guards are functioning properly." },
  { q: "Do I need to be home during the service?", a: "No, you don't need to be home. As long as we have access to your property and gutters, we can complete the work. We'll send you before and after photos for your peace of mind." },
  { q: "Is DIY gutter cleaning a bad idea?", a: "DIY gutter cleaning can be dangerous, especially for 2-story homes. Falls from ladders are a leading cause of home injuries. Professional gutter cleaners have the right equipment, insurance, and training to do the job safely and thoroughly." },
];

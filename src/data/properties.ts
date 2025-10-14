export interface Property {
  id: number;
  title: string;
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Townhouse';
  status: 'Available' | 'Sold' | 'Upcoming';
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  mapCoordinates?: { lat: number; lng: number };
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Waterfront Villa",
    type: "Villa",
    status: "Available",
    price: 15500000,
    location: "Palm Jumeirah, Dubai",
    area: 8500,
    bedrooms: 6,
    bathrooms: 7,
    image: "https://images.unsplash.com/photo-1743819455744-05417bf55cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdWJhaSUyMHByb3BlcnR5fGVufDF8fHx8MTc2MDQyNDkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1743819455744-05417bf55cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdWJhaSUyMHByb3BlcnR5fGVufDF8fHx8MTc2MDQyNDkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDM1MzAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1559329188-ba9933acb4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2MDM2Mjc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Stunning waterfront villa with private beach access, panoramic sea views, and luxurious finishes throughout. This architectural masterpiece combines contemporary design with timeless elegance.",
    features: [
      "Private beach access",
      "Infinity pool",
      "Smart home system",
      "Private cinema",
      "Gym and spa",
      "Covered parking for 4 cars",
      "Maid's room",
      "Landscaped garden"
    ],
    mapCoordinates: { lat: 25.1124, lng: 55.1390 }
  },
  {
    id: 2,
    title: "Downtown Luxury Penthouse",
    type: "Penthouse",
    status: "Available",
    price: 12000000,
    location: "Downtown Dubai",
    area: 5500,
    bedrooms: 4,
    bathrooms: 5,
    image: "https://images.unsplash.com/photo-1707917228955-1ea125182d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA0MjQ5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1707917228955-1ea125182d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA0MjQ5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1559329188-ba9933acb4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2MDM2Mjc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1559329188-ba9933acb4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2MDM2Mjc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Exclusive penthouse offering breathtaking views of Burj Khalifa and Dubai Fountain. Features floor-to-ceiling windows, premium Italian finishes, and a private terrace.",
    features: [
      "Burj Khalifa views",
      "Private elevator",
      "Rooftop terrace",
      "Jacuzzi",
      "Designer kitchen",
      "Covered parking for 3 cars",
      "24/7 concierge",
      "Access to building amenities"
    ],
    mapCoordinates: { lat: 25.1972, lng: 55.2744 }
  },
  {
    id: 3,
    title: "Modern Marina Apartment",
    type: "Apartment",
    status: "Available",
    price: 3500000,
    location: "Dubai Marina",
    area: 2200,
    bedrooms: 3,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1559329188-ba9933acb4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2MDM2Mjc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1559329188-ba9933acb4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2MDM2Mjc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Elegant apartment in the heart of Dubai Marina with stunning marina views and modern amenities. Perfect for families seeking luxury waterfront living.",
    features: [
      "Marina views",
      "Balcony",
      "Modern kitchen",
      "Built-in wardrobes",
      "Parking space",
      "Gym access",
      "Swimming pool",
      "Children's play area"
    ],
    mapCoordinates: { lat: 25.0804, lng: 55.1400 }
  },
  
  {
    id: 5,
    title: "Business Bay Townhouse",
    type: "Townhouse",
    status: "Available",
    price: 5200000,
    location: "Business Bay, Dubai",
    area: 3200,
    bedrooms: 4,
    bathrooms: 4,
    image: "https://images.unsplash.com/photo-1743819455744-05417bf55cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdWJhaSUyMHByb3BlcnR5fGVufDF8fHx8MTc2MDQyNDkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1743819455744-05417bf55cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdWJhaSUyMHByb3BlcnR5fGVufDF8fHx8MTc2MDQyNDkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Contemporary townhouse in the vibrant Business Bay area. Ideal for professionals seeking modern living with easy access to business district.",
    features: [
      "Modern design",
      "Private terrace",
      "Premium finishes",
      "Storage room",
      "Parking spaces",
      "Gym and pool access",
      "Near metro station",
      "Canal views"
    ],
    mapCoordinates: { lat: 25.1867, lng: 55.2632 }
  },
  {
    id: 6,
    title: "Jumeirah Beach Apartment",
    type: "Apartment",
    status: "Sold",
    price: 6500000,
    location: "Jumeirah Beach Residence",
    area: 2800,
    bedrooms: 3,
    bathrooms: 4,
    image: "https://images.unsplash.com/photo-1707917228955-1ea125182d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA0MjQ5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1707917228955-1ea125182d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA0MjQ5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Beachfront apartment with direct beach access and stunning sea views. Recently sold to satisfied clients.",
    features: [
      "Beach access",
      "Sea views",
      "Large balcony",
      "High floor",
      "Premium appliances",
      "Parking",
      "Resort amenities",
      "Walking distance to The Walk"
    ],
    mapCoordinates: { lat: 25.0782, lng: 55.1331 }
  }
];

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Dubai Real Estate Market Outlook 2025",
    excerpt: "Comprehensive analysis of Dubai's property market trends, investment opportunities, and growth projections for 2025.",
    content: "Dubai's real estate market continues to demonstrate exceptional resilience and growth, positioning itself as one of the world's most dynamic property investment destinations. The emirate's strategic location, robust infrastructure, and forward-thinking policies continue to attract investors from around the globe. In 2025, we're witnessing record transactions in luxury residential segments, with particular interest in waterfront properties and sustainable developments. The introduction of long-term residency visas and business-friendly regulations has further strengthened market confidence. Key areas like Downtown Dubai, Dubai Marina, and Palm Jumeirah are experiencing unprecedented demand, while emerging neighborhoods such as Dubai South and Dubai Hills Estate offer excellent value propositions for savvy investors.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1080&q=80",
    date: "2025-01-15",
    author: "Haseeb Tanveer",
    category: "Market Analysis"
  },
  {
    id: 2,
    title: "Top 5 Investment Opportunities in UAE Real Estate",
    excerpt: "Discover the most lucrative locations and property types delivering exceptional returns in the UAE property market.",
    content: "The UAE real estate market offers diverse investment opportunities across multiple segments. Dubai Marina continues to lead with consistent rental yields averaging 6-8% annually, making it ideal for buy-to-let investors. Business Bay has emerged as a hotspot for commercial and residential investments, with modern infrastructure and proximity to Downtown Dubai. Palm Jumeirah remains the epitome of luxury living, offering exclusive villas and apartments with unparalleled sea views and resort-style amenities. Dubai Hills Estate represents excellent value for families, featuring master-planned communities with golf courses, schools, and retail centers. Finally, Dubai South, near the Expo 2020 site and Al Maktoum International Airport, presents significant capital appreciation potential as the area develops into a major business and logistics hub.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1080&q=80",
    date: "2025-01-10",
    author: "Maroof Usmani",
    category: "Investment Tips"
  },
  {
    id: 3,
    title: "Complete Guide to Buying Property in Dubai",
    excerpt: "Step-by-step guide covering legal requirements, financing options, and essential considerations for property purchase in Dubai.",
    content: "Purchasing property in Dubai is a streamlined process designed to facilitate both local and international buyers. Foreign nationals can own property freehold in designated areas, offering complete ownership rights. The buying process begins with property selection, followed by obtaining a No Objection Certificate (NOC) from the developer. Buyers then pay a 4% Dubai Land Department fee plus registration charges. Financing options include mortgages from local and international banks, with non-residents typically accessing up to 75% loan-to-value ratios. Due diligence is crucial - verify property titles, check for any outstanding service charges, and ensure the developer has RERA approval. Consider engaging a reputable real estate agent and legal advisor to navigate the process smoothly. Key factors to evaluate include location, developer reputation, amenities, rental yield potential, and resale value.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1080&q=80",
    date: "2025-01-05",
    author: "Haseeb Tanveer",
    category: "Buying Guide"
  },
  {
    id: 4,
    title: "Sustainable Living: Dubai's Eco-Friendly Developments",
    excerpt: "How green buildings and sustainable communities are reshaping Dubai's real estate landscape for environmentally conscious buyers.",
    content: "Dubai is leading the way in sustainable urban development with ambitious environmental initiatives. The Sustainable City Dubai stands as a pioneering example, featuring solar-powered villas, electric vehicle infrastructure, and zero-waste communities. Major developers are now incorporating LEED and BREEAM certifications, ensuring properties meet international sustainability standards. Features include energy-efficient cooling systems, water conservation technologies, green building materials, and smart home automation. These eco-friendly developments not only reduce environmental impact but also offer significant long-term cost savings on utilities. Areas like The Sustainable City, Dubai Hills Estate, and Jumeirah Golf Estates are incorporating extensive green spaces, urban farms, and biodiversity corridors. For investors, sustainable properties are commanding premium rents and showing stronger capital appreciation as environmental consciousness grows among tenants and buyers.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1080&q=80",
    date: "2024-12-28",
    author: "Maroof Usmani",
    category: "Sustainability"
  },
  {
    id: 5,
    title: "Luxury Penthouses: The Ultimate Dubai Living Experience",
    excerpt: "Exploring Dubai's most prestigious penthouse properties offering unparalleled luxury, panoramic views, and exclusive amenities.",
    content: "Dubai's luxury penthouse market represents the pinnacle of sophisticated urban living. These exclusive residences, typically occupying entire upper floors, offer breathtaking 360-degree views of Dubai's iconic skyline, pristine beaches, and Arabian Gulf. Premium developments like Burj Khalifa, Address Residences, and One Palm feature penthouses with private pools, rooftop terraces, private elevators, and bespoke interior designs by world-renowned architects. Modern penthouses incorporate smart home technology, wine cellars, home theaters, and spa facilities. Prices range from AED 10 million to over AED 100 million, depending on location and specifications. These properties attract high-net-worth individuals seeking privacy, exclusivity, and five-star hotel services including concierge, housekeeping, and security. Investment-wise, luxury penthouses demonstrate strong value retention and attract premium short-term rental yields, particularly in tourist hotspots.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080&q=80",
    date: "2024-12-22",
    author: "Aqib Ali",
    category: "Luxury Living"
  },
  {
    id: 6,
    title: "Dubai Marina vs Downtown Dubai: Which Location Suits You?",
    excerpt: "Comprehensive comparison of two of Dubai's most sought-after neighborhoods to help you make the right investment decision.",
    content: "Choosing between Dubai Marina and Downtown Dubai depends on lifestyle preferences and investment goals. Dubai Marina offers a vibrant waterfront lifestyle with its 3km promenade, yacht clubs, beach access, and energetic dining scene. It's perfect for water sports enthusiasts and those seeking a resort-like atmosphere. Properties here typically offer better rental yields (6-8%) and appeal to young professionals and tourists. Downtown Dubai, home to Burj Khalifa and Dubai Mall, provides a more cosmopolitan experience with cultural attractions, world-class shopping, and proximity to business districts. It attracts families and executives preferring urban sophistication. Properties command premium prices but offer strong capital appreciation potential. Transportation is excellent in both areas with metro access, though Downtown offers better connectivity. Amenities differ: Marina excels in outdoor leisure while Downtown leads in retail and entertainment. Consider your budget, lifestyle priorities, and investment strategy when choosing between these iconic locations.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1080&q=80",
    date: "2024-12-18",
    author: "Haseeb Tanveer",
    category: "Area Comparison"
  },
  {
    id: 7,
    title: "First-Time Homebuyers: Essential Tips for UAE Property Market",
    excerpt: "Practical advice and insider tips to help first-time buyers navigate the UAE property market with confidence.",
    content: "First-time property buyers in the UAE should approach the market with careful planning and research. Start by determining your budget, including not just the property price but additional costs: 4% DLD registration fee, agency commission (typically 2%), mortgage arrangement fees, and property valuation charges. Get pre-approved for a mortgage to understand your borrowing capacity - UAE banks typically offer up to 80% financing for first homes under AED 5 million. Research thoroughly: visit multiple properties, compare prices in similar areas, and check developer track records on RERA's website. Consider long-term factors like proximity to schools, workplaces, public transport, and future development plans that might affect property values. Don't rush - take time to understand market cycles and timing. Engage professional help: quality real estate agents, mortgage brokers, and legal advisors can save you significant money and stress. Finally, think beyond just buying - consider ongoing costs like service charges, maintenance, and potential rental income if you plan to lease the property.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1080&q=80",
    date: "2024-12-12",
    author: "Maroof Usmani",
    category: "Buying Guide"
  },
  {
    id: 8,
    title: "Off-Plan vs Ready Properties: Making the Right Investment Choice",
    excerpt: "Detailed analysis of advantages, risks, and returns when choosing between off-plan and ready-to-move properties in Dubai.",
    content: "The choice between off-plan and ready properties significantly impacts your investment returns and risk profile. Off-plan properties offer attractive payment plans, typically spanning 2-4 years with 10-20% down payments, making them accessible to investors with limited upfront capital. Prices are generally 15-25% lower than ready properties, offering capital appreciation potential before completion. However, risks include construction delays, developer financial issues, and market fluctuations. Due diligence is critical - verify developer credentials, check escrow account protection, and research historical project delivery. Ready properties provide immediate possession, known rental yields, and certainty. You can physically inspect the unit, assess build quality, and start generating rental income immediately. Financing is straightforward with instant mortgage availability. Market value is transparent and established. Ready properties suit risk-averse investors, those needing immediate accommodation, or buyers preferring tangible assets. Off-plan works for patient investors with higher risk appetite seeking maximum leverage and potential appreciation. Consider your financial position, timeline, and market conditions when deciding.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080&q=80",
    date: "2024-12-08",
    author: "Aqib Ali",
    category: "Investment Strategy"
  },
  {
    id: 9,
    title: "Smart Home Technology Revolutionizing Dubai Properties",
    excerpt: "How cutting-edge technology and home automation are adding value and transforming modern living in Dubai's real estate.",
    content: "Smart home technology has become a standard feature in Dubai's premium residential developments, transforming how residents interact with their living spaces. Modern properties now integrate comprehensive automation systems controlling lighting, climate, security, and entertainment through smartphones or voice commands. Smart thermostats optimize energy consumption, reducing utility costs by up to 30%. Advanced security systems include facial recognition, motion sensors, and remote surveillance, providing peace of mind for frequent travelers. Automated blinds, mood lighting, and multi-room audio create personalized living environments. Smart appliances send maintenance alerts and allow remote operation. Buildings are incorporating IoT infrastructure, enabling residents to book facilities, track deliveries, and access visitor management through apps. For investors, smart-enabled properties command 10-15% premium rents and attract tech-savvy tenants. Major developers like Emaar, Damac, and Meraas are pre-installing smart systems, recognizing their impact on property desirability and value. As Dubai advances its Smart City initiative, properties with integrated technology will likely see stronger appreciation and rental demand.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1080&q=80",
    date: "2024-12-01",
    author: "Haseeb Tanveer",
    category: "Technology"
  }
];

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
    id: 4,
    title: "Arabian Ranches Villa",
    type: "Villa",
    status: "Upcoming",
    price: 4800000,
    location: "Arabian Ranches, Dubai",
    area: 4500,
    bedrooms: 5,
    bathrooms: 6,
    image: "https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDM1MzAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDM1MzAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Upcoming luxury villa in a prestigious gated community with golf course views. Features spacious interiors, private garden, and high-end finishes.",
    features: [
      "Golf course views",
      "Private pool",
      "Large garden",
      "Maid's room",
      "Study room",
      "Covered parking",
      "Community facilities",
      "24/7 security"
    ],
    mapCoordinates: { lat: 25.0507, lng: 55.2635 }
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
    excerpt: "Explore the latest trends and forecasts for Dubai's thriving property market in 2025.",
    content: "Dubai's real estate market continues to show remarkable resilience and growth...",
    image: "https://images.unsplash.com/photo-1707917228955-1ea125182d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA0MjQ5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2025-01-15",
    author: "Sarah Al Maktoum",
    category: "Market Analysis"
  },
  {
    id: 2,
    title: "Top 5 Investment Opportunities in UAE",
    excerpt: "Discover the best locations and property types for investment returns in the UAE.",
    content: "From established areas like Dubai Marina to emerging hotspots...",
    image: "https://images.unsplash.com/photo-1743819455744-05417bf55cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdWJhaSUyMHByb3BlcnR5fGVufDF8fHx8MTc2MDQyNDkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2025-01-10",
    author: "Ahmed Hassan",
    category: "Investment Tips"
  },
  {
    id: 3,
    title: "A Guide to Buying Property in Dubai",
    excerpt: "Everything you need to know about the property purchasing process in Dubai.",
    content: "Navigating the Dubai real estate market can seem daunting for first-time buyers...",
    image: "https://images.unsplash.com/photo-1559329188-ba9933acb4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjB2aWV3fGVufDF8fHx8MTc2MDM2Mjc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2025-01-05",
    author: "Fatima Al Zaabi",
    category: "Buying Guide"
  }
];

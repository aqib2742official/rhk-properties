# RHK Portfolio - Next.js Real Estate Website

A modern, responsive real estate website built with Next.js, React, and TypeScript, showcasing luxury properties in Dubai.

## Features

- 🏠 Property listings with advanced filtering
- 🎨 Modern UI with dark/light mode support
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js App Router
- 🎭 Smooth animations with Motion
- 🔍 SEO optimized
- 📧 Contact form with validation
- 📝 Blog system

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 18
- **Styling:** Tailwind CSS 4
- **Component Library:** Radix UI
- **Animations:** Motion
- **Form Handling:** React Hook Form
- **Type Safety:** TypeScript
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd "RHK Portfolio"
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
RHK Portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── properties/      # Properties pages
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog pages
│   │   └── contact/        # Contact page
│   ├── components/         # React components
│   │   ├── ui/            # Radix UI components
│   │   └── ...            # Custom components
│   ├── pages/             # Page components
│   ├── data/              # Static data
│   ├── styles/            # Global styles
│   └── assets/            # Images and static assets
├── public/                # Public assets
└── ...config files

\`\`\`

## Key Components

- **Header:** Navigation with theme toggle
- **Footer:** Site-wide footer with links
- **PropertyCard:** Reusable property listing card
- **PremiumSlider:** Hero section with animated slides
- **ThemeProvider:** Dark/light mode management

## Pages

- **Home (/):** Landing page with featured properties
- **Properties (/properties):** Property listings with filters
- **Property Detail (/properties/[id]):** Individual property page
- **About (/about):** Company information
- **Blog (/blog):** Blog posts listing
- **Blog Post (/blog/[id]):** Individual blog post
- **Contact (/contact):** Contact form

## Customization

### Colors

Update theme colors in `src/index.css` under the `:root` and `.dark` selectors.

### Content

- Property data: `src/data/properties.ts`
- Blog posts: `src/data/properties.ts`

## License

Private - All rights reserved

## Contact

For questions or support, contact AHK Solution.

# GNC Tech - Portfolio Website

A modern, interactive portfolio website for a tech company built with React JS and Vite.

## Features

- **Modern Design**: Professional tech-focused aesthetic with dark/light mixed theme
- **Interactive Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Responsive Layout**: Fully responsive design for all device sizes
- **Performance Optimized**: Built with Vite for fast development and production builds

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Framer Motion** - Animation Library
- **React Router DOM** - Client-side Routing
- **Lucide React** - Icon Library
- **CSS Modules** - Scoped Styling

## Sections

1. **Hero** - Full-screen landing with typing effect and floating icons
2. **About** - Company info with animated counters
3. **Services** - Glassmorphism service cards with hover effects
4. **Portfolio** - Filterable project gallery
5. **Contact** - Modern form with floating labels

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Button, Card, LoadingScreen)
│   ├── layout/          # Navbar, Footer
│   └── sections/        # Hero, About, Services, Portfolio, Contact
├── hooks/               # Custom React hooks
├── data/                # Static content data
├── index.css            # Global styles and CSS variables
├── App.jsx              # Main application component
└── main.jsx             # Entry point
```

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --accent-primary: #00d4ff;    /* Cyan accent */
  --accent-secondary: #7c3aed;  /* Purple accent */
  --dark-bg: #0a0f1c;           /* Dark background */
  --light-bg: #f8fafc;          /* Light background */
}
```

### Content

Edit company information in `src/data/content.js`:

- Company details (name, email, phone, address)
- Services list
- Portfolio projects
- Social links

## License

MIT License - feel free to use for your own projects.




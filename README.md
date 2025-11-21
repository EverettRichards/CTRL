# CTRL
Coalition of Tech Representatives and Leadership (CTRL) at San Diego State University

## About

CTRL is dedicated to fostering innovation, leadership, and collaboration within the tech community at San Diego State University. This website showcases our events and provides information about our organization.

## Website

This is a modern React.js website built with Vite, React Router, and Tailwind CSS, featuring a sleek, futuristic design.

### Pages

- **Home** (`/`): Overview of CTRL and our events
- **Hackathon** (`/hack`): Information about Innovate 4 SDSU Hackathon
- **Symposium** (`/symposium`): Details about the CTRL Career Symposium
- **High School** (`/highschool`): Information about our High School Exposition
- **NXP** (`/nxp`): Details about the NXP Capstone Event

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework

## Design System

The website uses a custom design system with:

- **Color Palette**:
  - `tech-blue`: #00D4FF
  - `tech-purple`: #8B5CF6
  - `tech-dark`: #0A0E27
  - `tech-darker`: #050814

- **Reusable CSS Classes**:
  - `tech-container`: Max-width container with responsive padding
  - `tech-heading`: Large gradient heading
  - `tech-subheading`: Section subheading
  - `tech-card`: Styled card component
  - `tech-button`: Primary button style
  - `tech-button-outline`: Outline button style
  - `tech-nav-link`: Navigation link style
  - `tech-section`: Section spacing
  - `tech-grid`: Responsive grid layout

## Project Structure

```
CTRL/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer with org info
│   │   └── Layout.jsx       # Page layout wrapper
│   ├── pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── Hack.jsx         # Hackathon page
│   │   ├── Symposium.jsx    # Symposium page
│   │   ├── HighSchool.jsx   # High School page
│   │   └── NXP.jsx          # NXP Capstone page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles and Tailwind config
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## Contributing

This is an internal project for CTRL at SDSU. For questions or contributions, please contact the CTRL team.

## License

© 2025 CTRL. All rights reserved.


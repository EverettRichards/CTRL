// Placeholder images generator for slideshow demo
// These create gradient placeholder images with text

export const generatePlaceholderImage = (width, height, color1, color2, text) => {
  // Create SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle" opacity="0.7">
        ${text}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Default slideshow images for demo
export const defaultSlides = [
  {
    image: generatePlaceholderImage(1920, 800, '#00D4FF', '#8B5CF6', 'Innovation'),
    title: 'Innovate 4 SDSU Hackathon',
    description: 'Join us for our annual hackathon where students collaborate to build innovative solutions.',
  },
  {
    image: generatePlaceholderImage(1920, 800, '#8B5CF6', '#EC4899', 'Connect'),
    title: 'CTRL Career Symposium',
    description: 'Network with industry professionals and explore career opportunities in technology.',
  },
  {
    image: generatePlaceholderImage(1920, 800, '#10B981', '#00D4FF', 'Inspire'),
    title: 'High School Exposition',
    description: 'Inspiring the next generation of tech leaders through hands-on technology showcases.',
  },
  {
    image: generatePlaceholderImage(1920, 800, '#F59E0B', '#8B5CF6', 'Build'),
    title: 'NXP Capstone Event',
    description: 'Showcasing senior capstone projects in partnership with industry leaders.',
  },
  {
    image: generatePlaceholderImage(1920, 800, '#00D4FF', '#10B981', 'Lead'),
    title: 'Tech Leadership at SDSU',
    description: 'Empowering students to become the next generation of technology leaders.',
  },
];

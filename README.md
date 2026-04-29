# Naol Daniel - Portfolio Website

A beautiful, modern, and responsive portfolio website built with React and Bootstrap.

## Features

✨ **Modern Design** - Clean and professional UI with smooth animations
📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
🎨 **Beautiful Animations** - Smooth scroll animations using AOS library
🚀 **Fast Performance** - Optimized for speed and performance
💼 **Sections Include:**
- Hero section with introduction
- About me with statistics
- Skills showcase with progress bars
- Featured projects gallery
- Work experience timeline
- Education history
- Contact form
- Social media links

## Technologies Used

- **React** - Frontend framework
- **Bootstrap 5** - UI framework
- **React Bootstrap** - Bootstrap components for React
- **React Icons** - Icon library
- **AOS** - Animate On Scroll library
- **CSS3** - Custom styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Customization

### Update Personal Information

Edit the following files to add your personal information:

1. **src/components/Hero.js** - Update name, title, and social links
2. **src/components/About.js** - Update bio and statistics
3. **src/components/Skills.js** - Update your skills and proficiency levels
4. **src/components/Projects.js** - Add your projects with images and descriptions
5. **src/components/Experience.js** - Update work experience and education
6. **src/components/Contact.js** - Update contact information
7. **src/components/Footer.js** - Update footer links

### Change Colors

The main color scheme uses:
- Primary: `#6c63ff` (Purple)
- Secondary: `#ff6584` (Pink)
- Background: Dark gradient

To change colors, update the CSS variables in the respective CSS files.

### Add Your Project Images

Replace the placeholder images in `src/components/Projects.js` with your own project screenshots. You can:
- Use local images in the `public` folder
- Use external image URLs
- Use services like Unsplash for placeholder images

## Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder ready for deployment.

## Deployment

You can deploy this portfolio to:
- **Netlify** - Drag and drop the build folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use gh-pages package
- **Heroku** - Deploy with buildpack

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Experience.js
│   │   ├── Experience.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## License

This project is open source and available for personal use.

## Contact

Naol Daniel - naol.daniel@example.com

---

Made with ❤️ using React and Bootstrap

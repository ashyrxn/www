# Ashyrxn.xyz

A modern, responsive personal portfolio website built with Next.js 15, featuring a sleek dark theme with animated elements and optimized performance.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading with Next.js 15 and optimized images
- **SEO Ready**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Dark Theme**: Elegant dark color scheme with custom orange accents
- **Interactive Elements**: Hover effects, floating animations, and smooth transitions

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Iconify React
- **Deployment**: Vercel
- **Language**: TypeScript

## 🎨 Design Features

- Custom color palette with orange (#cd3e16, #e75d05) and gold (#f5dc4e) accents
- Animated floating elements and avatar glow effects
- Backdrop blur effects and glass-morphism design
- Responsive background images for desktop and mobile
- Smooth hover animations and transitions

## 📱 Responsive Design

- Mobile-first approach with touch-optimized interactions
- Flexible layouts that adapt to all screen sizes
- Optimized images with WebP format support
- Performance-focused mobile experience

## 🔧 Performance Optimizations

- Next.js Image optimization with lazy loading
- Minimized bundle size with tree-shaking
- Optimized fonts with display: swap
- Compressed images and assets
- Long-term caching strategies

## 🌐 SEO & Accessibility

- Comprehensive meta tags and Open Graph data
- Structured data for search engines
- Semantic HTML elements
- ARIA labels and screen reader support
- Optimized for Core Web Vitals

## 🚀 Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/ashyrxn/www.git
   cd www
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   bun install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   bun run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   └── ui/
│       └── button.tsx       # Reusable button component
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── int/
│   │   ├── avatar.webp      # Profile avatar
│   │   └── background.webp  # Background image
│   └── og.png               # Open Graph image
└── tailwind.config.js       # Tailwind configuration
\`\`\`

## 🎯 Customization

### Update Personal Information
Edit the constants in `app/page.tsx`:
\`\`\`typescript
const PROFILE = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description",
  email: "your.email@example.com"
}

const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "mdi:github" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "mdi:twitter" }
]
\`\`\`

### Update Colors
Modify the color scheme in `tailwind.config.js`:
\`\`\`javascript
colors: {
  primary: "#cd3e16",    // Main orange
  secondary: "#e75d05",  // Light orange
  accent: "#f5dc4e"      // Gold accent
}
\`\`\`

### Replace Images
- **Avatar**: Replace `public/int/avatar.webp`
- **Background**: Replace `public/int/background.webp`
- **OG Image**: Replace `public/og.png`

## 📊 Performance Metrics

- **Lighthouse Score**: 100/100 Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Import project in Vercel dashboard
   - Deploy automatically

2. **Custom Domain** (Optional)
   - Add your domain in Vercel settings
   - Update DNS records as instructed

### Deploy to Other Platforms

\`\`\`bash
# Build for production
bun run build

# Start production server
bun start
\`\`\`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Iconify](https://iconify.design/)
- Deployed on [Vercel](https://vercel.com/)

---

**Live Demo**: [View Website](https://ashyrxn.xyz)

**Built with ❤️ using [v0.dev](https://v0.dev)**

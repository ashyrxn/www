# Ashyrxn.xyz

A modern, responsive personal portfolio website built with Next.js 15.

## 🚀 Tech Stack

- **Next.js 15** - React Framework
- **Tailwind CSS** - Styling
- **TypeScript** - Language
- **Vercel** - Deployment

## ✨ Features

- Modern responsive design
- Dark theme with orange accents
- Smooth animations
- SEO optimized
- Accessible (WCAG)

## 🏃‍♂️ Getting Started

```bash
# Clone repository
git clone https://github.com/ashyrxn/www.git
cd www

# Install dependencies
bun install

# Run in development
bun run dev
```

Open `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Layout and metadata
│   └── globals.css        # Global styles
├── components/ui/         # Reusable components
├── public/int/           # Images (avatar, background)
└── tailwind.config.js    # Tailwind configuration
```

## ⚙️ Customization

### Personal Information
Edit constants in `app/page.tsx`:

```typescript
const PROFILE = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your description",
  email: "your.email@example.com"
}
```

### Colors
Modify in `tailwind.config.js`:

```javascript
colors: {
  primary: "#cd3e16",    // Main orange
  secondary: "#e75d05",  // Light orange
  accent: "#f5dc4e"      // Gold
}
```

### Images
Replace files in `public/int/`:
- `avatar.webp` - Your photo
- `background.webp` - Background image

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Automatic deployment

### Others
```bash
bun run build
bun start
```

## 📄 Licença

MIT License

---

**Demo**: [ashyrxn.xyz](https://ashyrxn.xyz)

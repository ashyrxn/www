import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ashyrxn.xyz",
    short_name: "ash",
    description: "I'm not quite alive, not quite gone. Just me and my links in the space between.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b", 
    theme_color: "#09090b",
    icons: [
      {
        src: "/int/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/int/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/int/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    categories: ["portfolio", "personal", "developer"],
    lang: "en",
    orientation: "portrait-primary"
  }
}
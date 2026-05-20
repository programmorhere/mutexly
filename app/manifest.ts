import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mutexly",
    short_name: "Mutexly",
    description: "Enterprise AI made practical.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a14",
    theme_color: "#6d28d9",
    icons: [
      {
        src: "/logo/icon-app-purple.png",
        sizes: "1600x1600",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/logo/icon-app-purple.png",
        sizes: "1600x1600",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  }
}

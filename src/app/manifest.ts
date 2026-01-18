import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MkFriends",
    short_name: "MkFriends",
    description: "Build fast. Connect faster.",
    start_url: "/home",
    display: "standalone",
    background_color: "#FFB6C1",
    theme_color: "#ff6b7a",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

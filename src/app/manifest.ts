import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Forever Consultants — Total Investment Solutions",
    short_name: "Forever Consultants",
    description:
      "Comprehensive wealth management, LIC insurance, mutual funds, and health insurance advisory in Mumbai.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/infinity-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: ["finance", "business"],
    lang: "en-IN",
  };
}

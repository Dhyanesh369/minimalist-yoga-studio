import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Lumina Yoga Studio in Stockholm. Our philosophy is rooted in mindful movement, sustainable practice, and community connection. Experience stress relief and emotional balance.",
  keywords: ["about yoga studio", "wellness philosophy stockholm", "yoga teachers stockholm", "mindful practice"],
};

export default function AboutPage() {
  return <AboutClient />;
}

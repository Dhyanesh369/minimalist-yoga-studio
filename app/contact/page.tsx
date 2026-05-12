import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Lumina Yoga Studio in Stockholm. Reach out with questions about our beginner yoga classes, meditation sessions, or visit our Nordic sanctuary.",
  keywords: ["contact yoga studio stockholm", "yoga studio address stockholm", "book yoga class stockholm", "wellness studio contact"],
};

export default function ContactPage() {
  return <ContactClient />;
}

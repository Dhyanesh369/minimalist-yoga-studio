import type { Metadata } from "next";
import ClassesClient from "./ClassesClient";

export const metadata: Metadata = {
  title: "Classes & Sessions",
  description: "Explore our range of beginner yoga classes, meditation sessions, and deep stretch practices in Stockholm. Find the perfect session for your wellness journey.",
  keywords: ["beginner yoga classes", "meditation sessions stockholm", "deep stretch yoga", "breathwork classes", "yoga for stress relief"],
};

export default function ClassesPage() {
  return <ClassesClient />;
}

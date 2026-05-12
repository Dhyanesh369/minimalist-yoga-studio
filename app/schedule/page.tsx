import type { Metadata } from "next";
import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "Class Schedule",
  description: "View our weekly yoga and meditation schedule in Stockholm. Find morning, evening, and weekend classes that fit your routine.",
  keywords: ["yoga schedule stockholm", "weekly meditation classes", "morning yoga sessions", "weekend wellness classes"],
};

export default function SchedulePage() {
  return <ScheduleClient />;
}

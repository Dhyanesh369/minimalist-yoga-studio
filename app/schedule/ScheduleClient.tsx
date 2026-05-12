"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const filters = [
  "All Classes",
  "Beginner",
  "Meditation",
  "Stretch",
  "Breathwork",
  "Morning",
  "Evening",
];

const scheduleData = [
  // Monday
  { day: "Monday", time: "07:00", name: "Morning Flow", instructor: "Elena Vance", duration: "60 min", level: "All Levels", category: "Morning" },
  { day: "Monday", time: "09:30", name: "Beginner Yoga", instructor: "Marcus Thorne", duration: "75 min", level: "Beginner", category: "Beginner" },
  { day: "Monday", time: "17:30", name: "Deep Stretch", instructor: "Elena Vance", duration: "60 min", level: "All Levels", category: "Stretch" },
  { day: "Monday", time: "19:00", name: "Evening Reset", instructor: "Marcus Thorne", duration: "60 min", level: "All Levels", category: "Evening" },
  
  // Tuesday
  { day: "Tuesday", time: "07:00", name: "Breathwork", instructor: "Marcus Thorne", duration: "45 min", level: "All Levels", category: "Breathwork" },
  { day: "Tuesday", time: "17:30", name: "Slow Flow", instructor: "Elena Vance", duration: "60 min", level: "Intermediate", category: "Evening" },
  { day: "Tuesday", time: "19:00", name: "Meditation", instructor: "Marcus Thorne", duration: "45 min", level: "All Levels", category: "Meditation" },

  // Wednesday
  { day: "Wednesday", time: "07:00", name: "Morning Flow", instructor: "Elena Vance", duration: "60 min", level: "All Levels", category: "Morning" },
  { day: "Wednesday", time: "09:30", name: "Deep Stretch", instructor: "Elena Vance", duration: "60 min", level: "All Levels", category: "Stretch" },
  { day: "Wednesday", time: "17:30", name: "Beginner Yoga", instructor: "Marcus Thorne", duration: "75 min", level: "Beginner", category: "Beginner" },
  { day: "Wednesday", time: "19:00", name: "Evening Reset", instructor: "Marcus Thorne", duration: "60 min", level: "All Levels", category: "Evening" },

  // Thursday
  { day: "Thursday", time: "07:00", name: "Breathwork", instructor: "Marcus Thorne", duration: "45 min", level: "All Levels", category: "Breathwork" },
  { day: "Thursday", time: "17:30", name: "Slow Flow", instructor: "Elena Vance", duration: "60 min", level: "Intermediate", category: "Evening" },
  { day: "Thursday", time: "19:00", name: "Meditation", instructor: "Marcus Thorne", duration: "45 min", level: "All Levels", category: "Meditation" },

  // Friday
  { day: "Friday", time: "07:00", name: "Morning Flow", instructor: "Elena Vance", duration: "60 min", level: "All Levels", category: "Morning" },
  { day: "Friday", time: "17:30", name: "Community Flow", instructor: "Elena Vance", duration: "60 min", level: "All Levels", category: "Evening" },

  // Saturday
  { day: "Saturday", time: "09:00", name: "Weekend Flow", instructor: "Elena Vance", duration: "90 min", level: "All Levels", category: "Morning" },
  { day: "Saturday", time: "11:00", name: "Beginner Workshop", instructor: "Marcus Thorne", duration: "120 min", level: "Beginner", category: "Beginner" },

  // Sunday
  { day: "Sunday", time: "10:00", name: "Restorative Yoga", instructor: "Elena Vance", duration: "90 min", level: "All Levels", category: "Morning" },
  { day: "Sunday", time: "17:00", name: "Sunset Meditation", instructor: "Marcus Thorne", duration: "60 min", level: "All Levels", category: "Meditation" },
];

import { Section, Heading, Button } from "@/components/ui";

export default function ScheduleClient() {
  const [activeFilter, setActiveFilter] = useState("All Classes");
  const [activeDay, setActiveDay] = useState("Monday");

  const filteredSchedule = scheduleData.filter((item) => {
    if (activeFilter === "All Classes") return item.day === activeDay;
    return item.day === activeDay && (item.category === activeFilter || item.level === activeFilter);
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="ivory" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Heading level={1} center subtitle="The Rhythm">
            Lumina Yoga Schedule | <br />
            <span className="italic font-normal">Find your wellness routine.</span>
          </Heading>
          <p className="text-xl text-muted-text max-w-2xl mx-auto font-light leading-relaxed">
            Explore our weekly yoga and meditation classes in Stockholm. Find a session that fits your lifestyle.
          </p>
        </motion.div>
      </Section>

      {/* Schedule Intro */}
      <Section>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed italic">
              "Our schedule is intentionally balanced to help you create a consistent and sustainable practice."
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Main Schedule Experience */}
      <Section>
        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-16 md:mb-20">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`text-[10px] tracking-[0.3em] uppercase font-bold pb-2 transition-all duration-700 border-b-2 ${
                activeDay === day 
                  ? "text-foreground border-sage" 
                  : "text-muted-text border-transparent hover:text-foreground"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-4 mb-24 md:mb-32">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full text-[9px] tracking-[0.2em] uppercase font-bold border transition-all duration-700 ${
                activeFilter === filter
                  ? "bg-sage text-white border-sage"
                  : "bg-transparent text-muted-text border-border-studio hover:border-sage hover:text-sage"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Weekly Schedule Timetable */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeDay}-${activeFilter}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 md:space-y-8"
            >
              {filteredSchedule.length > 0 ? (
                filteredSchedule.map((item, index) => (
                  <div 
                    key={`${item.day}-${item.time}-${index}`}
                    className="group bg-[#FDFCFB] border border-border-studio rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-10 hover:shadow-soft transition-all duration-1000"
                  >
                    <div className="flex items-start md:items-center gap-8 md:gap-10">
                      <span className="text-4xl md:text-5xl font-heading text-sage italic leading-none">{item.time}</span>
                      <div>
                        <h3 className="text-2xl md:text-3xl italic font-normal mb-3 group-hover:text-sage transition-colors duration-1000">
                          {item.name}
                        </h3>
                        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text">
                          With {item.instructor}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between md:justify-end gap-10 md:gap-16 pt-8 md:pt-0 border-t md:border-none border-border-studio">
                      <div className="flex gap-10">
                        <div className="">
                          <span className="block text-[9px] tracking-[0.2em] uppercase text-muted-text mb-2 font-bold">Duration</span>
                          <span className="text-sm font-light">{item.duration}</span>
                        </div>
                        <div className="">
                          <span className="block text-[9px] tracking-[0.2em] uppercase text-muted-text mb-2 font-bold">Level</span>
                          <span className="text-sm font-light">{item.level}</span>
                        </div>
                      </div>
                      <Button href="/contact" className="w-full md:w-auto px-10">
                        Book Now
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-32 text-center border border-dashed border-border-studio rounded-[32px]">
                  <p className="text-muted-text font-light italic">No classes found for this selection.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Booking CTA */}
      <Section bg="ivory" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Heading level={2} center>
            Create a yoga practice <br />
            <span className="italic font-normal">that fits your life.</span>
          </Heading>
          <p className="text-xl text-muted-text mb-16 font-light">
            Choose a session that works for your Stockholm routine and begin at your own pace.
          </p>
          <Button href="/contact" className="min-w-[280px]">
            Book Your First Class
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}

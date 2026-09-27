import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";

// Each slot names the kind of photo/video intended for that spot.
// type: "image" | "video" | "placeholder"
// - "image" and "video" slots need a `src` pointing into /public/photos
// - "placeholder" slots mark a spot still waiting for real media
//
// Reassign `label`s below if you'd rather put the current photo/video
// somewhere else — nothing about the layout depends on the label text.
const slots = [
  {
    type: "image" as const,
    label: "The spring",
    src: "/photos/20260926_174603.jpg",
    alt: "The YNGS spring in Balmertown, Ontario",
  },
  { type: "placeholder" as const, label: "Surrounding landscape" },
  {
    type: "video" as const,
    label: "Water flowing from the spring",
    // Filename has spaces — encodeURI keeps the src valid either way, but
    // renaming the file to something like spring-flow.mp4 is recommended.
    src: encodeURI("/photos/WhatsApp Video 2026-09-26 at 6.59.47 PM.mp4"),
  },
  { type: "placeholder" as const, label: "Winter at YNGS" },
  { type: "placeholder" as const, label: "Summer at YNGS" },
  { type: "placeholder" as const, label: "Visitors at YNGS (with permission)" },
];

export default function Gallery() {
  return (
    <Section tone="mist">
      <Reveal>
        <h2 className="font-display text-4xl text-forest sm:text-5xl">
          Experience YNGS
        </h2>
        <p className="mt-4 max-w-measure font-body text-lg text-stone/90">
          A growing collection of real photos and video from YNGS. The
          remaining panels mark the kind of photo still needed.
        </p>
      </Reveal>

      <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {slots.map((slot) => {
          if (slot.type === "image") {
            return (
              <div
                key={slot.label}
                className="relative aspect-square overflow-hidden bg-sand/60"
              >
                <Image
                  src={slot.src}
                  alt={slot.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            );
          }

          if (slot.type === "video") {
            return (
              <div
                key={slot.label}
                className="relative aspect-square overflow-hidden bg-forest"
              >
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={slot.label}
                >
                  <source src={slot.src} type="video/mp4" />
                  Your browser does not support embedded video. You can view
                  the clip directly at {slot.src}.
                </video>
              </div>
            );
          }

          return (
            <div
              key={slot.label}
              className="flex aspect-square flex-col items-center justify-center gap-2 border border-dashed border-forest/25 bg-sand/60 p-4 text-center"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="#5C7A5F" strokeWidth="1.3" />
                <circle cx="8.5" cy="10" r="1.6" stroke="#5C7A5F" strokeWidth="1.3" />
                <path d="M4 17l5-5 4 4 3-3 4 4" stroke="#5C7A5F" strokeWidth="1.3" />
              </svg>
              <p className="font-body text-xs text-stone/70">{slot.label}</p>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}

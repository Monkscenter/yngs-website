import Section from "./Section";
import Reveal from "./Reveal";

const cards = [
  {
    title: "Natural Spring",
    text: "Cold water naturally emerging from the ground.",
  },
  {
    title: "Local Attraction",
    text: "A place for visitors and local residents to discover.",
  },
  {
    title: "Northwestern Ontario",
    text: "A small part of the natural landscape of the region.",
  },
];

export default function LocalAttraction() {
  return (
    <Section tone="sand">
      <Reveal>
        <h2 className="font-display text-4xl text-forest sm:text-5xl">
          A Small Place Worth Discovering
        </h2>
        <div className="mt-6 max-w-measure space-y-5 font-body text-lg leading-relaxed text-stone/90">
          <p>
            Northwestern Ontario is filled with forests, lakes, rivers,
            rocks, wetlands, and countless natural features.
          </p>
          <p>Some are famous. Others are discovered by the people who live and travel here.</p>
          <p>
            YNGS is one of those places. Whether you discover it while
            traveling through the area or make it a small destination of its
            own, YNGS is a place to stop, take in the surroundings, and
            appreciate the natural landscape.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-12 grid gap-6 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="border-l-2 border-water/60 pl-5 py-1"
          >
            <p className="font-display text-lg text-forest">{card.title}</p>
            <p className="mt-2 font-body text-sm text-stone/80">
              {card.text}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

import Section from "./Section";
import Reveal from "./Reveal";
import LocationCard from "./LocationCard";

export default function Visit() {
  return (
    <Section id="visit" tone="mist">
      <Reveal>
        <h2 className="font-display text-4xl text-forest sm:text-5xl">
          Find YNGS
        </h2>
        <p className="mt-4 max-w-measure font-body text-lg text-stone/90">
          YNGS is located in Balmertown, Ontario, Canada.
        </p>
      </Reveal>
      <Reveal className="mt-10">
        <LocationCard />
      </Reveal>
    </Section>
  );
}

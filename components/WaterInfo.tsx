import Section from "./Section";
import Reveal from "./Reveal";

export default function WaterInfo() {
  return (
    <Section tone="sand">
      <Reveal>
        <h2 className="font-display text-4xl text-forest sm:text-5xl">
          About the Water
        </h2>
        <div className="mt-6 max-w-measure space-y-5 font-body text-lg leading-relaxed text-stone/90">
          <p>YNGS is a naturally occurring cold-water spring.</p>
          <p>
            Many local people have collected and consumed water from the
            spring. However, the water at YNGS has not been independently
            tested by the creators of this website.
          </p>
          <p>
            Water quality can change over time and natural water sources can
            contain microorganisms, minerals, chemicals, or other
            contaminants that cannot necessarily be detected by appearance,
            smell, or taste.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-10 max-w-measure border-l-4 border-water bg-mist p-6">
        <p className="font-body text-base font-medium text-forest">
          Important: the water has not been laboratory tested or certified
          by YNGS.
        </p>
      </Reveal>
    </Section>
  );
}

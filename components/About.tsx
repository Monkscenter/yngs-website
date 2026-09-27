import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" tone="sand">
      <Reveal>
        <h2 className="font-display text-4xl text-forest sm:text-5xl">
          Discover YNGS
        </h2>
        <div className="mt-6 max-w-measure space-y-5 font-body text-lg leading-relaxed text-stone/90">
          <p>
            Hidden within the natural landscape of Northwestern Ontario is a
            small but special place where cold groundwater naturally emerges
            from the earth.
          </p>
          <p>We call it YNGS — Yash Niteshkumar Ghadiya Springs.</p>
          <p>
            YNGS is a natural cold-water spring and local attraction where
            visitors can stop, explore the surroundings, and experience a
            small piece of the region&apos;s natural landscape.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <div className="grid gap-px overflow-hidden rounded-sm border border-forest/15 bg-forest/15 sm:grid-cols-3">
          <div className="bg-mist p-6">
            <p className="font-display text-lg text-forest">Cold water</p>
            <p className="mt-2 font-body text-sm text-stone/80">
              Groundwater emerging naturally from the earth, year-round.
            </p>
          </div>
          <div className="bg-mist p-6">
            <p className="font-display text-lg text-forest">No structures</p>
            <p className="mt-2 font-body text-sm text-stone/80">
              Just the landscape and the spring — nothing built around it.
            </p>
          </div>
          <div className="bg-mist p-6">
            <p className="font-display text-lg text-forest">Easy to find</p>
            <p className="mt-2 font-body text-sm text-stone/80">
              Named and mapped so people can discover it more easily.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

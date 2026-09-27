import Section from "./Section";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <Section id="story" tone="mist">
      <Reveal>
        <h2 className="font-display text-4xl text-forest sm:text-5xl">
          The Story Behind YNGS
        </h2>
        <div className="mt-6 max-w-measure space-y-5 font-body text-lg leading-relaxed text-stone/90">
          <p>
            There is something special about finding water flowing naturally
            from the earth.
          </p>
          <p>
            There are no elaborate structures or artificial attractions here
            — just the landscape, the spring, and naturally occurring
            groundwater.
          </p>
          <p>
            YNGS was named to give this previously unnamed natural spring an
            identity and make it easier for people to discover.
          </p>
        </div>

        <div className="mt-8 max-w-measure rounded-sm border border-forest/20 bg-sand p-6">
          <p className="font-display text-sm text-forest">The name stands for</p>
          <dl className="mt-4 space-y-2 font-body text-base text-stone/90">
            <div className="flex gap-3">
              <dt className="font-display text-water">Y</dt>
              <dd>Yash</dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-display text-water">N</dt>
              <dd>Niteshkumar</dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-display text-water">G</dt>
              <dd>Ghadiya</dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-display text-water">S</dt>
              <dd>Springs</dd>
            </div>
          </dl>
        </div>

        <p className="mt-8 max-w-measure font-body text-lg leading-relaxed text-stone/90">
          The goal is simple: recognize this natural feature, share its
          location, and give people a place to discover while exploring
          Northwestern Ontario.
        </p>
      </Reveal>
    </Section>
  );
}

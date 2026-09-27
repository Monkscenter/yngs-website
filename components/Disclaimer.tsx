import Section from "./Section";
import Reveal from "./Reveal";

export default function Disclaimer() {
  return (
    <Section id="disclaimer" tone="forest">
      <Reveal>
        <div className="flex items-start gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="mt-1 flex-shrink-0"
          >
            <path
              d="M12 3 2 20h20L12 3Z"
              stroke="#5D97A9"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M12 10v4" stroke="#5D97A9" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="16.6" r="0.9" fill="#5D97A9" />
          </svg>
          <h2 className="font-display text-4xl text-sand sm:text-5xl">
            Water Safety Disclaimer
          </h2>
        </div>

        <div className="mt-8 max-w-measure space-y-5 font-body text-base leading-relaxed text-sand/90">
          <p>
            YNGS is a natural spring and the water has not been
            independently tested by the creators of this website.
          </p>
          <p>
            Many local people have traditionally collected and consumed
            water from this spring and, to our knowledge, have not reported
            problems. However, this should not be interpreted as a guarantee
            that the water is safe to drink.
          </p>
          <p>
            Natural spring water can contain bacteria, parasites, minerals,
            chemicals, or other contaminants that may not be visible,
            detectable by taste or smell, or known without proper laboratory
            testing.
          </p>
          <p>
            Water quality can also change over time and may be affected by
            weather, groundwater conditions, wildlife, surrounding land use,
            or other environmental factors.
          </p>
          <p>
            YNGS has not tested, certified, treated, or guaranteed the
            quality, purity, or safety of the water.
          </p>
          <p>
            Anyone who chooses to collect or consume water from the spring
            does so at their own discretion and risk.
          </p>

          <div className="rounded-sm border border-sand/25 bg-forest-dark/60 p-6">
            <p className="font-body text-sm font-medium text-sand">
              The creators and operators of this website:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sand/85">
              <li>Do not certify the water as potable or safe for human consumption.</li>
              <li>Do not guarantee its quality or purity.</li>
              <li>Have not conducted laboratory testing of the water.</li>
              <li>
                Are not responsible for illness, injury, contamination, or
                any other consequence arising from the collection or
                consumption of the water.
              </li>
              <li>
                Have simply given this natural spring the name YNGS — Yash
                Niteshkumar Ghadiya Springs — and provided information about
                its location as a local attraction.
              </li>
            </ul>
          </div>

          <p>
            If you require drinking water that is known to meet applicable
            drinking-water standards, use a tested and approved
            drinking-water source instead.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

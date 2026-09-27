import Button from "./Button";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-forest pt-20"
    >
      {/* Abstract water-ripple visual. This is a generated graphic, not a
          photograph of the spring — no real photos have been supplied yet.
          Swap the <svg> below for a real <Image> once photography exists. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70">
        <svg
          viewBox="0 0 800 800"
          className="h-[140%] w-[140%] max-w-none"
          aria-hidden="true"
        >
          <circle cx="400" cy="400" r="60" fill="none" stroke="#5D97A9" strokeWidth="1" opacity="0.5" className="animate-ripple" />
          <circle cx="400" cy="400" r="60" fill="none" stroke="#5D97A9" strokeWidth="1" opacity="0.4" className="animate-ripple" style={{ animationDelay: "1.1s" }} />
          <circle cx="400" cy="400" r="60" fill="none" stroke="#5D97A9" strokeWidth="1" opacity="0.3" className="animate-ripple" style={{ animationDelay: "2.2s" }} />
          <circle cx="400" cy="400" r="150" fill="none" stroke="#2F5540" strokeWidth="1" />
          <circle cx="400" cy="400" r="260" fill="none" stroke="#2F5540" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 via-transparent to-forest-dark/70" />

      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <p className="font-body text-sm tracking-wide text-water-light">
          Northwestern Ontario, Canada
        </p>
        <h1 className="mt-4 font-display text-6xl leading-[1.05] text-sand sm:text-7xl">
          YNGS
        </h1>
        <p className="mt-3 font-display text-2xl text-sand/90 sm:text-3xl">
          Yash Niteshkumar Ghadiya Springs
        </p>
        <p className="mt-6 max-w-measure font-body text-lg text-sand/80">
          {siteConfig.shortDescription}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#about" variant="secondary">
            Explore YNGS
          </Button>
          <Button
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="bg-water hover:bg-water-light"
          >
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
}

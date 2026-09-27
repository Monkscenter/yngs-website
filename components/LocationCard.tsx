import Button from "./Button";
import { siteConfig } from "@/lib/site-config";

export default function LocationCard() {
  return (
    <div className="overflow-hidden rounded-sm border border-forest/15 bg-mist">
      {/* A direct Google Maps <iframe> embed needs a Maps Embed API key tied
          to a domain, which this project does not have configured. Until
          one is added, this panel gives the same information as a styled
          card with a direct link out to Maps. See the README for how to
          swap in a live embed. */}
      <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-forest/95 p-8 text-center sm:aspect-[16/9]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z"
            stroke="#F5F0E4"
            strokeWidth="1.4"
          />
          <circle cx="12" cy="9" r="2.6" stroke="#5D97A9" strokeWidth="1.4" />
        </svg>
        <p className="font-display text-lg text-sand">{siteConfig.location}</p>
        <p className="max-w-xs font-body text-sm text-sand/70">
          Open the pinned location in Google Maps for driving directions.
        </p>
      </div>
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-sm text-stone/80">
          Use the map to plan your visit and confirm the route before
          traveling.
        </p>
        <Button
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="whitespace-nowrap"
        >
          Open in Google Maps
        </Button>
      </div>
    </div>
  );
}

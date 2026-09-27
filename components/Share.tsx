"use client";

import { useEffect, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Share() {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const shareText = `${siteConfig.fullName} — ${siteConfig.location}`;

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.mapsUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail without permissions/HTTPS; fail silently,
      // the link is still visible and selectable on the page.
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: siteConfig.fullName,
          text: shareText,
          url: siteConfig.mapsUrl,
        });
      } catch {
        // User cancelled the share sheet — nothing to do.
      }
    }
  };

  const encodedUrl = encodeURIComponent(siteConfig.mapsUrl);
  const encodedText = encodeURIComponent(shareText);

  return (
    <Section tone="sand">
      <Reveal>
        <h2 className="font-display text-4xl text-forest sm:text-5xl">
          Share the Discovery
        </h2>
        <p className="mt-4 max-w-measure font-body text-lg text-stone/90">
          Found YNGS? Share the location with friends, family, and fellow
          explorers.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-sm border border-forest/30 px-5 py-2.5 font-body text-sm text-forest transition-colors hover:bg-forest/5"
          >
            {copied ? "Link copied" : "Copy Google Maps link"}
          </button>

          {canNativeShare && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="inline-flex rounded-sm border border-forest/30 px-5 py-2.5 font-body text-sm text-forest transition-colors hover:bg-forest/5"
            >
              Share
            </button>
          )}

         
        </div>

      </Reveal>
    </Section>
  );
}

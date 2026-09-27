import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
  { href: "#disclaimer", label: "Water Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark px-6 py-14 font-body text-sand/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <p className="font-display text-lg text-sand">{siteConfig.name}</p>
          </div>
          <p className="mt-1 text-sm">{siteConfig.fullName}</p>
          <p className="mt-4 text-sm text-sand/60">
            Natural spring &middot; Local attraction &middot; Northwestern Ontario
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-sand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-xs text-sm">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-water underline-offset-4 hover:text-sand"
          >
            Find us on Google Maps
          </a>
          <p className="mt-4 text-sand/50">
            Information provided on this website is for general informational
            purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

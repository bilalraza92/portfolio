import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, SITE } from "@/constants/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative border-t border-white/5 bg-bg-soft">
      <div className="container-px mx-auto max-w-6xl py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="#home" className="font-display text-2xl font-semibold text-text">
              Bilal Raza<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.tagline} Available for freelance work and full-time roles.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor-hover
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Connect
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-cursor-hover
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with Next.js, TypeScript &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}

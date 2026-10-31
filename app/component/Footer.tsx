import Link from "next/link";
import { portfolioData } from "@/config/portfolio-data";

const { contact } = portfolioData;

const links = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "Email", href: `mailto:${contact.email}` },
];

function Footer() {
  return (
    <footer className="border-t border-foreground/15">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="font-display text-lg font-bold tracking-tight">
              Gaben<span className="text-primary">.</span>Nguyen
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Software engineering student · {contact.location}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {label}
              </a>
            ))}
            <a
              href="/Resume_Ba_Hoa_NGUYEN_New.pdf"
              download
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              CV
            </a>
          </nav>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ba Hoa Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

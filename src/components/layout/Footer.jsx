import { useState } from "react";
import { footerSections } from "../../data/Data";

// ─── Icons ───────────────────────────────────────────────────────────────────

const ExternalIcon = () => (
    <svg
        width="11"
        height="11"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-2.75 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
        <path
            d="M2.08064 11.7301L11.4802 2.33049L11.4802 12.9371L12.4801 12.9371L12.4801 0.623532L0.166506 0.623533L0.166507 1.62338L10.7731 1.62338L1.37354 11.023L2.08064 11.7301Z"
            fill="currentColor"
        />
    </svg>
);

const ChevronIcon = ({ open }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
        <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
);

const NAV_SECTIONS = footerSections;

// ─── Sub-components ──────────────────────────────────────────────────────────

const FooterLink = ({ href, label, external = false }) => (
    <a
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        data-cursor="Open"
        className="group flex items-center gap-2 py-1 text-sm transition-colors duration-200 hover:text-primary hover:underline underline-offset-3 decoration-2 decoration-alt-yellow md:text-base font-light"
    >
        {label}
        {external && <ExternalIcon />}
    </a>
);

/** Accordion section — used on mobile only */
const AccordionSection = ({ section }) => {
    const [open, setOpen] = useState(false);
    const allLinks = section.twoCol
        ? [...section.col1, ...section.col2]
        : section.links;

    return (
        <div className="border-b border-gray-100">
            <button
                onClick={() => setOpen((v) => !v)}
                className="pressable flex w-full items-center justify-between py-3.5 text-left"
                data-cursor="Open"
            >
                <span className="text-sm font-bold text-primary">{section.heading}</span>
                <ChevronIcon open={open} />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-125 pb-4" : "max-h-0"
                    }`}
            >
                <div className="grid grid-cols-2 gap-x-4">
                    {allLinks.map((link) => (
                        <FooterLink
                            key={link.label}
                            href={link.href}
                            label={link.label}
                            external={section.external ?? link.external ?? false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

/** Static column — used on md+ */
const StaticSection = ({ section }) => (
    <div className="space-y-4">
        <p className="text-base font-bold text-primary lg:text-xl">{section.heading}</p>

        {section.twoCol ? (
            // Products: two sub-columns side by side
            <div className="flex gap-8 xl:gap-14">
                <div className="space-y-3">
                    {section.col1.map((link) => (
                        <FooterLink key={link.label} href={link.href} label={link.label} />
                    ))}
                </div>
                <div className="space-y-3">
                    {section.col2.map((link) => (
                        <FooterLink key={link.label} href={link.href} label={link.label} />
                    ))}
                </div>
            </div>
        ) : (
            <div className="space-y-3">
                {section.links.map((link) => (
                    <FooterLink
                        key={link.label}
                        href={link.href}
                        label={link.label}
                        external={section.external ?? link.external ?? false}
                    />
                ))}
            </div>
        )}
    </div>
);

// ─── Footer ──────────────────────────────────────────────────────────────────

export default function Footer() {
    return (
        <footer className="bg-black text-white font-comfortaa">
            <div className="px-4 py-10 sm:px-6 md:px-8 lg:px-10">

                {/* ── Top section ── */}
                <div className="flex flex-col gap-8 md:flex-row md:gap-6 lg:gap-10">

                    {/* Logo + Socials */}
                    <div className="flex items-center justify-between md:w-50 md:shrink-0 md:flex-col md:items-start lg:w-55">
                        <a href="/" className="block w-20 lg:w-28" data-cursor="Open">
                            <img src="/images/logo.webp" 
                                alt="Nekza Plast" height={70}
                                className="h-auto w-full object-contain"
                            />
                        </a>

                        {/* Socials — inline on mobile, pushed to bottom on md */}
                        <div className="flex items-center gap-4 md:mt-auto md:pt-16">
                            <a
                                href="https://www.facebook.com/share/1Yhpp7osHb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="transition-colors duration-200 hover:text-primary"
                                data-cursor="Open"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="https://www.instagram.com/nekzaplast"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="transition-colors duration-200 hover:text-primary"
                                data-cursor="Open"
                            >
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>

                    {/* ── Mobile: Accordion nav ── */}
                    <div className="w-full md:hidden">
                        {NAV_SECTIONS.map((section) => (
                            <AccordionSection key={section.heading} section={section} />
                        ))}
                    </div>

                    <div className="hidden flex-1 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-[1fr_auto_1fr_1fr] lg:gap-x-10 xl:gap-x-15">
                        {NAV_SECTIONS.map((section) => (
                            <StaticSection key={section.heading} section={section} />
                        ))}
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="mt-10 md:border-t border-gray-100 pt-6 lg:mt-14">
                    <p className="w-full text-center text-sm font-light leading-snug md:text-base">
                        Copyright © 2025 Nekza Plast. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

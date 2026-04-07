import {
  ShieldCheck,
  Database,
  LockKeyhole,
  Eye,
  Cookie,
  Mail,
  Handshake,
  RefreshCcw,
  PhoneCall,
} from "lucide-react";
import { PRIVACY_POLICY_SECTIONS } from "../data/Data.js";

const sectionIcons: Record<string, typeof ShieldCheck> = {
  "shield-check": ShieldCheck,
  database: Database,
  eye: Eye,
  "lock-keyhole": LockKeyhole,
  cookie: Cookie,
  mail: Mail,
  handshake: Handshake,
  "refresh-ccw": RefreshCcw,
  "phone-call": PhoneCall,
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 150;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function PrivacyPolicy() {
  return (
    <section className="section-shell relative bg-white text-zinc-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-28 h-112 w-md -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:42px_42px] opacity-[0.18]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-24 md:px-8 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <ShieldCheck size={16} />
            <span>Privacy Policy</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
            Privacy, explained <span className="text-primary decoration-3 decoration-alt-yellow underline">like a human</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            This page explains what information we may collect, why we collect it,
            and how we handle it while you interact with Nekza online.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500">
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
              Effective Date: 17 March, 2025
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
              Brand: Nekza
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr]">
          {/* Sticky Sidebar */}
          <aside className="h-fit rounded-4xl border border-zinc-200 bg-white/80 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur md:sticky md:top-30 md:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              On This Page
            </p>

            <nav className="space-y-2">
              {PRIVACY_POLICY_SECTIONS.filter(s => s.title && s.content).map((section) => {
                const id = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <button
                    key={section.title}
                    onClick={() => scrollToSection(id)}
                    className="block w-full rounded-xl px-3 py-2 text-left text-sm text-zinc-600 transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
                  >
                    {section.title}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            {PRIVACY_POLICY_SECTIONS.filter(s => s.title && s.content).map((section) => {
              const Icon = section.iconKey ? sectionIcons[section.iconKey] ?? ShieldCheck : ShieldCheck;
              const id = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

              return (
                <article
                  key={section.title}
                  id={id}
                  className="rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur md:p-8"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
                      {section.title}
                    </h1>
                  </div>

                  <p className="text-[15px] leading-8 text-zinc-600 md:text-base">
                    {section.content}
                  </p>
                </article>
              );
            })}

            
          </div>
        </div>
      </section>
    </section>
  );
}

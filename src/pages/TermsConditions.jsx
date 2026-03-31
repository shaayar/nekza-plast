import { FileText, ShieldCheck, Scale, Truck, RotateCcw, AlertTriangle } from "lucide-react";
import { TERMS_SECTIONS } from "../data/Data.js";

const sectionIcons = {
  "file-text": FileText,
  "shield-check": ShieldCheck,
  scale: Scale,
  truck: Truck,
  "rotate-ccw": RotateCcw,
  "alert-triangle": AlertTriangle,
};

export default function TermsConditions() {
  return (
    <main className="relative overflow-hidden bg-white text-zinc-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-28 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.18]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-24 md:px-8 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <FileText size={16} />
            <span>Terms & Conditions</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
            The fine print, <span className="text-primary underline decoration-3 decoration-alt-yellow offset">without the dust</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            These terms outline how our website, products, content, and services may be used.
            We’ve kept them clear, readable, and grounded in common sense.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500">
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
              Effective Date: March 17, 2025
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
              Brand: Nekza
            </span>
          </div>
        </div>
      </section>

      {/* Terms body */}
      <section className="relative px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sticky sidebar */}
          <aside className="h-fit rounded-[2rem] border border-zinc-200 bg-white/80 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              On This Page
            </p>

            <nav className="space-y-2">
              {TERMS_SECTIONS.map((section) => (
                <a
                  key={section.title}
                  href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="block rounded-xl px-3 py-2 text-sm text-zinc-600 transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
                >
                  {section.title}
                </a>
              ))}
              <a
                href="#general-usage"
                className="block rounded-xl px-3 py-2 text-sm text-zinc-600 transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
              >
                7. General Website Use
              </a>
              <a
                href="#updates"
                className="block rounded-xl px-3 py-2 text-sm text-zinc-600 transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
              >
                8. Updates to Terms
              </a>
              <a
                href="#contact"
                className="block rounded-xl px-3 py-2 text-sm text-zinc-600 transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
              >
                9. Contact
              </a>
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-6">
            {TERMS_SECTIONS.map((section) => {
              const Icon = sectionIcons[section.iconKey] ?? FileText;
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
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-[15px] leading-8 text-zinc-600 md:text-base">
                    {section.content}
                  </p>
                </article>
              );
            })}

            <article
              id="general-usage"
              className="rounded-[2rem] border border-zinc-200 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur md:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                7. General Website Use
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-zinc-600 md:text-base">
                You agree not to misuse this website, interfere with its normal operation, attempt
                unauthorized access, or use its content in any misleading or unlawful manner. The
                website is intended to provide information, showcase products, and support legitimate
                customer interaction with the Nekza brand.
              </p>
            </article>

            <article
              id="updates"
              className="rounded-[2rem] border border-zinc-200 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur md:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                8. Updates to Terms
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-zinc-600 md:text-base">
                We may revise these Terms and Conditions from time to time to reflect operational,
                legal, or product-related updates. Continued use of the website after such changes
                implies acceptance of the updated terms.
              </p>
            </article>

            <article
              id="contact"
              className="rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.16)] md:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                9. Contact
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-zinc-600 md:text-base">
                If you have any questions regarding these Terms & Conditions, product information,
                support policies, or website usage, please contact the Nekza team through the contact
                details provided on the website.
              </p>

              <div className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-600">
                Replace with your actual support email / contact details
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

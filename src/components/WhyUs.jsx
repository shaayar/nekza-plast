const REASONS = [
  {
    title: "Built For Everyday Use",
    description:
      "From office commutes to travel days, our products are made to stay durable, practical, and easy to carry.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 5h10M8 5v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 10h4M10 14h4" />
      </svg>
    ),
  },
  {
    title: "Modern + Functional Design",
    description:
      "We combine clean aesthetics with thoughtful details so every item looks premium and works better in daily life.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 13 12 4l8 9-8 7-8-7Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Trusted By Real Customers",
    description:
      "Thousands of buyers choose Nekza for reliable quality, value-for-money products, and consistent experiences.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12 17 5.2 3-1.4-5.8L20 9.8l-5.9-.5L12 4 9.9 9.3 4 9.8l4.2 4.4L6.8 20z" />
      </svg>
    ),
  },
  {
    title: "Fast Support & Delivery",
    description:
      "Quick order processing, neat packaging, and responsive help whenever you need assistance with your purchase.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h11m0 0-3-3m3 3-3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 6v12" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="section-shell px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-amber-200/40 blur-2xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_1.6fr] lg:gap-10">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
              Why Choose Nekza
            </p>

            <h2 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A brand designed with{" "}
              <span className="relative inline-block text-primary">
                intention
                <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-amber-300/60" />
              </span>
            </h2>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              We focus on quality craftsmanship, practical utility, and a style
              that feels fresh. Every collection is made to support real,
              everyday routines.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {REASONS.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg"
              >
                <div
                  className={`pointer-events-none absolute ${
                    index % 2 === 0 ? "-right-8 -top-8" : "-left-8 -bottom-8"
                  } h-24 w-24 rounded-full bg-primary/10 blur-xl transition-all duration-300 group-hover:bg-primary/20`}
                />

                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-primary/15">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

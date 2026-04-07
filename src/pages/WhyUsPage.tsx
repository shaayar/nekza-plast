import {
  ShieldCheck,
  Sparkles,
  PackageCheck,
  BadgeCheck,
  Shapes,
  Layers3,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Built for everyday wear and tear",
    desc: "Our products are made for repeated daily use, not shelf decoration. They’re designed to survive school bags, kitchen counters, travel routines, and everything in between.",
  },
  {
    icon: Sparkles,
    title: "Utility that doesn’t feel boring",
    desc: "Function matters, but so does form. Nekza products are designed to be practical, durable, and visually clean enough to feel good in everyday spaces.",
  },
  {
    icon: PackageCheck,
    title: "A wide range for real-life use cases",
    desc: "From school essentials to kitchen utility to hydration and travel-ready products, our range is built around how people actually use products in day-to-day life.",
  },
  {
    icon: BadgeCheck,
    title: "Consistency over gimmicks",
    desc: "We focus on useful, dependable product design instead of short-lived novelty. The goal is simple: products that stay useful long after first use.",
  },
  {
    icon: Shapes,
    title: "Made to fit multiple lifestyles",
    desc: "Whether it’s home, office, school, or travel, our collections are designed to adapt to different routines without feeling out of place.",
  },
  {
    icon: Layers3,
    title: "Simple choices, thoughtfully made",
    desc: "We believe the best products are often the ones that quietly do their job well. Nekza is built around thoughtful utility, not unnecessary complexity.",
  },
];

export default function WhyUsPage() {
  return (
    <main className="relative overflow-hidden bg-white text-zinc-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-120 w-120 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-size-[42px_42px] opacity-[0.16]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-14 pt-24 text-center md:px-8 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <BadgeCheck size={16} />
            <span>Why Nekza</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
            Because utility should still feel <span className="text-primary underline decoration-3 decoration-alt-yellow">well designed</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            Nekza exists for everyday products that are practical, durable,
            and thoughtfully made to fit the rhythm of real life.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Daily Utility", "Durable Design", "Everyday Function", "Clean Essentials"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Statement Block */}
      <section className="relative px-4 pb-20 md:px-8 lg:px-12">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl border border-zinc-200 bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-10 text-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] md:px-10 md:py-14">

          {/* subtle glow */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/90">
            Our Point of View
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Everyday essentials shouldn’t feel disposable, forgettable, or poorly made.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
            The products people use every day shape routines more than they realize.
            That’s why we focus on useful design, dependable construction, and
            practical choices that feel right to live with.
          </p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="relative px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              What Sets Us Apart
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Practical choices, built with more intention.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-4xl border border-primary bg-white/80 px-6 py-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Built for Real Life
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            The goal is simple:
            <br className="hidden md:block" />
            <span className="text-primary underline decoration-3 decoration-alt-yellow">Make everyday products feel more worth keeping.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            Explore a range designed around practical use, cleaner utility,
            and everyday dependability.
          </p>

          <a
            href="/products"
            data-cursor="Shop"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
          >
            Explore Products
          </a>
        </div>
      </section>
    </main>
  );
}
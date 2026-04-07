import { TESTIMONIALS } from "../data/Data.js";

export default function Testimonials() {
  return (
    <section className="section-shell py-8 sm:py-10 lg:py-12">
      <div className="rounded-2xl bg-zinc-50 p-5 sm:p-7 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-bold text-black text-4xl lg:text-5xl">
            Loved by <span className="focus text-primary underline decoration-4 decoration-alt-yellow">Nekza Customers</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-600 sm:text-base">
            Real feedback from people who use Nekza products every day.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((item, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div
                className={`pointer-events-none absolute ${
                  idx % 2 === 0 ? "-right-8 -top-8" : "-left-8 -bottom-8"
                } h-24 w-24 rounded-full bg-primary/10 blur-xl transition-all duration-300 group-hover:bg-primary/20`}
              />
              <span className="absolute left-4 top-3 text-3xl font-bold leading-none text-primary/40">
                "
              </span>
              <p className="relative z-10 pt-3 text-sm leading-relaxed text-zinc-700">
                {item.text}
              </p>
              <span className="absolute right-4 bottom-0 text-3xl font-bold leading-none text-primary/40">
                "
              </span>

              <div className="relative z-10 mt-5 flex items-center gap-3 border-t border-red-100 pt-4">
                <img
                  src={item.img}
                  alt={item.name}
                  width="40"
                  height="40"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{item.name}</p>
                  <p className="text-xs text-zinc-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

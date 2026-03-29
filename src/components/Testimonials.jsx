const testimonials = [
  {
    text: "The bottle quality is premium and keeps water cool for hours. Exactly what I needed for office and travel.",
    name: "Priya Sharma",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=20",
  },
  {
    text: "Loved the finish and durability. Nekza products feel sturdy and the designs are very practical for daily use.",
    name: "Rahul Verma",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=32",
  },
  {
    text: "My kids use the lunch box every day. Great build quality and easy to clean.",
    name: "Ananya Patel",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=44",
  },
  {
    text: "Delivery was quick and packaging was neat. Product looked exactly like the photos.",
    name: "Karan Mehta",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=56",
  },
  {
    text: "Best value for money in this range. The insulation works really well.",
    name: "Sneha Iyer",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=68",
  },
  {
    text: "The design is sleek and modern. It fits perfectly in my car cup holder too.",
    name: "Arjun Nair",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=15",
  },
  {
    text: "Best value for money in this range. The insulation works really well.",
    name: "Sneha Iyer",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=68",
  },
  {
    text: "The design is sleek and modern. It fits perfectly in my car cup holder too.",
    name: "Arjun Nair",
    role: "Verified Buyer",
    img: "https://i.pravatar.cc/120?img=15",
  },
];

export default function Testimonials() {
  return (
    <section className="section-shell py-8 sm:py-10 lg:py-12">
      <div className="rounded-2xl bg-zinc-50 p-5 sm:p-7 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
            Loved by <span className="focus text-primary underline decoration-4 decoration-alt-yellow">Nekza Customers</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 sm:text-base">
            Real feedback from people who use Nekza products every day.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, idx) => (
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

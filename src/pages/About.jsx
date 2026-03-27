import { Lightbulb, HandHeart, ShieldHalf, Users } from "lucide-react";

const values = [
  {
    title: "Innovation",
    image: <Lightbulb />,
    description:
      "At the heart of Nekza lies a relentless drive to innovate. Our philosophy 'Kuch Naya Sochte Hai' pushes us to reimagine everyday solutions with cutting-edge designs that make life simpler and more enjoyable.",
  },
  {
    title: "Quality",
    image: <HandHeart />,
    description:
      "Excellence is non-negotiable at Nekza. We uphold the highest standards of craftsmanship and consistency, continuously raising the bar for quality in the homeware industry.",
  },
  {
    title: "Durability",
    image: <ShieldHalf />,
    description:
      "Every Nekza product is engineered to last. From busy morning routines to daily adventures, our products are designed to withstand the rigors of real-world use.",
  },
  {
    title: "Customer Service",
    image: <Users />,
    description:
      "Our commitment to customers extends beyond purchase. We provide responsive support and assistance, ensuring every Nekza owner enjoys a seamless experience.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="w-full">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[600px] overflow-hidden">
          <img
            src="/images/about.webp"
            alt="About Nekza"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-4 md:px-8 lg:px-16 py-10 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-primary">
            Empowering Everyday Living Through Innovation
          </h1>
          <div className="space-y-5 text-base md:text-lg leading-8 text-gray-700">
            <p>
              Nekza evokes cherished memories of simpler times, when families relied on trusted containers to keep meals fresh, water cold, and daily life organized.
            </p>
            <p>
              Today, we've transformed that legacy into a comprehensive range of modern homeware solutions that blend timeless reliability with contemporary design, meeting the evolving needs of today's dynamic lifestyles.
            </p>
            <p>
              Since our establishment in 1972, Nekza has grown into a trusted household name with five decades of excellence, supported by a robust network of 55,000 retail partners and state-of-the-art manufacturing facilities nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="px-4 md:px-8 lg:px-16 py-6 md:py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-4">Mission</h2>
            <p className="text-gray-700 leading-8 text-base md:text-lg">
              As a leading homeware brand, Nekza is dedicated to crafting exceptional products that address everyday challenges through continuous innovation, setting industry benchmarks, and delivering unparalleled quality.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-4">Vision</h2>
            <p className="text-gray-700 leading-8 text-base md:text-lg">
              To become the definitive leader in homeware solutions by offering innovative products that harmonize functionality, aesthetics, and value, transforming the way people experience their daily lives.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-[70px] h-[70px] mx-auto mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-7 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KUCH NAYA */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-4">
            Kuch Naya Sochte Hain
          </h2>
          <h3 className="text-xl md:text-3xl font-medium mb-6 text-gray-800">
            Where Progress Meets Possibility
          </h3>
          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-8">
            <p>
              While change is inevitable, transforming it into opportunity for innovation is what truly defines Nekza's pioneering spirit.
            </p>
            <p>
              At Nekza, each day brings fresh perspectives and creative exploration as we strive to surpass yesterday's achievements and build a brighter, more innovative future.
            </p>
          </div>
        </div>
      </section>

      {/* AWARDS INTRO */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-4">
            Recognition & Excellence
          </h2>
          <h3 className="text-xl md:text-3xl font-medium mb-6 text-gray-800">
            Honored for Our Innovation
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-8">
            Our commitment to innovation has earned Nekza numerous accolades, reflecting the trust and confidence our customers place in our products and vision.
          </p>
        </div>
      </section>

      {/* AWARDS SLIDER PLACEHOLDER */}
      {/* <section className="px-4 md:px-8 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {awards.map((award, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[320px] md:min-w-[400px] rounded-xl overflow-hidden bg-gray-100"
              >
                <img
                  src={award}
                  alt={`Award ${index + 1}`}
                  className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}

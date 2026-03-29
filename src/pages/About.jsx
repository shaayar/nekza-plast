import { Lightbulb, HandHeart, ShieldHalf, Users } from "lucide-react";
import OwnersNote from "../components/OwnersNote";
import Timeline from "../components/Timeline";
import { COMPANY_INFO } from "../data/Data.js";

const values = [
  {
    title: "Innovation",
    image: <Lightbulb />,
    description:
      "At the heart of Nekza lies a relentless drive to innovate. Our philosophy 'Kuch Naya Sochte Hai' pushes us to reimagine everyday solutions that make life simpler and more enjoyable.",
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
    <section className="section-shell bg-white text-black">

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
              Since our establishment in 2013, Nekza has grown into a trusted household name with a strong retail network and a manufacturing-first approach focused on quality and consistency.
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
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-primary text-center">
            Our Values
          </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div key={index} className="text-center shadow-xl md:px-4 md:py-2 rounded-2xl">
              <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {item.image}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-7 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Details */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-6">
                Company Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Company Name</h3>
                  <p className="text-gray-700">{COMPANY_INFO.name}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Person</h3>
                  <p className="text-gray-700">{COMPANY_INFO.contactPerson}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700 leading-6">{COMPANY_INFO.location}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-700">{COMPANY_INFO.phone}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">GST No.</h3>
                  <p className="text-gray-700">{COMPANY_INFO.gst}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Established</h3>
                  <p className="text-gray-700">{COMPANY_INFO.established}</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59129.53571476628!2d70.61004614863283!3d22.14137480000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395833006582756d%3A0x97133bda1bf0f063!2sNekza%20Plast!5e0!3m2!1sen!2sin!4v1774769262214!5m2!1sen!2sin"
                title="Nekza Plast Location"
                width="600"
                height="450"
                className="w-full max-w-150 rounded-xl border border-zinc-200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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

      {/* OWNER'S NOTE */}
      <OwnersNote />

      {/* TIMELINE */}
      <Timeline />

      {/* AWARDS INTRO */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 h-[600px] md:h-[800px]" style={{background: `url('/images/building.png') no-repeat center bottom/cover`}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Recognition & Excellence
          </h2>
          <h3 className="text-xl md:text-3xl font-medium mb-6 text-white">
            Honored for Our Innovation
          </h3>
          <p className="text-white text-base md:text-lg leading-8">
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
    </section>
  );
}

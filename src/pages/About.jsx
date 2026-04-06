import { Lightbulb, HandHeart, ShieldHalf, Users } from "lucide-react";
import OwnersNote from "../components/OwnersNote";
import Timeline from "../components/Timeline";
import { ABOUT_VALUES, COMPANY_INFO } from "../data/Data.js";

const valueIcons = {
  lightbulb: <Lightbulb />,
  "hand-heart": <HandHeart />,
  shield: <ShieldHalf />,
  users: <Users />,
};

export default function AboutPage() {
  return (
    <section className="section-shell bg-white text-black">

      {/* HERO */}
      <section className="w-full">
        <div className="relative w-full h-62.5 md:h-145 overflow-hidden">
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
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Empowering Everyday Living <span className="text-primary underline decoration-3 decoration-alt-yellow">Through Innovation</span>
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
      <section className="px-4 md:px-8 lg:px-16 py-6 md:py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          Our <span className="text-primary underline decoration-3 decoration-alt-yellow">Mission & Vision</span>
        </h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="text-center md:text-left relative border border-gray-200 rounded-2xl p-6 md:p-9 overflow-hidden">
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-4">Mission</h2>
            <p className="text-gray-700 leading-8 text-base md:text-lg">
              As a leading homeware brand, Nekza is dedicated to crafting exceptional products that address everyday challenges through continuous innovation, setting industry benchmarks, and delivering unparalleled quality.
            </p>
            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-38 w-38 rounded-full bg-primary/20 blur-xl" />
            <div className="pointer-events-none absolute -top-20 -left-10 h-38 w-38 rounded-full bg-primary/20 blur-xl" />
          </div>

          <div className="text-center md:text-left relative border border-gray-200 rounded-2xl p-6 md:p-9 overflow-hidden">
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-4">Vision</h2>
            <p className="text-gray-700 leading-8 text-base md:text-lg">
              To become the definitive leader in homeware solutions by offering innovative products that harmonize functionality, aesthetics, and value, transforming the way people experience their daily lives.
            </p>
            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-38 w-38 rounded-full bg-primary/20 blur-xl" />
            <div className="pointer-events-none absolute -top-20 -right-10 h-38 w-38 rounded-full bg-primary/20 blur-xl" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-center">
            Our <span className="text-primary underline decoration-3 decoration-alt-yellow">Values</span>
          </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_VALUES.map((item, index) => (
            <div key={index} className="text-center shadow-xl px-2 py-4 md:px-4 md:py-2 rounded-2xl">
              <div className="mx-auto mb-5 flex h-17.5 w-17.5 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {valueIcons[item.iconKey] ?? null}
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
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Beyond <span className="text-primary underline decoration-3 decoration-alt-yellow">the Ordinary</span>
          </h2>
          <h3 className="text-xl md:text-3xl font-medium mb-6 text-gray-800">
            Where Vision Meets Innovation
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
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 h-150 md:h-190" style={{ background: `url('/images/building.webp') no-repeat center bottom/cover` }}>
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

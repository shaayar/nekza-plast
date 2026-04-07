import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative overflow-hidden bg-white text-zinc-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-112 w-md -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-size-[42px_42px] opacity-[0.18]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-24 text-center md:px-8 lg:px-12 lg:pt-32">
        <h1 className="text-4xl font-semibold md:text-5xl">
          Let’s talk, <span className="text-primary decoration-3 underline decoration-alt-yellow">we’re listening</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-zinc-600">
          Questions, feedback, product queries or anything else. We’ll get back to you.
        </p>
      </section>

      {/* Content */}
      <section className="relative px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          
          {/* Form */}
          <div className="rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-lg backdrop-blur md:p-8">
            <h1 className="text-2xl font-semibold">Send a message</h1>

            <form className="mt-6 space-y-5">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-primary"
              />
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-primary"
              />

              <button
                data-cursor="Send"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white hover:opacity-90"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="rounded-4xl border border-zinc-200 bg-white/80 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <span>info@nekza.com</span>
              </div>
            </div>

            <div className="rounded-4xl border border-zinc-200 bg-white/80 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <span>+91 7045552112</span>
              </div>
            </div>

            <div className="rounded-4xl border border-zinc-200 bg-white/80 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={50} />
                <span>Survey no. 407, Plot no. 1,2, Jay Balaji Industrial Area, Sanganva, Tal. Lodhika, Rajkot, Gujarat, India - 360035</span>
              </div>
            </div>

            <div className="rounded-4xl bg-zinc-950 p-6 text-white">
              <h3 className="text-xl font-semibold">Response time</h3>
              <p className="mt-2 text-zinc-300 text-sm">
                Usually within 24 – 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
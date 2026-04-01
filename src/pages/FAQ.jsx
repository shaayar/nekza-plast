import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../data/Data.js";

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur">
      <button
        onClick={onClick}
        data-cursor="Open"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-medium text-zinc-900">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : "text-zinc-400"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-zinc-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="relative overflow-hidden bg-white text-zinc-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-28 h-112 w-md -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-size-[42px_42px] opacity-[0.18]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-24 md:px-8 lg:px-12 lg:pt-32 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <HelpCircle size={16} />
            <span>FAQ</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Questions, <span className="text-primary underline decoration-3 decoration-alt-yellow">answered clearly</span>.
          </h1>

          <p className="mt-6 text-base text-zinc-600 md:text-lg">
            Everything you might want to know about our products, delivery, and support.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="relative px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-10">
          {FAQ_DATA.map((group, groupIndex) => (
            <div key={group.category}>
              <h2 className="mb-5 text-xl font-semibold text-zinc-900">
                {group.category}
              </h2>

              <div className="space-y-3">
                {group.items.map((item, i) => {
                  const index = `${groupIndex}-${i}`;
                  const isOpen = openIndex === index;

                  return (
                    <AccordionItem
                      key={index}
                      question={item.q}
                      answer={item.a}
                      isOpen={isOpen}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-4xl border border-zinc-200 bg-zinc-950 p-8 text-white text-center shadow-[0_20px_80px_rgba(0,0,0,0.2)]">
          <h3 className="text-2xl font-semibold">
            Still have questions?
          </h3>
          <p className="mt-3 text-zinc-300">
            Reach out to us and we’ll help you out.
          </p>

          <div className="mt-6">
            <a
              href="/contact"
              data-cursor="Open"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

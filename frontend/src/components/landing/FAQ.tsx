import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I schedule posts for multiple platforms?",
    answer:
      "Yes. You can schedule content for Instagram, Facebook, LinkedIn, X, and YouTube from one dashboard.",
  },
  {
    question: "Does the platform generate AI captions?",
    answer:
      "Yes. Our AI Studio helps generate captions, hashtags, and content ideas within seconds.",
  },
  {
    question: "Can I edit scheduled posts later?",
    answer:
      "Absolutely. You can update, delete, or reschedule posts anytime before publishing.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. You can start with our free plan and upgrade whenever your business grows.",
  },
];

function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-violet-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="border-t border-white/10 px-6 pb-6 pt-4">
                  <p className="leading-7 text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
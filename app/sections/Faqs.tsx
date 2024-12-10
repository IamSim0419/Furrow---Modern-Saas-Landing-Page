"use client";

import { Plus } from "lucide-react";
import Tag from "@/app/components/Tag";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Furrow&apos;s version control system is automatically saved and versioned in real-time. This ensures that you can always track your progress and revert to previous versions of your work if needed. With Furrow&apos;s version control system, you never have to worry about losing important changes, and you can collaborate seamlessly with your team.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Furrow includes a robust offline mode that allows you to continue your work even when you don&apos;t have an internet connection. All changes made offline are automatically synced when you&apos;re back online, ensuring that you never lose any progress, no matter where you are.",
  },
  {
    question: "How does Furrow handle collaboration?",
    answer:
      "Furrow is built for collaboration. You can easily invite team members to work on projects together, share files, and leave comments on specific tasks. Furrow allows for real-time collaboration, so everyone stays in sync and can contribute to the project without any confusion. Our collaborative features are designed to enhance productivity and make teamwork more efficient.",
  },
  {
    question: "Is Furrow secure for storing sensitive data?",
    answer:
      "Absolutely! Furrow takes security seriously. We implement industry-standard encryption protocols to protect your data at rest and during transmission. Additionally, our platform is hosted on secure servers with regular security updates to ensure that your information is always protected.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Use `null` to handle unselected states

  return (
    <section id="faqs" className="py-24 scroll-mt-20">
      <div className="container px-6 mx-auto">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>

        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got <span className="text-teal-400">answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto cursor-pointer">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => setSelectedIndex(faqIndex === selectedIndex ? null : faqIndex)} // Toggle open/close
                aria-expanded={selectedIndex === faqIndex} // Accessibility improvement
              >
                <h3 className="font-medium text-white">{faq.question}</h3>
                <Plus
                  className={twMerge(
                    "text-teal-400 shrink-0 transition-transform", 
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 24 }}
                    exit={{ height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

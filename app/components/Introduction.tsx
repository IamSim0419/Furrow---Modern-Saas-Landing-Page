"use client";

import Tag from "@/app/components/Tag";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `While you're pushing to create outstanding work, conventional design tools slow you down with unnecessary complexity and difficult learning curves.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordsIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
      wordsIndex.on("change", (latest) => {
        setCurrentWord(latest);
      })
  }, [wordsIndex]);

  return (
    <section className="py-28 px-4 lg:py-40">
      <div className="container mx-auto">
        <div className="sticky top-20 md:top-28">
          <div className="flex justify-center">
            <Tag>Introducing Furrow</Tag>
          </div>
          <div className="text-4xl md:text-6xl text-center font-medium mt-10">
            <span>Your creative process could use improvement.</span>{" "}
            <span>
              {words.map((word, wordIndex) => (
                <span 
                  key={wordIndex}
                  className={twMerge("transition duration-500 text-white/15", wordIndex < currentWord && "text-white")}
                >
                  {`${word} `}
                </span>
              ))}
            </span>
            <span className="text-teal-400 block">
              That&apos;s why we crafted Furrow.
            </span>
          </div>
        </div>

        {/* Scrolling Effect */}
        <div className="h-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  );
}

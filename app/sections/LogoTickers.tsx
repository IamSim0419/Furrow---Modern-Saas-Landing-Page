"use client";

import quantumLogo from "@/public/assets/images/quantum.svg";
import acmeLogo from "@/public/assets/images/acme-corp.svg";
import echoValleyLogo from "@/public/assets/images/echo-valley.svg";
import pulseLogo from "@/public/assets/images/pulse.svg";
import outsideLogo from "@/public/assets/images/outside.svg";
import apexLogo from "@/public/assets/images/apex.svg";
import celestailLogo from "@/public/assets/images/celestial.svg";
import twiceLogo from "@/public/assets/images/twice.svg";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "motion/react";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestailLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTickers() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container mx-auto">
        <h3 className="text-center text-white/50 text-xl">
          Selected by these prominent market leaders
        </h3>
        
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {/* Repeat the logos twice to ensure seamless looping */}
              {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                  {logos.map((logo) => (
                    <Image 
                      src={logo.image} 
                      key={logo.name} 
                      alt={logo.name}
                    />
                  ))}
                </Fragment>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

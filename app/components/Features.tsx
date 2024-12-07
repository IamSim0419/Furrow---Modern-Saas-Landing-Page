import FeatureCard from "@/app/components/FeatureCard";
import Tag from "@/app/components/Tag";
import Image from "next/image";

import avatar1 from "@/assets/images/avatar-owen-garcia.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar from "./Avatar";
import Key from "@/app/components/Key";

const features = [
  "Media Library",
  "Live Code Preview",
  "Flexible Workflow",
  "Instant Synchronization",
  "Responsive Layouts",
  "Effortless Search",
  "Dynamic Guides",
];

export default function Features() {
  return (
    <section id="features" className="py-24 scroll-mt-10">
      <div className="container px-6 mx-auto z-10">
        <div className="flex justify-center">
          <Tag>Key Features</Tag>
        </div>
        <h2 className="text-6xl p-2 font-medium text-center mt-6 max-w-2xl mx-auto">
          Where creativity meets{" "}
          <span className="text-teal-400">efficiency</span>
        </h2>

        {/* Feature Card 1 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Collaborative Editing"
            description="Collaborate effortlessly with real-time updates and no conflicts"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-30 border-green-400">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>

              <Avatar className="-ml-6 border-purple-400 z-20">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>

              <Avatar className="-ml-6 border-cyan-400 z-10">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>

              <Avatar className="-ml-6 border-transparent group-hover:border-red-400 transition">
                <div className="relative size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 duration-200 transition"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 rounded-full bg-white inline-flex"
                      key={i}
                    />
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          {/* Feature Card 2 */}
          <FeatureCard
            title="Interactive Prototypes"
            description="Create prototypes that respond to user interactions and feedback"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/30 text-center group-hover:text-white/80 duration-500 transition">
                We've seen{" "}
                <span className="bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
                  <span>remarkable</span>
                </span>{" "}
                progress this year
              </p>
            </div>
          </FeatureCard>

          {/* Feature Card 3 */}
          <FeatureCard
            title="Shortcut Commands"
            description="Access essential commands faster to speed up your workflow"
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28 outline outline-2 outline-offset-4 group-hover:outline-teal-400 group-hover:scale-105 group-hover:-translate-x-2 duration-500 transition-all">
                Shift
              </Key>
              <Key className="outline outline-2 outline-offset-4 group-hover:outline-teal-400 group-hover:scale-105 duration-500 transition-all">
                Alt
              </Key>
              <Key className="outline outline-2 outline-offset-4 group-hover:outline-teal-400 group-hover:scale-105 duration-500 transition-all group-hover:translate-x-2">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>
        
        {/* Secondary Feature */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-2 items-center justify-center hover:scale-105 transition duration-300 group"
            >
              <span className="bg-teal-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center group-hover:rotate-45 transition duration-300">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Tag from "@/app/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import NotionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";

import IntegrationsColumn from "@/app/components/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: NotionIcon,
    description: "Notion is an all-in-one workspace for notes and ",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a",
  },
  {
    name: "Github",
    icon: githubIcon,
    description: "Github is a professional website prototyping to",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="py-24 scroll-mt-32 lg:scroll-mt-16 overflow-hidden"
    >
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <div className="flex justify-center">
              <Tag>Integrations</Tag>
            </div>
            <h2 className="text-6xl font-medium mt-6 text-center">
              Plays well with <span className="text-teal-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Furrow effortlessly connects with your top tools, making it simple
              to plug into any workflow and collaborate across platforms.
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                reverse={true}
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Hero from "@/app/sections/Hero";
import LogoTickers from "@/app/sections/LogoTickers";
import Introduction from "@/app/sections/Introduction";
import Features from "@/app/sections/Features";
import Integrations from "@/app/sections/Integrations";
import Faqs from "@/app/sections/Faqs";
import CallToAction from "@/app/sections/CallToAction";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTickers />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}

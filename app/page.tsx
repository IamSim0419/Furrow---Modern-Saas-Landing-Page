import Hero from "@/app/components/Hero";
import LogoTickers from "@/app/components/LogoTickers";
import Introduction from "@/app/components/Introduction";
import Features from "@/app/components/Features";
import Integrations from "@/app/components/Integrations";
import Faqs from "@/app/components/Faqs";
import CallToAction from "@/app/components/CallToAction";
import Footer from "./components/Footer";

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

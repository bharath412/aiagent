import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import PacketAnalyzerSection from "@/components/sections/PacketAnalyzerSection";
import TestAutomationSection from "@/components/sections/TestAutomationSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <PacketAnalyzerSection />
        <TestAutomationSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;

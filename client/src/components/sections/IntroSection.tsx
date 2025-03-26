import React from "react";
import { motion } from "framer-motion";
import SolutionCard from "@/components/ui/solution-card";
import { NetworkIcon } from "lucide-react";

// Custom Robot icon component
const RobotIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-bot"
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

const IntroSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section className="bg-gray-50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our AI-Powered Solutions</h2>
          <p className="text-lg text-gray-600">
            At TechTez, we don't just adopt AI—we integrate it into everything we do, ensuring businesses stay ahead in a competitive digital world.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <SolutionCard 
              title="AI-Enabled Packet Analyser"
              description="Enhancing network security and diagnostics by leveraging AI to analyze data traffic."
              icon={<NetworkIcon className="h-16 w-16" />}
              href="#packet-analyzer"
              gradient="from-primary/90 to-accent/90"
            />
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <SolutionCard 
              title="AI-Powered Test Automation"
              description="Automate the generation of Robot Framework test scripts using AI for faster development."
              icon={<RobotIcon className="h-16 w-16" />}
              href="#test-automation"
              gradient="from-secondary/90 to-primary/90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
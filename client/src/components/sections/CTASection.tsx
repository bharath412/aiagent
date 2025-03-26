import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <motion.div 
        className="container text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          At TechTez, we don't just adopt AI—we integrate it into everything we do, ensuring businesses stay ahead in a competitive digital world.
        </p>
        <Button asChild size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-0">
          <a href="#contact">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;

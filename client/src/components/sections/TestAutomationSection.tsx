import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, Bolt, Search, TrendingUp } from "lucide-react";
import TestAutomationDemo from "@/components/ui/test-automation-demo";

const TestAutomationSection: React.FC = () => {
  return (
    <section id="test-automation" className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TestAutomationDemo />
          </motion.div>
          
          <motion.div 
            className="mb-12 lg:mb-0 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">AI-Powered Test Automation</h2>
            <p className="text-lg text-gray-600 mb-6">
              Automate the generation of Robot Framework test scripts using AI for faster, more comprehensive testing.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Solution Overview</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 mr-2" />
                  <span>AI-driven script generation for seamless automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 mr-2" />
                  <span>Local context collection to enhance model training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 mr-2" />
                  <span>Pattern analysis for accurate and comprehensive test case creation</span>
                </li>
              </ul>
            </div>
            
            <Card className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="text-primary text-xl mb-2">
                    <Bolt className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium mb-1">Faster Development</h4>
                  <p className="text-sm text-gray-600">Speeds up test script development process</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="text-primary text-xl mb-2">
                    <Search className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium mb-1">Comprehensive Testing</h4>
                  <p className="text-sm text-gray-600">Automatically generates edge cases</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="text-primary text-xl mb-2">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium mb-1">Faster Time-to-Market</h4>
                  <p className="text-sm text-gray-600">Reduces costs and boosts productivity</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestAutomationSection;

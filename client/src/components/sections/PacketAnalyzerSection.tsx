import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ProtocolBadge from "@/components/ui/protocol-badge";
import ChatInterface from "@/components/ui/chat-interface";

const protocols = [
  "SIP", "RTP", "DIAMETER", "HTTP", "GTP", "TCP",
  "UDP", "IPv4/IPv6", "TLS/SSL", "SCTP", "NGAP", "PFCP",
];

const supportedLLMs = [
  { name: "ChatGPT", icon: "MessageSquare" },
  { name: "Ollama", icon: "Brain" },
  { name: "Mistral", icon: "Wind" },
  { name: "Gemini", icon: "Sparkles" },
];

const PacketAnalyzerSection: React.FC = () => {
  return (
    <section id="packet-analyzer" className="bg-white">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            className="mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">AI-Enabled Packet Analyser</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our AI-powered solution enhances network security and diagnostics by leveraging artificial intelligence to analyze data traffic.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Challenges Solved</h3>
              <p className="text-gray-600 mb-6">
                Network traffic analysis typically requires expertise and significant effort. Our AI solution addresses these challenges and makes it easy for anyone to use the tool effectively.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">How It Works</h3>
              <p className="text-gray-600 mb-6">
                Live traffic data is ingested into the tool via PCAP files, which the tool automatically retrieves and processes using the selected LLM. The chatbot UI enables users to query the model based on the trained data and obtain insights. The tool can also be extended for large-scale analysis and reconciliation.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Example Use Case</h4>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-md border-l-4 border-primary">
                  When analyzing SIP call flow traffic, continuously feeding traffic data into the tool allows for a comprehensive analysis of call flows, identifying issues and latency. Any critical issues detected by the agent will be flagged and reported to the appropriate team.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Supported LLMs</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {supportedLLMs.map((llm, index) => (
                  <div key={index} className="bg-gray-50 rounded-md p-3 text-center hover:bg-gray-100 transition-colors">
                    <div className="text-primary text-xl mb-1">
                      {llm.icon === "MessageSquare" && <span className="flex justify-center"><MessageSquareIcon /></span>}
                      {llm.icon === "Brain" && <span className="flex justify-center"><BrainIcon /></span>}
                      {llm.icon === "Wind" && <span className="flex justify-center"><WindIcon /></span>}
                      {llm.icon === "Sparkles" && <span className="flex justify-center"><SparklesIcon /></span>}
                    </div>
                    <div className="font-medium">{llm.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-900 text-white p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 font-medium">TechTez Packet Analyzer</div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Supported Protocols</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {protocols.map((protocol, index) => (
                      <ProtocolBadge key={index} protocol={protocol} />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Query Interface</h4>
                  <ChatInterface />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MessageSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square mx-auto">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain mx-auto">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const WindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wind mx-auto">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles mx-auto">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

export default PacketAnalyzerSection;

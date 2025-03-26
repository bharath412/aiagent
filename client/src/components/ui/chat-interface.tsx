import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Message {
  content: string;
  isUser: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Analyze the SIP call flow and identify any latency issues in the signaling.",
      isUser: true,
    },
    {
      content: "I've analyzed the SIP call flow and found latency issues in the INVITE to 200 OK response. The average response time is 420ms, which exceeds the recommended 250ms threshold. This could be causing call setup delays.",
      isUser: false,
    },
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    setMessages([
      ...messages,
      { content: newMessage, isUser: true },
    ]);
    
    setNewMessage("");
    
    // Simulate AI response for demo purposes
    setTimeout(() => {
      const aiResponses = [
        "Based on the packet analysis, I've identified several DNS resolution delays that are impacting your network performance. The average resolution time is 320ms, which is significantly higher than the expected 100ms.",
        "The analysis shows TCP retransmissions occurring at a rate of 5%, which indicates possible packet loss or network congestion between the client and server.",
        "I've examined the TLS handshake process and found that the negotiation is taking longer than expected, approximately 1.2 seconds. This may be due to excessive cipher suite options or certificate chain validation issues.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      setMessages(prev => [
        ...prev,
        { content: randomResponse, isUser: false },
      ]);
    }, 1500);
  };
  
  return (
    <div className="border rounded-md">
      <div className="bg-gray-50 p-3 border-b">
        <div className="text-sm font-medium text-gray-600">Ask about your network data</div>
      </div>
      <div className="p-4 bg-gray-100 h-52 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 flex ${msg.isUser ? '' : 'justify-end'}`}>
            <div 
              className={`${
                msg.isUser 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-primary text-white'
              } rounded-lg p-3 max-w-[80%]`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex">
        <Input 
          type="text" 
          placeholder="Enter your query..." 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className="w-full focus-visible:ring-primary"
        />
        <Button
          type="button"
          size="icon"
          onClick={handleSendMessage}
          className="ml-2"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </div>
  );
};

export default ChatInterface;

import React from "react";

interface ProtocolBadgeProps {
  protocol: string;
}

const ProtocolBadge: React.FC<ProtocolBadgeProps> = ({ protocol }) => {
  return (
    <div className="bg-gray-50 text-sm py-2 px-3 rounded font-mono text-center hover:bg-gray-100 transition-colors">
      {protocol}
    </div>
  );
};

export default ProtocolBadge;

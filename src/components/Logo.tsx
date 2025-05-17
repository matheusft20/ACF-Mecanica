import React from 'react';
import { Zap } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center mr-2">
        <Zap className="text-primary w-8 h-8 absolute -left-1 -rotate-12" />
        <div className="w-6 h-10 border-r-2 border-primary transform rotate-12 ml-2"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-montserrat font-extrabold text-2xl tracking-wider">
          NEO<span className="text-primary">TECH</span>
        </span>
        <span className="text-primary text-xs tracking-widest bg-black/50 px-1">
          DIESEL COMPONENTS
        </span>
      </div>
    </div>
  );
};

export default Logo;
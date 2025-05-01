"use client";
import Link from "next/link";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const menuItems = [
    { name: "MUSIK", href: "/musik" },
    { name: "PARTNERE", href: "/partnere" },
    { name: "FRIVILLIG", href: "/frivillig" },
    { name: "GALLERI", href: "/galleri" },
  ];

  // Calculate the gaps for the lines (based on circle size of 200px)
  const centerX = 200; // Center point of 400px width
  const centerY = 200; // Center point of 400px height
  const circleRadius = 100; // Half of the 200px circle
  

  return (
    <div 
      className={`fixed inset-0 z-40 transition-all duration-300  font-exposure ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Blur Background */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-lg"></div>
      
      {/* Menu Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="relative">
          {/* Sun Circle Design with Lines */}
          <div className="w-[400px] h-[400px] relative">
            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border-2 border-black"></div>
            
            {/* Center Link */}
            <Link
              href="/billetter"
              onClick={onClose}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium text-center hover:text-red transition-colors duration-300 z-10"
            >
              KØB BILLETTER
            </Link>
            
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full ">
              {/* Horizontal Lines (split into two parts) */}
              <line x1="0" y1={centerY} x2={centerX - circleRadius - 20} y2={centerY} stroke="black" strokeWidth="2" />
              <line x1={centerX + circleRadius + 20} y1={centerY} x2="400" y2={centerY} stroke="black" strokeWidth="2" />
              
              {/* Vertical Lines (split into two parts) */}
              <line x1={centerX} y1="0" x2={centerX} y2={centerY - circleRadius - 20} stroke="black" strokeWidth="2" />
              <line x1={centerX} y1={centerY + circleRadius + 20} x2={centerX} y2="400" stroke="black" strokeWidth="2" />
              
              {/* Diagonal Lines (shorter) */}
              <line x1="50" y1="50" x2={centerX - circleRadius} y2={centerY - circleRadius} stroke="black" strokeWidth="2" />
              <line x1="350" y1="50" x2={centerX + circleRadius} y2={centerY - circleRadius} stroke="black" strokeWidth="2" />
              <line x1="50" y1="350" x2={centerX - circleRadius} y2={centerY + circleRadius} stroke="black" strokeWidth="2" />
              <line x1="350" y1="350" x2={centerX + circleRadius} y2={centerY + circleRadius} stroke="black" strokeWidth="2" />
            </svg>

            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`absolute text-lg font-medium hover:text-red transition-colors duration-300 whitespace-nowrap ${getPositionClass(index)}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to position menu items around the circle
function getPositionClass(index: number): string {
  switch (index) {
    case 0: // MUSIK (Top-left)
      return "left-0 top-0 -translate-x-[40%] -translate-y-[40%] text-right";
    case 1: // PARTNERE (Top-right)
      return "right-0 top-0 translate-x-[40%] -translate-y-[40%] text-left";
    case 2: // FRIVILLIG (Bottom-left)
      return "left-0 bottom-0 -translate-x-[40%] translate-y-[40%] text-right";
    case 3: // GALLERI (Bottom-right)
      return "right-0 bottom-0 translate-x-[40%] translate-y-[40%] text-left";
    default:
      return "";
  }
} 
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
  const centerxsmall = 140; // Center point of 280px width
  const centerysmall = 140; // Center point of 280px height
  const circleRadiussmall = 70; // Half of the 140px circle
  

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
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] relative">
            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full border-2 border-black"></div>
            
            {/* Center Link */}
            <Link
              href="/billetter"
              onClick={onClose}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium text-center hover:text-red transition-colors duration-300 z-10"
            >
              KØB BILLETTER
            </Link>
            
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Horizontal Lines (split into two parts) */}
              <line x1="0" y1={centerysmall} x2={centerxsmall - circleRadiussmall - 20} y2={centerysmall} stroke="black" strokeWidth="2" className="md:hidden" />
              <line x1={centerxsmall + circleRadiussmall + 20} y1={centerysmall} x2="280" y2={centerysmall} stroke="black" strokeWidth="2" className="md:hidden" />
              <line x1="0" y1={centerY} x2={centerX - circleRadius - 20} y2={centerY} stroke="black" strokeWidth="2" className="hidden md:block" />
              <line x1={centerX + circleRadius + 20} y1={centerY} x2="400" y2={centerY} stroke="black" strokeWidth="2" className="hidden md:block" />
              
              {/* Vertical Lines (split into two parts) */}
              <line x1={centerxsmall} y1="0" x2={centerxsmall} y2={centerysmall - circleRadiussmall - 20} stroke="black" strokeWidth="2" className="md:hidden" />
              <line x1={centerxsmall} y1={centerysmall + circleRadiussmall + 20} x2={centerxsmall} y2="280" stroke="black" strokeWidth="2" className="md:hidden" />
              <line x1={centerX} y1="0" x2={centerX} y2={centerY - circleRadius - 20} stroke="black" strokeWidth="2" className="hidden md:block" />
              <line x1={centerX} y1={centerY + circleRadius + 20} x2={centerX} y2="400" stroke="black" strokeWidth="2" className="hidden md:block" />
              
              {/* Diagonal Lines (shorter) */}
              {/* Mobile version */}
              <line x1="35" y1="35" x2={centerxsmall - circleRadiussmall} y2={centerysmall - circleRadiussmall} stroke="black" strokeWidth="2" className="md:hidden" />
              <line x1="245" y1="35" x2={centerxsmall + circleRadiussmall} y2={centerysmall - circleRadiussmall} stroke="black" strokeWidth="2" className="md:hidden" />
              <line x1="35" y1="245" x2={centerxsmall - circleRadiussmall} y2={centerysmall + circleRadiussmall} stroke="black" strokeWidth="2" className="md:hidden" />
              <line x1="245" y1="245" x2={centerxsmall + circleRadiussmall} y2={centerysmall + circleRadiussmall} stroke="black" strokeWidth="2" className="md:hidden" />
              {/* Desktop version */}
              <line x1="50" y1="50" x2={centerX - circleRadius} y2={centerY - circleRadius} stroke="black" strokeWidth="2" className="hidden md:block" />
              <line x1="350" y1="50" x2={centerX + circleRadius} y2={centerY - circleRadius} stroke="black" strokeWidth="2" className="hidden md:block" />
              <line x1="50" y1="350" x2={centerX - circleRadius} y2={centerY + circleRadius} stroke="black" strokeWidth="2" className="hidden md:block" />
              <line x1="350" y1="350" x2={centerX + circleRadius} y2={centerY + circleRadius} stroke="black" strokeWidth="2" className="hidden md:block" />
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
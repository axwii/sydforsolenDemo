import Marquee from "react-fast-marquee";

interface MarqueeProps {
  text: string;
  direction?: "left" | "right";
}

export default function MarqueeComponent({ text, direction = "left" }: MarqueeProps) {
  return (
    <Marquee speed={40} pauseOnHover={true} direction={direction} className="bg-[#000000] text-white h-28 font-extrabold font-exposure text-8xl">
      <p>{text}</p>
      <img src="images/sydforsolenlogo_white.png" alt="logo" className="h-24 mx-8 w-auto object-contain" />
      <p>{text}</p>
      <img src="images/sydforsolenlogo_white.png" alt="logo" className="h-24 mx-8 w-auto object-contain" />
    </Marquee>
  );
}

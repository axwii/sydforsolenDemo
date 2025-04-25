"use client";
import MarqueeComponent from "./components/marquee";
import Hero from "./components/hero";
import Posters from "./components/posters/posters";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeComponent text="7/8 - 9/8 2025" />
      <Posters />
      <MarqueeComponent text="VI TAKKER AF FOR SOMMEREN" direction="right" />
    </div>
  );
}

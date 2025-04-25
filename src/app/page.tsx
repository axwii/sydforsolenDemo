"use client";
import MarqueeComponent from "./components/marquee";
import Hero from "./components/hero";
import Posters from "./components/posters/posters";

export default function Home() {
  return (
    <div>
      <Hero />
      <Posters />
    </div>
  );
}

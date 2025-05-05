"use client";
import MarqueeComponent from "./components/marquee";
import Hero from "./components/hero";
import Posters from "./components/posters/posters";
import Subscribe from "./components/subscribe";
import HorizontalScroll from "./components/horizontalscroll/horizontalscroll";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Posters />
      <div className="relative">
        <MarqueeComponent text="7/8 - 9/8 2025" />
      </div>
      <HorizontalScroll />
      <div className="relative">
        <MarqueeComponent text="VI TAKKER AF FOR SOMMEREN" direction="right" />
      </div>
      <Subscribe />
    </main>
  );
}

"use client";
import Image from "next/image";


export default function Home() {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h1 className="font-exposure text-4xl text-yellow">Your Text Here</h1>
      <Image src="/logo.png" alt="logo" width={1000} height={1000} />
      <p className="mt-4">This text should be in the default font</p>
    </div>
  );
}

import ComponySection from "@/components/home/ComponySection";
import HotCollections from "@/components/home/HotCollections";
import HowItWorks from "@/components/home/HowItWorks";
import TopSeller from "@/components/home/TopSeller";
import TreningAuctions from "@/components/home/TreningAuctions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="flex justify-between mt-5">
        <div className="flex flex-col justify-center gap-5 w-1/2">
          <h1 className="text-7xl">Discover, Collect and Sell Dope NFTs</h1>
          <p className="text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipisc elit amet.
            Consectetu at it lrorem ipsum dolor sit amet.
          </p>
          <div className="flex gap-5">
            <button className="px-7 py-2 rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80">
              Explore
            </button>
            <button className="rounded-sm p-px bg-gradient-to-r from-indigo-500 to-pink-500">
              <div className="bg-[#110229] rounded-[calc(0.125rem-1px)] px-7 py-2 hover:bg-opacity-80">
                Create
              </div>
            </button>
          </div>
          <div className="flex rounded bg-white/10 justify-around text-center p-5">
            <div className="flex flex-col justify-between">
              <span className="text-4xl">80K+</span>
              <span className="text-white/70">Active user</span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-4xl">27K+</span>
              <span className="text-white/70">Artworks</span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-4xl">3.5K+</span>
              <span className="text-white/70">Artists</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            width={800}
            height={800}
            src={"/images/mainImage.png"}
            alt="NFT Marketplace - Denovin"
            className="h-full"
          />
        </div>
      </section>
      <ComponySection/>
      <HowItWorks />
      <TreningAuctions />
      <TopSeller />
      <HotCollections />
    </main>
  );
}

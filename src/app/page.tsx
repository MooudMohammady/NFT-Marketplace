import ComponySection from "@/components/home/ComponySection";
import Contact from "@/components/home/Contact";
import HotCollections from "@/components/home/HotCollections";
import HowItWorks from "@/components/home/HowItWorks";
import TopSeller from "@/components/home/TopSeller";
import TreningAuctions from "@/components/home/TreningAuctions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto space-y-24 px-2">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/50 blur-[300px] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/50 blur-[300px] animate-pulse"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/50 blur-[300px] animate-pulse"></div>
      <section className="flex justify-between max-lg:flex-col items-center relative">
        <div className="flex flex-col justify-center gap-5 md:w-1/2">
          <h1 className="text-7xl" data-aos="fade-right" data-aos-delay="100">Discover, Collect and Sell Dope <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 font-bold">NFTs</span></h1>
          <p className="text-white/80" data-aos="fade-right" data-aos-delay="150">
            Lorem ipsum dolor sit amet, consectetur adipisc elit amet.
            Consectetu at it lrorem ipsum dolor sit amet.
          </p>
          <div className="flex gap-5" data-aos="fade-right" data-aos-delay="200">
            <button className="px-7 py-2 rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80">
              Explore
            </button>
            <button className="rounded-sm p-px bg-gradient-to-r from-indigo-500 to-pink-500">
              <div className="bg-[#110229] rounded-[calc(0.125rem-1px)] px-7 py-2 hover:bg-opacity-80">
                Create
              </div>
            </button>
          </div>
          <div className="flex rounded bg-white/10 justify-around text-center p-5" data-aos="fade-right" data-aos-delay="300">
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
        <div className="max-lg:absolute max-lg:-z-10 max-lg:bottom-0" data-aos="fade-up">
          <Image
            width={800}
            height={800}
            src={"/images/mainImage.png"}
            alt="NFT Marketplace - Denovin"
            className="h-full max-lg:opacity-20"
          />
        </div>
      </section>
      <ComponySection/>
      <HowItWorks />
      <TreningAuctions />
      <TopSeller />
      <HotCollections />
      <Contact/>
    </main>
  );
}

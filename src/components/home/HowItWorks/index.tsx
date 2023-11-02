import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  return (
    <section className="flex justify-between">
      <div className="w-2/5 flex flex-col gap-5 items-start justify-center">
        <h2 className="text-5xl">How it Works</h2>
        <p className="text-white/50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit amet. Lorem
          ipsum dolor sit amet, consecte adipiscing elit ipsum.
        </p>
        <button className="px-7 py-2 rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80">
          Learn More
        </button>
      </div>
      <div className="w-3/5 flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="rounded-sm p-px bg-gradient-to-r from-indigo-500 via-pink-500">
            <div className="bg-[#110229] rounded-[calc(0.125rem-1px)] p-5 hover:bg-opacity-80 flex flex-col gap-5">
              <span className="rounded grid place-items-center p-4 bg-white/10 w-16">
                <Image
                  src={"/images/icon1.png"}
                  alt="icon1"
                  width={200}
                  height={200}
                  quality={100}
                />
              </span>
              <h3 className="text-2xl">Set up Your Wallet</h3>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur at adipiscing elit amet.
              </p>
            </div>
          </div>
          <div className="rounded-sm p-px bg-gradient-to-r from-indigo-500 via-pink-500">
            <div className="bg-[#110229] rounded-[calc(0.125rem-1px)] p-5 hover:bg-opacity-80 flex flex-col gap-5">
              <span className="rounded grid place-items-center p-4 bg-white/10 w-16">
                <Image
                  src={"/images/icon2.png"}
                  alt="icon2"
                  width={200}
                  height={200}
                  quality={100}
                />
              </span>

              <h3 className="text-2xl">Buy Your Collection</h3>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur at adipiscing elit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="rounded-sm p-px bg-gradient-to-r from-indigo-500 via-pink-500">
            <div className="bg-[#110229] rounded-[calc(0.125rem-1px)] p-5 hover:bg-opacity-80 flex flex-col gap-5">
              <span className="rounded grid place-items-center p-4 bg-white/10 w-16">
                <Image
                  src={"/images/icon3.png"}
                  alt="icon3"
                  width={200}
                  height={200}
                  quality={100}
                />
              </span>

              <h3 className="text-2xl">Sell Your NFTs</h3>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur at adipiscing elit amet.
              </p>
            </div>
          </div>
          <div className="rounded-sm p-px bg-gradient-to-r from-indigo-500 via-pink-500">
            <div className="bg-[#110229] rounded-[calc(0.125rem-1px)] p-5 hover:bg-opacity-80 flex flex-col gap-5">
              <span className="rounded grid place-items-center p-4 bg-white/10 w-16">
                <Image
                  src={"/images/icon4.png"}
                  alt="icon4"
                  width={200}
                  height={200}
                  quality={100}
                />
              </span>

              <h3 className="text-2xl">Add Your NFTs</h3>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur at adipiscing elit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

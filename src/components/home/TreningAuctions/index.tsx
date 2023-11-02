import Image from "next/image";
import React from "react";

export default function TreningAuctions() {
  return (
    <section className="flex flex-col gap-5 mt-10">
      <h2 className="text-5xl">Trening Auctions</h2>
      <div className="flex justify-between items-stretch">
        <p className="text-white/70 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisc elit amet. Consectetu
          at it lrorem ipsum dolor sit amet.
        </p>
        <div className="flex gap-3 text-xl font-bold">
          <button className="border rounded-sm px-4 grid place-items-center opacity-50">
            {" "}
            {"<"}{" "}
          </button>
          <button className="border rounded-sm px-4 grid place-items-center">
            {" "}
            {">"}{" "}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 p-5 border border-white/50 rounded">
          <div className="flex justify-between">
            <h4 className="text-2xl">Verualy Art</h4>
            <span className="text-white/70 text-sm">@nftsart</span>
          </div>
          <Image
            src={"/images/image1.png"}
            alt="nft1"
            width={350}
            height={600}
          />
          <div className="flex justify-between text-xl">
            <span>15h : 05m : 26s</span>
            <span>20.25 ETH</span>
          </div>
          <div className="flex justify-between text-white/70 text-sm">
            <span>Remaining Time</span>
            <span>Highest bid</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-5 border border-white rounded mb-10">
          <div className="flex justify-between">
            <h4 className="text-2xl">CAT ICON ART</h4>
            <span className="text-white/70 text-sm">@nftsart</span>
          </div>
          <div className="flex gap-5">
            <Image
              src={"/images/image2.png"}
              alt="nft2"
              width={300}
              height={600}
            />
            <div className="w-16 flex flex-col items-center gap-3 justify-around">
              <Image
                src={"/images/fakeUser1.png"}
                alt="fakeUser"
                width={50}
                height={50}
              />
              <div className="flex flex-col gap-1">
                <Image
                  src={"/images/heartIcon.png"}
                  alt="heartIcon"
                  width={50}
                  height={50}
                />
                45.5K
              </div>
              <div className="flex flex-col gap-1">
                <Image
                  src={"/images/networkIcon.png"}
                  alt="networkIcon"
                  width={50}
                  height={50}
                />
                25.6K
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xl">
            <span>15h : 05m : 26s</span>
            <span>20.25 ETH</span>
          </div>
          <div className="flex justify-between text-white/70 text-sm">
            <span>Remaining Time</span>
            <span>Highest bid</span>
          </div>
          <button className="bg-white text-black text-center rounded py-2 hover:bg-white/20 hover:text-white transition border">
            Place a Bid
          </button>
        </div>
        <div className="flex flex-col gap-2 p-5 border border-white/50 rounded">
          <div className="flex justify-between">
            <h4 className="text-2xl">DOG ICON ART</h4>
            <span className="text-white/70 text-sm">@nftsart</span>
          </div>
          <Image
            src={"/images/image3.png"}
            alt="nft1"
            width={350}
            height={600}
          />
          <div className="flex justify-between text-xl">
            <span>15h : 05m : 26s</span>
            <span>20.25 ETH</span>
          </div>
          <div className="flex justify-between text-white/70 text-sm">
            <span>Remaining Time</span>
            <span>Highest bid</span>
          </div>
        </div>
      </div>
    </section>
  );
}

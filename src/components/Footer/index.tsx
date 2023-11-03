import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto flex justify-between mt-24 pt-10 flex-col">
      <div className="flex justify-between w-full flex-wrap px-5 max-sm:flex-col max-sm:text-center gap-5 items-center">
        <ul className="text-white/70 flex flex-col gap-2 max-w-sm">
          <li className="text-white text-2xl mb-3">Marketplace</li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              All NFTs
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Art
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Music
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Domain Names
            </Link>
          </li>
        </ul>
        <ul className="text-white/70 flex flex-col gap-2 max-w-sm">
          <li className="text-white text-2xl mb-3">Resources</li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Partners
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Suggestions
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Discord
            </Link>
          </li>
        </ul>
        <ul className="text-white/70 flex flex-col gap-2 max-w-sm">
          <li className="text-white text-2xl mb-3">Community</li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Documentation
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Brand Assets
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-pink-500 transition">
              Blog
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-5 items-start max-w-sm max-sm:items-center">
          <li className="text-2xl mb-3">Newsletter</li>
          <li className="text-white/70">
            Lorem ipsum dolor sit, amet enim non aspernatur, quas consequatur
            minus et magnam placeat.
          </li>
          <li className="flex gap-5">
            <a
              href="#"
              className="w-10 h-10 grid place-items-center bg-gradient-to-br from-indigo-500 to-pink-500 hover:opacity-80 rounded-sm">
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-10 h-10 grid place-items-center bg-gradient-to-br from-indigo-500 to-pink-500 hover:opacity-80 rounded-sm">
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 grid place-items-center bg-gradient-to-br from-indigo-500 to-pink-500 hover:opacity-80 rounded-sm">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center mt-8 mb-4">
        Denovin. All Rights Reserved 2023©
      </div>
    </footer>
  );
}

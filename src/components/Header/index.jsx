"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const sidebarBtn = useRef(null);
  const sideBarCloser = () => {
    sidebarBtn.current.checked = false;
  };
  return (
    <header className="w-full px-5 z-50 py-5 sticky top-0 backdrop-blur bg-[#11022950]">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div className="relative text-3xl md:hidden">
          <FaBars className="absolute fill-white" />
          <input
            type="checkbox"
            className="absolute top-0 left-0 w-9 h-9 peer/draft opacity-0"
            ref={sidebarBtn}
          />
          <div className="top-0 z-20 fixed left-[-300px] peer-checked/draft:left-0 bg-[#110229] h-[100vh] w-[250px] transition-all duration-300 p-2">
            <div className="flex flex-col items-center w-full">
              <nav className="w-full">
                <ul className="w-full divide-y divide-zinc-700 felx flex-col list-none m-0 p-0 text-lg">
                  <li className="flex w-full justify-between items-center">
                    <Image
                      width={80}
                      height={80}
                      src="/images/logo.png"
                      alt="Stone2000"
                      className="hover:rotate-[360deg] hover:duration-500 ease-out"
                    />
                    <button className="p-2 text-3xl" onClick={sideBarCloser}>
                      <IoMdClose />
                    </button>
                  </li>
                  <li className="py-4 px-2 flex justify-between items-center">
                    <Link
                      className="px-5 py-2 hover:opacity-80 bg-gradient-to-r from-indigo-500 to-pink-500 transition-colors rounded-sm transition"
                      href={"/"}>
                      Sing Up
                    </Link>
                    <Link
                      className="px-5 py-2 hover:text-pink-500 transition-colors"
                      href={"/"}>
                      Login
                    </Link>
                  </li>
                  <li className="px-2 py-3">
                    <Link
                      href={"/"}
                      className="hover:text-pink-500 w-full pe-32 py-3"
                      onClick={sideBarCloser}>
                      Home
                    </Link>
                  </li>
                  <li className="px-2 py-3">
                    <Link
                      href={"/"}
                      className="hover:text-pink-500 w-full pe-32 py-3"
                      onClick={sideBarCloser}>
                      Market
                    </Link>
                  </li>
                  <li className="px-2 py-3">
                    <Link
                      href={"/"}
                      className="hover:text-pink-500 w-full pe-32 py-3"
                      onClick={sideBarCloser}>
                      Artists
                    </Link>
                  </li>
                  <li className="px-2 py-3">
                    <Link
                      href={"/"}
                      className="hover:text-pink-500 w-full pe-32 py-3"
                      onClick={sideBarCloser}>
                      Community
                    </Link>
                  </li>
                  <li className="px-2 py-3">
                    <Link
                      href={"/"}
                      className="hover:text-pink-500 w-full pe-32 py-3"
                      onClick={sideBarCloser}>
                      Wallet
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="bg-black/80 w-full h-[100vh] hidden fixed left-0 top-0 peer-checked/draft:block"
            onClick={sideBarCloser}></div>
        </div>
        <Link href={"/"}>
          <Image
            width={80}
            height={80}
            src="/images/logo.png"
            alt="Stone2000"
            className="hover:rotate-[360deg] hover:duration-500 ease-out"
          />
        </Link>
        <ul className="max-md:hidden flex items-center">
          <li>
            <Link
              className="px-4 py-3 hover:text-pink-500 transition-colors"
              href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-3 hover:text-pink-500 transition-colors"
              href={"/"}>
              Market
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-3 hover:text-pink-500 transition-colors"
              href={"/"}>
              Artists
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-3 hover:text-pink-500 transition-colors"
              href={"/"}>
              Community
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-3 hover:text-pink-500 transition-colors"
              href={"/"}>
              Wallet
            </Link>
          </li>
        </ul>
        <div className="max-md:hidden">
          <Link
            className="px-5 py-2 hover:text-pink-500 transition-colors"
            href={"/"}>
            Login
          </Link>
          <Link
            className="px-5 py-2 hover:opacity-80 bg-gradient-to-r from-indigo-500 to-pink-500 transition-colors rounded-sm transition"
            href={"/"}>
            Sing Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

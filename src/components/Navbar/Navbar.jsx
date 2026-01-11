import React from "react";
import { navLinks } from "../../utils/data";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full border-b border-zinc-500 flex items-center justify-between px-3 py-4 sm:px-6">
        <div className="left hidden sm:flex sm:gap-6 md:gap-8 text-sm font-medium cursor-pointer md:text-base">
          {navLinks.map((item, i) => (
            <a key={i} href={item.link}>
              {item.text}
            </a>
          ))}
        </div>
        <div className="logo">
          <h2 className="text-2xl font-semibold md:text-3xl">Astratto</h2>
        </div>
        <div className="right sm:flex sm:items-center sm:gap-4 md:gap-8">
          <button className="hidden sm:inline-block font-medium text-sm md:text-base">
            <a href="#">Careers</a>
          </button>
          <button>
            <a href="#" className="flex items-center gap-1 cursor-pointer text-sm md:text-base px-3.5 py-1.25 rounded-full border-2 border-[var(--orange)] font-medium">Contact Us <ArrowUpRight color="#8D05FE"/></a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

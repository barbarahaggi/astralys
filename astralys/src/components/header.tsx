"use client"; // Agora o Header será renderizado apenas no cliente

import React from "react";
import Image from 'next/image'


export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-black/80 text-white border-b border-gray-600 shadow-lg">
        {/* Logo */}
        <Image
      src="/logo-astralys1.png"
      width={100}
      height={100}
      alt="logo"
    />

        {/* Navegação */}
        <nav>
          <ul className="flex space-x-8 text-lg text-sm uppercase text-[#A9A9A9]">
            <li className="relative group">
              <a href="#" className="transition duration-300 hover:text-white">Home</a>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#" className="transition duration-300 hover:text-white">Pesquisa personalizada</a>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#" className="transition duration-300 hover:text-white">Sua estrela</a>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>

        {/* Ícones do menu direito */}
        <div className="flex space-x-4">
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">🌙</button>
        </div>
      </header>
    </>
  );
}

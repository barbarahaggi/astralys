'use client'

import React, { useState } from 'react';
import Layout from '../../components/layout';
import Image from 'next/image';
import './home.css'
import Link from 'next/link';



export default function Home() {


  return (
   

    <main className="homepage px-4 py-10 min-h-screen flex items-center justify-center">
  <div className="container mx-auto text-center">
    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6">ASTRALYS</h1>

    <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto mb-8">
      Discover the star, planet, or cosmic wonder that lit up the sky on the day you were born. 
      Every date tells a unique story — and yours begins among the stars. Ready to discover your star? 
      The universe is waiting.
    </p>

    <div className="flex justify-center">
      <Link href="/birth">
        <button className="button w-40 sm:w-48 md:w-56 text-sm sm:text-base">
          Your Star
        </button>
      </Link>
    </div>
  </div>
</main>

   
 
  )
}

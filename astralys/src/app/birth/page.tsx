'use client'

import { useState } from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa"; // Importando ícone de calendário
import './birthday.css';

export default function BirthPage() {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  type NasaApodResponse = {
    date: string;
    explanation: string;
    url: string;
    title: string;
    media_type: string;
  };
  
  const [constellations, setConstellations] = useState<NasaApodResponse[]>([]);
  
  const handleSearch = async () => {
    if (!date) return;
    setLoading(true);
    setConstellations([]); // Limpa o estado anterior
  
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&date=${date}`
      );
      const data = await res.json();
  
      // Vamos armazenar os dados como uma "constellation"
      setConstellations([data]);
    } catch (error) {
      console.error("Error", error);
    }
  
    setLoading(false);
  };
  

  return (
    <main className="homepage flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Your star</h1>
        <span className="block mb-6 text-white text-shadow 2px">On the night you were born, the sky had a story to tell. Check it out</span>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 items-center">

          <div className="relative">
          <input
            type="date"
            className="w-full max-w-xs bg-transparent border-2 border-gray-300 rounded-lg text-white py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all appearance-none custom-date-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
              <FaCalendarAlt />
            </div>
          </div>
          <button
            className="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {loading && <p className="text-gray-300">Loading...</p>}

        {!loading && constellations.length > 0 && (
         <div className=" w-full w-6xl px-4 mx-auto">

            
            {constellations.map((item, index) => (
          <div key={index} className=" p-4 bg-gray-800 rounded-lg shadow-lg w-[100%]">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            {item.media_type === 'image' ? (
              <Image src={item.url} alt={item.title} className="rounded-lg mb-2" />
            ) : (
              <iframe
                src={item.url}
                title={item.title}
                className="w-full h-96 rounded-lg mb-2 "
                allowFullScreen
              />
            )}
            <p className="text-sm text-gray-300">{item.explanation}</p>
          </div>
        ))}

          </div>
        )}
      </div>
    </main>
  );
}
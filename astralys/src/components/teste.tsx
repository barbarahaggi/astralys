'use client';

import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import Home from "../app/home/page";

export default function LoadingScreen() {
  const starsRef = useRef<HTMLDivElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // Estado para controlar o carregamento

  useEffect(() => {
    anime({
      targets: starsRef.current,
      translateX: () => anime.random(-5, 5),
      translateY: () => anime.random(-5, 5),
      opacity: [0.8, 1],
      duration: 1000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });

    // Simula um tempo de carregamento e exibe a tela inicial
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Ajuste o tempo conforme necessário
  }, []);

  if (isLoaded) {
    return <Home/>; // Retorna a tela inicial após o carregamento
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) starsRef.current[i] = el;
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
}

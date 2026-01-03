'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function BirthdayInvitation() {
  const [stage, setStage] = useState('intro');
  const videoRef = useRef(null);

  const startExperience = () => {
    setStage('video');
  };

  const handleVideoEnd = () => {
    setStage('smoke');
    setTimeout(() => {
      setStage('card');
    }, 2000);
  };

  return (
    // Fondo NEGRO puro para resaltar el amarillo
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
      
      <AnimatePresence mode="wait">
        {/* --- ETAPA 1: INTRODUCCIÓN --- */}
        {stage === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5, rotate: -5 }}
            className="text-center z-10 px-6 flex flex-col items-center"
          >
            {/* Título estilo Logo D-8 */}
            <h1 className="font-bangers text-6xl md:text-8xl mb-4 tracking-wider text-white drop-shadow-[4px_4px_0px_rgba(250,204,21,1)]">
              MI <span className="text-yellow-400 text-transparent bg-clip-text drop-shadow-none">CUMPLEAÑOS</span>
            </h1>
            
            <p className="font-inter text-gray-400 mb-10 text-lg uppercase tracking-widest font-bold">
              INVITACIÓN ESPECIAL
            </p>
            
            {/* Botón Amarillo y Negro */}
            <button
              onClick={startExperience}
              className="group relative px-10 py-4 bg-yellow-400 text-black font-bangers text-2xl tracking-wide uppercase transform hover:scale-105 transition-all duration-200 border-4 border-transparent hover:border-white shadow-[0_0_20px_rgba(250,204,21,0.5)]"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }} // Recorte estilo "tech/urbano"
            >
              ABRIR INVITACIÓN
            </button>
          </motion.div>
        )}

        {/* --- ETAPA 2: VIDEO (Auto) --- */}
        {stage === 'video' && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 bg-black flex items-center justify-center"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover opacity-100"
              playsInline
              autoPlay 
              muted={false}
              onEnded={handleVideoEnd}
            >
              <source src="/video-auto.mp4" type="video/mp4" />
            </video>
            
            <button 
              onClick={handleVideoEnd}
              className="absolute bottom-10 right-10 font-bangers text-xl text-yellow-400 bg-black/80 px-4 py-2 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors z-50 uppercase tracking-widest"
            >
              Saltar
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ETAPA 3: HUMO (Transición) --- */}
      <AnimatePresence>
        {(stage === 'smoke' || stage === 'card') && (
           <motion.div
             key="smoke-overlay"
             className="absolute inset-0 pointer-events-none z-20"
             initial={{ opacity: 0 }}
             animate={stage === 'smoke' 
                ? { opacity: 1, background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(50,50,50,0.9) 100%)' }
                : { opacity: 0 } 
             }
             transition={{ duration: 1.5 }}
           />
        )}
      </AnimatePresence>

      {/* --- ETAPA 4: TARJETA --- */}
      {stage === 'card' && (
        <motion.div
          key="card"
          initial={{ opacity: 0, y: 100, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="relative z-30 w-full max-w-sm mx-auto mt-20" // Margen superior para el personaje
        >
          {/* El personaje parado ARRIBA de la tarjeta */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -top-40 left-1/2 transform -translate-x-1/2 z-40 w-48 md:w-56"
          >
             {/* IMAGEN SIN CÍRCULO, solo el personaje recortado */}
             <Image 
                src="/avatard8.png" 
                alt="David d8" 
                width={300} 
                height={400} 
                className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
             />
          </motion.div>

          {/* Tarjeta Estilo Urbana/Industrial */}
          <div className="bg-[#1a1a1a] border-2 border-yellow-400 relative pt-16 pb-8 px-6 shadow-[10px_10px_0px_rgba(250,204,21,1)] text-center">
            
            {/* Elementos decorativos estilo "Construction" */}
            <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 bg-[repeating-linear-gradient(45deg,black,black_10px,transparent_10px,transparent_20px)] opacity-50"></div>

            <div className="mt-4">
              <h2 className="font-bangers text-5xl text-white mb-0 drop-shadow-md">DAVID</h2>
              <div className="inline-block bg-yellow-400 text-black font-bold px-2 py-0.5 text-xs transform -rotate-2 font-inter tracking-widest mb-6">
                D8 CREATIVE FOUNDER
              </div>

              {/* Globo de diálogo - Estilo Cómic */}
              <div className="relative bg-white text-black p-5 rounded-lg shadow-lg mb-6 border-2 border-black transform rotate-1">
                {/* Triángulo del globo apuntando arriba al personaje */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-t-2 border-l-2 border-black rotate-45"></div>
                
                <p className="font-bangers text-2xl leading-none mb-2">
                  ¡Hey, hoy es mi día!
                </p>
                <p className="font-inter text-sm font-medium leading-tight text-gray-800">
                  Te espero para festejar conmigo en casa. <br/>Traer bebida y ganas de pasarla bien. 🥃
                </p>
              </div>

              {/* Info de Fecha y Lugar */}
              <div className="border-t-2 border-dashed border-gray-600 pt-4 space-y-3">
                <div className="flex flex-col items-center">
                  <span className="font-bangers text-4xl text-yellow-400 tracking-wider">3 DE ENERO</span>
                  <span className="font-inter font-bold text-white text-xl bg-black px-2 -mt-2 relative z-10">19:00 HS</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-gray-300 mt-4">
                  <span className="text-2xl">📍</span>
                  <span className="font-inter font-bold text-lg text-white border-b-2 border-yellow-400">LIBERTAD 403</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
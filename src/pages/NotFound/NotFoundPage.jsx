// src/pages/NotFoundPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Komponen partikel bergerak
const FloatingParticle = () => {
  const size = Math.random() * 5 + 1;
  return (
    <motion.div
      className="absolute rounded-full bg-pink-500"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 4 + 3,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "easeInOut",
      }}
    />
  );
};

// Komponen meteor
const ShootingStar = () => {
  const startX = Math.random() * 100;
  const startY = Math.random() * 50;
  
  return (
    <motion.div
      className="absolute h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"
      style={{
        top: `${startY}%`,
        left: `${startX}%`,
        width: '0px',
        filter: 'blur(1px)',
      }}
      initial={{
        opacity: 0,
        width: '0px',
        rotate: Math.random() * 90 - 45,
      }}
      animate={{
        opacity: [0, 1, 0],
        width: ['0px', '150px', '0px'],
      }}
      transition={{
        duration: Math.random() * 1.5 + 0.5,
        repeat: Infinity,
        repeatDelay: Math.random() * 15 + 5,
        ease: "easeOut",
      }}
    />
  );
};

export default function NotFoundPage() {
  const [particles, setParticles] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate floating particles
    setParticles(Array.from({ length: 50 }, (_, i) => <FloatingParticle key={i} />));
    
    // Generate shooting stars
    setStars(Array.from({ length: 5 }, (_, i) => <ShootingStar key={i} />));
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-950 text-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: `linear-gradient(
            45deg, 
            #ff0080, 
            #ff8c00, 
            #ff0080, 
            #ff8c00
          )`,
          backgroundSize: "300% 300%",
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>
      
      {/* Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars}
      </div>

      <motion.div
        className="text-9xl font-bold text-pink-500 relative z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          rotate: 0,
          textShadow: [
            "0 0 5px rgba(255,255,255,0)",
            "0 0 10px rgba(255,105,180,0.5)",
            "0 0 20px rgba(255,105,180,0.8)",
            "0 0 5px rgba(255,255,255,0)"
          ]
        }}
        transition={{ 
          duration: 0.8, 
          ease: "backOut",
          textShadow: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        404
      </motion.div>

      <motion.p
        className="text-xl md:text-2xl mt-4 text-gray-300 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Oops! Halaman tidak ditemukan.
      </motion.p>

      <motion.p
        className="text-sm md:text-base mt-2 text-gray-500 max-w-md text-center relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Sepertinya kamu nyasar ke semesta yang salah. Kembali ke jalur utama yuk.
      </motion.p>

      <motion.div
        className="mt-8 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link to="/">
          <motion.div
            className="px-6 py-3 bg-pink-600 rounded-lg text-white shadow-lg relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #ff0080, #ff8c00)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10"
            >
              Kembali ke Beranda
            </motion.span>
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-white opacity-0"
              initial={{ x: "-100%" }}
              whileHover={{
                x: "100%",
                opacity: 0.3,
                transition: { duration: 0.6 }
              }}
              style={{
                background: "linear-gradient(90deg, transparent, white, transparent)"
              }}
            />
          </motion.div>
        </Link>
      </motion.div>

      {/* Floating Text Animation */}
      <motion.div
        className="absolute bottom-8 text-xs text-gray-600 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -10, 0]
        }}
        transition={{
          delay: 1.2,
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        #JanganNyasarLagi
      </motion.div>
    </div>
  );
}
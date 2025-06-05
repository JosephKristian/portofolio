import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../../../../context/DarkModeContext';

const AbstractVisual = () => {
  const [cardContent, setCardContent] = useState('code');
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [particles, setParticles] = useState([]);
  const { isDark, toggleDarkMode } = useDarkMode();
  const containerRef = useRef(null);
  const gameTimerRef = useRef(null);

  // Initialize particles for the game
  const initGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    
    // Create interactive particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * (containerRef.current?.clientWidth || 500),
      y: Math.random() * (containerRef.current?.clientHeight || 500),
      size: Math.random() * 15 + 10,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      collected: false
    }));
    
    setParticles(newParticles);
  };

  // Handle particle collection
  const collectParticle = (id) => {
    if (!gameActive) return;
    
    setParticles(prev => prev.map(p => 
      p.id === id ? { ...p, collected: true } : p
    ));
    
    setScore(prev => prev + 10);
  };

  // Game timer logic
  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      gameTimerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (gameActive && timeLeft === 0) {
      setGameActive(false);
    }
    
    return () => clearTimeout(gameTimerRef.current);
  }, [gameActive, timeLeft]);

  // Reset game when component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(gameTimerRef.current);
      setGameActive(false);
    };
  }, []);

  // Toggle between code and info card content
  const toggleCardContent = () => {
    setCardContent(prev => (prev === 'code' ? 'info' : 'code'));
  };

  // Particle animation variants
  const particleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, type: "spring" }
    },
    collected: { 
      scale: 0, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`flex-1 hidden md:block max-w-xl h-[500px] relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-gray-900' : 'bg-blue-50'
      }`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      {/* Game Controls */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <button
          className="px-3 py-1 rounded-lg bg-indigo-500 text-white text-xs hover:bg-indigo-600 transition-colors shadow-md"
          onClick={toggleDarkMode}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
        
        <button
          className={`px-3 py-1 rounded-lg text-xs transition-colors shadow-md ${
            gameActive 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
          onClick={gameActive ? () => setGameActive(false) : initGame}
        >
          {gameActive ? '❌ Stop Game' : '🎮 Start Game'}
        </button>
      </div>

      {/* Game Info Panel */}
      {gameActive && (
        <motion.div
          className="absolute top-4 right-4 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="font-bold text-indigo-600">Score:</span> 
              <span className="ml-1 font-mono">{score}</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-pink-600">Time:</span> 
              <span className="ml-1 font-mono">{timeLeft}s</span>
            </div>
          </div>
          <div className="mt-1 text-xs text-gray-600 dark:text-gray-300">
            Click the glowing particles to collect them!
          </div>
        </motion.div>
      )}

      {/* Background gradient circles */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse-slow" />
      <div className="absolute top-40 right-60 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 animate-pulse-slow animation-delay-500" />
      <div className="absolute bottom-20 right-40 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse-slow animation-delay-1000" />

      {/* Grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-8 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            className="border border-gray-300 dark:border-gray-700 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ opacity: 0.4 }}
          />
        ))}
      </div>

      {/* Floating Card with interaction */}
      <motion.div
        className={`absolute top-32 left-12 shadow-xl rounded-lg p-4 w-48 z-10 cursor-pointer ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
        }`}
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.2}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        whileHover={{
          rotate: 3,
          scale: 1.05,
          boxShadow: isDark 
            ? '0 10px 25px -5px rgba(139, 92, 246, 0.5)' 
            : '0 10px 25px -5px rgba(99, 102, 241, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleCardContent}
      >
        {cardContent === 'code' ? (
          <div className="text-xs font-mono">
            <div className="text-blue-600">function</div>
            <div className="text-purple-600">animateCard</div>
            <div className="text-gray-400">( ) {'{'}</div>
            <div className="ml-4">gsap.to(element, {'{'}</div>
            <div className="ml-8">y: 0,</div>
            <div className="ml-8">opacity: 1,</div>
            <div className="ml-8">duration: 0.8</div>
            <div className="ml-4">{'}'})</div>
            <div>{'}'}</div>
          </div>
        ) : (
          <div className="text-sm">
            <p className="font-semibold mb-1">🎮 Interactive Demo</p>
            <p className="text-xs">
              Click the game button to start collecting particles! Drag cards around.
            </p>
          </div>
        )}
      </motion.div>

      {/* Second floating card */}
      <motion.div
        className={`absolute bottom-40 right-20 shadow-xl rounded-lg p-4 w-48 z-10 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
        }`}
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.2}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        whileHover={{
          rotate: -3,
          scale: 1.05,
          boxShadow: isDark 
            ? '0 10px 25px -5px rgba(139, 92, 246, 0.5)' 
            : '0 10px 25px -5px rgba(99, 102, 241, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-xs font-mono">
          <div className="text-green-600">const</div>
          <div className="text-pink-600">interactions</div>
          <div className="text-gray-400">= [</div>
          <div className="ml-4">'hover',</div>
          <div className="ml-4">'drag',</div>
          <div className="ml-4">'click'</div>
          <div className="text-gray-400">]</div>
        </div>
      </motion.div>

      {/* Third floating card - Game Instructions */}
      <motion.div
        className={`absolute top-10 right-10 shadow-xl rounded-lg p-4 w-48 z-10 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
        }`}
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.2}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        whileHover={{
          rotate: 2,
          scale: 1.05,
          boxShadow: isDark 
            ? '0 10px 25px -5px rgba(59, 130, 246, 0.5)' 
            : '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-sm">
          <p className="font-semibold text-cyan-600 mb-1">Game Rules</p>
          <ul className="text-xs list-disc pl-4 space-y-1">
            <li>Click particles to collect</li>
            <li>30 seconds timer</li>
            <li>Bigger = more points</li>
          </ul>
        </div>
      </motion.div>

      {/* Particles - Game Elements */}
      <AnimatePresence>
        {particles.map(particle => (
          !particle.collected && (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full cursor-pointer z-0 ${
                gameActive ? 'animate-pulse-slow' : ''
              }`}
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size/2}px ${particle.color}`
              }}
              variants={particleVariants}
              initial="hidden"
              animate="visible"
              exit="collected"
              whileHover={{ scale: 1.2 }}
              onClick={() => collectParticle(particle.id)}
              transition={{ type: "spring", stiffness: 300 }}
            />
          )
        ))}
      </AnimatePresence>

      {/* Floating particles for decoration */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/30"
          initial={{
            x: Math.random() * 300,
            y: Math.random() * 500,
            opacity: 0
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <motion.line
          x1="140"
          y1="160"
          x2="240"
          y2="350"
          stroke={isDark ? "rgba(139, 92, 246, 0.3)" : "rgba(99, 102, 241, 0.2)"}
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.8, duration: 1.5 }}
        />
        <motion.line
          x1="320"
          y1="200"
          x2="400"
          y2="120"
          stroke={isDark ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.2)"}
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        />
      </svg>

      {/* Game Over Screen */}
      <AnimatePresence>
        {!gameActive && timeLeft === 0 && (
          <motion.div
            className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 text-center shadow-2xl"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">Game Over!</h2>
              <p className="text-4xl font-bold mb-6">{score} Points</p>
              <div className="mb-6">
                <div className="inline-block bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                  {score > 500 ? '🌟 Master Collector' : 
                   score > 300 ? '🏆 Excellent' : 
                   score > 150 ? '👍 Good Job' : 
                   '🎯 Keep Practicing'}
                </div>
              </div>
              <button
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                onClick={initGame}
              >
                Play Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AbstractVisual;
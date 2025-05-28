import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Sparkles, Stars } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import { SiReact, SiTypescript, SiNextdotjs, SiGraphql, SiNodedotjs, SiThreedotjs } from 'react-icons/si'

function useDarkMode() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(match.matches)
    const handler = (e) => setIsDark(e.matches)
    match.addEventListener('change', handler)
    return () => match.removeEventListener('change', handler)
  }, [])

  return isDark
}

const techData = [
  { name: 'React', color: '#61DAFB', position: [2, 0, 0], Icon: SiReact },
  { name: 'TypeScript', color: '#3178C6', position: [-2, 0, 0], Icon: SiTypescript },
  { name: 'Next.js', color: '#00000aa', position: [0, 2, 0], Icon: SiNextdotjs },
  { name: 'GraphQL', color: '#E10098', position: [0, -2, 0], Icon: SiGraphql },
  { name: 'Node.js', color: '#339933', position: [1.5, -1.5, 0], Icon: SiNodedotjs },
  { name: 'Three.js', color: '#049EF4', position: [-1.5, 1.5, 0], Icon: SiThreedotjs }
]

function TechIcon({ name, color, position, Icon, isDark }) {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const baseColor = hovered ? 'white' : color
  const emissiveColor = hovered ? color : isDark ? '#111111' : '#dddddd'
  const textColor = isDark ? 'white' : 'black'
  const tooltipBg = isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.85)'

  return (
    <mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
    >
      <sphereGeometry args={[0.7, 16, 16]} />
      <meshStandardMaterial
        color={baseColor}
        emissive={emissiveColor}
        emissiveIntensity={hovered ? 0.8 : 0.2}
      />
      <Html center distanceFactor={2} style={{ pointerEvents: 'none', transform: hovered ? 'scale(1.4)' : 'scale(1)' }}>
        <Icon style={{ color: baseColor, fontSize: '100px' }} />
      </Html>
      {active && (
        <Html position={[0, -1.2, 0]}>
          <div style={{
            background: tooltipBg,
            color: textColor,
            padding: '0.4rem 0.8rem',
            borderRadius: '0.4rem',
            fontSize: '0.75rem',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)'
          }}>
            {name}
          </div>
        </Html>
      )}
    </mesh>
  )
}


function FloatingTechIcons({ isDark }) {
  return (
    <group position={[2, 0, 0]}> {/* geser ke kanan */}
      {techData.map((tech, i) => (
        <TechIcon key={i} {...tech} isDark={isDark} />
      ))}
    </group>
  )
}


export default function Hero3DScene() {
  const [isMobile, setIsMobile] = useState(false)
  const isDark = useDarkMode()

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-end">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={isDark ? 0.6 : 0.8} />
          <directionalLight position={[5, 5, 5]} intensity={isDark ? 0.8 : 0.5} />
          <pointLight position={[-5, -5, -5]} color={isDark ? 'blue' : 'white'} intensity={0.4} />

          {!isMobile && isDark && <Stars radius={80} depth={30} count={1000} factor={2} fade />}
          {!isMobile && isDark && <Sparkles count={50} scale={5} size={1.5} speed={0.2} />}

          <FloatingTechIcons isDark={isDark} />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Suspense>
      </Canvas>
    </div>
  )
}

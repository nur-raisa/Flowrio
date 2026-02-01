import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  color: string;
}

const petalColors = [
  'hsl(340, 80%, 70%)',
  'hsl(350, 75%, 75%)',
  'hsl(345, 85%, 80%)',
  'hsl(335, 70%, 65%)',
  'hsl(355, 80%, 85%)',
];

export function PetalShower() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [showPetals, setShowPetals] = useState(true);

  useEffect(() => {
    // Generate random petals
    const generatedPetals: Petal[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      size: 8 + Math.random() * 16,
      rotation: Math.random() * 360,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    }));
    setPetals(generatedPetals);

    // Hide petals after animation completes
    const timer = setTimeout(() => {
      setShowPetals(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPetals) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          {/* Rose petal shape using SVG */}
          <svg
            width={petal.size}
            height={petal.size * 1.2}
            viewBox="0 0 20 24"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              opacity: 0.8,
            }}
          >
            <ellipse
              cx="10"
              cy="12"
              rx="9"
              ry="11"
              fill={petal.color}
              style={{
                filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))',
              }}
            />
            <ellipse
              cx="10"
              cy="12"
              rx="6"
              ry="8"
              fill={petal.color}
              style={{
                opacity: 0.6,
              }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

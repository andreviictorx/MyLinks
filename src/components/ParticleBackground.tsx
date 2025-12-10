import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  char: string;
}

const techChars = ['<', '>', '/', '{', '}', '(', ')', ';', ':', '=', '+', '-', '*', '0', '1'];

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 25;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 12 + 10,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        char: techChars[Math.floor(Math.random() * techChars.length)],
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute font-mono text-primary/20 dark:text-primary/15 animate-particle-float"
          style={{
            left: `${particle.x}%`,
            fontSize: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.char}
        </span>
      ))}
    </div>
  );
};

export default ParticleBackground;

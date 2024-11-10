'use client'
import { useEffect, useState } from 'react';
import Projects from './components/projects';
import Hero from './components/hero';
import Experience from './components/experience';
import Skill from './components/skill';
import Contact from './components/contact';

export default function Home() {
  // Use client-side only state initialization
  const [matrixLines, setMatrixLines] = useState<string[]>([]);
  const [animationDelays, setAnimationDelays] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark component as client-side rendered
    setIsClient(true);

    // Initialize matrix animation only on client
    const lines = Array.from({ length: 100 }, () =>
      '10'.repeat(150)
    );
    setMatrixLines(lines);

    const delays = Array.from({ length: 100 }, () => Math.random() * 8);
    setAnimationDelays(delays);
  }, []);

  // Early return during SSR to prevent hydration mismatches
  if (!isClient) {
    return (
      <div className="min-h-screen bg-[#0F1624] font-mono">
        <div className="fixed top-0 left-0 w-full h-full opacity-5"></div>
        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Experience />
          <Skill />
          <Projects />
          <Contact />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F1624] font-mono">
      <div className="fixed top-0 left-0 w-full h-full opacity-5">
        <div className="animate-matrix overflow-hidden whitespace-nowrap text-[#64FFDA] text-xs">
          {matrixLines.map((line, i) => (
            <div
              key={i}
              className="animate-fall"
              style={{ animationDelay: `${animationDelays[i]}s` }}
              suppressHydrationWarning
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Skill />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-[#171F2E] border-t border-[#233554]">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/vishalsawai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64FFDA] hover:text-[#4CD8C4]"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-center text-[#64FFDA]">
            © {new Date().getFullYear()} Vishal Sawai // All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { ChevronDown, Terminal, Braces, Code } from 'lucide-react';
import { Button } from './ui/button';
import portfolioData from '../data/portfolio.json';

const HeroSection = () => {
  const [typing, setTyping] = useState(true);
  const { name, title } = portfolioData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTyping(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-code-pattern opacity-60 pointer-events-none"></div>
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center mb-4 terminal-header p-2 rounded-t-md">
            <div className="h-3 w-3 rounded-full bg-code-red mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-code-yellow mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-code-green"></div>
            <div className="ml-4 text-xs text-code-foreground/70 code-text">portfolio.tsx — ~/projects</div>
          </div>

          <div className="bg-code-background p-6 rounded-b-md border border-code-purple/20 shadow-lg code-window">
            <div className="code-text text-sm sm:text-base md:text-lg space-y-1">
              <p className="text-code-green code-line">
                <span className="text-code-pink">const</span> <span className="text-code-cyan">developer</span> = {'{'}
              </p>
              <p className="pl-8 code-line">
                <span className="text-code-orange">name</span>: <span className="text-code-green">"{name}"</span>,
              </p>
              <p className="pl-8 code-line">
                <span className="text-code-orange">title</span>: <span className="text-code-green">"{title}"</span>,
              </p>

              <p className="code-line">{'}'}</p>
            </div>

            <div className="mt-6 flex">
              <span className="text-code-pink code-text">{'>'}</span>
              <div className="ml-2 flex items-center">
                <span className="text-code-foreground code-text glow-text">
                  Building modern web and mobile applications with clean, efficient code
                </span>
                {typing && (
                  <span className="h-4 w-2 bg-code-foreground ml-1 animate-cursor-blink"></span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              className="bg-code-purple hover:bg-code-purple/90 text-white flex items-center gap-2"
              onClick={() => window.open('#projects', '_self')}
            >
              <Code className="h-4 w-4" />
              View Projects
            </Button>
            <Button variant="outline" className="border-code-cyan text-code-cyan hover:bg-code-cyan/10 flex items-center gap-2"
              onClick={() => window.open('#contact', '_self')}
            >
              <Terminal className="h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline" className="border-code-green text-code-green hover:bg-code-green/10 flex items-center gap-2"
              onClick={() => window.open('https://drive.google.com/drive/folders/133qhV5lVdSBTlt-2ukKNaK7-hkZDS6ZT?usp=drive_link', '_blank')}
            >

              <Braces className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-code-foreground/70 hover:text-code-foreground">
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

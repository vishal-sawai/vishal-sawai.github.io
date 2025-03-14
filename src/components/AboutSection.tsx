
import React from 'react';
import { Terminal, Code2, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import portfolioData from '../data/portfolio.json';

const AboutSection = () => {
  const { about } = portfolioData;
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-code-purple opacity-20 rounded-lg transform rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-code-cyan opacity-20 rounded-lg transform -rotate-6"></div>
              <Card className="bg-code-background border-code-purple/20 relative z-10 code-window">
                <CardHeader>
                  <CardTitle className="code-text flex items-center gap-2">
                    <User className="h-5 w-5 text-code-green" />
                    <span>About Me</span>
                  </CardTitle>
                  <CardDescription className="code-text text-code-foreground/70">
                    developer.getDetails()
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-code-foreground leading-relaxed">
                      {about.intro}
                    </p>
                    <p className="text-code-foreground leading-relaxed">
                      {about.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <Card className="bg-code-background border-code-purple/20 hover-glow">
              <CardHeader>
                <CardTitle className="code-text flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-code-pink" />
                  <span>My Approach</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-code-foreground leading-relaxed">
                  I believe in writing clean, maintainable code that solves real problems.
                  My development philosophy centers around understanding user needs and
                  delivering solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-code-background border-code-purple/20 hover-glow">
              <CardHeader>
                <CardTitle className="code-text flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-code-cyan" />
                  <span>What I Do</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-code-green mr-2">•</span>
                    <span>Develop responsive web applications with React and Next.js</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-code-green mr-2">•</span>
                    <span>Build mobile applications with React Native</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-code-green mr-2">•</span>
                    <span>Create efficient backend systems with Node.js and Express</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-code-green mr-2">•</span>
                    <span>Design and implement database schemas with MongoDB and PostgreSQL</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

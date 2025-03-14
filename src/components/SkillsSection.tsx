
import React from 'react';
import { Code, Server, Database, Smartphone, Braces, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import portfolioData from '../data/portfolio.json';

const SkillsSection = () => {
  const { skills } = portfolioData;
  
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="h-5 w-5 text-code-cyan" />,
      skills: skills.frontend
    },
    {
      title: 'Backend',
      icon: <Server className="h-5 w-5 text-code-pink" />,
      skills: skills.backend
    },
    {
      title: 'Database',
      icon: <Database className="h-5 w-5 text-code-green" />,
      skills: skills.database
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="h-5 w-5 text-code-orange" />,
      skills: ['React Native', 'Expo', 'Mobile UI/UX']
    },
    {
      title: 'Languages',
      icon: <Braces className="h-5 w-5 text-code-yellow" />,
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'PHP']
    },
    {
      title: 'Tools',
      icon: <GitBranch className="h-5 w-5 text-code-purple" />,
      skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Docker', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-code-pattern">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold code-text mb-2">
            <span className="text-code-purple">&lt;</span>
            <span className="text-code-foreground">Skills</span>
            <span className="text-code-purple">/&gt;</span>
          </h2>
          <p className="text-code-foreground/70 max-w-2xl mx-auto mb-6">
            Technologies and tools I work with
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <span className="bg-code-pink/20 text-code-pink px-3 py-1 rounded-full text-sm code-text">React.js</span>
            <span className="bg-code-cyan/20 text-code-cyan px-3 py-1 rounded-full text-sm code-text">Next.js</span>
            <span className="bg-code-purple/20 text-code-purple px-3 py-1 rounded-full text-sm code-text">TypeScript</span>
            <span className="bg-code-green/20 text-code-green px-3 py-1 rounded-full text-sm code-text">Node.js</span>
            <span className="bg-code-orange/20 text-code-orange px-3 py-1 rounded-full text-sm code-text">React Native</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-code-background border-code-purple/20 hover-glow transition-all overflow-hidden">
              <div className="absolute h-1 w-full bg-gradient-to-r from-code-pink via-code-purple to-code-cyan top-0 left-0 opacity-70"></div>
              <CardHeader className="pb-2">
                <CardTitle className="code-text flex items-center gap-2">
                  {category.icon}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="bg-muted hover:bg-muted/80 text-code-foreground code-text transition-all hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

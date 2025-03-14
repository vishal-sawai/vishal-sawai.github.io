import React, { useState } from 'react';
import { ExternalLink, Github, Code, Layers, Layout, Server, Smartphone } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import portfolioData from '../data/portfolio.json';
import ImageSlider from './ImageSlider';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { projects } = portfolioData;

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Layers className="h-4 w-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Layout className="h-4 w-4" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="h-4 w-4" /> },
    { id: 'fullstack', name: 'Full Stack', icon: <Code className="h-4 w-4" /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone className="h-4 w-4" /> }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold code-text mb-2">
            <span className="text-code-purple">&lt;</span>
            <span className="text-code-foreground">Projects</span>
            <span className="text-code-purple">/&gt;</span>
          </h2>
          <p className="text-code-foreground/70 max-w-2xl mx-auto">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`code-text flex items-center gap-2 ${activeCategory === category.id
                ? "bg-code-purple hover:bg-code-purple/90"
                : "border-code-purple/30 text-code-foreground hover:bg-code-purple/10"
                }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card
              key={project.title}
              className="bg-code-background border-code-purple/20 overflow-hidden hover-glow transition-all group flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-muted relative">

              <ImageSlider images={project.images} />

              </div>
              <CardHeader className="pb-2">
                <CardTitle className="code-text text-code-cyan group-hover:text-code-pink transition-colors flex items-center gap-2">
                  <Code className="h-5 w-5 text-code-purple" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-code-foreground/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} className="bg-muted/50 text-code-foreground code-text text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-4 mt-auto">
                {project.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-code-green/50 text-code-green hover:bg-code-green/10 flex-1"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                )}
                {project.code && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-code-purple/50 text-code-purple hover:bg-code-purple/10 flex-1"
                    onClick={() => window.open(project.code, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                )}
              </CardFooter>
            </Card>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from 'react';
import { Briefcase, Calendar, Code2 } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="pt-20 bg-gradient-to-b from-muted/20 to-code-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold code-text mb-2">
            <span className="text-code-purple">&lt;</span>
            <span className="text-code-foreground">Experience</span>
            <span className="text-code-purple">/&gt;</span>
          </h2>
          <p className="text-code-foreground/70 max-w-2xl mx-auto">
            My professional journey as a developer
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative border-l-2 border-code-purple/30 pl-8 ml-4 md:ml-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`mb-12 relative ${index !== experience.length - 1 ? '' : 'mb-0'
                  }`}
              >
                <div className="absolute -left-[41px] w-6 h-6 bg-gradient-to-br from-code-purple to-code-pink rounded-full flex items-center justify-center">
                  <Briefcase className="h-3 w-3 text-code-foreground" />
                </div>

                <div className="mb-2 flex items-center">
                  <span className="text-code-pink code-text">function</span>
                  <span className="ml-2 text-code-cyan code-text font-bold">{exp.title}</span>
                  <span className="text-code-orange ml-1 code-text">( )</span>
                </div>

                <div className="bg-code-background p-5 rounded-md border border-code-purple/20 shadow-sm hover-glow">
                  <div className="flex justify-between items-start mb-3 flex-col sm:flex-row gap-2">
                    <h4 className="text-code-green code-text font-medium flex items-center">
                      <Code2 className="h-4 w-4 mr-2" />
                      {exp.company}
                    </h4>
                    <div className="flex items-center bg-muted px-2 py-1 rounded text-xs code-text text-code-foreground/70">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-code-orange mr-2 code-text">→</span>
                        <span className="text-code-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

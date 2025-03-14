
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-code-background/90 backdrop-blur-sm border-b border-code-purple/20 py-4">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="#" className="text-code-foreground font-bold text-xl code-text">
          <span className="text-code-purple">Vishal</span>
          <span className="text-code-pink">.</span>
          <span className="text-code-cyan">portfolio</span>
          <span className="text-code-orange">()</span>
        </a>

        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-code-background border-b border-code-purple/20 py-4 animate-fade-in">
          <div className="container px-4 mx-auto flex flex-col space-y-4">
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void } = {}) => {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="text-code-foreground hover:text-code-cyan transition-colors relative animated-border pb-1 code-text"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;

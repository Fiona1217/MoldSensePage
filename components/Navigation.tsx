import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import moldSenseLogo from "@/assets/moldsense-logo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={moldSenseLogo} 
              alt="MoldSense" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-highlight-green ${
                location.pathname === '/' ? 'text-highlight-green' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/buy" 
              className={`text-sm font-medium transition-colors hover:text-highlight-green ${
                location.pathname === '/buy' ? 'text-highlight-green' : 'text-foreground'
              }`}
            >
              Buy Kit
            </Link>
          </div>
          
          {/* CTA Button */}
          <Link to="/buy">
            <Button variant="hero" size="sm">
              Pre-Order Kit
            </Button>
          </Link>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/buy">
              <Button variant="hero" size="sm">
                Buy Kit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
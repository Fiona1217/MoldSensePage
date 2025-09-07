import React from 'react';
import { Star, Users, Award, Shield } from 'lucide-react';
import cnrcLogo from '@/assets/CNRC-logo.png';
import phacLogo from '@/assets/PHAC-logo.jpg';

const TrustSection = () => {
  const testimonials = [
    {
      quote: "MoldSense saved us thousands in unnecessary remediation. The AI correctly identified our mold as harmless.",
      author: "Sarah M.",
      role: "Homeowner, Toronto"
    },
    {
      quote: "As a property manager, this tool helps me quickly assess mold concerns and take appropriate action.",
      author: "Mike Chen",
      role: "Property Manager"
    },
    {
      quote: "Finally, a mold test that actually tells you what to do next. The GPS feature found local experts instantly.",
      author: "Jennifer K.",
      role: "Home Inspector"
    }
  ];

  const trustBadges = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "AI Verified",
      description: "95% accuracy rate"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Expert Approved",
      description: "Validated by mycologists"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted by 10K+",
      description: "Families nationwide"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-highlight-green">Families</span> Nationwide
          </h2>
          <div className="flex justify-center items-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-highlight-green fill-highlight-green" />
            ))}
            <span className="text-lg text-muted-foreground ml-2">4.9/5 from 2,000+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-highlight-green fill-highlight-green" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="text-highlight-green mb-4 mx-auto">
                {badge.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">Validated by leading research institutions</p>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <img 
              src={cnrcLogo} 
              alt="CNRC" 
              className="h-12 w-auto grayscale hover:grayscale-0 transition-smooth"
            />
            <img 
              src={phacLogo} 
              alt="PHAC" 
              className="h-12 w-auto grayscale hover:grayscale-0 transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
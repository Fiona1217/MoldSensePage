import React from 'react';
import { Package, Camera, FileCheck } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "Receive Your Kit",
      description: "Get your comprehensive testing kit delivered to your door with everything you need."
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Take Photo & Input Details",
      description: "Use the app to photograph samples and input environmental details for accurate analysis."
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Get Your Report",
      description: "Receive a detailed, personalized mold report with actionable next steps."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-highlight-green">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step process to identify mold in your home and get expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center border-2 border-highlight-green/30 group-hover:border-highlight-green transition-smooth">
                  <div className="text-highlight-green group-hover:scale-110 transition-smooth">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-highlight-green text-dark rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-highlight-green/50 to-transparent"></div>
                )}
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
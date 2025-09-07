import React from 'react';
import { Shield, MapPin, Zap, DollarSign, FileText } from 'lucide-react';

const KitFeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Identification",
      description: "Advanced machine learning identifies mold species with 95% accuracy"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Region-Specific Detection",
      description: "Uses environmental factors and GPS data for localized mold identification"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Detailed Reports",
      description: "Get comprehensive reports on harmfulness, risk group, and next steps"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Expert-Approved Results",
      description: "Results validated by mycologists and environmental health experts"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective Solution",
      description: "Saves hundreds compared to Amazon kits and professional lab tests"
    }
  ];

  return (
    <section className="py-24 gradient-section">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-highlight-green">MoldSense</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most advanced mold detection system available for home use, 
            combining cutting-edge AI with professional-grade accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 hover:border-highlight-green/50 transition-smooth group"
            >
              <div className="text-highlight-green mb-4 group-hover:scale-110 transition-smooth">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitFeaturesSection;
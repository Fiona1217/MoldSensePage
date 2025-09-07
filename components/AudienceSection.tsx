import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AudienceSection = () => {
  const audiences = [
    {
      title: "Health-conscious Homeowners",
      description: "Protect your family's respiratory health with accurate mold identification.",
      icon: "🏠"
    },
    {
      title: "Renters & Tenants", 
      description: "Know your rights and get proof when dealing with landlord mold issues.",
      icon: "🔑"
    },
    {
      title: "Allergy Sufferers",
      description: "Identify specific mold triggers that may be causing your symptoms.",
      icon: "🤧"
    },
    {
      title: "Real Estate Professionals",
      description: "Quickly assess properties and provide transparency to clients.",
      icon: "🏘️"
    }
  ];

  return (
    <section className="py-24 gradient-section">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Peace of mind for <span className="text-highlight-green">every home</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perfect for health-conscious homeowners, renters, allergy sufferers, and anyone who wants a safe, clean living space.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center shadow-card group-hover:shadow-glow transition-smooth">
                <span className="text-3xl">{audience.icon}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Lifestyle Imagery Placeholder */}
        <div className="bg-card rounded-xl p-12 text-center shadow-card">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join thousands of families breathing safer
            </h3>
            <p className="text-muted-foreground mb-8">
              MoldSense users report 89% confidence in their home's air quality after using our app.
            </p>
            <Link to="/buy">
              <Button variant="hero" size="lg">
                Start Your Peace of Mind
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
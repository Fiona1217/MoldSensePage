import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: "📦",
      title: "Order Your Kit",
      description: "Get your MoldSense detection kit delivered to your door in 2-3 days."
    },
    {
      icon: "📱", 
      title: "Download the App",
      description: "Install MoldSense from the App Store or Google Play and create your account."
    },
    {
      icon: "🔬",
      title: "Start Scanning", 
      description: "Use your kit and app together to identify mold species and get instant results."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How to <span className="text-highlight-green">Get Started</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Order our detection kit, download the app, and start scanning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="relative">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-highlight-green/20 to-teal/20 rounded-full flex items-center justify-center shadow-card">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-highlight-green rounded-full flex items-center justify-center">
                  <span className="text-dark font-bold text-sm">{index + 1}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Kit Details */}
        <div className="bg-card rounded-xl p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What's in your MoldSense Kit?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-highlight-green rounded-full"></div>
                  Sterile collection swabs (5 pack)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-highlight-green rounded-full"></div>
                  Magnification lens for phone camera
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-highlight-green rounded-full"></div>
                  Calibration stickers for accurate sizing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-highlight-green rounded-full"></div>
                  Quick start guide and safety instructions
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-highlight-green mb-2">$80.00</div>
              <div className="text-muted-foreground mb-6">One-time kit purchase</div>
              <Link to="/buy">
                <Button variant="hero" size="lg" className="w-full">
                  Reserve Your Kit Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
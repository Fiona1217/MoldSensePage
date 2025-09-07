import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import processIcons from "@/assets/process-icons.jpg";

const SolutionSection = () => {
  const steps = [
    {
      number: "01",
      title: "Snap & Input",
      description: "Take a photo and input details about dampness, color, and location."
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our AI and expert database identify the species and risk level instantly."
    },
    {
      number: "03",
      title: "Get Results",
      description: "Detailed results showing how harmful it is, who's at risk, and next steps."
    }
  ];

  return (
    <section id="solution-section" className="py-24 gradient-section">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Identify mold <span className="text-highlight-green">instantly</span>,{" "}
            right from your phone
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 mx-auto bg-highlight-green/10 rounded-full flex items-center justify-center border-2 border-highlight-green/30">
                  <span className="text-2xl font-bold text-highlight-green">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-highlight-green/30 -z-10"></div>
                )}
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
        
        {/* Process Icons Visual */}
        <div className="flex justify-center mb-12">
          <img 
            src={processIcons} 
            alt="Three step process: photo, analysis, results" 
            className="w-full max-w-2xl h-auto opacity-90"
          />
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            <span className="text-highlight-green font-semibold">GPS integration</span> helps you find local experts for removal if needed.
          </p>
          
          <Link to="/buy">
            <Button variant="hero" size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
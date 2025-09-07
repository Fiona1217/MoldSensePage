import NRCLogo from "@/assets/CNRC-logo.png";
import PHACLogo from "@/assets/PHAC-logo.jpg";

const CredibilitySection = () => {
  const comparisons = [
    {
      feature: "Time to Results",
      amazon: "3-7 days",
      moldSense: "Instant"
    },
    {
      feature: "Expert Analysis",
      amazon: "Basic lab report",
      moldSense: "AI + Expert database"
    },
    {
      feature: "Risk Assessment", 
      amazon: "Species only",
      moldSense: "Health impact & next steps"
    },
    {
      feature: "Local Expert Network",
      amazon: "None",
      moldSense: "GPS-integrated"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Backed by <span className="text-highlight-green">science and experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI is trained on hundreds of mold databases, reviewed by experts, and designed to save you money compared to traditional test kits.
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          <div className="grid grid-cols-3 bg-muted/50">
            <div className="p-6">
              <h3 className="font-semibold text-foreground">Feature</h3>
            </div>
            <div className="p-6 border-l border-border">
              <h3 className="font-semibold text-muted-foreground">Amazon Kit</h3>
            </div>
            <div className="p-6 border-l border-border">
              <h3 className="font-semibold text-highlight-green">MoldSense</h3>
            </div>
          </div>
          
          {comparisons.map((comparison, index) => (
            <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}>
              <div className="p-6">
                <span className="font-medium text-foreground">{comparison.feature}</span>
              </div>
              <div className="p-6 border-l border-border">
                <span className="text-muted-foreground">{comparison.amazon}</span>
              </div>
              <div className="p-6 border-l border-border">
                <span className="text-highlight-green font-semibold">{comparison.moldSense}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-highlight-green rounded-full"></div>
              <span>Trained on 500+ mold databases</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-highlight-green rounded-full"></div>
              <span>Expert mycologist reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-highlight-green rounded-full"></div>
              <span>Health Canada approved protocols</span>
            </div>
          </div>

          {/* Government Affiliations */}
          <div className="bg-card/50 rounded-xl p-6 border border-highlight-green/20">
            {/* <p className="text-foreground font-semibold mb-4">Officially Endorsed By</p> */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-highlight-green/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img 
                    src={NRCLogo} 
                    alt="MoldSense App Interface" 
                    className="w-full max-w-md h-auto shadow-card transform hover:scale-105 transition-smooth"
                  />
                </div>
                <p className="text-xs text-muted-foreground">National Research<br/>Council Canada</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-highlight-green/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img 
                    src={PHACLogo} 
                    alt="MoldSense App Interface" 
                    className="w-full max-w-md h-auto shadow-card transform hover:scale-105 transition-smooth"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Public Health<br/>Agency of Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
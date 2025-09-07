import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import moldSenseLogo from "@/assets/moldsense-logo.jpg";

const FinalCTASection = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={moldSenseLogo} 
              alt="MoldSense" 
              className="h-32 w-auto"
            />
          </div>
          
          {/* Final Message */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Stop mold before it <span className="text-highlight-green">stops you</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the thousands of families already protecting their homes with MoldSense. 
            Your health is worth more than uncertainty.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <Link to="/buy">
              <Button variant="hero" size="xl" className="min-w-64">
                Pre-order Now - $80
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-12 space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-highlight-green rounded-full flex items-center justify-center">
                  <span className="text-dark text-xs">✓</span>
                </div>
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-highlight-green rounded-full flex items-center justify-center">
                  <span className="text-dark text-xs">✓</span>
                </div>
                <span>Free shipping nationwide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-highlight-green rounded-full flex items-center justify-center">
                  <span className="text-dark text-xs">✓</span>
                </div>
                <span>Expert support included</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Ships in 2-3 business days • Available in US and Canada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
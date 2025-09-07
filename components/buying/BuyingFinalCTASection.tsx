import React from 'react';
import { Button } from "@/components/ui/button";
import moldSenseLogo from "@/assets/moldsense-logo.jpg";

const BuyingFinalCTASection = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center animate-fade-in-up">
            <img 
              src={moldSenseLogo} 
              alt="MoldSense" 
              className="h-40 w-auto"
            />
          </div>
          
          {/* Final Message */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up animation-delay-200">
            <span className="text-highlight-green">Order today,</span>
            <br />
            protect your home tomorrow
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Don't wait for mold to become a bigger problem. Get your MoldSense kit today 
            and have peace of mind about your family's health.
          </p>
          
          {/* Single CTA Button */}
          <div className="flex justify-center pt-8 animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="xl" className="min-w-64">
              Buy Kit Now - $80
            </Button>
          </div>
          
          {/* Urgency/Scarcity */}
          <div className="bg-card/30 backdrop-blur-sm border border-highlight-green/30 rounded-lg p-6 max-w-2xl mx-auto mt-12 animate-fade-in-up animation-delay-800">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-highlight-green rounded-full animate-pulse"></div>
              <span className="text-highlight-green font-semibold">Limited Time Offer</span>
            </div>
            <p className="text-foreground">
              Free shipping and expert setup call included with all orders this month. 
              Over 500 kits sold in the last 30 days!
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8 space-y-4">
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
                <span>Ships in 2-3 business days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-highlight-green rounded-full flex items-center justify-center">
                  <span className="text-dark text-xs">✓</span>
                </div>
                <span>Expert support included</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Available in US and Canada • SSL Secure Checkout • No Hidden Fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyingFinalCTASection;
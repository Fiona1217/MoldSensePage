import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Package, Repeat } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<'one-time' | 'subscription'>('one-time');
  const [userUuid, setUserUuid] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let uuid = localStorage.getItem('user_uuid');
    if (!uuid) {
      uuid = uuidv4();
      localStorage.setItem('user_uuid', uuid);
    }
    setUserUuid(uuid);
  }, []);

  const startCheckout = async (plan: 'one-time' | 'subscription') => {
    if (!userUuid) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, customer: userUuid })
      });

      const data = await response.json();
      // Redirect to payment page with clientSecret + plan + uuid
      window.location.href = `/paymentpage?payment_intent_client_secret=${data.clientSecret}&plan=${plan}&uuid=${userUuid}`;
    } catch (err) {
      console.error("Payment error:", err);
      setIsLoading(false);
    }
  };

  const kitIncludes = [
    "Professional grade swabs",
    "Sterile petri dishes", 
    "Safety gloves included",
    "Detailed instruction manual",
    "QR code for app access",
    "Lifetime app access"
  ];

  const renewalIncludes = [
    "Fresh kit every 4 months",
    "All premium kit contents",
    "Priority customer support",
    "App updates and new features", 
    "Cancel anytime",
    "50% savings vs individual kits"
  ];

  return (
    <section className="py-24 gradient-section">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-highlight-green">Protection Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get everything you need to protect your home from dangerous mold.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
          {/* One-Time Purchase */}
          <div 
            className={`relative bg-card/50 backdrop-blur-sm p-8 rounded-lg border-2 transition-smooth cursor-pointer ${
              selectedPlan === 'one-time' 
                ? 'border-highlight-green shadow-glow' 
                : 'border-border/50 hover:border-highlight-green/50'
            }`}
            onClick={() => setSelectedPlan('one-time')}
          >
            {selectedPlan === 'one-time' && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-highlight-green text-dark px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            
            <div className="text-center mb-8">
              <Package className="w-12 h-12 text-highlight-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Complete Detection Kit</h3>
              <div className="text-5xl font-bold text-highlight-green mb-2">$80</div>
              <p className="text-muted-foreground">One-time purchase</p>
            </div>

            <div className="space-y-4 mb-8">
              {kitIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-highlight-green mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              variant={selectedPlan === 'one-time' ? 'hero' : 'secondary-outline'}
              size="lg"
              className="w-full"
              onClick={() => startCheckout('one-time')}
              disabled={!userUuid || isLoading}
            >
              {isLoading && selectedPlan === 'one-time' ? 'Redirecting...' : 'Buy Now - $80'}
            </Button>
          </div>

          {/* Subscription Plan */}
          <div 
            className={`relative bg-card/50 backdrop-blur-sm p-8 rounded-lg border-2 transition-smooth cursor-pointer ${
              selectedPlan === 'subscription' 
                ? 'border-highlight-green shadow-glow' 
                : 'border-border/50 hover:border-highlight-green/50'
            }`}
            onClick={() => setSelectedPlan('subscription')}
          >
            <div className="text-center mb-8">
              <Repeat className="w-12 h-12 text-highlight-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Protection Renewal</h3>
              <div className="text-5xl font-bold text-highlight-green mb-2">$30</div>
              <p className="text-muted-foreground">Every 4 months</p>
            </div>

            <div className="space-y-4 mb-8">
              {renewalIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-highlight-green mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              variant={selectedPlan === 'subscription' ? 'hero' : 'secondary-outline'} 
              size="lg" 
              className="w-full"
              onClick={() => startCheckout('subscription')}
              disabled={!userUuid || isLoading}
            >
              {isLoading && selectedPlan === 'subscription' ? 'Redirecting...' : 'Subscribe - $30/4 months'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
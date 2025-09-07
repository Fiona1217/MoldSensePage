import React from 'react';
import Navigation from '@/components/Navigation';
import PricingSection from '@/components/buying/PricingSection';
import BuyingFinalCTASection from '@/components/buying/BuyingFinalCTASection';

const BuyingPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16"> {/* Add padding for navigation */}
        <PricingSection />
        <BuyingFinalCTASection />
      </div>
    </main>
  );
};

export default BuyingPage;
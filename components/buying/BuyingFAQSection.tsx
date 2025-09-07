import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BuyingFAQSection = () => {
  const faqs = [
    {
      question: "What's included in the MoldSense kit?",
      answer: "Your kit includes professional swab collection tools, multiple petri dishes, protective gloves, detailed instruction manual, QR code for app activation, and lifetime access to the MoldSense app with expert support."
    },
    {
      question: "How does the AI identification work?",
      answer: "Our AI uses advanced machine learning trained on thousands of mold samples. You photograph your sample, input environmental details, and our system combines visual analysis with your location data to provide 95% accurate identification."
    },
    {
      question: "How quickly will I get results?",
      answer: "Results are typically available within 2-3 minutes of uploading your sample. Complex cases may take up to 24 hours for expert review, but most identifications are instant."
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your MoldSense kit, return it for a full refund, no questions asked."
    },
    {
      question: "How does shipping work?",
      answer: "We offer free shipping across the US and Canada. Orders typically ship within 2-3 business days and arrive within 5-7 business days. Express shipping options are available at checkout."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes! If you choose the renewal subscription, you can cancel at any time through your account settings or by contacting our support team. No cancellation fees or hassle."
    },
    {
      question: "Is the app really free for life?",
      answer: "Yes, with your kit purchase, you get lifetime access to the MoldSense app with all current features. New premium features may be added with optional upgrades, but core functionality remains free forever."
    },
    {
      question: "What if I need help using the kit?",
      answer: "Every kit includes detailed instructions, and our expert support team is available via chat, email, or phone. We also have video tutorials and a comprehensive FAQ section in the app."
    }
  ];

  return (
    <section className="py-24 gradient-section">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-highlight-green">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about your MoldSense kit.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-highlight-green">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default BuyingFAQSection;
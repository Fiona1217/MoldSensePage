import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How accurate is MoldSense compared to lab testing?",
      answer: "MoldSense achieves 94% accuracy in mold species identification, comparable to professional lab testing. Our AI is trained on over 500 mold databases and continuously validated by certified mycologists."
    },
    {
      question: "What's included in the $80 kit?",
      answer: "Your kit includes: professional sampling tools, detailed instructions, access to the MoldSense app, unlimited scans for 1 year, expert consultation if needed, and GPS-integrated local expert network access."
    },
    {
      question: "How quickly do I get results?",
      answer: "Results are instant! Simply take a photo, input environmental details, and get comprehensive analysis within seconds. No waiting for lab results or shipping samples."
    },
    {
      question: "Is this approved by Canadian health authorities?",
      answer: "Yes, MoldSense follows protocols endorsed by the Public Health Agency of Canada and uses research validated by the National Research Council Canada. Our processes meet all Canadian health and safety standards."
    },
    {
      question: "What if the app can't identify the mold?",
      answer: "If our AI confidence is below 90%, we'll connect you directly with a certified mycologist for manual review at no extra cost. You'll get expert analysis within 24 hours."
    },
    {
      question: "Does this work for all types of properties?",
      answer: "Absolutely! MoldSense works in homes, apartments, basements, commercial buildings, RVs, and any indoor space. The app adapts recommendations based on your specific environment and location."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with MoldSense, return the kit for a full refund, no questions asked."
    },
    {
      question: "Do I need internet connection to use the app?",
      answer: "An internet connection is required for analysis and accessing our expert database. However, you can take photos offline and they'll sync when you're back online."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-highlight-green">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about MoldSense and mold detection.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 border-0 shadow-card"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:text-highlight-green transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions? <span className="text-highlight-green font-semibold cursor-pointer hover:underline">Contact our support team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
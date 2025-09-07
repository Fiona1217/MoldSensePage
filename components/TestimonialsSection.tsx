const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Homeowner, Toronto",
      text: "Found black mold behind my washing machine in minutes. The app told me exactly how dangerous it was and connected me with a local expert. Worth every penny.",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez", 
      role: "Allergy Specialist, Vancouver",
      text: "I recommend MoldSense to my patients with respiratory issues. The accuracy is impressive and it helps them make informed decisions about their environment.",
      rating: 5
    },
    {
      name: "Jessica Park",
      role: "Property Manager, Calgary", 
      text: "Game-changer for rental inspections. No more waiting days for lab results or expensive testing kits. My tenants love the peace of mind.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by thousands of <span className="text-highlight-green">Canadian families</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what homeowners, health professionals, and property managers are saying about MoldSense.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-card">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-highlight-green text-xl">★</span>
                ))}
              </div>
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-highlight-green font-semibold">4.9/5 stars</span> from 2,847+ verified customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import problemIcons from "@/assets/problem-icons.jpg";

const ProblemSection = () => {
  const problems = [
    {
      title: "Some mold is just cosmetic",
      description: "Not all mold growth poses health risks, but identifying the difference is crucial."
    },
    {
      title: "Some mold triggers serious health issues", 
      description: "Certain species can cause allergies, asthma, or worse respiratory problems."
    },
    {
      title: "Regional variations matter",
      description: "Different climates grow different molds based on rain, humidity, and soil conditions."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Not all mold is equal—but some can{" "}
            <span className="text-highlight-green">seriously harm you</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center shadow-card">
                <div className="w-12 h-12 bg-highlight-green/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-highlight-green rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Problem Icons Visual */}
        <div className="flex justify-center">
          <img 
            src={problemIcons} 
            alt="Health and environmental risk icons" 
            className="w-full max-w-2xl h-auto opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
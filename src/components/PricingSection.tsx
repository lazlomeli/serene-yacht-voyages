import { Check } from "lucide-react";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    name: "Sunset Cruise",
    price: "€1,100",
    duration: "3 hours",
    description: "A magical evening on the water",
    features: [
      "Up to 8 guests",
      "Champagne & canapés",
      "Professional crew",
      "Sound system access",
      "Swimming stops",
    ],
    featured: false,
  },
  {
    name: "Day Trip",
    price: "€2,200",
    duration: "8 hours",
    description: "A full day of exploration",
    features: [
      "Up to 10 guests",
      "Gourmet lunch included",
      "All beverages",
      "Water toys & snorkeling",
      "Multiple swimming locations",
      "Customizable itinerary",
    ],
    featured: true,
  },
  {
    name: "Week Charter",
    price: "€16,000",
    duration: "7 days",
    description: "The ultimate adventure",
    features: [
      "Up to 6 overnight guests",
      "Full board catering",
      "Premium beverages",
      "Complete Balearics tour",
      "Daily housekeeping",
      "Concierge services",
      "Airport transfers",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
            Our Offerings
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Pricing Plans
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing for unforgettable experiences. All prices are starting rates.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border p-8 md:p-10 flex flex-col transition-all duration-300 hover:shadow-[0_4px_30px_hsla(220,50%,12%,0.08)] ${
                plan.featured
                  ? "border-accent md:-mt-4 md:mb-4"
                  : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] tracking-[0.2em] uppercase px-4 py-1">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-4xl md:text-5xl text-foreground">
                    {plan.price}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm">
                  {plan.duration}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "gold" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          Prices may vary based on season and specific requirements. Contact us for a personalized quote.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

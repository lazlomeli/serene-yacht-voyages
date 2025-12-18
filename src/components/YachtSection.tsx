import { Anchor, Compass, Users, Waves } from "lucide-react";
import yachtDeck from "@/assets/yacht-deck.jpg";

const features = [
  {
    icon: Anchor,
    title: "Pure Sailing",
    description: "SV Iron Monkey is a premium motor sailing vessel combining elegance with performance.",
  },
  {
    icon: Compass,
    title: "Amazing Ports",
    description: "Explore hidden coves, pristine beaches, and charming ports throughout the Balearics.",
  },
  {
    icon: Users,
    title: "Professional Crew",
    description: "Experienced, friendly crew dedicated to creating unforgettable moments.",
  },
  {
    icon: Waves,
    title: "New Horizons",
    description: "Discover breathtaking destinations and create memories that last a lifetime.",
  },
];

const YachtSection = () => {
  return (
    <section id="yacht" className="section-padding bg-background">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
            Sailing Vessel
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Iron Monkey
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whatever the occasion may be, we'll make it magical.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={yachtDeck}
                alt="Luxurious yacht deck with champagne service"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 hidden lg:block" />
          </div>

          {/* Features */}
          <div className="space-y-10">
            <div className="max-w-lg">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Experience Luxury at Sea
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Step aboard SV Iron Monkey and discover a world of refined elegance. 
                Our vessel offers the perfect blend of comfort, style, and adventure 
                for discerning travelers seeking an exceptional maritime experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <feature.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtSection;

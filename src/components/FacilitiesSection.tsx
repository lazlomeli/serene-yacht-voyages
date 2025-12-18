import {
  Wifi,
  UtensilsCrossed,
  Wine,
  Waves,
  Music,
  Sun,
  Bed,
  ShowerHead,
} from "lucide-react";
import yachtCabin from "@/assets/yacht-cabin.jpg";
import yachtDeck from "@/assets/yacht-deck.jpg";

const facilities = [
  { icon: Bed, label: "Luxury Cabins", description: "Comfortable sleeping quarters" },
  { icon: UtensilsCrossed, label: "Gourmet Dining", description: "Fresh cuisine prepared onboard" },
  { icon: Wine, label: "Premium Bar", description: "Champagne & fine beverages" },
  { icon: Sun, label: "Sun Deck", description: "Spacious lounging areas" },
  { icon: Waves, label: "Water Toys", description: "Snorkeling & swimming gear" },
  { icon: Music, label: "Sound System", description: "Premium audio throughout" },
  { icon: ShowerHead, label: "Fresh Water", description: "Hot showers available" },
  { icon: Wifi, label: "Connectivity", description: "WiFi on request" },
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="section-padding bg-background">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
            Amenities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Facilities & Comfort
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every detail has been considered to ensure your voyage is nothing short of exceptional.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={yachtCabin}
              alt="Luxurious yacht cabin interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={yachtDeck}
              alt="Yacht deck with lounge area"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                <facility.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <h4 className="font-serif text-lg text-foreground mb-1">
                {facility.label}
              </h4>
              <p className="text-muted-foreground text-sm">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

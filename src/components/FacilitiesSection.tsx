import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import captainCabin from "@/assets/captain.png";
import mainRoom from "@/assets/main-room.png";
import { facilities } from "@/data/facilities";

const FacilitiesSection = () => {
  const navigate = useNavigate();

  const handleFacilityClick = (facilityId: string) => {
    navigate(`/facilities?facility=${facilityId}`);
  };

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
              src={captainCabin}
              alt="Captain's Cabin"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={mainRoom}
              alt="Main Room"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>
        </div>

        {/* Instruction Text */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm italic">
            Click on any facility below to view detailed photos and information
          </p>
        </div>

        {/* Facilities Grid */}
        <div id="facilities-grid" className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`text-center group relative flex flex-col ${facility.clickable ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => facility.clickable && handleFacilityClick(facility.id)}
            >
              {/* Card Container with Border and Hover Effect */}
              <div className={`p-6 border border-border rounded-sm transition-all duration-300 flex flex-col h-full ${
                facility.clickable 
                  ? 'group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/10 group-hover:-translate-y-1' 
                  : 'opacity-60'
              }`}>
                {/* Icon Container */}
                <div className={`w-16 h-16 mx-auto mb-4 border border-border flex items-center justify-center transition-all duration-300 ${
                  facility.clickable ? 'group-hover:border-accent group-hover:bg-accent/5' : ''
                }`}>
                  <facility.icon className={`w-7 h-7 text-muted-foreground transition-colors duration-300 ${
                    facility.clickable ? 'group-hover:text-accent' : ''
                  }`} />
                </div>
                
                {/* Title and Description */}
                <h4 className={`font-serif text-lg text-foreground mb-1 transition-colors duration-300 ${
                  facility.clickable ? 'group-hover:text-accent' : ''
                }`}>
                  {facility.label}
                </h4>
                <p className="text-muted-foreground text-sm mb-3 flex-grow">
                  {facility.description}
                </p>
                
                {/* "View Details" Call-to-Action - only show for clickable */}
                {facility.clickable && (
                  <div className="flex items-center justify-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                    <span className="tracking-wider uppercase">View Gallery</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

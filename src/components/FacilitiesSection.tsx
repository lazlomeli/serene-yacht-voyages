import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { facilities } from "@/data/facilities";

// Import images from various folders
import bf1 from "@/assets/breakfast/bf1.png";
import bf2 from "@/assets/breakfast/bf2.png";
import bf3 from "@/assets/breakfast/bf3.png";
import bf4 from "@/assets/breakfast/bf4.png";
import dn1 from "@/assets/dinner/dn1.png";
import dn2 from "@/assets/dinner/dn2.png";
import dn3 from "@/assets/dinner/dn3.png";
import dn4 from "@/assets/dinner/dn4.png";
import out1 from "@/assets/out/out1.png";
import out2 from "@/assets/out/out2.png";
import out3 from "@/assets/out/out3.png";
import out4 from "@/assets/out/out4.png";
import out5 from "@/assets/out/out5.png";
import bed1 from "@/assets/rooms/bed1.png";
import bed2 from "@/assets/rooms/bed2.png";
import bed3 from "@/assets/rooms/bed3.png";
import bath1 from "@/assets/rooms/bath1.png";
import bath2 from "@/assets/rooms/bath2.png";
import bath3 from "@/assets/rooms/bath3.png";
import toy1 from "@/assets/toys/toy1.png";
import toys2 from "@/assets/toys/toys2.png";
import toys3 from "@/assets/toys/toys3.png";

// Carousel images array
const carouselImages = [
  { src: bf1, alt: "Gourmet Breakfast" },
  { src: out3, alt: "Outdoor Experience" },
  { src: bed1, alt: "Luxury Cabin" },
  { src: dn2, alt: "Fine Dining" },
  { src: bath2, alt: "Elegant Bathroom" },
  { src: toy1, alt: "Water Toys" },
  { src: out1, alt: "Sunset Views" },
  { src: bf3, alt: "Morning Delights" },
  { src: toys2, alt: "Recreation Equipment" },
  { src: dn4, alt: "Culinary Excellence" },
  { src: bed2, alt: "Guest Cabin" },
  { src: out5, alt: "Ocean Views" },
  { src: bf2, alt: "Fresh Breakfast" },
  { src: bath1, alt: "Modern Bathroom" },
  { src: dn1, alt: "Gourmet Dinner" },
  { src: out4, alt: "Deck Relaxation" },
  { src: toys3, alt: "Water Sports" },
  { src: bed3, alt: "Master Suite" },
  { src: bf4, alt: "Continental Breakfast" },
  { src: bath3, alt: "Spa Bathroom" },
  { src: dn3, alt: "Fine Cuisine" },
  { src: out2, alt: "Yacht Exterior" },
];

const FacilitiesSection = () => {
  const navigate = useNavigate();

  const handleFacilityClick = (facilityId: string) => {
    navigate(`/facilities?facility=${facilityId}`);
  };

  return (
    <section id="facilities" className="section-padding bg-background">
      {/* Section Header */}
      <div className="container-elegant">
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
      </div>

      {/* Infinite Carousel - Full Width */}
      <div className="relative mb-16 overflow-hidden w-full" style={{ position: 'absolute', left: 0 }}>
        <div className="carousel-container">
          <div className="carousel-track">
            {/* First set of images */}
            {carouselImages.map((image, index) => (
              <div key={`img-${index}`} className="carousel-slide">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {carouselImages.map((image, index) => (
              <div key={`img-duplicate-${index}`} className="carousel-slide">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instruction Text and Facilities Grid */}
      <div className="container-elegant" style={{ marginTop: '600px' }}>
        {/* Instruction Text */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm italic">
            Click on any facility below to view detailed photos and information
          </p>
        </div>

        <style>{`
          .carousel-container {
            width: 100%;
            height: 400px;
            position: relative;
          }

          .carousel-track {
            display: flex;
            width: fit-content;
            animation: scroll 180s linear infinite;
          }

          .carousel-slide {
            flex: 0 0 auto;
            width: 500px;
            height: 400px;
            margin-right: 1rem;
            border-radius: 2px;
            overflow: hidden;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .carousel-track:hover {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .carousel-container {
              height: 300px;
            }
            
            .carousel-slide {
              width: 350px;
              height: 300px;
            }
          }
        `}</style>

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

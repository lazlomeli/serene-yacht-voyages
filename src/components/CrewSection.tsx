import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import reviews from "@/data/reviews.json";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import tripadvisorLogo from "@/assets/tripadvisor.png";

const CrewSection = () => {
  // Calculate overall rating
  const overallRating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;
  
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <>
      <section id="crew" className="section-padding bg-primary text-primary-foreground">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div>
              <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
                Professional Crew
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
                At Your Service
              </h2>
              <div className="w-16 h-[1px] bg-accent mb-8" />
              
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Our experienced crew is dedicated to providing exceptional service 
                throughout your voyage. With years of experience navigating the 
                Mediterranean waters, they ensure your safety while creating an 
                atmosphere of relaxed luxury.
              </p>

              <ul className="space-y-4 text-primary-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Professional captain with extensive Mediterranean experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Skilled hostess for personalized hospitality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Expert local knowledge of hidden gems and best anchorages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Multilingual service in English, Spanish, German, and Dutch</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="/src/assets/captain.png" 
                alt="Captain" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Separate from Crew */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            {/* Overall Rating - Centered */}
            <div className="flex items-center gap-6">
            <div className="text-2xl font-serif text-primary">
                5.0
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-7 h-7 ${i < Math.floor(overallRating) ? 'fill-accent text-accent' : 'fill-gray-300 text-gray-300'}`}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* TripAdvisor Button */}
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon"
                className="bg-white border-gray-300 text-primary hover:bg-gray-50 hover:text-primary h-10 w-10"
                style={{ width: '150px', padding: '10px' }}
                onClick={() => window.open('https://www.tripadvisor.es/Attraction_Review-g187463-d33011329-Reviews-or10-Sv_Iron_Monkey-Palma_de_Mallorca_Majorca_Balearic_Islands.html', '_blank')}
              >
                <img src={tripadvisorLogo} alt="TripAdvisor" />
              </Button>
            </div>
          </div>

          {/* Reviews Carousel */}
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white text-primary p-8 h-full flex flex-col shadow-lg border border-gray-200">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.stars)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-accent mb-4" />

                    {/* Review Text */}
                    <blockquote className="text-primary/80 leading-relaxed mb-6 flex-grow line-clamp-6">
                      {review.review_text}
                    </blockquote>

                    {/* Author Info */}
                    <footer className="border-t border-primary/10 pt-4">
                      <cite className="not-italic">
                        <span className="text-primary font-medium block">
                          {review.user_name}
                        </span>
                        <span className="text-primary/60 text-sm">
                          {review.date_posted}
                        </span>
                      </cite>
                    </footer>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-transparent border-0 text-primary hover:bg-transparent hover:text-primary/70" />
            <CarouselNext className="hidden md:flex bg-transparent border-0 text-primary hover:bg-transparent hover:text-primary/70" />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default CrewSection;

import { Quote } from "lucide-react";

const CrewSection = () => {
  return (
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
                <span>Multilingual service in English, Spanish, and Dutch</span>
              </li>
            </ul>
          </div>

          {/* Testimonial */}
          <div className="relative">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-10 md:p-12">
              <Quote className="w-10 h-10 text-accent mb-6" />
              <blockquote className="font-serif text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 italic">
                "An absolutely unforgettable experience. The crew anticipated our every need, 
                and the yacht was simply stunning. The sunset cruise was magical—we'll be back!"
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <span className="text-primary-foreground font-medium block">
                    James & Sarah M.
                  </span>
                  <span className="text-primary-foreground/60 text-sm">
                    Day Trip, June 2024
                  </span>
                </cite>
              </footer>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-accent/20 hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-accent/20 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewSection;

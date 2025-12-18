import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container-elegant">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
              Start Your Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              Book Your Charter
            </h2>
            <div className="w-16 h-[1px] bg-accent mb-8" />
            
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
              Ready to embark on your adventure? Contact us to discuss your perfect 
              charter experience. We'll help you plan every detail for an unforgettable voyage.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:info@svironmonkey.nl"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Email
                  </span>
                  <span className="text-primary-foreground">info@svironmonkey.nl</span>
                </div>
              </a>

              <a
                href="tel:+31612345678"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Phone
                  </span>
                  <span className="text-primary-foreground">+31 6 1234 5678</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Location
                  </span>
                  <span className="text-primary-foreground">Puerto Portals, Mallorca</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                  Experience Type
                </label>
                <select className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="" className="text-foreground">Select an option</option>
                  <option value="sunset" className="text-foreground">Sunset Cruise</option>
                  <option value="day" className="text-foreground">Day Trip</option>
                  <option value="week" className="text-foreground">Week Charter</option>
                  <option value="custom" className="text-foreground">Custom Charter</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your ideal charter experience..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full mt-4">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

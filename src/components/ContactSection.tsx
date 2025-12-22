import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground" aria-labelledby="contact-heading">
      <div className="container-elegant">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
              Start Your Journey
            </span>
            <h2 id="contact-heading" className="font-serif text-4xl md:text-5xl font-light mb-8">
              Book Your Charter
            </h2>
            <div className="w-16 h-[1px] bg-accent mb-8" aria-hidden="true" />
            
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
              Ready to embark on your adventure? Contact us to discuss your perfect 
              charter experience. We'll help you plan every detail for an unforgettable voyage.
            </p>

            {/* Contact Info */}
            <address className="space-y-6 not-italic">
              <a
                href="mailto:info@svironmonkey.nl"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
                aria-label="Email us at info@svironmonkey.nl"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Email
                  </span>
                  <span className="text-primary-foreground">info@svironmonkey.nl</span>
                </div>
              </a>

              <a
                href="tel:+34689573660"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
                aria-label="Call us at +34 689 573 660"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Phone
                  </span>
                  <span className="text-primary-foreground">+34 689 573 660</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Location
                  </span>
                  <span className="text-primary-foreground">La Lonja Marina, Palma de Mallorca</span>
                </div>
              </div>
            </address>
          </div>

          {/* Form */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 md:p-10">
            <form className="space-y-6" aria-label="Contact form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your email"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-experience" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                  Experience Type
                </label>
                <select 
                  id="contact-experience"
                  name="experience"
                  className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="text-foreground">Select an option</option>
                  <option value="sunset" className="text-foreground">Sunset Cruise</option>
                  <option value="day" className="text-foreground">Day Trip</option>
                  <option value="multiple" className="text-foreground">Multiple days</option>
                  <option value="custom" className="text-foreground">Custom Charter</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-date" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                  Preferred Date
                </label>
                <input
                  id="contact-date"
                  name="date"
                  type="date"
                  className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your ideal charter experience..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full mt-4" type="submit">
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

import React, { useEffect, useRef } from 'react';
import { MessageCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ContactSection: React.FC = () => {
  const { contact } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-reveal]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(contact.whatsapp.message);
    const phoneNumber = contact.whatsapp.number.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const infoIcons = [Clock, MapPin, Sparkles];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Header & Description */}
          <div>
            <p
              data-reveal
              className="text-sm uppercase tracking-wider text-secondary font-medium mb-4 opacity-0 translate-y-8 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              {contact.overline}
            </p>
            <h2
              data-reveal
              className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-75 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              {contact.heading.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < contact.heading.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p
              data-reveal
              className="text-base md:text-lg text-text-muted leading-relaxed mb-8 opacity-0 translate-y-8 transition-all duration-700 delay-150 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              {contact.description}
            </p>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              data-reveal
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full text-base font-medium hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg transition-all duration-300 opacity-0 translate-y-8 delay-200 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              <MessageCircle size={20} />
              {contact.whatsapp.text}
            </button>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {contact.info.map((item, index) => {
              const Icon = infoIcons[index];
              return (
                <div
                  key={index}
                  data-reveal
                  className="flex gap-4 opacity-0 translate-y-8 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
                  style={{ transitionDelay: `${250 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-secondary uppercase tracking-wide mb-2">
                      {item.label}
                    </h3>
                    <p className="text-base text-primary leading-relaxed whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

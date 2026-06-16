import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const { hero } = siteContent;
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

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(hero.cta.href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Decorative Element */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F0EBE3 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1
              data-reveal
              className="font-serif text-5xl md:text-7xl font-medium text-primary leading-[1.1] tracking-tight opacity-0 translate-y-8 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              {hero.headline.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < hero.headline.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Subtext */}
            <p
              data-reveal
              className="mt-6 text-lg md:text-xl text-text-muted max-w-[560px] leading-relaxed opacity-0 translate-y-8 transition-all duration-700 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              {hero.subtext.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < hero.subtext.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>

            {/* CTA Button */}
            <a
              href={hero.cta.href}
              onClick={handleCtaClick}
              data-reveal
              className="inline-block mt-10 px-8 py-4 bg-accent text-white rounded-full text-base font-medium hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg transition-all duration-300 opacity-0 translate-y-8 delay-200 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              {hero.cta.text}
            </a>
          </div>

          {/* Piano Image */}
          <div
            data-reveal
            className="relative opacity-0 translate-y-8 transition-all duration-700 delay-300 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1600&q=80"
                alt="エレガントなピアノ - Happy Pianoのレッスン空間"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary animate-bounce">
        <span className="text-sm font-medium">{hero.scrollText}</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

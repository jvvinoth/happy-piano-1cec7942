import React, { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export const GallerySection: React.FC = () => {
  const { gallery } = siteContent;
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

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p
            data-reveal
            className="text-sm uppercase tracking-wider text-secondary font-medium mb-4 opacity-0 translate-y-8 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            {gallery.overline}
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-75 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            {gallery.heading.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < gallery.heading.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p
            data-reveal
            className="text-base md:text-lg text-text-muted leading-relaxed max-w-2xl opacity-0 translate-y-8 transition-all duration-700 delay-150 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            {gallery.description}
          </p>
        </div>

        {/* Image Grid - Masonry-style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Large image spanning 2 columns */}
          <div
            data-reveal
            className="col-span-2 row-span-2 opacity-0 translate-y-8 transition-all duration-700 delay-200 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            <div className="h-full rounded-2xl overflow-hidden bg-border shadow-sm">
              <img
                src={gallery.images[0].url}
                alt={gallery.images[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Remaining images */}
          {gallery.images.slice(1).map((image, index) => (
            <div
              key={index}
              data-reveal
              className="col-span-1 aspect-square opacity-0 translate-y-8 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="h-full rounded-2xl overflow-hidden bg-border shadow-sm">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Music } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Footer: React.FC = () => {
  const { footer } = siteContent;

  return (
    <footer className="bg-primary text-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Music size={24} className="text-accent" />
              <h3 className="font-serif text-2xl font-semibold">
                {footer.studioName}
              </h3>
            </div>
            <p className="text-sm text-background/80">
              {footer.tagline}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-background/70">
              {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Award, GraduationCap, Music, Youtube } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ProfilePage: React.FC = () => {
  const { profile } = siteContent;

  const iconMap = {
    '学歴・経歴': GraduationCap,
    '師事': Music,
    '受賞歴': Award,
    'YouTube活動': Youtube,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-surface to-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-6">
            <p className="text-sm uppercase tracking-wider text-secondary font-medium mb-4">
              {profile.overline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Profile Image */}
            <div className="order-1 md:order-1">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface shadow-lg">
                  <img
                    src={profile.imageUrl}
                    alt={`${profile.heading} - Happy Piano講師`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="order-2 md:order-2">
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary mb-3 leading-tight">
                {profile.heading}
              </h1>
              <p className="text-xl text-secondary mb-2 font-light tracking-wide">
                {profile.nameEn}
              </p>
              <p className="text-base text-text-muted mb-8 font-medium">
                {profile.title}
              </p>
              
              <p className="text-lg text-text leading-relaxed">
                {profile.introduction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Details */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {profile.sections.map((section, index) => {
              const Icon = iconMap[section.title as keyof typeof iconMap];
              
              return (
                <div
                  key={index}
                  className="bg-surface rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {Icon && (
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <h2 className="font-serif text-2xl font-semibold text-primary">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-text-muted leading-relaxed"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
              {profile.philosophy.title}
            </h2>
          </div>
          
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-lg text-text leading-relaxed text-center">
              {profile.philosophy.content}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/#contact"
              className="inline-block bg-primary text-background px-8 py-4 rounded-full font-medium hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              体験レッスンを予約する
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

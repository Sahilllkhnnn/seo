import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <SectionHeading title="The Élané Story" subtitle="Maison" />
        <div className="glass-panel rounded-3xl p-8 space-y-6">
          <p className="text-ink/70 text-sm leading-relaxed">
            Élané Atelier is a modern Indian luxury house celebrating refined silhouettes, heritage
            craftsmanship, and contemporary couture. Every piece is imagined in our Mumbai studio
            and finished by master artisans using heirloom techniques.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {['Craftsmanship', 'Sustainable Luxury', 'Global Vision'].map((value) => (
              <div key={value} className="rounded-2xl bg-white/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{value}</p>
                <p className="mt-2 text-sm text-ink/60">
                  Thoughtful details, responsible sourcing, and a world-class atelier experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

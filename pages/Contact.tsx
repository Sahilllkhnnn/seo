import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';

export const Contact: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <SectionHeading title="Contact the Maison" subtitle="Concierge" />
          <p className="text-sm text-ink/70">
            For bespoke fittings, private appointments, or styling consultations, our concierge team
            is ready to assist.
          </p>
          <div className="glass-panel rounded-3xl p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Studio</p>
            <p className="text-sm text-ink/60">14, Altamount Road, Mumbai</p>
            <p className="text-sm text-ink/60">concierge@elaneatelier.in</p>
            <p className="text-sm text-ink/60">+91 98765 43210</p>
          </div>
        </div>
        <form className="glass-panel rounded-3xl p-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Send a Note</p>
          <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="Name" />
          <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="Email" />
          <textarea
            className="px-4 py-3 rounded-2xl border border-ink/10"
            rows={5}
            placeholder="Message"
          />
          <button
            className="w-full px-6 py-3 rounded-full bg-ink text-ivory text-xs uppercase tracking-[0.3em]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </PageTransition>
  );
};

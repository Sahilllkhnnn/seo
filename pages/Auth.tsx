import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';

export const Auth: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <SectionHeading title="Welcome Back" subtitle="Account" />
        <div className="grid gap-8 md:grid-cols-2">
          <form className="glass-panel rounded-3xl p-8 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Login</p>
            <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="Email" />
            <input
              className="px-4 py-3 rounded-2xl border border-ink/10"
              placeholder="Password"
              type="password"
            />
            <button
              className="w-full px-6 py-3 rounded-full bg-ink text-ivory text-xs uppercase tracking-[0.3em]"
              type="button"
            >
              Sign In
            </button>
          </form>
          <form className="glass-panel rounded-3xl p-8 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Sign Up</p>
            <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="Full name" />
            <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="Email" />
            <input
              className="px-4 py-3 rounded-2xl border border-ink/10"
              placeholder="Create password"
              type="password"
            />
            <button
              className="w-full px-6 py-3 rounded-full border border-ink/20 text-xs uppercase tracking-[0.3em]"
              type="button"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

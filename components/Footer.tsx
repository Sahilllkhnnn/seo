import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl tracking-[0.2em]">ÉLANÉ</p>
          <p className="mt-4 text-sm text-ivory/70 max-w-sm">
            Luxury Indian fashion crafted with modern silhouettes, precision tailoring, and a
            couture finish.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="uppercase tracking-[0.3em] text-ivory/60">Explore</p>
          <Link className="block hover:text-gold" to="/shop">
            Shop
          </Link>
          <Link className="block hover:text-gold" to="/about">
            About
          </Link>
          <Link className="block hover:text-gold" to="/contact">
            Contact
          </Link>
        </div>
        <div className="space-y-4">
          <p className="uppercase tracking-[0.3em] text-ivory/60 text-sm">Newsletter</p>
          <p className="text-sm text-ivory/70">
            Receive private previews, styling notes, and invitation-only drops.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              className="flex-1 px-4 py-3 rounded-full bg-ivory/10 border border-ivory/20 text-sm"
              placeholder="Email address"
              type="email"
            />
            <button
              className="px-6 py-3 rounded-full bg-gold text-ink text-xs uppercase tracking-[0.3em]"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-6 text-center text-xs text-ivory/60">
        © 2025 Élané Atelier. Crafted in India.
      </div>
    </footer>
  );
};

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const NavBar: React.FC<{ onCartOpen: () => void }> = ({ onCartOpen }) => {
  const { cartCount } = useShop();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 bg-ivory/80 backdrop-blur-xl border-b border-white/60"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display tracking-[0.2em] text-ink">
          ÉLANÉ
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.3em]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-ink' : 'text-ink/60 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-ink' : 'text-ink/60 hover:text-ink'}`
            }
          >
            Account
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-ink/70"
            onClick={onCartOpen}
            type="button"
          >
            Cart
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-ivory text-[10px]">
              {cartCount}
            </span>
          </button>
          <button
            className="md:hidden inline-flex w-10 h-10 items-center justify-center rounded-full border border-ink/20"
            onClick={onCartOpen}
            type="button"
            aria-label="Open cart"
          >
            <span className="text-sm">{cartCount}</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

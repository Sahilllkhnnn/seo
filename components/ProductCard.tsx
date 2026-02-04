import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="group rounded-3xl bg-white/70 border border-white/70 overflow-hidden shadow-luxe"
  >
    <div className="relative overflow-hidden">
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
      />
      {product.isNew && (
        <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.3em] bg-ink text-ivory rounded-full">
          New
        </span>
      )}
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-ink/50">
        <span>{product.category}</span>
        <span>★ {product.rating.toFixed(1)}</span>
      </div>
      <h3 className="mt-3 font-display text-xl text-ink">{product.name}</h3>
      <p className="mt-2 text-sm text-ink/60">₹ {product.price.toLocaleString('en-IN')}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-flex text-xs uppercase tracking-[0.3em] text-ink border-b border-ink/40"
      >
        View Details
      </Link>
    </div>
  </motion.div>
);

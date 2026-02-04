import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <p className="text-xs uppercase tracking-[0.4em] text-gold">{subtitle}</p>
    <h2 className="font-display text-3xl md:text-4xl mt-3 text-ink">{title}</h2>
  </motion.div>
);

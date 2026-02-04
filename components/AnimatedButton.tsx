import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'light';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  variant = 'dark',
  ...props
}) => {
  const baseStyles =
    variant === 'dark'
      ? 'bg-ink text-ivory border border-ink'
      : 'bg-transparent text-ink border border-ink/30';

  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: '0 15px 35px rgba(17, 17, 17, 0.2)' }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.3em] transition ${baseStyles} ${className ?? ''}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

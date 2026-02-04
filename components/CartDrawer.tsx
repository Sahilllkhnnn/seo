import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useShop();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end bg-ink/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-md bg-ivory h-full p-6 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl">Your Cart</h3>
              <button
                className="text-xs uppercase tracking-[0.3em]"
                onClick={onClose}
                type="button"
              >
                Close
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {cart.length === 0 && (
                <p className="text-sm text-ink/60">Your cart is currently empty.</p>
              )}
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-2xl"
                  />
                  <div className="flex-1">
                    <h4 className="font-display text-lg">{item.product.name}</h4>
                    <p className="text-xs text-ink/60">{item.size} · {item.color}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        className="w-8 h-8 rounded-full border border-ink/20"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        type="button"
                      >
                        −
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        className="w-8 h-8 rounded-full border border-ink/20"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        type="button"
                      >
                        +
                      </button>
                      <button
                        className="ml-auto text-xs uppercase tracking-[0.3em] text-ink/60"
                        onClick={() => removeFromCart(item.product.id)}
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-ink/10 pt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">₹ {cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <Link
                to="/checkout"
                onClick={onClose}
                className="block text-center px-6 py-3 rounded-full bg-ink text-ivory text-xs uppercase tracking-[0.3em]"
              >
                Checkout
              </Link>
              <Link
                to="/cart"
                onClick={onClose}
                className="block text-center px-6 py-3 rounded-full border border-ink/20 text-xs uppercase tracking-[0.3em]"
              >
                View Cart
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

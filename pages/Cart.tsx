import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { useShop } from '../context/ShopContext';

export const Cart: React.FC = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useShop();

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeading title="Your Cart" subtitle="Essentials" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {cart.length === 0 && (
              <div className="glass-panel rounded-3xl p-8 text-center">
                <p className="text-sm text-ink/60">Your cart is empty. Let’s curate your look.</p>
                <Link
                  to="/shop"
                  className="mt-4 inline-flex text-xs uppercase tracking-[0.3em] border-b border-ink/40"
                >
                  Shop Now
                </Link>
              </div>
            )}
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="glass-panel rounded-3xl p-6 flex flex-col md:flex-row gap-6"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full md:w-32 h-40 object-cover rounded-2xl"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="font-display text-xl">{item.product.name}</h3>
                  <p className="text-sm text-ink/60">{item.size} · {item.color}</p>
                  <p className="text-sm">₹ {item.product.price.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="w-8 h-8 rounded-full border border-ink/20"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    type="button"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="w-8 h-8 rounded-full border border-ink/20"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    type="button"
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-xs uppercase tracking-[0.3em] text-ink/60"
                  onClick={() => removeFromCart(item.product.id)}
                  type="button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="glass-panel rounded-3xl p-6 h-fit space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Summary</p>
            <div className="flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span>₹ {cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Shipping</span>
              <span>₹ 750</span>
            </div>
            <div className="flex items-center justify-between text-base font-medium">
              <span>Total</span>
              <span>₹ {(cartTotal + 750).toLocaleString('en-IN')}</span>
            </div>
            <Link
              to="/checkout"
              className="block text-center px-6 py-3 rounded-full bg-ink text-ivory text-xs uppercase tracking-[0.3em]"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

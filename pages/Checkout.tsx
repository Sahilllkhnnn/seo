import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { useShop } from '../context/ShopContext';

export const Checkout: React.FC = () => {
  const { cartTotal } = useShop();

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeading title="Checkout" subtitle="Secure" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass-panel rounded-3xl p-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Shipping Details</p>
              <div className="grid gap-4 mt-4 md:grid-cols-2">
                <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="First name" />
                <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="Last name" />
                <input className="px-4 py-3 rounded-2xl border border-ink/10 md:col-span-2" placeholder="Email" />
                <input className="px-4 py-3 rounded-2xl border border-ink/10 md:col-span-2" placeholder="Street address" />
                <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="City" />
                <input className="px-4 py-3 rounded-2xl border border-ink/10" placeholder="Postal code" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Delivery Notes</p>
              <textarea
                className="mt-4 w-full px-4 py-3 rounded-2xl border border-ink/10"
                rows={4}
                placeholder="Write any special instructions"
              />
            </div>
          </form>
          <div className="glass-panel rounded-3xl p-8 space-y-4 h-fit">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Order Summary</p>
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
            <button
              className="w-full px-6 py-3 rounded-full bg-ink text-ivory text-xs uppercase tracking-[0.3em]"
              type="button"
            >
              Place Order
            </button>
            <p className="text-xs text-ink/60">UI only — no payment gateway connected.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

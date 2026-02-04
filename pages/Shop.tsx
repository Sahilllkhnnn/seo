import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import type { ProductColor } from '../types';

const categories = ['All', 'Sarees', 'Lehengas', 'Sets', 'Anarkalis', 'Gowns', 'Kurtas', 'Dupattas', 'Dresses'];
const colors: ProductColor[] = ['Ivory', 'Beige', 'Black', 'Gold', 'Rose'];

export const Shop: React.FC = () => {
  const { products } = useShop();
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedColor, setSelectedColor] = React.useState<ProductColor | 'All'>('All');
  const [priceRange, setPriceRange] = React.useState(30000);

  // Apply boutique-style filtering for category, color, and price.
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesColor = selectedColor === 'All' || product.colors.includes(selectedColor);
    const matchesPrice = product.price <= priceRange;
    return matchesCategory && matchesColor && matchesPrice;
  });

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading title="Shop the Atelier" subtitle="Boutique" />
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-8">
            <div className="glass-panel rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Category</p>
              <div className="mt-4 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left text-sm ${
                      selectedCategory === category ? 'text-ink font-medium' : 'text-ink/60'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Color</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['All', ...colors].map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-2 rounded-full border text-xs uppercase tracking-[0.3em] ${
                      selectedColor === color ? 'bg-ink text-ivory border-ink' : 'border-ink/20'
                    }`}
                    onClick={() => setSelectedColor(color as ProductColor | 'All')}
                    type="button"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Price</p>
              <input
                className="mt-6 w-full"
                type="range"
                min={5000}
                max={30000}
                step={500}
                value={priceRange}
                onChange={(event) => setPriceRange(Number(event.target.value))}
              />
              <p className="mt-3 text-sm text-ink/60">Up to ₹ {priceRange.toLocaleString('en-IN')}</p>
            </div>
          </aside>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProducts.map((product) => (
              <motion.div key={product.id} layout>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

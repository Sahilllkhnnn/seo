import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { ProductPreview3D } from '../components/ProductPreview3D';
import { AnimatedButton } from '../components/AnimatedButton';
import { useShop } from '../context/ShopContext';
import type { ProductColor } from '../types';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { products, addToCart } = useShop();
  const product = products.find((item) => item.id === id) ?? products[0];

  const [selectedImage, setSelectedImage] = React.useState(product.images[0]);
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = React.useState<ProductColor>(product.colors[0]);
  const colorMap: Record<ProductColor, string> = {
    Ivory: '#f4e7cf',
    Beige: '#e9dfd1',
    Black: '#111111',
    Gold: '#c8a96a',
    Rose: '#e2b9b2',
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading title={product.name} subtitle={product.category} />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden"
            >
              <img src={selectedImage} alt={product.name} className="w-full h-[420px] object-cover" />
            </motion.div>
            <div className="flex gap-4">
              {product.images.map((image) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`h-20 w-20 rounded-2xl overflow-hidden border ${
                    selectedImage === image ? 'border-ink' : 'border-transparent'
                  }`}
                  type="button"
                >
                  <img src={image} alt={product.name} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <ProductPreview3D color={colorMap[selectedColor]} />
            <div className="glass-panel rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Couture Details</p>
                <p className="text-sm">★ {product.rating.toFixed(1)}</p>
              </div>
              <p className="text-ink/70 text-sm">{product.description}</p>
              <p className="text-ink/60 text-sm">Fabric: {product.fabric}</p>
              <p className="text-2xl font-display">₹ {product.price.toLocaleString('en-IN')}</p>
            </div>
            <div className="glass-panel rounded-3xl p-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Size</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded-full border text-xs uppercase tracking-[0.3em] ${
                        selectedSize === size ? 'bg-ink text-ivory border-ink' : 'border-ink/20'
                      }`}
                      onClick={() => setSelectedSize(size)}
                      type="button"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Color</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`px-4 py-2 rounded-full border text-xs uppercase tracking-[0.3em] ${
                        selectedColor === color ? 'bg-ink text-ivory border-ink' : 'border-ink/20'
                      }`}
                      onClick={() => setSelectedColor(color)}
                      type="button"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              <AnimatedButton
                onClick={() => addToCart(product, selectedSize, selectedColor)}
                className="w-full"
              >
                Add to Cart
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

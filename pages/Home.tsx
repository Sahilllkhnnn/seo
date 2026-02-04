import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { ThreeHero } from '../components/ThreeHero';
import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { collections, testimonials, lookbookImages } from '../data/content';

const MotionLink = motion(Link);

export const Home: React.FC = () => {
  const { products } = useShop();
  const featured = products.filter((product) => product.isFeatured);

  return (
    <div className="space-y-24 pb-24">
      <section className="max-w-6xl mx-auto px-6 pt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Luxury Indian Fashion</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink leading-tight text-balance">
            A modern atelier for elevated Indian couture.
          </h1>
          <p className="text-ink/60 max-w-lg">
            Discover sculpted silhouettes, luminous fabrics, and artisanal craftsmanship inspired by
            India’s regal legacy.
          </p>
          <div className="flex flex-wrap gap-4">
            <MotionLink
              to="/shop"
              whileHover={{ y: -2 }}
              className="px-6 py-3 rounded-full text-xs uppercase tracking-[0.3em] bg-ink text-ivory border border-ink"
            >
              Explore Collection
            </MotionLink>
            <MotionLink
              to="/about"
              whileHover={{ y: -2 }}
              className="px-6 py-3 rounded-full text-xs uppercase tracking-[0.3em] border border-ink/30"
            >
              Our Story
            </MotionLink>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-[0.4em] text-ink/50">
            <span>Handcrafted</span>
            <span>Made in India</span>
            <span>Limited Drops</span>
          </div>
        </div>
        <div className="glass-panel rounded-[40px] p-4">
          <ThreeHero />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Featured Collections" subtitle="Curated" />
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto pb-6"
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="min-w-[260px] md:min-w-[320px] rounded-3xl bg-white/70 border border-white/70 overflow-hidden shadow-luxe"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-xl">{collection.title}</h3>
                <p className="text-sm text-ink/60 mt-2">{collection.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading title="The Atelier Edit" subtitle="Categories" />
        <div className="grid gap-6 md:grid-cols-3">
          {['Sarees', 'Lehengas', 'Gowns'].map((category) => (
            <motion.div
              key={category}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-3xl p-6 border border-white/60"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gold">{category}</p>
              <p className="mt-4 text-sm text-ink/60">
                Elevated staples designed for luminous celebrations.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex text-xs uppercase tracking-[0.3em] border-b border-ink/40"
              >
                Discover
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Signature Pieces" subtitle="Featured" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Client Testimonials" subtitle="Voices" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-3xl p-6"
            >
              <p className="text-sm text-ink/70">“{testimonial.quote}”</p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">
                {testimonial.name} · {testimonial.location}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Lookbook" subtitle="Instagram" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lookbookImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl"
            >
              <img src={image} alt="Lookbook" className="h-64 w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

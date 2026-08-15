import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-28 md:py-40 bg-stone-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.blockquote
          className="font-serif text-2xl md:text-4xl lg:text-5xl leading-snug text-warm-black italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          “A quote from the author will appear here.”
        </motion.blockquote>
        <motion.p
          className="mt-8 text-xs tracking-[0.25em] uppercase text-muted-gray"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          — Manazil Parvaiz
        </motion.p>
      </div>
    </section>
  );
}

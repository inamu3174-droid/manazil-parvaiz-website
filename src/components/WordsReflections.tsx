import { motion } from "framer-motion";

const reflections = [
  {
    text: "Some feelings are not meant to be explained; they are meant to be understood.",
  },
  {
    text: "The strongest courage is often the quietest — the kind that walks on when no one is watching.",
  },
  {
    text: "We learn to wear masks so well that sometimes we forget which face is our own.",
  },
  {
    text: "Between who we were and who we are becoming is a space worth sitting with.",
  },
];

export default function WordsReflections() {
  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-4">
            Words & Reflections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-black">
            Lines that stay
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {reflections.map((item, i) => (
            <motion.blockquote
              key={i}
              className="border border-stone-200 bg-ivory p-8 md:p-10 hover:border-stone-400 transition-colors duration-400"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <p className="font-serif text-xl md:text-2xl leading-snug text-warm-black italic">
                “{item.text}”
              </p>
              <footer className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-gray">
                — Manazil Parvaiz
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

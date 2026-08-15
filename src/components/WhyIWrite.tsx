import { motion } from "framer-motion";

export default function WhyIWrite() {
  return (
    <section className="py-24 md:py-32 bg-warm-black text-ivory">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why I Write
        </motion.p>
        <motion.h2
          className="font-serif text-3xl md:text-5xl leading-snug mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Because some emotions become clearer when they are written than when
          they are spoken.
        </motion.h2>
        <motion.div
          className="space-y-5 text-stone-400 leading-relaxed text-left md:text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <p>
            Writing is how I make sense of the quiet moments — the ones that
            pass between conversations, between who we were and who we are
            becoming. The page becomes a place where silence is allowed to speak.
          </p>
          <p>
            I write about love that is careful, courage that is private, and the
            masks people learn to wear. These are not stories of spectacle.
            They are stories of the interior life — the part most of us carry
            without words.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

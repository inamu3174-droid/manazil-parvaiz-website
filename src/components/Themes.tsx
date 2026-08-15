import { motion } from "framer-motion";

const themes = [
  {
    word: "LOVE",
    desc: "Understanding relationships and emotional boundaries.",
  },
  {
    word: "THE MIND",
    desc: "Exploring the masks people wear.",
  },
  {
    word: "COURAGE",
    desc: "Finding strength through struggle.",
  },
  {
    word: "REFLECTION",
    desc: "Looking between who we were and who we are becoming.",
  },
];

export default function Themes() {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Stories About What We Don't Always Say
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {themes.map((t, i) => (
            <motion.div
              key={t.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-3">
                {t.word}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

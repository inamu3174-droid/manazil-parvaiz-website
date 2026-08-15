import { motion } from "framer-motion";

const placeholders = [
  {
    title: "On Writing in Silence",
    excerpt: "A short reflection on the quiet hours when the words arrive.",
    tag: "Reflection",
  },
  {
    title: "Between Drafts",
    excerpt: "Notes from the space between one book and the next.",
    tag: "Process",
  },
  {
    title: "What the Poems Taught Me",
    excerpt: "Lessons that arrived only after the collection was finished.",
    tag: "Poetry",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-4">
            From the Author's Journal
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-black">
            Essays, notes & reflections
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholders.map((item, i) => (
            <motion.article
              key={item.title}
              className="group border border-stone-200 p-8 hover:border-stone-400 transition-colors duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-gray">
                {item.tag}
              </span>
              <h3 className="font-serif text-xl mt-3 mb-3 group-hover:text-burgundy transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-gray leading-relaxed">
                {item.excerpt}
              </p>
              <p className="mt-6 text-xs tracking-widest uppercase text-stone-400">
                Coming soon
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function AuthorSection() {
  return (
    <section id="author" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 bg-stone-200 overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-stone-200 to-dusty-rose/40 flex items-center justify-center">
              <div className="text-center text-stone-500">
                <div className="w-24 h-24 rounded-full bg-stone-400/50 mx-auto mb-4" />
                <p className="text-xs tracking-widest uppercase">Author Portrait</p>
                <p className="text-xs mt-1 opacity-60">Placeholder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-4">
              The Author
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warm-black leading-tight mb-6">
              Words from the
              <br />
              Quiet Places
            </h2>
            <p className="text-muted-gray leading-relaxed mb-4">
              Manazil Parvaiz is a contemporary writer whose work explores the
              emotions and experiences people often struggle to express — love
              and loss, the masks we wear, silent courage, and the space between
              who we were and who we are becoming.
            </p>
            <p className="text-muted-gray leading-relaxed mb-8">
              Her writing is introspective, emotionally precise, and rooted in
              the lived realities of today's generation. Through prose and
              poetry, she gives language to the quiet interior lives that rarely
              make it into everyday conversation.
            </p>
            <a
              href="#about"
              className="inline-flex items-center text-sm tracking-widest uppercase text-burgundy hover:text-warm-black transition-colors group"
            >
              Discover Her Story
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

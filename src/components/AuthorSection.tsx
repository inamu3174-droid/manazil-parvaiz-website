import { motion } from "framer-motion";

export default function AuthorSection() {
  return (
    <section id="author" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/author-portrait.jpg"
              alt="Manazil Parvaiz — Author"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-4">
              About Manazil
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
            <p className="text-muted-gray leading-relaxed mb-4">
              His writing is introspective and emotionally precise, rooted in
              the lived realities of today's generation. Through prose and
              poetry, he gives language to the quiet interior lives that rarely
              make it into everyday conversation.
            </p>
            <p className="text-muted-gray leading-relaxed mb-6">
              Themes of relationships, human behavior, perseverance, and
              reflection run through the collection — always with an eye toward
              honesty rather than spectacle.
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-burgundy mb-8">
              Writer · Observer · Dreamer
            </p>
            <a
              href="#why"
              className="inline-flex items-center text-sm tracking-widest uppercase text-burgundy hover:text-warm-black transition-colors group"
            >
              Why I Write
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

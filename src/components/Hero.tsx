import { motion } from "framer-motion";

const PORTRAIT = "https://i.imgur.com/JJ5mrDo.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-ivory to-stone-50" />
      <div className="absolute top-1/3 right-0 w-[50%] h-[60%] bg-gradient-to-l from-dusty-rose/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <div className="z-10 order-2 lg:order-1">
          <motion.p
            className="text-xs tracking-[0.35em] uppercase text-muted-gray mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contemporary Writer
          </motion.p>

          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.95] tracking-tight text-warm-black"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            MANAZIL
            <br />
            PARVAIZ
          </motion.h1>

          <motion.p
            className="mt-7 text-base md:text-lg text-muted-gray max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            A contemporary voice exploring relationships, silence, courage, and
            the emotions we rarely say aloud.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="#books"
              className="inline-flex items-center px-8 py-3.5 bg-warm-black text-ivory text-xs tracking-[0.2em] uppercase hover:bg-burgundy transition-colors duration-300"
            >
              Explore Books
            </a>
            <a
              href="#author"
              className="inline-flex items-center px-8 py-3.5 border border-warm-black/25 text-warm-black text-xs tracking-[0.2em] uppercase hover:border-warm-black transition-colors duration-300"
            >
              About the Author
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl bg-stone-900">
            <img
              src={PORTRAIT}
              alt="Manazil Parvaiz"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-ivory text-lg tracking-wide">
                Manazil Parvaiz
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-stone-300 mt-1">
                Writer · Observer · Dreamer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

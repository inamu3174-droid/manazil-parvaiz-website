import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import BookCover from "./BookCover";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-ivory to-stone-50" />
      <div className="absolute top-1/4 right-0 w-[60%] h-[70%] bg-gradient-to-l from-dusty-rose/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16">
        <div className="z-10">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Contemporary Literature
          </motion.p>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-warm-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Some stories
            <br />
            are written.
            <br />
            <span className="italic text-burgundy">Others are lived.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-base md:text-lg text-muted-gray max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Explore the world of Manazil Parvaiz — where love, silence, courage
            and human nature become words.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#books"
              className="inline-flex items-center px-8 py-3.5 bg-warm-black text-ivory text-sm tracking-widest uppercase hover:bg-burgundy transition-colors duration-300"
            >
              Explore the Books
            </a>
            <a
              href="#author"
              className="inline-flex items-center px-8 py-3.5 border border-warm-black/30 text-warm-black text-sm tracking-widest uppercase hover:border-warm-black transition-colors duration-300"
            >
              Meet the Author
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[520px] flex items-center justify-center">
          {books.map((book, i) => {
            const positions = [
              { x: -80, y: -40, rotate: -8, z: 10, delay: 0.5 },
              { x: 60, y: -80, rotate: 6, z: 20, delay: 0.65 },
              { x: -40, y: 60, rotate: 4, z: 15, delay: 0.8 },
              { x: 90, y: 50, rotate: -5, z: 5, delay: 0.95 },
            ];
            const p = positions[i];
            return (
              <motion.div
                key={book.id}
                className="absolute"
                style={{ zIndex: p.z }}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: p.y,
                  x: p.x,
                  rotate: p.rotate,
                  scale: 1,
                }}
                transition={{
                  delay: p.delay,
                  duration: 0.9,
                  type: "spring",
                  stiffness: 80,
                }}
              >
                <Link to={`/book/${book.id}`}>
                  <BookCover book={book} size="md" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

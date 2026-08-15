import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import BookCover from "./BookCover";

export default function FeaturedBook() {
  const book = books[2];

  return (
    <section className="py-24 md:py-32 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <BookCover book={book} size="xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-4">
              Featured
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-warm-black leading-tight mb-4">
              A story worth
              <br />
              sitting with.
            </h2>
            <h3 className="font-serif text-xl text-burgundy mb-2">{book.title}</h3>
            <p className="text-sm text-muted-gray mb-6 italic">{book.subtitle}</p>
            <p className="text-muted-gray leading-relaxed mb-8">
              {book.shortDescription}
            </p>
            <Link
              to={`/book/${book.id}`}
              className="inline-flex items-center text-sm tracking-widest uppercase text-warm-black border-b border-warm-black pb-1 hover:text-burgundy hover:border-burgundy transition-colors"
            >
              Explore the Book →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

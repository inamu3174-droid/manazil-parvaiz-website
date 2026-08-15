import { motion } from "framer-motion";
import { books } from "../data/books";
import BookCover from "./BookCover";

export default function Purchase() {
  return (
    <section className="py-24 md:py-32 bg-warm-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-3">
            Find Your Next Read
          </h2>
          <p className="text-stone-400 text-sm">
            Available in paperback and eBook. Links open external retailers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex justify-center mb-5">
                <BookCover book={book} size="sm" interactive={false} />
              </div>
              <h3 className="font-serif text-lg mb-1">{book.title}</h3>
              <p className="text-xs text-stone-400 mb-1">
                {book.formats.join(" · ")}
              </p>
              <p className="text-sm mb-4">{book.price}</p>
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 border border-stone-500 text-xs tracking-widest uppercase hover:bg-ivory hover:text-warm-black transition-colors duration-300"
              >
                Buy Book
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

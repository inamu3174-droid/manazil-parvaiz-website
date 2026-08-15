import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import BookCover from "./BookCover";

const themeLabels: Record<string, string> = {
  warm: "Love & Relationships",
  dark: "Human Behavior",
  cinematic: "Courage & Growth",
  poetic: "Poetry & Reflection",
};

export default function Collection() {
  return (
    <section id="books" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="mb-16 md:mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-warm-black leading-tight">
            Four books.
            <br />
            Four perspectives.
            <br />
            <span className="italic text-burgundy">One voice.</span>
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {books.map((book, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={book.id}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  reverse ? "md:direction-rtl" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className={`flex justify-center ${
                    reverse ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Link to={`/book/${book.id}`} className="block">
                    <BookCover book={book} size="lg" />
                  </Link>
                </div>

                <div
                  className={`${reverse ? "md:order-1" : "md:order-2"} ${
                    reverse ? "md:text-right" : ""
                  }`}
                >
                  <p className="text-xs tracking-[0.25em] uppercase text-muted-gray mb-3">
                    {themeLabels[book.atmosphere]}
                  </p>
                  <h3 className="font-serif text-2xl md:text-4xl text-warm-black mb-2 leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-gray italic mb-5">
                    {book.subtitle}
                  </p>
                  <p className="text-muted-gray leading-relaxed mb-8 max-w-md ${
                    reverse ? "md:ml-auto" : ""
                  }`}
                  >
                    {book.shortDescription}
                  </p>
                  <div
                    className={`flex flex-wrap gap-4 ${
                      reverse ? "md:justify-end" : ""
                    }`}
                  >
                    <Link
                      to={`/book/${book.id}`}
                      className="inline-flex items-center px-6 py-3 border border-warm-black/30 text-xs tracking-[0.2em] uppercase text-warm-black hover:border-warm-black transition-colors"
                    >
                      Read More
                    </Link>
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-warm-black text-ivory text-xs tracking-[0.2em] uppercase hover:bg-burgundy transition-colors"
                    >
                      Buy the Book
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

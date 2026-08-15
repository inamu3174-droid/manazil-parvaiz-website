import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import BookCover from "./BookCover";

const atmosphereStyles: Record<string, string> = {
  warm: "hover:bg-rose-50/80",
  dark: "hover:bg-stone-900 hover:text-stone-100",
  cinematic: "hover:bg-amber-950/5",
  poetic: "hover:bg-rose-50/50",
};

export default function Collection() {
  return (
    <section id="books" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-gray mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-warm-black">
            Four books. Four perspectives.
            <br />
            <span className="italic">One voice.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/book/${book.id}`}
                className={`group block p-6 rounded-sm transition-colors duration-500 ${atmosphereStyles[book.atmosphere]}`}
              >
                <div className="flex justify-center mb-6">
                  <BookCover book={book} size="md" />
                </div>
                <h3 className="font-serif text-xl mb-2 group-hover:text-inherit">
                  {book.title}
                </h3>
                <p className="text-xs tracking-widest uppercase opacity-60 mb-3">
                  {book.atmosphere === "warm" && "Love & Relationships"}
                  {book.atmosphere === "dark" && "Human Behavior"}
                  {book.atmosphere === "cinematic" && "Courage & Growth"}
                  {book.atmosphere === "poetic" && "Poetry & Reflection"}
                </p>
                <p className="text-sm opacity-70 leading-relaxed line-clamp-3 mb-4">
                  {book.shortDescription}
                </p>
                <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

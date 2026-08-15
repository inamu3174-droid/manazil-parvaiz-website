import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2 } from "lucide-react";
import { getBookById } from "../data/books";
import BookCover from "../components/BookCover";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const book = getBookById(id || "");

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="font-serif text-2xl mb-4">Book not found</p>
        <Link to="/" className="text-sm tracking-widest uppercase text-burgundy">
          ← Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link
            to="/#books"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-gray hover:text-warm-black mb-10 transition-colors"
          >
            <ArrowLeft size={14} /> Back to collection
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              className="flex justify-center lg:sticky lg:top-28"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <BookCover book={book} size="xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-xs tracking-[0.25em] uppercase text-muted-gray mb-3">
                {book.genre}
              </p>
              <h1 className="font-serif text-3xl md:text-5xl text-warm-black leading-tight mb-2">
                {book.title}
              </h1>
              <p className="text-lg text-muted-gray italic mb-2">
                {book.subtitle}
              </p>
              <p className="text-sm text-muted-gray mb-8">
                by {book.author}
              </p>

              <p className="text-muted-gray leading-relaxed mb-8">
                {book.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={book.sampleUrl}
                  className="px-7 py-3 bg-warm-black text-ivory text-xs tracking-widest uppercase hover:bg-burgundy transition-colors"
                >
                  Read Sample
                </a>
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 border border-warm-black text-warm-black text-xs tracking-widest uppercase hover:bg-warm-black hover:text-ivory transition-colors"
                >
                  Buy the Book
                </a>
                <button
                  className="p-3 border border-stone-300 text-muted-gray hover:text-warm-black hover:border-warm-black transition-colors"
                  aria-label="Share"
                >
                  <Share2 size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm border-t border-stone-200 pt-8 mb-12">
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-gray mb-1">
                    Pages
                  </p>
                  <p>{book.pages}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-gray mb-1">
                    Language
                  </p>
                  <p>{book.language}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-gray mb-1">
                    Reading Age
                  </p>
                  <p>{book.readingAge}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-gray mb-1">
                    Published
                  </p>
                  <p>{book.publicationDate}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-gray mb-1">
                    Formats
                  </p>
                  <p>{book.formats.join(", ")}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-gray mb-1">
                    Price
                  </p>
                  <p>{book.price}</p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-serif text-2xl mb-4">About This Book</h2>
                <p className="text-muted-gray leading-relaxed">
                  {book.longDescription}
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-serif text-2xl mb-5">What You'll Explore</h2>
                <ul className="space-y-3">
                  {book.themes.map((theme) => (
                    <li
                      key={theme}
                      className="flex items-start gap-3 text-muted-gray"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-burgundy shrink-0" />
                      {theme}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">Reader Reviews</h2>
                <div className="border border-dashed border-stone-300 p-10 text-center text-muted-gray text-sm">
                  Reviews will appear here once available.
                  <br />
                  <span className="text-xs mt-2 block opacity-70">
                    No reviews yet — be the first to share your thoughts.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

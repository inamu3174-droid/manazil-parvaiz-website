import { motion } from "framer-motion";
import type { Book } from "../data/books";

interface Props {
  book: Book;
  size?: "sm" | "md" | "lg" | "xl";
  interactive?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "w-28 h-40",
  md: "w-40 h-56",
  lg: "w-52 h-72",
  xl: "w-64 h-96 md:w-72 md:h-[28rem]",
};

export default function BookCover({
  book,
  size = "md",
  interactive = true,
  className = "",
}: Props) {
  const isLight = book.atmosphere === "poetic";

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className} ${
        interactive ? "book-3d cursor-pointer" : ""
      }`}
      whileHover={interactive ? { y: -8 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={`absolute inset-0 rounded-sm shadow-2xl overflow-hidden bg-gradient-to-br ${book.coverGradient}`}
        style={{
          boxShadow: `0 25px 50px -12px ${book.coverAccent}40, 0 0 0 1px rgba(0,0,0,0.1)`,
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/20" />
        <div
          className={`absolute inset-0 flex flex-col justify-between p-4 md:p-6 ${
            isLight ? "text-stone-800" : "text-stone-100"
          }`}
        >
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70 mb-2">
              {book.genre.split("/")[0].trim()}
            </p>
            <h3 className="font-serif text-sm md:text-lg leading-tight font-medium">
              {book.title}
            </h3>
            {book.subtitle && (
              <p className="text-[10px] md:text-xs mt-1 opacity-80 leading-snug line-clamp-2">
                {book.subtitle}
              </p>
            )}
          </div>
          <div>
            <p className="text-[10px] md:text-xs tracking-widest uppercase opacity-60">
              {book.author}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

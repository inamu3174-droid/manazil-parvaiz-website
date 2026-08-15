export default function Footer() {
  return (
    <footer className="py-16 md:py-20 border-t border-stone-200 bg-warm-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <p className="font-serif text-2xl tracking-wide">
              MANAZIL PARVAIZ
            </p>
            <p className="text-sm text-stone-400 mt-2 italic">
              Words that stay with you.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.2em] uppercase text-stone-400">
            <a href="#books" className="hover:text-ivory transition-colors">
              Books
            </a>
            <a href="#author" className="hover:text-ivory transition-colors">
              About
            </a>
            <a href="#reflections" className="hover:text-ivory transition-colors">
              Reflections
            </a>
            <a href="#contact" className="hover:text-ivory transition-colors">
              Contact
            </a>
            <a
              href="https://instagram.com/ofc.manazil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory transition-colors"
            >
              Instagram
            </a>
          </nav>
        </div>
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Manazil Parvaiz. All rights reserved.</p>
          <p className="tracking-wide">Writer · Observer · Dreamer</p>
        </div>
      </div>
    </footer>
  );
}
